/* איורי מדע מקוריים (SVG) — פרק 3: מבנה HCP, אינדקסי מילר, עקיפת רנטגן (בראג), מבנה אמורפי מול גבישי.
   שרטוטים סכמטיים מקוריים — לא הועתקו מאיור בספר. */

const pointsStr = (pts) => pts.map((p) => p[0] + "," + p[1]).join(" ");

/* ---------- FigHcp ---------- */
const hcpTop = [[273,100],[234,128.4],[156,128.4],[117,100],[156,71.6],[234,71.6]];
const hcpBottom = [[273,278],[234,306.4],[156,306.4],[117,278],[156,249.6],[234,249.6]];
const hcpB = [[234,198.5],[156,198.5],[195,170.1]];

export const FigHcp = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>מבנה HCP — ריצוף שכבות ABAB</title>
    {hcpTop.map((p, i) => (
      <line key={"edge" + i} x1={p[0]} y1={p[1]} x2={hcpBottom[i][0]} y2={hcpBottom[i][1]} stroke="var(--line-strong)" strokeWidth="1.4" />
    ))}
    <polygon points={pointsStr(hcpTop)} fill="var(--acc)" fillOpacity="0.08" stroke="var(--txt-dim)" strokeWidth="1.6" />
    <polygon points={pointsStr(hcpBottom)} fill="var(--acc)" fillOpacity="0.04" stroke="var(--txt-dim)" strokeWidth="1.6" />
    <polygon points={pointsStr(hcpB)} fill="none" stroke="var(--acc3)" strokeWidth="1.2" strokeDasharray="4 3" />
    {hcpTop.map((p, i) => (<circle key={"t" + i} cx={p[0]} cy={p[1]} r="8" fill="var(--acc)" stroke="var(--txt)" strokeWidth="1" />))}
    {hcpBottom.map((p, i) => (<circle key={"bo" + i} cx={p[0]} cy={p[1]} r="8" fill="var(--acc)" stroke="var(--txt)" strokeWidth="1" />))}
    {hcpB.map((p, i) => (<circle key={"mi" + i} cx={p[0]} cy={p[1]} r="8.5" fill="var(--acc3)" stroke="var(--txt)" strokeWidth="1" />))}

    <line x1="90" y1="100" x2="90" y2="278" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <line x1="84" y1="100" x2="96" y2="100" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <line x1="84" y1="278" x2="96" y2="278" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <text x="72" y="193" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--txt)" textAnchor="middle">c</text>

    <line x1="156" y1="320" x2="234" y2="320" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <line x1="156" y1="314" x2="156" y2="326" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <line x1="234" y1="314" x2="234" y2="326" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <text x="195" y="340" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--txt)" textAnchor="middle">a</text>

    <line x1="273" y1="100" x2="450" y2="100" stroke="var(--txt-faint)" strokeWidth="1" strokeDasharray="2 3" />
    <line x1="234" y1="193" x2="450" y2="193" stroke="var(--txt-faint)" strokeWidth="1" strokeDasharray="2 3" />
    <line x1="273" y1="278" x2="450" y2="278" stroke="var(--txt-faint)" strokeWidth="1" strokeDasharray="2 3" />
    <text x="465" y="82" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-faint)" textAnchor="middle">⋮</text>
    <text x="465" y="106" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc)" fontWeight="700" textAnchor="middle">A</text>
    <text x="465" y="198" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc3)" fontWeight="700" textAnchor="middle">B</text>
    <text x="465" y="283" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc)" fontWeight="700" textAnchor="middle">A</text>
    <text x="465" y="304" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-faint)" textAnchor="middle">⋮</text>
    <text x="465" y="322" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle">(ABAB…)</text>

    <text x="280" y="352" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" textAnchor="middle">c/a = 1.633 (אידיאלי)</text>
  </svg>
);

/* ---------- FigMiller ---------- */
const mO=[255,250], mX1=[163,304], mY1=[405,250], mZ1=[255,100];
const mXY=[313,304], mXZ=[163,154], mYZ=[405,100], mXYZ=[313,154];
const millerSolid = [[mO,mX1],[mX1,mXY],[mXY,mY1],[mY1,mO],[mZ1,mXZ],[mYZ,mZ1],[mO,mZ1],[mX1,mXZ],[mY1,mYZ]];
const millerHidden = [[mXZ,mXYZ],[mXYZ,mYZ],[mXY,mXYZ]];
const millerCorners = [mO,mX1,mY1,mZ1,mXY,mXZ,mYZ,mXYZ];
const millerPlane = [mX1,mXZ,mYZ,mY1];

