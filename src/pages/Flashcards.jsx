import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId } from "../data/index.js";
import { Bar } from "../components/Bits.jsx";
import { Results } from "../components/QuizRunner.jsx";
import { shuffle } from "../lib/ui.js";
import { recordCards } from "../lib/store.js";

export default function Flashcards() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  const [seed, setSeed] = useState(0);
  const initial = useMemo(() => (c ? shuffle(c.flashcards) : []), [c, seed]);

  const [queue, setQueue] = useState(initial);
  const [flip, setFlip] = useState(false);
  const [known, setKnown] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [done, setDone] = useState(false);
  const [firstTime, setFirstTime] = useState(false);

  /* מוגדר לפני כל ה-effects וה-early returns — נגיש בכל מסלול רינדור */
  const advance = (knewIt) => {
    setFlip(false);
    if (knewIt) { setKnown((k) => k + 1); setQueue((q) => q.slice(1)); }
    else { setRounds((r) => r + 1); setQueue((q) => [...q.slice(1), q[0]]); }
  };

  useEffect(() => { setQueue(initial); }, [initial]);

  useEffect(() => {
    if (queue.length === 0 && !done && initial.length) {
      setFirstTime(recordCards(chId));
      setDone(true);
    }
  }, [queue, done, chId, initial.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === "Space") { e.preventDefault(); setFlip((f) => !f); }
      if (done || !queue.length) return;
      if (e.key === "ArrowLeft") { e.preventDefault(); advance(true); }   // ידעתי
      if (e.key === "ArrowRight") { e.preventDefault(); advance(false); } // חזור עליי
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }); // eslint-disable-line react-hooks/exhaustive-deps

  if (!c) return <div className="empty">הפרק לא נמצא. <Link to="/map">חזרה למסלול</Link></div>;
  if (!initial.length) return <div className="empty">אין כרטיסיות בפרק זה. <Link to={`/ch/${chId}`}>חזרה לפרק</Link></div>;

  if (done) {
    return (
      <Results
        pct={100} correct={initial.length} total={initial.length}
        xp={firstTime ? 40 : 0} secs={0} log={[]} passMark={100}
        passTitle="סיימת את החפיסה!" failTitle=""
        msg={`עברת על כל ${initial.length} הכרטיסים${rounds ? ` (${rounds} חזרות על כרטיסים קשים)` : " ברצף, בלי חזרות"}.`}
      >
        <button className="btn" onClick={() => { setDone(false); setKnown(0); setRounds(0); setFlip(false); setSeed((s) => s + 1); }}>
          ערבוב וסבב חדש
        </button>
        <Link className="btn btn-primary" to={`/ch/${chId}/play/quiz`}>למבחן הפרק ◎</Link>
        <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
      </Results>
    );
  }

  const card = queue[0];
  if (!card) return null;

  return (
    <div className="fc-stage">
      <div className="row wrap mb">
        <Link className="btn btn-sm btn-ghost" to={`/ch/${chId}`}>→ יציאה</Link>
        <div className="spacer" />
        <span className="qcount">נותרו {queue.length}</span>
        <span className="qcount">{known} / {initial.length} ידועים</span>
      </div>
      <div className="mb"><Bar pct={(known / initial.length) * 100} /></div>

      <div className={"fc" + (flip ? " flip" : "")} onClick={() => setFlip((f) => !f)}>
        <div className="fc-inner">
          <div className="fc-face fc-front">
            <span className="lbl">שאלה</span>
            <div>{card.front}</div>
            <span className="fc-hint">לחיצה (או רווח) הופכת את הכרטיס</span>
          </div>
          <div className="fc-face fc-back">
            <span className="lbl">תשובה</span>
            <div>{card.back}</div>
          </div>
        </div>
      </div>

      <div className="qactions" style={{ justifyContent: "center" }}>
        <button className="btn" style={{ borderColor: "#f59e0b55" }} onClick={() => advance(false)}>
          חזור עליי שוב <span className="key-hint">→</span>
        </button>
        <button className="btn btn-primary" onClick={() => advance(true)}>
          ידעתי ✓ <span className="key-hint">←</span>
        </button>
      </div>
      <p className="tiny center mt">כרטיס שלא ידעת חוזר לסוף החפיסה · אפשר לענות עם מקשי החצים.</p>
    </div>
  );
}
