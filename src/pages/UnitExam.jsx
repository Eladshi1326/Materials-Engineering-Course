import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { UNITS, byId, EXAM_PASS } from "../data/index.js";
import { QuizRunner, Results } from "../components/QuizRunner.jsx";
import { examQuestions } from "../lib/questions.js";
import { addXP, grantBadge, recordExam, unitDone, getState } from "../lib/store.js";

export default function UnitExam() {
  const { uid } = useParams();
  const u = UNITS.find((x) => x.id === Number(uid));
  const [res, setRes] = useState(null);
  const [round, setRound] = useState(0);
  const questions = useMemo(
    () => (u ? examQuestions(u.chapters.map(byId), 20) : []),
    [u, round]
  );

  if (!u) return <Navigate to="/map" replace />;
  if (!unitDone(u) && !getState().settings.free) return <Navigate to="/map" replace />;

  if (!res) {
    return (
      <QuizRunner
        key={round}
        questions={questions}
        xpPer={10}
        showCh
        backHref="/map"
        onFinish={(r) => {
          recordExam(`u${u.id}`, r.pct);
          const pass = r.pct >= EXAM_PASS;
          const xp = r.xp + (pass ? 250 : 0);
          addXP(xp, true);
          if (pass) grantBadge(`unit${u.id}`);
          setRes({ ...r, xp });
        }}
      />
    );
  }

  return (
    <Results
      {...res}
      passMark={EXAM_PASS}
      passTitle={`עברת את מבחן יחידה ${u.id}!`}
      failTitle={`כמעט — צריך ${EXAM_PASS}%`}
      msg={`${u.name} · ${u.chapters.length} פרקים`}
    >
      <Link className="btn btn-primary" to="/map">חזרה למסלול</Link>
      <button className="btn" onClick={() => { setRes(null); setRound((r) => r + 1); }}>נסה שוב</button>
    </Results>
  );
}
