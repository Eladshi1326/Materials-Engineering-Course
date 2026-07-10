import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CHAPTERS, FINAL_PASS } from "../data/index.js";
import { QuizRunner, Results } from "../components/QuizRunner.jsx";
import { examQuestions } from "../lib/questions.js";
import { addXP, grantBadge, recordExam, allDone } from "../lib/store.js";

export default function FinalExam() {
  const [res, setRes] = useState(null);
  const [round, setRound] = useState(0);
  const questions = useMemo(() => examQuestions(CHAPTERS, 50), [round]);

  if (!res) {
    return (
      <>
        {!allDone() && (
          <div className="notice mb">
            מבחן ההסמכה מכסה את כל 22 הפרקים. עוד לא השלמת את כולם — אפשר לנסות, אבל התעודה שווה יותר אחרי שליטה מלאה.
          </div>
        )}
        <QuizRunner
        key={round}
        questions={questions}
        xpPer={12}
        showCh
        backHref="/map"
        onFinish={(r) => {
          recordExam("final", r.pct);
          const pass = r.pct >= FINAL_PASS;
          const xp = r.xp + (pass ? 1200 : 0);
          addXP(xp, true);
          if (pass) grantBadge("final");
          setRes({ ...r, xp, pass });
        }}
        />
      </>
    );
  }

  return (
    <Results
      {...res}
      passMark={FINAL_PASS}
      passTitle="מוסמך חומרים ★"
      failTitle={`לא עברת הפעם — צריך ${FINAL_PASS}%`}
      msg="50 שאלות מכל 22 הפרקים."
    >
      {res.pass && <Link className="btn btn-primary" to="/certificate">קבל תעודה ★</Link>}
      <button className="btn" onClick={() => { setRes(null); setRound((r) => r + 1); }}>נסה שוב</button>
      <Link className="btn" to="/">לוח בקרה</Link>
    </Results>
  );
}
