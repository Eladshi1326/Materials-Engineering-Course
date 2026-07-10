import { Link } from "react-router-dom";
import { UNITS, byId, PASS, EXAM_PASS, FINAL_PASS } from "../data/index.js";
import {
  useStore, chap, chapterProgress, isUnlocked, isDone, unitDone, allDone, examBest
} from "../lib/store.js";
import { Bar } from "../components/Bits.jsx";

function ChapterCard({ c }) {
  const open = isUnlocked(c.id);
  const done = isDone(c.id);
  const p = chap(c.id);
  const prog = chapterProgress(c.id);

  const inner = (
    <>
      {open ? (done && <span className="ch-lock">✓</span>) : <span className="ch-lock">🔒</span>}
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
    </>
  );

  const cls = `ch ${open ? "" : "locked "}${done ? "done" : ""}`;
  return open
    ? <Link className={cls} to={`/ch/${c.id}`}>{inner}</Link>
    : <div className={cls} title={`נעול — עבור קודם את מבחן פרק ${c.id - 1} בציון ${PASS}`}>{inner}</div>;
}

export default function UnitList({ compact = false }) {
  useStore(); // re-render on progress change

  return (
    <>
      {UNITS.map((u) => {
        const chs = u.chapters.map(byId);
        const pct = Math.round(chs.reduce((a, c) => a + chapterProgress(c.id), 0) / chs.length);
        const uOpen = unitDone(u);
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

              {uOpen ? (
                <Link className="ch" to={`/exam/unit/${u.id}`}>
                  <div className="ch-top">
                    <span className="ch-num">מבחן</span>
                    <span className="ch-title">מבחן יחידה {u.id}</span>
                  </div>
                  <div className="ch-tag">20 שאלות מכל פרקי היחידה. ציון מעבר {EXAM_PASS}.</div>
                  <div className="ch-foot">
                    <span className={"pill" + (eb >= EXAM_PASS ? " ok" : "")}>פתוח</span>
                    <span className={"ch-score" + (eb >= EXAM_PASS ? " pass" : "")}>{eb ? `${eb}%` : "—"}</span>
                  </div>
                </Link>
              ) : (
                <div className="ch locked">
                  <span className="ch-lock">🔒</span>
                  <div className="ch-top">
                    <span className="ch-num">מבחן</span>
                    <span className="ch-title">מבחן יחידה {u.id}</span>
                  </div>
                  <div className="ch-tag">נפתח אחרי שכל פרקי היחידה יעברו בציון {PASS}.</div>
                  <div className="ch-foot"><span className="pill">נעול</span><span className="ch-score">—</span></div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {(!compact || allDone()) && (() => {
        const fb = examBest("final");
        const open = allDone();
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
              {open ? (
                <Link className="ch" to="/exam/final">
                  <div className="ch-top"><span className="ch-num">★</span><span className="ch-title">מבחן הסמכה — מומחה חומרים</span></div>
                  <div className="ch-tag">כל 22 הפרקים הושלמו. בהצלחה.</div>
                  <div className="ch-foot">
                    <span className={"pill" + (fb >= FINAL_PASS ? " gold" : "")}>פתוח</span>
                    <span className={"ch-score" + (fb >= FINAL_PASS ? " pass" : "")}>{fb ? `${fb}%` : "—"}</span>
                  </div>
                </Link>
              ) : (
                <div className="ch locked">
                  <span className="ch-lock">🔒</span>
                  <div className="ch-top"><span className="ch-num">★</span><span className="ch-title">מבחן הסמכה — מומחה חומרים</span></div>
                  <div className="ch-tag">נפתח לאחר השלמת כל 22 הפרקים.</div>
                  <div className="ch-foot"><span className="pill">נעול</span><span className="ch-score">—</span></div>
                </div>
              )}
            </div>
          </section>
        );
      })()}
    </>
  );
}