export const FigMiller = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>אינדקסי מילר — מישור (110) וכיוון [111] בתא קובייתי</title>
    <defs>
      <marker id="millerAxisHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--txt-dim)" />
      </marker>
      <marker id="millerDirHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--bad)" />
      </marker>
    </defs>

    {millerHidden.map((e, i) => (<line key={"h" + i} x1={e[0][0]} y1={e[0][1]} x2={e[1][0]} y2={e[1][1]} stroke="var(--txt-faint)" strokeWidth="1.3" strokeDasharray="4 3" />))}
    {millerSolid.map((e, i) => (<line key={"s" + i} x1={e[0][0]} y1={e[0][1]} x2={e[1][0]} y2={e[1][1]} stroke="var(--txt-dim)" strokeWidth="1.5" />))}

    <polygon points={pointsStr(millerPlane)} fill="var(--acc)" fillOpacity="0.2" stroke="var(--acc)" strokeWidth="1.4" />
    <text x="284" y="197" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--acc)" fontWeight="700" textAnchor="middle">(110)</text>

    {millerCorners.map((p, i) => (<circle key={"c" + i} cx={p[0]} cy={p[1]} r="2.6" fill="var(--txt-faint)" />))}

    <line x1={mO[0]} y1={mO[1]} x2="137" y2="319" stroke="var(--txt)" strokeWidth="1.6" markerEnd="url(#millerAxisHead)" />
    <line x1={mO[0]} y1={mO[1]} x2="447" y2="250" stroke="var(--txt)" strokeWidth="1.6" markerEnd="url(#millerAxisHead)" />
    <line x1={mO[0]} y1={mO[1]} x2="255" y2="58" stroke="var(--txt)" strokeWidth="1.6" markerEnd="url(#millerAxisHead)" />
    <text x="118" y="333" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--txt)">x</text>
    <text x="453" y="246" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--txt)">y</text>
    <text x="261" y="52" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--txt)">z</text>

    <line x1={mO[0]} y1={mO[1]} x2={mXYZ[0]} y2={mXYZ[1]} stroke="var(--bad)" strokeWidth="2.2" markerEnd="url(#millerDirHead)" />
    <text x="321" y="139" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--bad)" fontWeight="700">[111]</text>

    <circle cx={mO[0]} cy={mO[1]} r="3" fill="var(--txt)" />
  </svg>
);

/* ---------- FigBragg ---------- */
const braggXs = [70,146,222,298,374,450];
const braggY1 = 150, braggY2 = 224;
const braggLeftArc = "M200 224 L200.1 221.8 L200.5 219.6 L201 217.4 L201.8 215.3 L202.8 213.3 L204 211.4";
const braggRightArc = "M244 224 L243.9 221.8 L243.5 219.6 L243 217.4 L242.2 215.3 L241.2 213.3 L240 211.4";

