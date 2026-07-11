/* איורי SVG מקוריים — פרק 5-6: גרף ארניוס, עקומת מאמץ-מעוות, חוסן/קשיחות-שבר, מאמץ אמיתי מול הנדסי
   (לא הועתקו מאיור בספר). גיאומטריית עקומת המאמץ-מעוות (קטע אלסטי ליניארי + עלייה בחוק-חזקה + ירידה
   מתונה) חושבה בסקריפט Node חד-פעמי ומוטמעת כאן כנתיב סטטי; שלושת האיורים שמשתמשים בה חולקים את
   אותם קבועים כדי שהעקומה תיראה זהה בכולם. */

const CURVE_D = "M0,0 L9.33,-50 L18.67,-100 L28,-150 L38.09,-156.22 L48.18,-162.15 L58.27,-167.79 L68.36,-173.14 L78.45,-178.2 L88.55,-182.98 L98.64,-187.46 L108.73,-191.65 L118.82,-195.56 L128.91,-199.17 L139,-202.5 L149.09,-205.54 L159.18,-208.29 L169.27,-210.74 L179.36,-212.91 L189.45,-214.79 L199.55,-216.38 L209.64,-217.69 L219.73,-218.7 L229.82,-219.42 L239.91,-219.86 L250,-220 L258.57,-219.67 L267.14,-218.67 L275.71,-217.02 L284.29,-214.69 L292.86,-211.71 L301.43,-208.06 L310,-203.75 L318.57,-198.78 L327.14,-193.14 L335.71,-186.84 L344.29,-179.87 L352.86,-172.24 L361.43,-163.95 L370,-155";

const CURVE_TO_YIELD_D = "M0,0 L9.33,-50 L18.67,-100 L28,-150 L30.99,-151.87 L33.98,-153.72 L36.97,-155.54 L39.96,-157.34 L42.95,-159.11 L45.94,-160.86 L48.93,-162.58 L51.92,-164.27 L54.91,-165.94 L57.9,-167.59 L60.89,-169.21 L63.88,-170.8";

const TRUE_EXTRA_D = "M250,-220 L260,-225.38 L270,-228.26 L280,-230.63 L290,-232.7 L300,-234.59 L310,-236.33 L320,-237.97 L330,-239.52 L340,-241 L350,-242.42 L360,-243.78 L370,-245.1 L380,-246.38 L390,-247.62 L400,-248.82 L410,-250";

export const FigArrhenius = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>גרף ארניוס — ln D מול 1/T</title>
    <defs>
      <marker id="arAxis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--line-strong)" />
      </marker>
    </defs>

    <line x1="80" y1="300" x2="518" y2="300" stroke="var(--line-strong)" strokeWidth="1.75" markerEnd="url(#arAxis)" />
    <line x1="80" y1="300" x2="80" y2="32" stroke="var(--line-strong)" strokeWidth="1.75" markerEnd="url(#arAxis)" />

    <line x1="170" y1="120" x2="80" y2="76.8" stroke="var(--txt-faint)" strokeWidth="1.5" strokeDasharray="5,4" />
    <circle cx="80" cy="76.8" r="3.2" fill="var(--txt-dim)" />
    <text x="36" y="70" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">ln D₀</text>

    <line x1="170" y1="120" x2="420" y2="120" stroke="var(--txt-faint)" strokeWidth="1.5" strokeDasharray="5,4" />
    <line x1="420" y1="120" x2="420" y2="240" stroke="var(--txt-faint)" strokeWidth="1.5" strokeDasharray="5,4" />
    <text x="300" y="150" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">שיפוע = −Q_d/R</text>

    <line x1="170" y1="120" x2="420" y2="240" stroke="var(--acc)" strokeWidth="2.6" />
    <circle cx="170" cy="120" r="5" fill="var(--acc)" />
    <circle cx="420" cy="240" r="5" fill="var(--acc)" />

    <text x="508" y="325" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">1/T (1/K)</text>
    <text x="40" y="165" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" transform="rotate(-90 40 165)">ln D</text>
  </svg>
);

