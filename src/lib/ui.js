/* toast + confetti + עזרי אקראיות — ללא תלות ב-React */

const listeners = new Set();
let seq = 0;

export function onToast(fn) { listeners.add(fn); return () => listeners.delete(fn); }
export function toast(msg, cls = "") {
  seq += 1;
  listeners.forEach((f) => f({ id: seq, msg, cls }));
}

const fxListeners = new Set();
export function onConfetti(fn) { fxListeners.add(fn); return () => fxListeners.delete(fn); }
export function confetti() { fxListeners.forEach((f) => f()); }

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const sample = (arr, n) => shuffle(arr).slice(0, Math.min(n, arr.length));

export const fmt = (n) => Number(n).toLocaleString("en-US");

export const mmss = (secs) => `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;

/** ציור קונפטי על קנבס */
export function runConfetti(canvas) {
  if (typeof window === "undefined") return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext && canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cols = ["#6366f1", "#22d3ee", "#a855f7", "#fbbf24", "#22c55e"];
  const ps = Array.from({ length: 110 }, () => ({
    x: window.innerWidth / 2 + (Math.random() - 0.5) * 320,
    y: window.innerHeight / 3 + (Math.random() - 0.5) * 80,
    vx: (Math.random() - 0.5) * 9,
    vy: Math.random() * -11 - 3,
    s: Math.random() * 7 + 3,
    c: cols[Math.floor(Math.random() * cols.length)],
    r: Math.random() * 6,
    vr: (Math.random() - 0.5) * 0.3,
    a: 1
  }));
  let frames = 0;
  (function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    ps.forEach((p) => {
      p.vy += 0.34; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      if (frames > 60) p.a -= 0.022;
      if (p.a > 0 && p.y < canvas.height + 40) alive = true;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.a);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    frames += 1;
    if (alive && frames < 190) requestAnimationFrame(loop);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  })();
}
