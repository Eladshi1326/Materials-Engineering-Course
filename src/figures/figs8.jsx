/* איורים מקוריים: כלל התערובות, מבני פסי אנרגיה, לולאת היסטרזיס, ספקטרום אלקטרומגנטי.
   כל העקומות המספריות (כלל התערובות, לולאת ההיסטרזיס) חושבו מראש בנוסחה הפיזיקלית ונשמרו כנתיבי SVG. */

export const FigRuleOfMixtures = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img">
    <g fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)">
      <path d="M95,290 L480,70 L472.3,91.94 L464.6,110.58 L456.9,126.61 L449.2,140.55 L441.5,152.77 L433.8,163.58 L426.1,173.21 L418.4,181.84 L410.7,189.62 L403,196.67 L395.3,203.08 L387.6,208.95 L379.9,214.33 L372.2,219.29 L364.5,223.87 L356.8,228.11 L349.1,232.05 L341.4,235.73 L333.7,239.16 L326,242.37 L318.3,245.38 L310.6,248.22 L302.9,250.88 L295.2,253.4 L287.5,255.78 L279.8,258.03 L272.1,260.16 L264.4,262.18 L256.7,264.11 L249,265.94 L241.3,267.68 L233.6,269.34 L225.9,270.93 L218.2,272.45 L210.5,273.9 L202.8,275.29 L195.1,276.63 L187.4,277.91 L179.7,279.13 L172,280.31 L164.3,281.45 L156.6,282.54 L148.9,283.59 L141.2,284.61 L133.5,285.59 L125.8,286.53 L118.1,287.44 L110.4,288.32 L102.7,289.18 L95,290 Z" fill="var(--acc2)" fillOpacity="0.08" />
      <line x1="95" y1="290" x2="95" y2="49" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <polygon points="95,38 90,49 100,49" fill="var(--txt-dim)" />
      <line x1="95" y1="290" x2="492" y2="290" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <polygon points="503,290 492,285 492,295" fill="var(--txt-dim)" />
      <line x1="95" y1="290" x2="480" y2="70" stroke="var(--acc)" strokeWidth="2.5" />
      <path d="M95,290 L102.7,289.18 L110.4,288.32 L118.1,287.44 L125.8,286.53 L133.5,285.59 L141.2,284.61 L148.9,283.59 L156.6,282.54 L164.3,281.45 L172,280.31 L179.7,279.13 L187.4,277.91 L195.1,276.63 L202.8,275.29 L210.5,273.9 L218.2,272.45 L225.9,270.93 L233.6,269.34 L241.3,267.68 L249,265.94 L256.7,264.11 L264.4,262.18 L272.1,260.16 L279.8,258.03 L287.5,255.78 L295.2,253.4 L302.9,250.88 L310.6,248.22 L318.3,245.38 L326,242.37 L333.7,239.16 L341.4,235.73 L349.1,232.05 L356.8,228.11 L364.5,223.87 L372.2,219.29 L379.9,214.33 L387.6,208.95 L395.3,203.08 L403,196.67 L410.7,189.62 L418.4,181.84 L426.1,173.21 L433.8,163.58 L441.5,152.77 L449.2,140.55 L456.9,126.61 L464.6,110.58 L472.3,91.94 L480,70" fill="none" stroke="var(--warn)" strokeWidth="2.5" />
      <circle cx="95" cy="290" r="4" fill="var(--txt)" />
      <circle cx="480" cy="70" r="4" fill="var(--txt)" />
      <text x="85" y="294" textAnchor="end" fontWeight="700">E_m</text>
      <text x="489" y="66" fontWeight="700">E_p</text>
      <text x="95" y="307" textAnchor="middle" fontSize="11" fill="var(--txt-faint)">0</text>
      <text x="480" y="307" textAnchor="middle" fontSize="11" fill="var(--txt-faint)">1</text>
      <text x="95" y="24" textAnchor="middle" fontSize="13" fontWeight="700">מודול E_c</text>
      <text x="300" y="313" textAnchor="middle" fontSize="13" fontWeight="700">שבר נפח V_p</text>
      <line x1="345" y1="335" x2="375" y2="335" stroke="var(--acc)" strokeWidth="2.5" />
      <text x="381" y="339" fontSize="11">גבול עליון (איזו-מעוות)</text>
      <line x1="345" y1="355" x2="375" y2="355" stroke="var(--warn)" strokeWidth="2.5" />
      <text x="381" y="359" fontSize="11">גבול תחתון (איזו-מאמץ)</text>
    </g>
  </svg>
);

