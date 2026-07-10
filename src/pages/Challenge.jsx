import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { byId } from "../data/index.js";
import { QuizRunner, Results } from "../components/QuizRunner.jsx";
import { chapterChallenge } from "../lib/questions.js";
import { addXP, grantBadge, recordChallenge, chap } from "../lib/store.js";

export default function Challenge() {
  const { id } = useParams();
  const chId = Number(id);
  const c = byId(chId);
  const [res, setRes] = useState(null);
  const [round, setRound] = useState(0);
  const questions = useMemo(() => (c ? chapterChallenge(c) : []), [c, round]);

  if (!c) return <div className="empty">הפרק לא נמצא. <Link to="/map">חזרה למסלול</Link></div>;
  if (!questions.length) return <div className="empty">אין שאלות אתגר בפרק זה.</div>;

  if (!res) {
    return (
      <QuizRunner
        key={round}
        questions={questions}
        chId={chId}
        timer={30}
        lives={3}
        xpPer={15}
        backHref={`/ch/${chId}`}
        onFinish={(r) => {
          const perfect = r.correct === r.total;
          const score = r.correct * 20 + r.lives * 15 + (perfect ? 50 : 0);
          recordChallenge(chId, score);
          addXP(r.xp + (perfect ? 50 : 0), true);
          if (perfect && r.lives === 3) grantBadge("speed");
          setRes({ ...r, score });
        }}
      />
    );
  }

  return (
    <Results
      {...res}
      passMark={70}
      passTitle={`אתגר הושלם — ${res.score} נקודות`}
      failTitle="נגמרו החיים"
      msg={`אתגר מהיר: 30 שניות לשאלה, ללא רמזים. שיא אישי: ${chap(chId).chal} נקודות.`}
    >
      <button className="btn btn-primary" onClick={() => { setRes(null); setRound((r) => r + 1); }}>שוב</button>
      <Link className="btn" to={`/ch/${chId}`}>חזרה לפרק</Link>
    </Results>
  );
}
