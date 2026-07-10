import { useState } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import { byId, PASS } from "../data/index.js";
import { useStore, chap, chapterProgress, isUnlocked, isDone, markRead } from "../lib/store.js";
import { Ring } from "../components/Bits.jsx";
import { toast } from "../lib/ui.js";

const TABS = [
  ["lesson", "השיעור"],
  ["formulas", "נוסחאות"],
  ["terms", "מונחים"],
  ["summary", "סיכום"],
  ["pitfalls", "טעויות נפוצות"],
  ["worked", "דוגמאות פתורות"]
];

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
          <div className="prose" dangerouslySetInnerHTML={{ __html: s.html }} />
          {s.analogy && <div className="analogy"><b>אנלוגיה:</b> {s.analogy}</div>}

          <div className="helpbar">
            <button className="btn btn-sm btn-ghost" onClick={() => setSimple((v) => !v)}>
              {simple ? "סגור הסבר" : "🤔 עדיין לא הבנתי — הסבר אחרת"}
            </button>
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

          {simple && (
            <div className="simple-box">
              <div className="lbl">בפשטות</div>
              <div className="prose" dangerouslySetInnerHTML={{ __html: s.simple }} />
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
        <div className="fml" dir="ltr">{f.expr}</div>
        {f.where?.length > 0 && (
          <div className="where">
            {f.where.map((w, k) => (
              <div key={k}><span className="s" dir="ltr">{w.sym}</span><span className="d">{w.desc}</span></div>
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

  if (!isUnlocked(chId)) {
    return (
      <>
        <div className="lock-note">
          🔒
          <div>
            <b>הפרק נעול.</b>
            <div className="tiny">כדי להיכנס לפרק {chId}, עבור קודם את מבחן פרק {chId - 1} בציון {PASS} לפחות.</div>
          </div>
        </div>
        <Link className="btn btn-primary" to={`/ch/${chId - 1}`}>אל פרק {chId - 1}</Link>{" "}
        <Link className="btn" to="/map">חזרה למסלול</Link>
      </>
    );
  }

  const p = chap(chId);
  const prog = chapterProgress(chId);
  const done = isDone(chId);
  const prev = byId(chId - 1);
  const next = byId(chId + 1);
  const chal = c.challenge?.length ? c.challenge : c.quiz.filter((q) => q.level === "hard");

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
          <span className="d">14 שאלות · ציון מעבר {PASS} · פותח את הפרק הבא</span>
          {p.quizBest > 0 && <span className="best">שיא: {p.quizBest}% ({p.attempts} נסיונות)</span>}
        </Link>
        <Link className="act" to={`/ch/${chId}/play/cards`}>
          <span className="ico">▤</span>
          <span className="t">כרטיסיות</span>
          <span className="d">{c.flashcards.length} כרטיסים לשינון מהיר</span>
          {p.cards && <span className="best">✓ הושלם</span>}
        </Link>
        <Link className="act" to={`/ch/${chId}/play/match`}>
          <span className="ico">⇄</span>
          <span className="t">משחק התאמה</span>
          <span className="d">{c.matching.length} זוגות · נגד השעון</span>
          {p.match > 0 && <span className="best">שיא: {p.match} נק׳</span>}
        </Link>
        {chal.length > 0 && (
          <Link className="act" to={`/ch/${chId}/play/challenge`}>
            <span className="ico">⚡</span>
            <span className="t">אתגר מהיר</span>
            <span className="d">{chal.length} שאלות קשות · 30 שניות לשאלה · 3 חיים</span>
            {p.chal > 0 && <span className="best">שיא: {p.chal} נק׳</span>}
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
        {next && (done
          ? <Link className="btn btn-primary" to={`/ch/${next.id}`}>פרק {next.id}: {next.title} ←</Link>
          : <button className="btn" disabled title="עבור את מבחן הפרק כדי להמשיך">🔒 פרק {next.id} נעול</button>
        )}
      </div>
    </>
  );
}
