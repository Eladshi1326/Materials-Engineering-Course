import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId } from "../data/index.js";
import { QuizRunner, Results } from "../components/QuizRunner.jsx";
import { buildPractice } from "../lib/questions.js";
import { addXP, recordPractice, chap, useStore } from "../lib/store.js";

/* תרגול מדורג — קל ← בינוני ← קשה.
   תיאוריה, הגדרות ושאלות חישוב; בלי טיימר ובלי חיים. */
export default function Practice() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  useStore();
  const [phase, setPhase] = useState("intro"); // intro | run | done
  const [round, setRound] = useState(0);
  const [res, setRes] = useState(null);
  const questions = useMemo(() => (c ? buildPractice(c) : []), [c, round]);

  if (!c) return <div className="empty">הפרק לא נמצא. <Link to="/map">חזרה למסלול</Link></div>;
  if (!questions.length) return <div className="empty">אין עדיין שאלות תרגול בפרק זה. <Link to={`/ch/${chId}`}>חזרה לפרק</Link></div>;

  const counts = questions.reduce((a, q) => { a[q.level] = (a[q.level] || 0) + 1; return a; }, {});

  if (phase === "intro") {
    return (
      <div className="quiz">
        <div className="row wrap mb">
          <Link className="btn btn-sm btn-ghost" to={`/ch/${chId}`}>→ יציאה</Link>
        </div>
        <div className="qcard">
          <h1 className="h2">תרגול מדורג — פרק {chId}</h1>
          <p className="sub mt">
            {questions.length} שאלות ברמה עולה: מתחילים בקל ומסיימים בקשה.
            השאלות משלבות תיאוריה, הגדרות ושאלות חישוב עם הנוסחאות של הפרק —
            בלי לחץ זמן, עם רמזים והסבר מלא אחרי כל תשובה.
          </p>
          <div className="row wrap mt" style={{ gap: 8 }}>
            {counts.easy > 0 && <span className="qlvl easy">קל · {counts.easy}</span>}
            {counts.medium > 0 && <span className="qlvl medium">בינוני · {counts.medium}</span>}
            {counts.hard > 0 && <span className="qlvl hard">קשה · {counts.hard}</span>}
            {chap(chId).prac > 0 && <span className="pill">שיא אישי: {chap(chId).prac}%</span>}
          </div>
          <p className="tiny mt">שאלות שטעית בהן נרשמות ב"נושאים לחיזוק" וחוזרות במבחן הפרק.</p>
          <div className="qactions">
            <button className="btn btn-primary btn-lg" onClick={() => setPhase("run")}>מתחילים ←</button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "run") {
    return (
      <QuizRunner
        key={round}
        questions={questions}
        chId={chId}
        hints
        xpPer={10}
        backHref={`/ch/${chId}`}
        onFinish={(r) => {
          const isBest = recordPractice(chId, r.pct);
          addXP(r.xp + (r.pct >= 80 ? 30 : 0), true);
          setRes({ ...r, isBest });
          setPhase("done");
        }}
      />
    );
  }

  return (
    <Results
      {...res}
      passMark={80}
      passTitle={`${res.isBest ? "שיא אישי חדש! " : ""}${res.pct}% בתרגול`}
      failTitle={`${res.pct}% — ממשיכים לתרגל`}
      msg={`שיא אישי: ${chap(chId).prac}%. סבב חדש מגריל שאלות אחרות.`}
    >
      <button className="btn btn-primary" onClick={() => { setRes(null); setRound((r) => r + 1); setPhase("run"); }}>
        סבב נוסף
      </button>
      <Link className="btn" to={`/ch/${chId}/play/quiz`}>למבחן הפרק ◎</Link>
      <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
    </Results>
  );
}
