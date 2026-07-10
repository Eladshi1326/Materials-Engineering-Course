import { Link } from "react-router-dom";
import { UNITS, byId, PASS, EXAM_PASS, FINAL_PASS } from "../data/index.js";
import {
  useStore, chap, chapterProgress, isDone, unitDone, allDone, examBest
} from "../lib/store.js";
import { Bar } from "../components/Bits.jsx";

function ChapterCard({ c }) {
  const done = isDone(c.id);
  const p = chap(c.id);
  const prog = chapterProgress(c.id);

  return (
    <Link className={"ch" + (done ? " done" : "")} to={`/ch/${c.id}`}>
      {done && <span className="ch-lock">✓</span>}
      <div className="ch-top">
        <span className="ch-num">{String(c.id).padStart(2, "0")}</span>
        <div style={{ flex: 1 }}>
          <div className="ch-title">{c.title}</div>
          <div className="ch-en">{c.titleEn}</div>
        </div>
      </div>
      <div className="ch-tag">{c.tagline}</div>
      <Bar pct={prog} ok={done} />
      <div className="ch-foot">
        <span>{c.sections.length} סעיפים</span><span>·</span><span>{c.quiz.length} שאלות</span>
        <span className={"ch-score" + (done ? " pass" : "")}>{p.quizBest ? `${p.quizBest}%` : "—"}</span>
      </div>
    </Link>
  );
}

export default function UnitList({ compact = false }) {
  useStore(); // re-render on progress change

  return (
    <>
      {UNITS.map((u) => {
        const chs = u.chapters.map(byId);
        const pct = Math.round(chs.reduce((a, c) => a + chapterProgress(c.id), 0) / chs.length);
        const ready = unitDone(u);
        const eb = examBest(`u${u.id}`);

        return (
          <section className="unit" key={u.id}>
            <div className="unit-head">
              <span className="unit-badge">{u.id}</span>
              <div>
                <div className="h2">{u.name}</div>
                <div className="tiny">{u.desc}</div>
              </div>
              <div className="unit-line" />
              <div className="unit-pct">{pct}%</div>
            </div>

            <div className="chapters">
              {chs.map((c) => <ChapterCard c={c} key={c.id} />)}

              <Link className={"ch exam-card" + (eb >= EXAM_PASS ? " done" : "")} to={`/exam/unit/${u.id}`}>
                {eb >= EXAM_PASS && <span className="ch-lock">✓</span>}
                <div className="ch-top">
                  <span className="ch-num">מבחן</span>
                  <span className="ch-title">מבחן יחידה {u.id}</span>
                </div>
                <div className="ch-tag">
                  20 שאלות מכל פרקי היחידה · ציון מעבר {EXAM_PASS}.
                  {!ready && " מומלץ אחרי סיום כל הפרקים."}
                </div>
                <div className="ch-foot">
                  <span className={"pill" + (eb >= EXAM_PASS ? " ok" : "")}>{ready ? "מוכן" : "פתוח"}</span>
                  <span className={"ch-score" + (eb >= EXAM_PASS ? " pass" : "")}>{eb ? `${eb}%` : "—"}</span>
                </div>
              </Link>
            </div>
          </section>
        );
      })}

      {(!compact || allDone()) && (() => {
        const fb = examBest("final");
        const ready = allDone();
        return (
          <section className="unit">
            <div className="unit-head">
              <span className="unit-badge">★</span>
              <div>
                <div className="h2">מבחן ההסמכה</div>
                <div className="tiny">50 שאלות מכל הספר. עוברים ב-{FINAL_PASS} ומקבלים תעודה.</div>
              </div>
              <div className="unit-line" />
            </div>
            <div className="chapters">
              <Link className={"ch exam-card" + (fb >= FINAL_PASS ? " done" : "")} to="/exam/final">
                {fb >= FINAL_PASS && <span className="ch-lock">★</span>}
                <div className="ch-top"><span className="ch-num">★</span><span className="ch-title">מבחן הסמכה — מומחה חומרים</span></div>
                <div className="ch-tag">
                  {ready ? "כל 22 הפרקים הושלמו. בהצלחה." : `מכסה את כל 22 הפרקים (מעבר: ${FINAL_PASS}). מומלץ אחרי השלמת כולם — ציון ${PASS}+ בכל מבחן פרק.`}
                </div>
                <div className="ch-foot">
                  <span className={"pill" + (fb >= FINAL_PASS ? " gold" : "")}>{ready ? "מוכן" : "פתוח"}</span>
                  <span className={"ch-score" + (fb >= FINAL_PASS ? " pass" : "")}>{fb ? `${fb}%` : "—"}</span>
                </div>
              </Link>
            </div>
          </section>
        );
      })()}
    </>
  );
}
