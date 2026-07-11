import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CHAPTERS, FINAL_PASS } from "../data/index.js";
import { QuizRunner, Results } from "../components/QuizRunner.jsx";
import { examQuestions } from "../lib/questions.js";
import { addXP, grantBadge, recordExam, allDone } from "../lib/store.js";

export default function FinalExam() {
  const [res, setRes] = useState(null);
  const [round, setRound] = useState(0);
  const [override, setOverride] = useState(false);
  const questions = useMemo(() => examQuestions(CHAPTERS, 50), [round]);

  const ready = allDone();
  if (!ready && !override && !res) {
    return (
      <div className="quiz">
        <div className="qcard center">
          <div style={{ fontSize: "2.4rem" }}>🔒</div>
          <h1 className="h2 mt">המבחן המסכם עדיין נעול</h1>
          <p className="sub mt">
            50 שאלות מכל 22 הפרקים. המבחן נפתח אוטומטית כשכל הפרקים עוברים בציון מעבר —
            אבל אפשר לפתוח אותו ידנית כבר עכשיו.
          </p>
          <div className="qactions" style={{ justifyContent: "center" }}>
            <Link className="btn btn-primary" to="/map">חזרה למסלול</Link>
            <button className="btn" onClick={() => setOverride(true)}>פתח בכל זאת ←</button>
          </div>
        </div>
      </div>
    );
  }

  if (!res) {
    return (
      <>
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
      passTitle="עברת את המבחן המסכם ★"
      failTitle={`לא עברת הפעם — צריך ${FINAL_PASS}%`}
      msg="50 שאלות מכל 22 הפרקים."
    >
      <button className="btn btn-primary" onClick={() => { setRes(null); setRound((r) => r + 1); }}>נסה שוב</button>
      <Link className="btn" to="/">לוח בקרה</Link>
    </Results>
  );
}