export const FigStressStrain = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>עקומת מאמץ-מעוות הנדסית — כניעה, חוזק מרבי ושבר</title>
    <defs>
      <marker id="ssAxis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--line-strong)" />
      </marker>
    </defs>
    <g transform="translate(90,300)">
      <line x1="0" y1="0" x2="440" y2="0" stroke="var(--line-strong)" strokeWidth="1.75" markerEnd="url(#ssAxis)" />
      <line x1="0" y1="0" x2="0" y2="-268" stroke="var(--line-strong)" strokeWidth="1.75" markerEnd="url(#ssAxis)" />

      <path d="M0,0 L28,0 L28,-150 Z" fill="var(--acc2)" fillOpacity=".15" />
      <line x1="100" y1="-42" x2="16" y2="-80" stroke="var(--txt-faint)" strokeWidth="1.2" />
      <text x="104" y="-36" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">תחום אלסטי</text>

      <line x1="32" y1="0" x2="63.88" y2="-170.8" stroke="var(--txt-faint)" strokeWidth="1.5" strokeDasharray="5,4" />
      <line x1="32" y1="4" x2="32" y2="-4" stroke="var(--txt-dim)" strokeWidth="1.5" />
      <text x="32" y="18" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-faint)">0.002</text>
      <line x1="63.88" y1="-170.8" x2="0" y2="-170.8" stroke="var(--txt-faint)" strokeWidth="1.5" strokeDasharray="5,4" />

      <path d={CURVE_D} fill="none" stroke="var(--acc)" strokeWidth="3" />

      <circle cx="63.88" cy="-170.8" r="5" fill="var(--acc)" />
      <text x="8" y="-178" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">כניעה σy</text>

      <circle cx="250" cy="-220" r="5" fill="var(--acc)" />
      <text x="250" y="-240" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">חוזק מרבי TS</text>
      <text x="258" y="-226" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">M</text>

      <line x1="364" y1="-161" x2="376" y2="-149" stroke="var(--bad)" strokeWidth="2.4" />
      <line x1="364" y1="-149" x2="376" y2="-161" stroke="var(--bad)" strokeWidth="2.4" />
      <text x="380" y="-150" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--bad)">שבר</text>

      <text x="410" y="24" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">מעוות ε</text>
      <text x="-46" y="-130" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" transform="rotate(-90 -46 -130)">מאמץ σ</text>
    </g>
  </svg>
);

export const FigResilienceToughness = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>חוסן וקשיחות-שבר — שטחים מתחת לעקומת מאמץ-מעוות</title>
    <defs>
      <marker id="rtAxis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--line-strong)" />
      </marker>
    </defs>

    <line x1="75" y1="300" x2="272" y2="300" stroke="var(--line-strong)" strokeWidth="1.5" markerEnd="url(#rtAxis)" />
    <line x1="75" y1="300" x2="75" y2="157" stroke="var(--line-strong)" strokeWidth="1.5" markerEnd="url(#rtAxis)" />
    <g transform="translate(75,300) scale(0.46)">
      <path d={CURVE_TO_YIELD_D + " L63.88,0 Z"} fill="var(--acc2)" fillOpacity=".25" stroke="none" />
      <path d={CURVE_D} fill="none" stroke="var(--txt-dim)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      <circle cx="63.88" cy="-170.8" r="11" fill="var(--acc2)" />
    </g>
    <line x1="133" y1="250" x2="100" y2="228" stroke="var(--txt-faint)" strokeWidth="1.2" />
    <text x="96" y="263" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--acc2)">חוסן Ur</text>

    <line x1="330" y1="300" x2="527" y2="300" stroke="var(--line-strong)" strokeWidth="1.5" markerEnd="url(#rtAxis)" />
    <line x1="330" y1="300" x2="330" y2="157" stroke="var(--line-strong)" strokeWidth="1.5" markerEnd="url(#rtAxis)" />
    <g transform="translate(330,300) scale(0.46)">
      <path d={CURVE_D + " L370,0 Z"} fill="var(--warn)" fillOpacity=".25" stroke="none" />
      <path d={CURVE_D} fill="none" stroke="var(--txt-dim)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      <circle cx="370" cy="-155" r="11" fill="var(--warn)" />
    </g>
    <text x="418" y="220" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--warn)">קשיחות-שבר</text>

    <text x="500" y="333" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">מעוות ε</text>
    <text x="40" y="227" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" transform="rotate(-90 40 227)">מאמץ σ</text>
  </svg>
);

export const FigTrueVsEng = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>מאמץ אמיתי מול הנדסי לאחר היצרות</title>
    <defs>
      <marker id="teAxis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--line-strong)" />
      </marker>
    </defs>
    <g transform="translate(90,300)">
      <line x1="0" y1="0" x2="430" y2="0" stroke="var(--line-strong)" strokeWidth="1.75" markerEnd="url(#teAxis)" />
      <line x1="0" y1="0" x2="0" y2="-272" stroke="var(--line-strong)" strokeWidth="1.75" markerEnd="url(#teAxis)" />

      <path d={CURVE_D} fill="none" stroke="var(--acc)" strokeWidth="3" />
      <path d={TRUE_EXTRA_D} fill="none" stroke="var(--bad)" strokeWidth="3" />

      <circle cx="250" cy="-220" r="8" fill="none" stroke="var(--txt)" strokeWidth="1.5" strokeDasharray="3,3" />

      <line x1="300" y1="-250" x2="300" y2="-236" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="3,3" />
      <text x="270" y="-255" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">לאחר ההיצרות: σT ממשיך לעלות</text>

      <text x="295" y="-185" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--acc)">הנדסי</text>
      <text x="340" y="-250" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--bad)">אמיתי</text>

      <text x="400" y="24" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">מעוות ε</text>
      <text x="-46" y="-130" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" transform="rotate(-90 -46 -130)">מאמץ σ</text>
    </g>
  </svg>
);