export const FigBands = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img">
    <g fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)">
      <line x1="8" y1="322" x2="8" y2="48" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <polygon points="8,40 4,50 12,50" fill="var(--txt-dim)" />
      <text x="8" y="185" textAnchor="middle" fontSize="12" fill="var(--txt-dim)" transform="rotate(-90 8 185)">אנרגיה</text>

      <rect x="42" y="100" width="70" height="200" fill="none" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <rect x="42" y="200" width="70" height="100" fill="var(--acc)" fillOpacity="0.3" />
      <line x1="35" y1="200" x2="120" y2="200" stroke="var(--txt)" strokeWidth="1.2" strokeDasharray="4,3" />
      <text x="124" y="204" fontSize="12" fontWeight="700">E_F</text>
      <text x="77" y="344" textAnchor="middle" fontWeight="700">(א) מתכת</text>
      <text x="77" y="358" textAnchor="middle" fontSize="11">פס חלקית מלא</text>

      <rect x="167" y="80" width="40" height="160" fill="none" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <rect x="217" y="160" width="40" height="140" fill="none" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <rect x="167" y="200" width="40" height="40" fill="var(--acc)" fillOpacity="0.3" />
      <rect x="217" y="200" width="40" height="100" fill="var(--acc)" fillOpacity="0.3" />
      <line x1="160" y1="200" x2="265" y2="200" stroke="var(--txt)" strokeWidth="1.2" strokeDasharray="4,3" />
      <text x="270" y="204" fontSize="12" fontWeight="700">E_F</text>
      <text x="212" y="344" textAnchor="middle" fontWeight="700">(ב) מתכת</text>
      <text x="212" y="358" textAnchor="middle" fontSize="11">חפיפת פסים</text>

      <rect x="312" y="60" width="70" height="80" fill="none" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <rect x="312" y="215" width="70" height="85" fill="var(--acc)" fillOpacity="0.3" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <text x="347" y="104" textAnchor="middle" fontSize="11">פס הולכה</text>
      <text x="347" y="261" textAnchor="middle" fontSize="11">פס ערכיות</text>
      <text x="347" y="172" textAnchor="middle" fontSize="11" fontWeight="700">פער צר</text>
      <text x="347" y="186" textAnchor="middle" fontSize="11" fontWeight="700">{"(Eg<2eV)"}</text>
      <text x="347" y="344" textAnchor="middle" fontWeight="700">(ג) מוליך למחצה</text>

      <rect x="447" y="50" width="70" height="60" fill="none" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <rect x="447" y="265" width="70" height="55" fill="var(--acc)" fillOpacity="0.3" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <text x="482" y="84" textAnchor="middle" fontSize="11">פס הולכה</text>
      <text x="482" y="296" textAnchor="middle" fontSize="11">פס ערכיות</text>
      <text x="482" y="192" textAnchor="middle" fontSize="11" fontWeight="700">פער רחב</text>
      <text x="482" y="344" textAnchor="middle" fontWeight="700">(ד) מבודד</text>
    </g>
  </svg>
);