export const FigBragg = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>עקיפת קרני רנטגן ממישורים גבישיים — חוק בראג</title>
    <defs>
      <marker id="brRayHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--txt-dim)" />
      </marker>
      <marker id="brDimHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="var(--txt-dim)" />
      </marker>
    </defs>

    <line x1="20" y1={braggY1} x2="520" y2={braggY1} stroke="var(--line-strong)" strokeWidth="1.4" />
    <line x1="20" y1={braggY2} x2="520" y2={braggY2} stroke="var(--line-strong)" strokeWidth="1.4" />

    <line x1="25" y1={braggY1} x2="25" y2={braggY2} stroke="var(--txt-dim)" strokeWidth="1.3" markerStart="url(#brDimHead)" markerEnd="url(#brDimHead)" />
    <text x="12" y="191" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--txt)" textAnchor="middle">d</text>

    {braggXs.map((x, i) => (<circle key={"r1-" + i} cx={x} cy={braggY1} r="7.5" fill="var(--acc2)" stroke="var(--txt)" strokeWidth="1" />))}
    {braggXs.map((x, i) => (<circle key={"r2-" + i} cx={x} cy={braggY2} r="7.5" fill="var(--acc2)" stroke="var(--txt)" strokeWidth="1" />))}

    <line x1="122.1" y1="80" x2="222" y2="150" stroke="var(--txt-dim)" strokeWidth="1.6" markerEnd="url(#brRayHead)" />
    <line x1="222" y1="150" x2="321.9" y2="80" stroke="var(--txt-dim)" strokeWidth="1.6" markerEnd="url(#brRayHead)" />
    <line x1="33.5" y1="92" x2="222" y2="224" stroke="var(--txt-dim)" strokeWidth="1.6" markerEnd="url(#brRayHead)" />
    <line x1="222" y1="224" x2="321.9" y2="154" stroke="var(--txt-dim)" strokeWidth="1.6" markerEnd="url(#brRayHead)" />

    <line x1="222" y1="150" x2="187.2" y2="199.7" stroke="var(--txt-faint)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="222" y1="150" x2="256.8" y2="199.7" stroke="var(--txt-faint)" strokeWidth="1" strokeDasharray="3 3" />
    <polyline points="187.2,199.7 222,224 256.8,199.7" fill="none" stroke="var(--bad)" strokeWidth="2.8" strokeLinecap="round" />

    <path d={braggLeftArc} fill="none" stroke="var(--txt-dim)" strokeWidth="1.3" />
    <path d={braggRightArc} fill="none" stroke="var(--txt-dim)" strokeWidth="1.3" />
    <text x="180" y="214" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)" textAnchor="middle">θ</text>
    <text x="264" y="214" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)" textAnchor="middle">θ</text>

    <text x="280" y="256" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--bad)" textAnchor="middle">הפרש דרך = 2d·sinθ</text>
    <text x="545" y="28" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--txt)" fontWeight="700" textAnchor="end">nλ = 2d·sinθ</text>
  </svg>
);

/* ---------- FigAmorphous ---------- */
const amCryst = [[53,93.4],[93,93.4],[133,93.4],[173,93.4],[213,93.4],[73,128],[113,128],[153,128],[193,128],[233,128],[53,162.7],[93,162.7],[133,162.7],[173,162.7],[213,162.7],[73,197.3],[113,197.3],[153,197.3],[193,197.3],[233,197.3],[53,232],[93,232],[133,232],[173,232],[213,232],[73,266.6],[113,266.6],[153,266.6],[193,266.6],[233,266.6]];
const amRand = [[361.8,220.4],[483.4,170.3],[391.3,235.1],[470.5,246.9],[387.8,142.8],[445.7,263],[381.9,104.1],[460.4,122],[383.7,186.1],[327.4,233.7],[328.4,73.8],[340.7,142.5],[355,94.5],[408.8,80.4],[347.5,188.3],[351.1,250.1],[412.7,117],[459.3,203],[487.1,288.6],[507.9,221.1],[444,290.1],[434,226.1],[495.4,88.8],[423.5,166.1],[333.5,288.7],[512.5,168],[398.6,268.8],[331.7,111.9],[502.1,140.4],[496.2,257.5]];

export const FigAmorphous = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>סדר גבישי מול מבנה אמורפי</title>
    <rect x="28" y="50" width="230" height="258" rx="10" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" />
    <rect x="302" y="50" width="230" height="258" rx="10" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" />
    <text x="143" y="30" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)" textAnchor="middle">גבישי</text>
    <text x="143" y="45" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle">סדר ארוך-טווח</text>
    <text x="417" y="30" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)" textAnchor="middle">אמורפי</text>
    <text x="417" y="45" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle">ללא סדר ארוך-טווח</text>
    {amCryst.map((p, i) => (<circle key={"cr" + i} cx={p[0]} cy={p[1]} r="7" fill="var(--acc)" fillOpacity="0.85" stroke="var(--txt)" strokeWidth="1" />))}
    {amRand.map((p, i) => (<circle key={"am" + i} cx={p[0]} cy={p[1]} r="7" fill="var(--acc)" fillOpacity="0.85" stroke="var(--txt)" strokeWidth="1" />))}
  </svg>
);
