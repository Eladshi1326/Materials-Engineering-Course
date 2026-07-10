import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId } from "../data/index.js";
import { Results } from "../components/QuizRunner.jsx";
import { Bar } from "../components/Bits.jsx";
import { shuffle, sample } from "../lib/ui.js";
import { addXP, recordFormulaDrill, chap, useStore } from "../lib/store.js";
import { Fml } from "../lib/math.jsx";

/* שליטה בנוסחאות — משחק למידה:
   סבב זוגי: רואים שם נוסחה ובוחרים את הביטוי הנכון.
   סבב אי-זוגי: רואים ביטוי ובוחרים את שמו.
   ללא טיימר — מטרת המשחק היא זיהוי וזכירה, לא לחץ. */
export default function FormulaDrill() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  useStore();
  const [seed, setSeed] = useState(0);

  const rounds = useMemo(() => {
    if (!c || c.formulas.length < 4) return [];
    return shuffle(c.formulas).slice(0, 12).map((f, k) => ({
      f,
      mode: k % 2 === 0 ? "pickFormula" : "pickName",
      options: shuffle([f, ...sample(c.formulas.filter((x) => x !== f), 3)])
    }));
  }, [c, seed]); // eslint-disable-line react-hooks/exhaustive-deps

  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [wrongList, setWrongList] = useState([]);
  const [res, setRes] = useState(null);

  if (!c) return <div className="empty">הפרק לא נמצא. <Link to="/map">חזרה למסלול</Link></div>;
  if (!rounds.length) return <div className="empty">אין מספיק נוסחאות בפרק זה. <Link to={`/ch/${chId}`}>חזרה לפרק</Link></div>;

  const restart = () => {
    setSeed((s) => s + 1);
    setI(0); setPicked(null); setCorrect(0); setStreak(0); setBestStreak(0);
    setWrongList([]); setRes(null);
  };

  if (res) {
    return (
      <>
        <Results
          pct={Math.round((correct / rounds.length) * 100)}
          correct={correct} total={rounds.length}
          xp={res.xp} secs={0} log={[]}
          bestStreak={bestStreak} passMark={70}
          passTitle={`${res.isBest ? "שיא אישי חדש! " : ""}${res.score} נקודות`}
          failTitle={`${res.score} נקודות — הנוסחאות עוד מתערבבות`}
          msg={`זיהית נכון ${correct} מתוך ${rounds.length}. שיא אישי: ${chap(chId).fdrill} נק׳.`}
        >
          <button className="btn btn-primary" onClick={restart}>סבב נוסף</button>
          <Link className="btn" to={`/ch/${chId}/formulas`}>לדף הנוסחאות</Link>
          <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
        </Results>

        {wrongList.length > 0 && (
          <div className="mt2" style={{ maxWidth: 780, margin: "30px auto 0" }}>
            <div className="h3 mb">נוסחאות שהתבלבלת בהן — כדאי לחזור:</div>
            {wrongList.map((f, k) => (
              <div className="fcard" key={k}>
                <div className="nm">{f.name}</div>
                <Fml tex={f.latex} plain={f.expr} />
                {f.note && <div className="note">💡 {f.note}</div>}
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  const r = rounds[i];
  const done = picked !== null;

  const pick = (opt) => {
    if (done) return;
    setPicked(opt);
    if (opt === r.f) {
      setCorrect((v) => v + 1);
      const s = streak + 1;
      setStreak(s);
      setBestStreak((b) => Math.max(b, s));
    } else {
      setStreak(0);
      setWrongList((w) => (w.includes(r.f) ? w : [...w, r.f]));
    }
  };

  const next = () => {
    if (i === rounds.length - 1) {
      const score = correct * 10 + bestStreak * 5;
      const isBest = recordFormulaDrill(chId, score);
      const xp = Math.round(score * 0.6);
      addXP(xp, true);
      setRes({ score, isBest, xp });
      return;
    }
    setI(i + 1);
    setPicked(null);
  };

  return (
    <div className="quiz">
      <div className="row wrap mb">
        <Link className="btn btn-sm btn-ghost" to={`/ch/${chId}`}>→ יציאה</Link>
        <div className="spacer" />
        {streak >= 3 && <div className="qstreak">🔥 רצף {streak}</div>}
        <span className="qcount">{correct} ✓</span>
      </div>

      <div className="qbar">
        <span className="qcount">{i + 1} / {rounds.length}</span>
        <Bar pct={(i / rounds.length) * 100} />
      </div>

      <div className="qcard">
        {r.mode === "pickFormula" ? (
          <>
            <div className="qtext">איזו נוסחה היא <span className="fd-name">{r.f.name}</span>?</div>
            <div className="opts">
              {r.options.map((opt, k) => {
                let cls = "opt fd-opt";
                if (done) {
                  if (opt === r.f) cls += " correct";
                  else if (opt === picked) cls += " wrong";
                  else cls += " dim";
                }
                return (
                  <button key={k} className={cls} disabled={done} onClick={() => pick(opt)}>
                    <Fml tex={opt.latex} plain={opt.expr} block={false} />
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="qtext">מה שמה של הנוסחה?</div>
            <div className="fd-show"><Fml tex={r.f.latex} plain={r.f.expr} /></div>
            <div className="opts">
              {r.options.map((opt, k) => {
                let cls = "opt";
                if (done) {
                  if (opt === r.f) cls += " correct";
                  else if (opt === picked) cls += " wrong";
                  else cls += " dim";
                }
                return (
                  <button key={k} className={cls} disabled={done} onClick={() => pick(opt)}>
                    <span className="txt">{opt.name}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {done && (
          <div className={"expl " + (picked === r.f ? "good" : "bad")}>
            <div className="lbl">{picked === r.f ? "✓ נכון" : "✗ לא נכון"}</div>
            <div><b>{r.f.name}</b></div>
            <Fml tex={r.f.latex} plain={r.f.expr} />
            {r.f.note && <div className="tiny" style={{ marginTop: 8 }}>💡 {r.f.note}</div>}
          </div>
        )}

        <div className="qactions">
          {done && (
            <button className="btn btn-primary btn-block" autoFocus onClick={next}>
              {i === rounds.length - 1 ? "סיום ותוצאות" : "לנוסחה הבאה ←"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