export const FigHysteresis = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img">
    <g fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)">
      <line x1="18" y1="175" x2="419" y2="175" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <polygon points="430,175 419,170 419,180" fill="var(--txt-dim)" />
      <text x="436" y="179" fontWeight="700">H</text>
      <line x1="225" y1="345" x2="225" y2="37" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <polygon points="225,26 220,37 230,37" fill="var(--txt-dim)" />
      <text x="230" y="22" fontWeight="700">B</text>
      <path d="M45,274.9 L49,274.89 L53,274.87 L57,274.85 L61,274.83 L65,274.8 L69,274.78 L73,274.74 L77,274.7 L81,274.66 L85,274.61 L89,274.55 L93,274.49 L97,274.41 L101,274.32 L105,274.22 L109,274.11 L113,273.97 L117,273.82 L121,273.65 L125,273.45 L129,273.22 L133,272.96 L137,272.66 L141,272.32 L145,271.92 L149,271.47 L153,270.96 L157,270.37 L161,269.7 L165,268.94 L169,268.07 L173,267.08 L177,265.96 L181,264.68 L185,263.24 L189,261.6 L193,259.76 L197,257.69 L201,255.37 L205,252.78 L209,249.89 L213,246.68 L217,243.14 L221,239.25 L225,235 L229,230.38 L233,225.39 L237,220.04 L241,214.35 L245,208.33 L249,202.04 L253,195.5 L257,188.77 L261,181.92 L265,175 L269,168.08 L273,161.23 L277,154.5 L281,147.96 L285,141.67 L289,135.65 L293,129.96 L297,124.61 L301,119.62 L305,115 L309,110.75 L313,106.86 L317,103.32 L321,100.11 L325,97.22 L329,94.63 L333,92.31 L337,90.24 L341,88.4 L345,86.76 L349,85.32 L353,84.04 L357,82.92 L361,81.93 L365,81.06 L369,80.3 L373,79.63 L377,79.04 L381,78.53 L385,78.08 L389,77.68 L393,77.34 L397,77.04 L401,76.78 L405,76.55 L405,75.1 L401,75.11 L397,75.13 L393,75.15 L389,75.17 L385,75.2 L381,75.22 L377,75.26 L373,75.3 L369,75.34 L365,75.39 L361,75.45 L357,75.51 L353,75.59 L349,75.68 L345,75.78 L341,75.89 L337,76.03 L333,76.18 L329,76.35 L325,76.55 L321,76.78 L317,77.04 L313,77.34 L309,77.68 L305,78.08 L301,78.53 L297,79.04 L293,79.63 L289,80.3 L285,81.06 L281,81.93 L277,82.92 L273,84.04 L269,85.32 L265,86.76 L261,88.4 L257,90.24 L253,92.31 L249,94.63 L245,97.22 L241,100.11 L237,103.32 L233,106.86 L229,110.75 L225,115 L221,119.62 L217,124.61 L213,129.96 L209,135.65 L205,141.67 L201,147.96 L197,154.5 L193,161.23 L189,168.08 L185,175 L181,181.92 L177,188.77 L173,195.5 L169,202.04 L165,208.33 L161,214.35 L157,220.04 L153,225.39 L149,230.38 L145,235 L141,239.25 L137,243.14 L133,246.68 L129,249.89 L125,252.78 L121,255.37 L117,257.69 L113,259.76 L109,261.6 L105,263.24 L101,264.68 L97,265.96 L93,267.08 L89,268.07 L85,268.94 L81,269.7 L77,270.37 L73,270.96 L69,271.47 L65,271.92 L61,272.32 L57,272.66 L53,272.96 L49,273.22 L45,273.45 Z" fill="var(--acc)" fillOpacity="0.05" stroke="var(--acc)" strokeWidth="2.2" />
      <path d="M225,175 L229.61,168.94 L234.22,162.92 L238.83,157 L243.44,151.2 L248.06,145.56 L252.67,140.12 L257.28,134.91 L261.89,129.95 L266.5,125.24 L271.11,120.82 L275.72,116.67 L280.33,112.81 L284.94,109.23 L289.56,105.92 L294.17,102.88 L298.78,100.1 L303.39,97.55 L308,95.24 L312.61,93.13 L317.22,91.23 L321.83,89.51 L326.44,87.96 L331.06,86.56 L335.67,85.31 L340.28,84.19 L344.89,83.18 L349.5,82.28 L354.11,81.47 L358.72,80.76 L363.33,80.11 L367.94,79.54 L372.56,79.03 L377.17,78.58 L381.78,78.18 L386.39,77.82 L391,77.5" fill="none" stroke="var(--acc2)" strokeWidth="1.6" strokeDasharray="5,4" />
      <line x1="250" y1="104" x2="245" y2="140" stroke="var(--acc2)" strokeWidth="1" strokeDasharray="2,2" />
      <text x="253" y="100" fontSize="10" fill="var(--acc2)">עקומת מגנוט ראשונית</text>
      <line x1="205" y1="115" x2="245" y2="115" stroke="var(--txt)" strokeWidth="1.3" strokeDasharray="3,3" />
      <text x="197" y="119" textAnchor="end" fontWeight="700">B_r</text>
      <line x1="185" y1="158" x2="185" y2="194" stroke="var(--txt)" strokeWidth="1.3" strokeDasharray="3,3" />
      <text x="185" y="209" textAnchor="middle" fontWeight="700">H_c</text>
      <circle cx="405" cy="75.1" r="3.2" fill="var(--txt)" />
      <text x="405" y="62" textAnchor="middle" fontWeight="700">+B_s</text>
      <circle cx="45" cy="274.9" r="3.2" fill="var(--txt)" />
      <text x="45" y="298" textAnchor="middle" fontWeight="700">−B_s</text>
      <rect x="428" y="228" width="124" height="130" fill="none" stroke="var(--line-strong)" strokeWidth="1.2" />
      <text x="490" y="246" textAnchor="middle" fontSize="11" fontWeight="700">רך מול קשה</text>
      <ellipse cx="465" cy="300" rx="13" ry="24" fill="var(--acc2)" fillOpacity="0.1" stroke="var(--acc2)" strokeWidth="1.5" />
      <ellipse cx="518" cy="300" rx="23" ry="22" fill="var(--acc3)" fillOpacity="0.1" stroke="var(--acc3)" strokeWidth="1.5" />
      <text x="465" y="340" textAnchor="middle" fontSize="11">רך</text>
      <text x="518" y="340" textAnchor="middle" fontSize="11">קשה</text>
    </g>
  </svg>
);

