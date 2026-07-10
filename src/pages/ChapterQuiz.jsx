import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId, PASS } from "../data/index.js";
import { QuizRunner, Results } from "../components/QuizRunner.jsx";
import { pickChapterQuiz } from "../lib/questions.js";
import { addXP, grantBadge, recordQuiz } from "../lib/store.js";

export default function ChapterQuiz() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  const [res, setRes] = useState(null);
  const [round, setRound] = useState(0);
  const questions = useMemo(() => (c ? pickChapterQuiz(c) : []), [c, round]);

  if (!c) return <div className="empty">הפרק לא נמצא.</div>;

  if (!res) {
    return (
      <QuizRunner
        key={round}
        questions={questions}
        chId={chId}
        hints
        xpPer={8}
        backHref={`/ch/${chId}`}
        onFinish={(r) => {
          const wasDone = recordQuiz(chId, r.pct);
          let xp = r.xp;
          const pass = r.pct >= PASS;
          if (pass) xp += 40;
          if (r.pct === 100) { xp += 60; grantBadge("perfect"); }
          addXP(xp, true);
          setRes({ ...r, xp, pass, wasDone });
        }}
      />
    );
  }

  const next = byId(chId + 1);
  return (
    <Results
      {...res}
      passMark={PASS}
      passTitle={res.wasDone ? "שיפרת את הציון!" : `עברת את פרק ${chId}!`}
      failTitle={`עוד לא — צריך ${PASS}%`}
      msg={
        res.pass
          ? (next ? `שלטת בחומר של פרק ${chId}. ממשיכים לפרק ${next.id}.` : "השלמת את כל הפרקים — מבחן ההסמכה מחכה.")
          : 'חזור על הסעיפים החלשים, ולחץ על "עדיין לא הבנתי" בכל סעיף שלא ברור. אחר כך נסה שוב.'
      }
    >
      {res.pass && next && <Link className="btn btn-primary" to={`/ch/${next.id}`}>לפרק {next.id} ←</Link>}
      {res.pass && !next && <Link className="btn btn-primary" to="/map">סיימת את הפרק האחרון ★</Link>}
      <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
      <button className="btn" onClick={() => { setRes(null); setRound((r) => r + 1); }}>נסה שוב</button>
    </Results>
  );
}
