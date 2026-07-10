import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId } from "../data/index.js";
import { Results } from "../components/QuizRunner.jsx";
import { shuffle, mmss } from "../lib/ui.js";
import { addXP, grantBadge, recordMatch, chap } from "../lib/store.js";

export default function Matching() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  const [round, setRound] = useState(0);

  const pairs = useMemo(() => (c ? shuffle(c.matching).slice(0, 10) : []), [c, round]);
  const left = useMemo(() => shuffle(pairs.map((p, i) => ({ t: p.a, i }))), [pairs]);
  const right = useMemo(() => shuffle(pairs.map((p, i) => ({ t: p.b, i }))), [pairs]);

  const [sel, setSel] = useState(null);       // {side,i}
  const [gone, setGone] = useState([]);       // matched indexes
  const [bad, setBad] = useState([]);         // keys shaking
  const [misses, setMisses] = useState(0);
  const [combo, setCombo] = useState(0);
  const [comboBest, setComboBest] = useState(0);
  const [secs, setSecs] = useState(0);
  const [res, setRes] = useState(null);
  const t0 = useRef(Date.now());

  useEffect(() => {
    if (res) return undefined;
    const t = setInterval(() => setSecs(Math.round((Date.now() - t0.current) / 1000)), 500);
    return () => clearInterval(t);
  }, [res]);

  useEffect(() => {
    if (!res && pairs.length && gone.length === pairs.length) {
      const s = Math.round((Date.now() - t0.current) / 1000);
      const score = Math.min(100, Math.max(10, 100 - misses * 8 - Math.max(0, s - pairs.length * 6) + comboBest * 3));
      const isBest = recordMatch(chId, score);
      addXP(Math.round(score * 0.6), true);
      if (misses === 0) grantBadge("match");
      setRes({ score, secs: s, isBest });
    }
  }, [gone, pairs.length, misses, comboBest, chId, res]);

  if (!c) return <div className="empty">הפרק לא נמצא. <Link to="/map">חזרה למסלול</Link></div>;
  if (!pairs.length) return <div className="empty">אין זוגות התאמה בפרק זה. <Link to={`/ch/${chId}`}>חזרה לפרק</Link></div>;

  if (res) {
    return (
      <>
        <Results
          pct={res.score} correct={pairs.length} total={pairs.length}
          xp={Math.round(res.score * 0.6)} secs={res.secs} log={[]} passMark={60}
          passTitle={`${res.isBest ? "שיא אישי חדש! " : ""}${res.score} נקודות`}
          failTitle={`${res.score} נקודות — אפשר יותר`}
          msg={`${misses} טעויות · רצף שיא ${comboBest} · ${res.secs} שניות. אפס טעויות = הישג. שיא אישי: ${chap(chId).match} נק׳.`}
        >
          <button
            className="btn btn-primary"
            onClick={() => {
              setRes(null); setGone([]); setSel(null); setMisses(0);
              setCombo(0); setComboBest(0); setSecs(0);
              t0.current = Date.now(); setRound((r) => r + 1);
            }}
          >
            סבב חדש (זוגות אחרים)
          </button>
          <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
        </Results>

        <div className="mt2" style={{ maxWidth: 860, margin: "30px auto 0" }}>
          <div className="h3 mb">חזרה על כל הזוגות מהסבב:</div>
          <div className="pairs-recap">
            {pairs.map((p, k) => (
              <div className="pair-row" key={k}>
                <span className="a">{p.a}</span>
                <span className="eq">=</span>
                <span className="b">{p.b}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  const shake = (k) => { setBad((b) => [...b, k]); setTimeout(() => setBad((b) => b.filter((x) => x !== k)), 360); };

  const click = (side, i) => {
    if (gone.includes(i)) return;
    if (!sel) { setSel({ side, i }); return; }
    if (sel.side === side) { setSel({ side, i }); return; }
    if (sel.i === i) {
      setGone((g) => [...g, i]);
      setSel(null);
      const cb = combo + 1;
      setCombo(cb);
      setComboBest((b) => Math.max(b, cb));
      return;
    }
    shake(`${side}${i}`);
    shake(`${sel.side}${sel.i}`);
    setMisses((m) => m + 1);
    setCombo(0);
    setSel(null);
  };

  const cls = (side, i) =>
    "mi" +
    (gone.includes(i) ? " gone" : "") +
    (sel && sel.side === side && sel.i === i ? " sel" : "") +
    (bad.includes(`${side}${i}`) ? " bad" : "");

  return (
    <>
      <div className="row wrap mb">
        <Link className="btn btn-sm btn-ghost" to={`/ch/${chId}`}>→ יציאה</Link>
        <div className="spacer" />
        {combo >= 2 && <span className="qstreak">🔥 רצף {combo}</span>}
        <span className="qcount">{gone.length}/{pairs.length}</span>
        <span className="qcount">{mmss(secs)}</span>
        <span className="qcount">{misses} טעויות</span>
      </div>
      <h2 className="h2 mb">התאם מונח להגדרה</h2>
      <p className="tiny mb">רצף התאמות נכונות בלי טעות = בונוס נקודות.</p>
      <div className="match">
        <div className="mcol">
          <div className="mcol-head">מונח</div>
          {left.map((x) => (
            <button key={`a${x.i}`} className={cls("a", x.i)} onClick={() => click("a", x.i)}>{x.t}</button>
          ))}
        </div>
        <div className="mcol">
          <div className="mcol-head">הגדרה</div>
          {right.map((x) => (
            <button key={`b${x.i}`} className={cls("b", x.i)} onClick={() => click("b", x.i)}>{x.t}</button>
          ))}
        </div>
      </div>
    </>
  );
}
