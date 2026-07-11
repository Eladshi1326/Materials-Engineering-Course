/* איורי SVG מקוריים (מצוירים מאפס) — פרק 4-5: פגמים נקודתיים, נקעים, גבולות גרגיר ודיפוזיה. */

const arrowHead = (x1, y1, x2, y2, size, color) => {
  const ang = Math.atan2(y2 - y1, x2 - x1) + Math.PI;
  const s = 0.4;
  const hx1 = x2 + size * Math.cos(ang - s), hy1 = y2 + size * Math.sin(ang - s);
  const hx2 = x2 + size * Math.cos(ang + s), hy2 = y2 + size * Math.sin(ang + s);
  return <polygon points={`${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`} fill={color} />;
};

const Arrow = ({ x1, y1, x2, y2, color = "var(--txt-dim)", w = 1.4 }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w} />
    {arrowHead(x1, y1, x2, y2, 9, color)}
  </g>
);

export const FigPointDefects = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <text x="280" y="26" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)">פגמים נקודתיים בסריג</text>
    {[65, 125, 185, 245, 305].flatMap((y, r) =>
      [70, 140, 210, 280, 350, 420, 490].map((x, c) => {
        if (c === 2 && r === 1) return null;
        const inPocket = (c === 4 || c === 5) && (r === 2 || r === 3);
        const dx = inPocket ? (c === 4 ? -6 : 6) : 0;
        const dy = inPocket ? (r === 2 ? -6 : 6) : 0;
        return <circle key={`a${r}-${c}`} cx={x + dx} cy={y + dy} r="13" fill="var(--txt-dim)" fillOpacity="0.16" stroke="var(--txt-dim)" strokeWidth="1.4" />;
      })
    )}
    <circle cx="210" cy="125" r="13" fill="none" stroke="var(--txt-faint)" strokeWidth="1.7" strokeDasharray="4 3" />
    <circle cx="385" cy="215" r="10" fill="var(--bad)" fillOpacity="0.42" stroke="var(--bad)" strokeWidth="2" />
    <Arrow x1={270} y1={338} x2={214} y2={138} color="var(--txt-dim)" />
    <text x="270" y="352" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">משרה</text>
    <Arrow x1={385} y1={338} x2={385} y2={225} color="var(--bad)" />
    <text x="385" y="352" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--bad)">אטום בין-סריגי</text>
  </svg>
);

export const FigDislocations = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <text x="280" y="20" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--txt)">נקע קצה — חצי-מישור אטומים נוסף</text>
    {[55, 89, 123, 157, 191, 225].flatMap((y, r) => {
      const top = r < 3;
      const xs = top ? [55, 120, 185, 250, 335, 392, 451, 510] : [55, 120, 185, 250, 315, 380, 445, 510];
      const atoms = xs.map((x, c) => (
        <circle key={`a${r}-${c}`} cx={x} cy={y} r="12" fill="var(--txt-dim)" fillOpacity="0.14" stroke="var(--txt-dim)" strokeWidth="1.3" />
      ));
      return top
        ? [...atoms, <circle key={`e${r}`} cx="292" cy={y} r="12" fill="var(--acc)" fillOpacity="0.38" stroke="var(--acc)" strokeWidth="2" />]
        : atoms;
    })}
    <line x1="292" y1="172" x2="292" y2="278" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="3 3" />
    <text x="292" y="150" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="900" fill="var(--bad)" stroke="var(--bad)" strokeWidth="0.6">⊥</text>
    <Arrow x1={257} y1={288} x2={327} y2={288} color="var(--acc2)" w={2.2} />
    <text x="292" y="312" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">וקטור בורגרס b</text>
  </svg>
);

const GB_GRAINS = [
  { id: "gbGrain1", angle: 15, color: "var(--acc)", pts: "150,0 560,0 560,240 460,215 360,195 280,180 245,110 190,55" },
  { id: "gbGrain2", angle: 75, color: "var(--acc2)", pts: "560,240 560,360 0,360 0,300 90,270 190,230 280,180 360,195 460,215" },
  { id: "gbGrain3", angle: 135, color: "var(--acc3)", pts: "0,300 0,0 150,0 190,55 245,110 280,180 190,230 90,270" }
];
const GB_HATCH_YS = (() => {
  const ys = [];
  for (let y = -300; y <= 700; y += 15) ys.push(y);
  return ys;
})();

