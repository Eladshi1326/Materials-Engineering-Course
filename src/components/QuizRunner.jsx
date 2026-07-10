import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Ring, Bar } from "./Bits.jsx";
import { shuffle, mmss, confetti } from "../lib/ui.js";
import { recordAnswer, markWeak, touchStreak } from "../lib/store.js";

const KEYS = ["א", "ב", "ג", "ד"];
const LVL = { easy: "קל", medium: "בינוני", hard: "קשה" };

export function QuizRunner({
  questions,
  chId,
  hints = false,
  timer = 0,
  lives: initialLives = 0,
  xpPer = 8,
  showCh = false,
  backHref = "/",
  onFinish
}) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null); // null | index | -1 (timeout)
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [hintOpen, setHintOpen] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [lives, setLives] = useState(initialLives);
  const [left, setLeft] = useState(timer);
  const xp = useRef(0);
  const log = useRef([]);
  const t0 = useRef(Date.now());

  const q = questions[i];
  const order = useMemo(
    () => (q ? shuffle(q.options.map((o, k) => ({ o, k }))) : []),
    [q, i] // eslint-disable-line react-hooks/exhaustive-deps
  );

  /* --------------------------------------------------------- timer */
  useEffect(() => {
    if (!timer || picked !== null || !q) return undefined;
    setLeft(timer);
    const id = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) { clearInterval(id); answer(-1); return 0; }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [i, timer, q]); // eslint-disable-line react-hooks/exhaustive-deps

  /* --------------------------------------------------------- finish */
  function finish(finalCorrect, finalLives) {
    const total = questions.length;
    const pct = Math.round((finalCorrect / total) * 100);
    const secs = Math.round((Date.now() - t0.current) / 1000);
    touchStreak();
    onFinish({
      pct,
      correct: finalCorrect,
      total,
      xp: Math.max(0, xp.current - hintsUsed * 4),
      secs,
      log: log.current,
      bestStreak,
      lives: finalLives,
      hints: hintsUsed
    });
  }

  function answer(k) {
    if (picked !== null) return;
    const ok = k === q.answer;
    setPicked(k);
    recordAnswer(ok);

    let nextCorrect = correct;
    let nextLives = lives;
    if (ok) {
      nextCorrect += 1;
      const s = streak + 1;
      setStreak(s);
      setBestStreak((b) => Math.max(b, s));
      setCorrect(nextCorrect);
      xp.current += xpPer + (s >= 3 ? 3 : 0);
    } else {
      setStreak(0);
      if (initialLives) { nextLives = lives - 1; setLives(nextLives); }
      if (chId) markWeak(chId, q.q);
    }
    log.current.push({ q: q.q, ok, ch: q._ch || chId, explain: q.explain });

    if (initialLives && nextLives <= 0) setTimeout(() => finish(nextCorrect, 0), 0);
  }

  function next() {
    if (i === questions.length - 1) { finish(correct, lives); return; }
    setI(i + 1);
    setPicked(null);
    setHintOpen(false);
  }

  if (!q) return null;
  const done = picked !== null;
  const outOfLives = initialLives > 0 && lives <= 0;

  return (
    <div className="quiz">
      <div className="row wrap mb">
        <Link className="btn btn-sm btn-ghost" to={backHref}>→ יציאה</Link>
        <div className="spacer" />
        {initialLives > 0 && <div className="qstreak">{"❤".repeat(Math.max(0, lives))}</div>}
        {streak >= 3 && <div className="qstreak">🔥 רצף {streak}</div>}
        {timer > 0 && !done && <div className={"qtimer" + (left <= 8 ? " low" : "")}>{left}</div>}
      </div>

      <div className="qbar">
        <span className="qcount">{i + 1} / {questions.length}</span>
        <Bar pct={(i / questions.length) * 100} />
        <span className="qcount">{correct} ✓</span>
      </div>

      <div className="qcard">
        {q.level && <span className={"qlvl " + q.level}>{LVL[q.level] || q.level}</span>}
        {showCh && (q._ch || chId) && (
          <span className="qlvl" style={{ background: "var(--line)", color: "var(--txt-faint)", marginInlineStart: 6 }}>
            פרק {q._ch || chId}
          </span>
        )}

        <div className="qtext">{q.q}</div>

        <div className="opts">
          {order.map((x, n) => {
            let cls = "opt";
            if (done) {
              if (x.k === q.answer) cls += " correct";
              else if (x.k === picked) cls += " wrong";
              else cls += " dim";
            }
            return (
              <button key={x.k} className={cls} disabled={done} onClick={() => answer(x.k)}>
                <span className="k">{KEYS[n]}</span>
                <span className="txt">{x.o}</span>
              </button>
            );
          })}
        </div>

        {hintOpen && <div className="hintbox">💡 {q.hint}</div>}

        {done && (
          <div className={"expl " + (picked === q.answer ? "good" : "bad")}>
            <div className="lbl">
              {picked === q.answer ? "✓ נכון" : picked === -1 ? "⏱ נגמר הזמן" : "✗ לא נכון"}
            </div>
            <div>{q.explain}</div>
          </div>
        )}

        <div className="qactions">
          {!done && hints && q.hint && !hintOpen && (
            <button className="btn btn-sm" onClick={() => { setHintOpen(true); setHintsUsed((h) => h + 1); }}>
              💡 רמז (−4 XP)
            </button>
          )}
          {done && !outOfLives && (
            <button className="btn btn-primary btn-block" autoFocus onClick={next}>
              {i === questions.length - 1 ? "סיום ותוצאות" : "לשאלה הבאה ←"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ Results */
export function Results({ pct, correct, total, xp, secs, log = [], bestStreak = 0, passMark, passTitle, failTitle, msg, children }) {
  const pass = pct >= passMark;
  useEffect(() => { if (pass) confetti(); }, [pass]);
  const wrong = log.filter((x) => !x.ok);

  return (
    <div className="result">
      <Ring pct={pct} color={pass ? "var(--ok)" : "var(--bad)"} />
      <h1 className="h2">{pass ? passTitle : failTitle}</h1>
      <p className="sub mt">{msg}</p>

      <div className="row wrap" style={{ justifyContent: "center", gap: 10, marginTop: 16 }}>
        <span className="xp-pop">+{xp} XP</span>
        <span className="pill">{correct}/{total} נכונות</span>
        <span className="pill">⏱ {mmss(secs)}</span>
        {bestStreak > 2 && <span className="pill gold">🔥 רצף {bestStreak}</span>}
      </div>

      {wrong.length > 0 && (
        <div className="mt2" style={{ textAlign: "start" }}>
          <div className="h3 mb">שאלות שכדאי לחזור עליהן</div>
          <div className="rlist">
            {wrong.map((w, n) => (
              <div className="rrow" key={n}>
                <span className="ic">✗</span>
                <div>
                  <div>{w.q}</div>
                  <div className="tiny" style={{ marginTop: 4 }}>{w.explain}</div>
                  {w.ch && <div className="tiny"><Link to={`/ch/${w.ch}`}>→ חזור לפרק {w.ch}</Link></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="qactions" style={{ justifyContent: "center", marginTop: 26 }}>{children}</div>
    </div>
  );
}