const EM_TICKS = [[520, "10³"], [424, "10⁰"], [328, "10⁻³"], [232, "10⁻⁶"], [136, "10⁻⁹"], [40, "10⁻¹²"]];
const EM_BANDS = [
  [40, 72, "קרני γ"], [72, 168, "קרני X"], [168, 219.3, "על-סגול"],
  [227, 328, "תת-אדום"], [328, 392, "מיקרוגל"], [392, 520, "גלי רדיו"]
];
const EM_RAINBOW = ["#8F00FF", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"];

export const FigEmSpectrum = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img">
    <g fontFamily="Heebo, sans-serif" fill="var(--txt)">
      {EM_TICKS.map(([x, label], i) => (
        <g key={i}>
          <line x1={x} y1="30" x2={x} y2="95" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3,3" />
          <text x={x} y="24" textAnchor="middle" fontSize="11" fill="var(--txt-faint)">{label}</text>
        </g>
      ))}
      <text x="280" y="14" textAnchor="middle" fontSize="11" fill="var(--txt-faint)">אורך גל λ (מטר)</text>
      {EM_BANDS.map(([x0, x1, name], i) => (
        <g key={i}>
          <rect x={x0} y="95" width={x1 - x0} height="40" fill={i % 2 ? "var(--acc2)" : "var(--acc)"} fillOpacity="0.12" stroke="var(--line-strong)" />
          <text x={(x0 + x1) / 2} y="150" textAnchor="middle" fontSize="11">{name}</text>
        </g>
      ))}
      <rect x="219.3" y="95" width="7.7" height="40" fill="var(--acc3)" fillOpacity="0.5" stroke="var(--acc3)" />
      <line x1="219.3" y1="135" x2="170" y2="215" stroke="var(--txt-faint)" strokeDasharray="3,3" />
      <line x1="227" y1="135" x2="330" y2="215" stroke="var(--txt-faint)" strokeDasharray="3,3" />
      {EM_RAINBOW.map((c, i) => (
        <rect key={i} x={170 + i * (160 / 7)} y="215" width={160 / 7 + 0.5} height="40" fill={c} />
      ))}
      <rect x="170" y="215" width="160" height="40" fill="none" stroke="var(--line-strong)" strokeWidth="1.3" />
      <text x="250" y="207" textAnchor="middle" fontSize="12" fontWeight="700">נראה (מוגדל)</text>
      <text x="170" y="272" fontSize="11">0.4μm (סגול)</text>
      <text x="330" y="272" textAnchor="end" fontSize="11">0.7μm (אדום)</text>
      <text x="280" y="352" textAnchor="middle" fontSize="13" fontWeight="700">E = hν עולה ←</text>
      <line x1="500" y1="366" x2="65" y2="366" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <polygon points="60,366 70,361 70,371" fill="var(--txt-dim)" />
    </g>
  </svg>
);
