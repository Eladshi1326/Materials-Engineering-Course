import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId } from "../data/index.js";
import { Results } from "../components/QuizRunner.jsx";
import { shuffle, mmss } from "../lib/ui.js";
import { addXP, grantBadge, recordMatch, chap, isUnlocked } from "../lib/store.js";

export default function Matching() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  const [round, setRound] = useState(0);

  const pairs = useMemo(() => (c ? c.matching.slice(0, 10) : []), [c]);
  const left = useMemo(() => shuffle(pairs.map((p, i) => ({ t: p.a, i }))), [pairs, round]);
  const right = useMemo(() => shuffle(pairs.map((p, i) => ({ t: p.b, i }))), [pairs, round]);

  const [sel, setSel] = useState(null);       // {side,i}
  const [gone, setGone] = useState([]);       // indexes
  const [bad, setBad] = useState([]);         // keys shaking
  const [misses, setMisses] = useState(0);
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
      const score = Math.max(10, 100 - misses * 8 - Math.max(0, s - pairs.length * 6));
      const isBest = recordMatch(chId, score);
      addXP(Math.round(score * 0.6), true);
      if (misses === 0) grantBadge("match");
      setRes({ score, secs: s, isBest });
    }
  }, [gone, pairs.length, misses, chId, res]);

  if (!c || !isUnlocked(chId)) return <div className="empty">לא זמין. <Link to="/map">חזרה למסלול</Link></div>;

  if (res) {
    return (
      <Results
        pct={res.score} correct={pairs.length} total={pairs.length}
        xp={Math.round(res.score * 0.6)} secs={res.secs} log={[]} passMark={60}
        passTitle={`${res.isBest ? "שיא אישי חדש! " : ""}${res.score} נקודות`}
        failTitle={`${res.score} נקודות — אפשר יותר`}
        msg={`${misses} טעויות · ${res.secs} שניות. אפס טעויות = הישג. שיא אישי: ${chap(chId).match} נק׳.`}
      >
        <button
          className="btn btn-primary"
          onClick={() => {
            setRes(null); setGone([]); setSel(null); setMisses(0); setSecs(0);
            t0.current = Date.now(); setRound((r) => r + 1);
          }}
        >
          שוב
        </button>
        <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
      </Results>
    );
  }

  const shake = (k) => { setBad((b) => [...b, k]); setTimeout(() => setBad((b) => b.filter((x) => x !== k)), 360); };

  const click = (side, i) => {
    if (gone.includes(i)) return;
    if (!sel) { setSel({ side, i }); return; }
    if (sel.side === side) { setSel({ side, i }); return; }
    if (sel.i === i) { setGone((g) => [...g, i]); setSel(null); return; }
    shake(`${side}${i}`);
    shake(`${sel.side}${sel.i}`);
    setMisses((m) => m + 1);
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
        <span className="qcount">{mmss(secs)}</span>
        <span className="qcount">{misses} טעויות</span>
      </div>
      <h2 className="h2 mb">התאם מונח להגדרה</h2>
      <div className="match">
        <div className="mcol">
          {left.map((x) => (
            <button key={`a${x.i}`} className={cls("a", x.i)} onClick={() => click("a", x.i)}>{x.t}</button>
          ))}
        </div>
        <div className="mcol">
          {right.map((x) => (
            <button key={`b${x.i}`} className={cls("b", x.i)} onClick={() => click("b", x.i)}>{x.t}</button>
          ))}
        </div>
      </div>
    </>
  );
}
