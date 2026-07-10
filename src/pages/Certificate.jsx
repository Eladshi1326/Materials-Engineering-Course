import { Link } from "react-router-dom";
import { CHAPTERS } from "../data/index.js";
import { useStore, rankOf, examBest, setName } from "../lib/store.js";
import { fmt } from "../lib/ui.js";

export default function Certificate() {
  const S = useStore();
  const best = examBest("final");
  const r = rankOf(S.xp);
  const totalQ = CHAPTERS.reduce((a, c) => a + c.quiz.length + (c.challenge?.length || 0), 0);

  return (
    <div className="cert">
      <div className="seal">★</div>
      <div className="tiny" style={{ letterSpacing: ".2em" }}>תעודת סיום</div>

      <div className="nm">
        <input
          defaultValue={S.name}
          placeholder="הקלד את שמך כאן"
          onBlur={(e) => setName(e.target.value.trim())}
        />
      </div>

      <p className="sub">
        השלים/ה בהצלחה את קורס <b>מדע והנדסת חומרים</b> על בסיס הספר Callister &amp; Rethwisch, מהדורה 9 —
        22 פרקים, {totalQ} שאלות ומבחן הסמכה מסכם.
      </p>

      <div className="row" style={{ justifyContent: "center", gap: 26, marginTop: 22 }}>
        <div><div className="h2 mono">{best}%</div><div className="tiny">ציון הסמכה</div></div>
        <div><div className="h2 mono">{fmt(S.xp)}</div><div className="tiny">XP</div></div>
        <div><div className="h2">{r.rank.icon}</div><div className="tiny">{r.rank.name}</div></div>
      </div>

      <div className="tiny mt2">{new Date().toLocaleDateString("he-IL")}</div>

      <div className="mt2">
        <button className="btn btn-primary" onClick={() => window.print()}>הדפס / שמור כ-PDF</button>{" "}
        <Link className="btn" to="/">חזרה</Link>
      </div>
    </div>
  );
}
