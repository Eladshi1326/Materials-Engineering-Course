import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId } from "../data/index.js";
import { Bar } from "../components/Bits.jsx";
import { Results } from "../components/QuizRunner.jsx";
import { shuffle } from "../lib/ui.js";
import { recordCards, isUnlocked } from "../lib/store.js";

export default function Flashcards() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  const initial = useMemo(() => (c ? shuffle(c.flashcards) : []), [c]);

  const [queue, setQueue] = useState(initial);
  const [flip, setFlip] = useState(false);
  const [known, setKnown] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [done, setDone] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    if (queue.length === 0 && !done && initial.length) {
      setFirstTime(recordCards(chId));
      setDone(true);
    }
  }, [queue, done, chId, initial.length]);

  useEffect(() => {
    const onKey = (e) => { if (e.code === "Space") { e.preventDefault(); setFlip((f) => !f); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!c || !isUnlocked(chId)) return <div className="empty">לא זמין. <Link to="/map">חזרה למסלול</Link></div>;

  if (done) {
    return (
      <Results
        pct={100} correct={initial.length} total={initial.length}
        xp={firstTime ? 40 : 0} secs={0} log={[]} passMark={100}
        passTitle="סיימת את החפיסה!" failTitle=""
        msg={`עברת על כל ${initial.length} הכרטיסים${rounds ? ` (${rounds} חזרות)` : " ברצף, בלי חזרות"}.`}
      >
        <Link className="btn btn-primary" to={`/ch/${chId}/play/quiz`}>למבחן הפרק ◎</Link>
        <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
      </Results>
    );
  }

  const card = queue[0];
  if (!card) return null;

  const advance = (knewIt) => {
    setFlip(false);
    if (knewIt) { setKnown((k) => k + 1); setQueue((q) => q.slice(1)); }
    else { setRounds((r) => r + 1); setQueue((q) => [...q.slice(1), q[0]]); }
  };

  return (
    <div className="fc-stage">
      <div className="row wrap mb">
        <Link className="btn btn-sm btn-ghost" to={`/ch/${chId}`}>→ יציאה</Link>
        <div className="spacer" />
        <span className="qcount">{known} / {initial.length} ידועים</span>
      </div>
      <div className="mb"><Bar pct={(known / initial.length) * 100} /></div>

      <div className={"fc" + (flip ? " flip" : "")} onClick={() => setFlip((f) => !f)}>
        <div className="fc-inner">
          <div className="fc-face fc-front">
            <span className="lbl">שאלה</span>
            <div>{card.front}</div>
            <span className="fc-hint">לחץ (או רווח) כדי להפוך</span>
          </div>
          <div className="fc-face fc-back">
            <span className="lbl">תשובה</span>
            <div>{card.back}</div>
          </div>
        </div>
      </div>

      <div className="qactions" style={{ justifyContent: "center" }}>
        <button className="btn" style={{ borderColor: "#f59e0b55" }} onClick={() => advance(false)}>חזור עליי שוב</button>
        <button className="btn btn-primary" onClick={() => advance(true)}>ידעתי ✓</button>
      </div>
      <p className="tiny center mt">כרטיס שלא ידעת חוזר לסוף החפיסה.</p>
    </div>
  );
}