export const FigGrainBoundary = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <defs>
      {GB_GRAINS.map(g => (
        <clipPath id={g.id} key={g.id}><polygon points={g.pts} /></clipPath>
      ))}
    </defs>
    {GB_GRAINS.map(g => (
      <g key={g.id} clipPath={`url(#${g.id})`}>
        <g transform={`rotate(${g.angle} 280 180)`}>
          {GB_HATCH_YS.map((y, i) => (
            <line key={i} x1="-300" y1={y} x2="900" y2={y} stroke={g.color} strokeWidth="1.1" />
          ))}
        </g>
      </g>
    ))}
    <polyline points="280,180 245,110 190,55 150,0" fill="none" stroke="var(--bad)" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
    <polyline points="280,180 360,195 460,215 560,240" fill="none" stroke="var(--bad)" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
    <polyline points="280,180 190,230 90,270 0,300" fill="none" stroke="var(--bad)" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
    <text x="400" y="110" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)">גרגיר 1</text>
    <text x="190" y="300" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)">גרגיר 2</text>
    <text x="90" y="150" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)">גרגיר 3</text>
    <Arrow x1={480} y1={64} x2={425} y2={208} color="var(--bad)" w={1.8} />
    <text x="480" y="48" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--bad)">גבול גרגיר</text>
  </svg>
);

const DP_PATHS = [
  "M65.0,55.0 L80.0,86.7 L95.0,117.3 L110.0,146.0 L125.0,172.0 L140.0,194.8 L155.0,214.1 L170.0,230.0 L185.0,242.7 L200.0,252.4 L215.0,259.6 L230.0,264.9 L245.0,268.5 L260.0,270.9 L275.0,272.5 L290.0,273.6 L305.0,274.2 L320.0,274.5 L335.0,274.8 L350.0,274.9 L365.0,274.9 L380.0,275.0 L395.0,275.0 L410.0,275.0 L425.0,275.0 L440.0,275.0 L455.0,275.0 L470.0,275.0 L485.0,275.0 L500.0,275.0 L515.0,275.0",
  "M65.0,55.0 L80.0,72.2 L95.0,89.3 L110.0,106.0 L125.0,122.2 L140.0,137.9 L155.0,152.7 L170.0,166.8 L185.0,179.9 L200.0,192.1 L215.0,203.3 L230.0,213.4 L245.0,222.5 L260.0,230.6 L275.0,237.8 L290.0,244.0 L305.0,249.5 L320.0,254.1 L335.0,258.0 L350.0,261.4 L365.0,264.1 L380.0,266.4 L395.0,268.2 L410.0,269.7 L425.0,270.9 L440.0,271.9 L455.0,272.7 L470.0,273.2 L485.0,273.7 L500.0,274.0 L515.0,274.3",
  "M65.0,55.0 L80.0,65.3 L95.0,75.6 L110.0,85.9 L125.0,96.0 L140.0,106.0 L155.0,115.8 L170.0,125.4 L185.0,134.8 L200.0,143.9 L215.0,152.7 L230.0,161.3 L245.0,169.5 L260.0,177.4 L275.0,184.9 L290.0,192.1 L305.0,198.9 L320.0,205.4 L335.0,211.5 L350.0,217.2 L365.0,222.5 L380.0,227.5 L395.0,232.1 L410.0,236.4 L425.0,240.4 L440.0,244.0 L455.0,247.4 L470.0,250.4 L485.0,253.2 L500.0,255.8 L515.0,258.0"
];
const DP_COLORS = ["var(--acc)", "var(--acc2)", "var(--acc3)"];
const DP_LABELS = ["t₁", "t₂ > t₁", "t₃ > t₂"];
const DP_LABELPOS = [[290, 273.6], [290, 244.0], [290, 192.1]];

export const FigDiffusionProfile = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <text x="280" y="20" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--txt)">פרופיל ריכוז בדיפוזיה לא-יציבה</text>
    <Arrow x1={65} y1={310} x2={535} y2={310} color="var(--txt-dim)" w={1.6} />
    <Arrow x1={65} y1={310} x2={65} y2={35} color="var(--txt-dim)" w={1.6} />
    <line x1="65" y1="55" x2="525" y2="55" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="5 4" />
    <line x1="65" y1="275" x2="525" y2="275" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="5 4" />
    <text x="52" y="59" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">Cₛ</text>
    <text x="52" y="279" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">C₀</text>
    {DP_PATHS.map((d, i) => <path key={i} d={d} fill="none" stroke={DP_COLORS[i]} strokeWidth="2.4" />)}
    {DP_LABELPOS.map(([x, y], i) => (
      <text key={i} x={x} y={y - 12} textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill={DP_COLORS[i]}>{DP_LABELS[i]}</text>
    ))}
    <text x="520" y="333" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">עומק x</text>
    <text x="18" y="175" textAnchor="middle" direction="rtl" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)" transform="rotate(-90 18 175)">ריכוז C</text>
  </svg>
);
