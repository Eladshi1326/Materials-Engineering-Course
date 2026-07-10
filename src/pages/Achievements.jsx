import { BADGES, RANKS } from "../data/index.js";
import { useStore } from "../lib/store.js";
import { Bar } from "../components/Bits.jsx";
import { fmt } from "../lib/ui.js";

export default function Achievements() {
  const S = useStore();
  const pct = Math.round((S.badges.length / BADGES.length) * 100);

  return (
    <>
      <h1 className="h1">הישגים</h1>
      <p className="sub mt">{S.badges.length} מתוך {BADGES.length} הישגים נפתחו.</p>
      <div className="mt mb"><Bar pct={pct} /></div>

      <div className="badges mt">
        {BADGES.map((b) => {
          const on = S.badges.includes(b.id);
          return (
            <div className={"badge " + (on ? "on" : "off")} key={b.id}>
              <div className="ic">{b.ic}</div>
              <div className="t">{b.t}</div>
              <div className="d">{b.d}</div>
            </div>
          );
        })}
      </div>

      <div className="mt2">
        <div className="h2 mb">דרגות</div>
        <div className="sumlist">
          {RANKS.map((r) => {
            const on = S.xp >= r.xp;
            return (
              <div className="sumitem" key={r.name} style={{ opacity: on ? 1 : 0.5 }}>
                <span className="n">{r.icon}</span>
                <span>
                  <b>{r.name}</b> <span className="tiny">· {fmt(r.xp)} XP</span>
                  {on && <span className="pill ok" style={{ marginInlineStart: 8 }}>הושג</span>}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
