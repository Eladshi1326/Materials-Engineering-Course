import { useEffect, useRef, useState } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import { byId, PASS } from "../data/index.js";
import { useStore, chap, chapterProgress, isDone, markRead } from "../lib/store.js";
import { Ring } from "../components/Bits.jsx";
import { toast } from "../lib/ui.js";
import { Fml, Sym, typesetProse } from "../lib/math.jsx";
import { SectionFigs } from "../figures/registry.jsx";

const TABS = [
  ["lesson", "השיעור"],
  ["formulas", "נוסחאות"],
  ["terms", "מונחים"],
  ["summary", "סיכום"],
  ["pitfalls", "טעויות נפוצות"],
  ["worked", "דוגמאות פתורות"]
];

/* הזרקת HTML + שדרוג נוסחאות לרינדור ספר */
function Prose({ html }) {
  const ref = useRef(null);
  useEffect(() => { typesetProse(ref.current); }, [html]);
  return <div className="prose" ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
}

/* ------------------------------------------------------------------ section */
function Section({ c, s, chId }) {
  const [open, setOpen] = useState(false);
  const [simple, setSimple] = useState(false);
  const p = chap(chId);
  const read = p.read.includes(s.id);

  return (
    <section className={"sec" + (open ? " open" : "")}>
      <div className="sec-head" onClick={() => setOpen((o) => !o)}>
        <span className="sec-id">{s.id}</span>
        <span className="sec-title">{s.title}</span>
        {read && <span className="sec-read">✓ נקרא</span>}
        <span className="sec-chev">▾</span>
      </div>

      {open && (
        <div className="sec-body">
          <Prose html={s.html} />
          <SectionFigs secId={s.id} />
          {s.analogy && <div className="analogy"><b>אנלוגיה:</b> {s.analogy}</div>}

          <div className="helpbar">
            {s.simple && (
              <button className="btn btn-sm btn-ghost" onClick={() => setSimple((v) => !v)}>
                {simple ? "סגור הסבר" : "🤔 עדיין לא הבנתי — הסבר אחרת"}
              </button>
            )}
            {!read && (
              <button
                className="btn btn-sm"
                onClick={() => {
                  markRead(chId, s.id);
                  if (p.read.length === c.sections.length) toast("סיימת לקרוא את כל הפרק — זמן למבחן ◎", "gold");
                }}
              >
                סמן כנקרא · +10 XP
              </button>
            )}
          </div>

          {simple && s.simple && (
            <div className="simple-box">
              <div className="lbl">בפשטות</div>
              <Prose html={s.simple} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ tabs */
function Lesson({ c, chId }) {
  const p = chap(chId);
  return (
    <>
      <div className="row wrap mb">
        <div className="tiny">קראת {p.read.length} מתוך {c.sections.length} סעיפים</div>
      </div>
      {c.sections.map((s) => <Section key={s.id} c={c} s={s} chId={chId} />)}
    </>
  );
}

const Formulas = ({ c }) => (
  <>
    {c.formulas.map((f, i) => (
      <div className="fcard" key={i}>
        <div className="nm">{f.name}</div>
        <Fml tex={f.latex} plain={f.expr} />
        {f.where?.length > 0 && (
          <div className="where">
            {f.where.map((w, k) => (
              <div key={k}><Sym>{w.sym}</Sym><span className="d">{w.desc}</span></div>
            ))}
          </div>
        )}
        {f.note && <div className="note">💡 {f.note}</div>}
      </div>
    ))}
  </>
);

function Terms({ c }) {
  const [q, setQ] = useState("");
  const list = c.terms.filter((t) =>
    (t.he + " " + t.en + " " + t.def).toLowerCase().includes(q.trim().toLowerCase())
  );
  return (
    <>
      <div className="search">
        <span>🔍</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="חפש מונח בעברית או באנגלית…" />
      </div>
      <div className="terms">
        {list.map((t, i) => (
          <div className="term" key={i}>
            <div className="he">{t.he}</div>
            <div className="en" dir="ltr">{t.en}</div>
            <div className="def">{t.def}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const Summary = ({ c }) => (
  <div className="sumlist">
    {c.summary.map((s, i) => (
      <div className="sumitem" key={i}><span className="n">{String(i + 1).padStart(2, "0")}</span><span>{s}</span></div>
    ))}
  </div>
);

const Pitfalls = ({ c }) => (
  <div className="pit">
    {c.pitfalls.map((p, i) => (
      <div className="pitrow" key={i}>
        <div className="w">✗ {p.wrong}</div>
        <div className="r">✓ {p.right}</div>
      </div>
    ))}
  </div>
);

function Worked({ c }) {
  const [open, setOpen] = useState({});
  return (
    <>
      {c.worked.map((w, i) => (
        <div className="worked" key={i}>
          <div className="q">דוגמה {i + 1}: {w.q}</div>
          <button className="btn btn-sm reveal" onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}>
            {open[i] ? "הסתר פתרון" : "הצג פתרון"}
          </button>
          {open[i] && (
            <div>
              <ol>{w.steps.map((s, k) => <li key={k}>{s}</li>)}</ol>
              <div className="ans">תשובה: {w.answer}</div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ page */
export default function Chapter() {
  const { id, tab = "lesson" } = useParams();
  const chId = Number(id);
  useStore();
  const c = byId(chId);

  if (!c) return <div className="empty">הפרק לא נמצא.</div>;

  const p = chap(chId);
  const prog = chapterProgress(chId);
  const done = isDone(chId);
  const prev = byId(chId - 1);
  const next = byId(chId + 1);
  const hasDrill = c.formulas.length >= 4;

  return (
    <>
      <div className="ch-hero">
        <div className="crumb"><Link to="/map">מסלול</Link> ← יחידה {c.unit} ← פרק {c.id}</div>
        <div className="row wrap">
          <div style={{ flex: 1, minWidth: 240 }}>
            <h1 className="h1">{c.title}</h1>
            <div className="tiny mono" style={{ marginTop: 4 }}>{c.titleEn} · Callister pp. {c.pages}</div>
            <p className="sub" style={{ marginTop: 10, maxWidth: "65ch" }}>{c.tagline}</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Ring pct={prog} size={120} color="var(--acc)" />
            <div className="tiny">התקדמות בפרק</div>
          </div>
        </div>
        <div className="row wrap" style={{ marginTop: 16, gap: 8 }}>
          <span className="pill">⏱ {c.minutes || 40} דקות</span>
          <span className="pill">{c.sections.length} סעיפים</span>
          <span className="pill">{c.terms.length} מונחים</span>
          <span className="pill">{c.quiz.length} שאלות</span>
          {done && <span className="pill ok">✓ הושלם · {p.quizBest}%</span>}
        </div>
      </div>

      {tab === "lesson" && (
        <div className="card pad mb">
          <div className="h3 mb">מטרות הלמידה</div>
          <div className="sumlist">
            {c.objectives.map((o, i) => (
              <div className="sumitem" key={i}><span className="n">{i + 1}</span><span>{o}</span></div>
            ))}
          </div>
        </div>
      )}

      <div className="acts mb">
        <Link className="act hero-act" to={`/ch/${chId}/play/quiz`}>
          <span className="ico">◎</span>
          <span className="t">מבחן הפרק</span>
          <span className="d">14 שאלות · ציון מעבר {PASS} · עם רמזים והסברים</span>
          {p.quizBest > 0 && <span className="best">שיא: {p.quizBest}% ({p.attempts} נסיונות)</span>}
        </Link>
        <Link className="act" to={`/ch/${chId}/play/practice`}>
          <span className="ico">⇗</span>
          <span className="t">תרגול מדורג</span>
          <span className="d">קל ← בינוני ← קשה · תיאוריה + חישובים · בלי טיימר</span>
          {p.prac > 0 && <span className="best">שיא: {p.prac}%</span>}
        </Link>
        {c.flashcards.length > 0 && (
          <Link className="act" to={`/ch/${chId}/play/cards`}>
            <span className="ico">▤</span>
            <span className="t">כרטיסיות</span>
            <span className="d">{c.flashcards.length} כרטיסים לשינון מהיר</span>
            {p.cards && <span className="best">✓ הושלם</span>}
          </Link>
        )}
        {hasDrill && (
          <Link className="act" to={`/ch/${chId}/play/formula`}>
            <span className="ico">ƒ</span>
            <span className="t">שליטה בנוסחאות</span>
            <span className="d">{c.formulas.length} נוסחאות · זהה, התאם וזכור</span>
            {p.fdrill > 0 && <span className="best">שיא: {p.fdrill} נק׳</span>}
          </Link>
        )}
      </div>

      <div className="tabs">
        {TABS.map(([key, label]) => (
          <NavLink
            key={key}
            to={`/ch/${chId}/${key}`}
            className={() => "tab" + (tab === key ? " on" : "")}
          >
            {label}
            {key === "lesson" && p.read.length === c.sections.length && <i className="dotmark" />}
          </NavLink>
        ))}
      </div>

      <div>
        {tab === "lesson" && <Lesson c={c} chId={chId} />}
        {tab === "formulas" && <Formulas c={c} />}
        {tab === "terms" && <Terms c={c} />}
        {tab === "summary" && <Summary c={c} />}
        {tab === "pitfalls" && <Pitfalls c={c} />}
        {tab === "worked" && <Worked c={c} />}
      </div>

      <div className="row wrap mt2" style={{ gap: 10 }}>
        {prev && <Link className="btn" to={`/ch/${prev.id}`}>→ פרק {prev.id}</Link>}
        <div className="spacer" />
        {next && (
          <div style={{ textAlign: "end" }}>
            <Link className={"btn" + (done ? " btn-primary" : "")} to={`/ch/${next.id}`}>
              פרק {next.id}: {next.title} ←
            </Link>
            {!done && <div className="tiny" style={{ marginTop: 6 }}>מומלץ לעבור קודם את מבחן הפרק ({PASS}+)</div>}
          </div>
        )}
      </div>
    </>
  );
}
