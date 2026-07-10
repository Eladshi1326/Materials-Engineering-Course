import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CHAPTERS } from "../data/index.js";

export default function Glossary() {
  const [q, setQ] = useState("");

  const all = useMemo(() => {
    const out = [];
    CHAPTERS.forEach((c) => c.terms.forEach((t) => out.push({ t, c })));
    return out.sort((a, b) => a.t.he.localeCompare(b.t.he, "he"));
  }, []);

  const needle = q.trim().toLowerCase();
  const list = needle
    ? all.filter((x) => (x.t.he + " " + x.t.en + " " + x.t.def).toLowerCase().includes(needle))
    : all;

  return (
    <>
      <h1 className="h1">מילון מונחים</h1>
      <p className="sub mt">{all.length} מונחים מכל הספר, עברית ואנגלית.</p>

      <div className="search mt">
        <span>🔍</span>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="חפש מונח…" autoFocus />
        {needle && <span className="tiny">{list.length} תוצאות</span>}
      </div>

      <div className="terms">
        {list.map((x, i) => (
          <div className="term" key={i}>
            <div className="he">{x.t.he}</div>
            <div className="en" dir="ltr">{x.t.en}</div>
            <div className="def">{x.t.def}</div>
            <div className="tiny" style={{ marginTop: 8 }}>
              <Link to={`/ch/${x.c.id}`}>פרק {x.c.id} · {x.c.title}</Link>
            </div>
          </div>
        ))}
      </div>
      {list.length === 0 && <div className="empty">לא נמצאו מונחים תואמים.</div>}
    </>
  );
}
