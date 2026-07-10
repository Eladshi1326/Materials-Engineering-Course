import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useStore, rankOf, setSetting } from "../lib/store.js";
import { fmt } from "../lib/ui.js";

const LINKS = [
  ["/", "לוח בקרה"],
  ["/map", "מסלול"],
  ["/glossary", "מילון"],
  ["/achievements", "הישגים"],
  ["/settings", "הגדרות"]
];

export default function TopBar() {
  const S = useStore();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const r = rankOf(S.xp);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className="topbar">
        <Link className="brand" to="/">
          <span className="brand-mark">⬡</span>
          <span className="brand-txt">מעבדת<b>החומרים</b></span>
        </Link>

        <div className="topbar-mid">
          <div className="rank-chip" title={r.next ? `${fmt(r.next.xp - S.xp)} XP לדרגה הבאה` : "דרגת שיא"}>
            <span className="lvl">{r.rank.icon}</span>
            <span className="meta">
              <span className="nm">{r.rank.name}</span>
              <span className="xp">{fmt(S.xp)} XP</span>
            </span>
            <span className="bar"><i style={{ width: `${r.pct}%` }} /></span>
            {S.streak.count > 0 && <span className="flame">🔥 {S.streak.count}</span>}
          </div>
        </div>

        <nav className="topnav">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => (isActive ? "on" : "")}>
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="icon-btn"
          title="מצב תצוגה"
          onClick={() => setSetting("theme", S.settings.theme === "dark" ? "light" : "dark")}
        >
          ◐
        </button>
        <button className="icon-btn burger" aria-label="תפריט" onClick={() => setOpen((o) => !o)}>☰</button>
      </header>

      {open && (
        <div className="mobile-menu">
          {LINKS.map(([to, label]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </div>
      )}
    </>
  );
}
