import { useEffect, useRef, useState } from "react";
import { onToast, onConfetti, runConfetti } from "../lib/ui.js";

/* ---------------------------------------------------------------- Ring */
export function Ring({ pct, size = 170, color }) {
  const r = size / 2 - 12;
  const c = 2 * Math.PI * r;
  const off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="var(--line-strong)" strokeWidth="11" fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={color || (pct >= 75 ? "var(--ok)" : "var(--bad)")}
          strokeWidth="11" fill="none" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off}
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(.2,.8,.2,1)" }}
        />
      </svg>
      <div className="val">{Math.round(pct)}%</div>
    </div>
  );
}

/* ---------------------------------------------------------------- Bar */
export const Bar = ({ pct, ok }) => (
  <div className={"pbar" + (ok ? " ok" : "")}>
    <i style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
  </div>
);

/* ---------------------------------------------------------------- Toaster */
export function Toaster() {
  const [t, setT] = useState(null);
  useEffect(() => onToast((x) => setT(x)), []);
  useEffect(() => {
    if (!t) return undefined;
    const id = setTimeout(() => setT(null), 2600);
    return () => clearTimeout(id);
  }, [t]);
  if (!t) return null;
  return <div className={"toast " + t.cls} key={t.id}>{t.msg}</div>;
}

/* ---------------------------------------------------------------- Confetti */
export function ConfettiCanvas() {
  const ref = useRef(null);
  useEffect(() => onConfetti(() => ref.current && runConfetti(ref.current)), []);
  return <canvas className="fx" ref={ref} />;
}

/* ---------------------------------------------------------------- Stat */
export const Stat = ({ ico, v, k }) => (
  <div className="stat">
    <div className="ico">{ico}</div>
    <div className="v">{v}</div>
    <div className="k">{k}</div>
  </div>
);

/* ---------------------------------------------------------------- Empty */
export const Empty = ({ children }) => <div className="empty">{children}</div>;
