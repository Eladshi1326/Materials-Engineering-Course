/* פרק 9 — דיאגרמות פאזות: איורים מקוריים (משורטטים מאפס, לא העתק מספר). */

/* ---- דיאגרמה איזומורפית (Cu-Ni) ---- */
const ISO_LIQUIDUS = "M500,274.1 C482.9,264.7 431.7,234.1 397.5,217.4 C363.3,200.7 329.2,189.5 295,174.2 C260.8,158.9 226.7,142.1 192.5,125.6 C158.3,109.1 107.1,83.8 90,75.4";
const ISO_SOLIDUS = "M500,274.1 C482.9,268.7 431.7,253.9 397.5,241.7 C363.3,229.6 329.2,217.9 295,201.2 C260.8,184.5 226.7,162.8 192.5,141.8 C158.3,120.8 107.1,86.4 90,75.4";
const ISO_LENS = ISO_LIQUIDUS + " C107.1,86.4 158.3,120.8 192.5,141.8 C226.7,162.8 260.8,184.5 295,201.2 C329.2,217.9 363.3,229.6 397.5,241.7 C431.7,253.9 482.9,268.7 500,274.1 Z";
const ISO_R_L = "M90,45 L500,45 L500,274.1 C482.9,264.7 431.7,234.1 397.5,217.4 C363.3,200.7 329.2,189.5 295,174.2 C260.8,158.9 226.7,142.1 192.5,125.6 C158.3,109.1 107.1,83.8 90,75.4 L90,45 Z";
const ISO_R_A = "M90,325 L500,325 L500,274.1 C482.9,268.7 431.7,253.9 397.5,241.7 C363.3,229.6 329.2,217.9 295,201.2 C260.8,184.5 226.7,162.8 192.5,141.8 C158.3,120.8 107.1,86.4 90,75.4 L90,325 Z";
const ISO_TICKS = [0, 20, 40, 60, 80, 100];

/* ---- כלל המנוף (זום על קו קשירה) ---- */
const LEV_LIQUIDUS = "M80,190 Q220,95 480,80";
const LEV_SOLIDUS = "M80,190 Q220,215 480,80";
const LEV_LENS = "M80,190 Q220,95 480,80 Q220,215 80,190 Z";

/* ---- דיאגרמה אאוטקטית (Cu-Ag) ---- */
const EUT_LIQ_A = "M90,58.1 C113.9,69.8 184.4,100.8 233.5,128.3 C282.6,155.8 359.6,207.5 384.8,223.3";
const EUT_LIQ_B = "M500,124.5 C489.7,131.9 457.7,152.3 438.5,168.8 C419.3,185.3 393.7,214.2 384.8,223.3";
const EUT_A_UP = "M90,58.1 Q118.2,138.4 122.8,223.3";
const EUT_A_LO = "M122.8,223.3 Q115.3,273.3 96.2,320";
const EUT_B_UP = "M500,124.5 Q470.7,169.8 463.9,223.3";
const EUT_B_LO = "M463.9,223.3 Q470,273.1 487.7,320";
const EUT_R_L = "M90,40 L500,40 L500,124.5 C489.7,131.9 457.7,152.3 438.5,168.8 C419.3,185.3 393.7,214.2 384.8,223.3 C359.6,207.5 282.6,155.8 233.5,128.3 C184.4,100.8 113.9,69.8 90,58.1 L90,40 Z";
const EUT_R_A = "M90,58.1 Q118.2,138.4 122.8,223.3 Q115.3,273.3 96.2,320 L90,320 Z";
const EUT_R_B = "M500,124.5 Q470.7,169.8 463.9,223.3 Q470,273.1 487.7,320 L500,320 Z";
const EUT_R_AL = "M90,58.1 C113.9,69.8 184.4,100.8 233.5,128.3 C282.6,155.8 359.6,207.5 384.8,223.3 L122.8,223.3 Q118.2,138.4 90,58.1 Z";
const EUT_R_BL = "M500,124.5 C489.7,131.9 457.7,152.3 438.5,168.8 C419.3,185.3 393.7,214.2 384.8,223.3 L463.9,223.3 Q470.7,169.8 500,124.5 Z";
const EUT_R_AB = "M122.8,223.3 L463.9,223.3 Q470,273.1 487.7,320 L96.2,320 Q115.3,273.3 122.8,223.3 Z";

/* ---- ברזל-פחמן (מפושטת) ---- */
const FEC_A3 = "M90,250 Q119.4,273.2 136.5,306.5";
const FEC_ACM = "M136.5,306.5 Q187.1,247.9 220.9,178.3";
const FEC_FERRITE = "M90,250 C91.7,259.4 99.9,293.2 100.4,306.5 C100.9,319.8 94.3,326.1 93.1,330";
const FEC_R_GAMMA = "M90,178.3 L220.9,178.3 Q187.1,247.9 136.5,306.5 Q119.4,273.2 90,250 Z";
const FEC_R_ALPHA = "M90,250 C91.7,259.4 99.9,293.2 100.4,306.5 C100.9,319.8 94.3,326.1 93.1,330 L90,330 Z";
const FEC_R_GFE3C = "M136.5,306.5 L500,306.5 L500,178.3 L220.9,178.3 Q187.1,247.9 136.5,306.5 Z";
const FEC_R_AFE3C = "M100.4,306.5 L500,306.5 L500,330 L93.1,330 C94.3,326.1 100.9,319.8 100.4,306.5 Z";
const FEC_TICKS_T = [[727, 306.5], [912, 250], [1147, 178.3], [1538, 58.9]];

export const FigIsomorphous = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="דיאגרמת פאזות איזומורפית בינארית">
    <line x1="90" y1="330" x2="520" y2="330" stroke="var(--line-strong)" strokeWidth="1.5" />
    <line x1="90" y1="330" x2="90" y2="35" stroke="var(--line-strong)" strokeWidth="1.5" />
    <path d="M90,35 l-4,9 l8,0 z" fill="var(--line-strong)" />
    <path d={ISO_R_L} fill="var(--acc)" fillOpacity=".07" />
    <path d={ISO_R_A} fill="var(--acc2)" fillOpacity=".07" />
    <path d={ISO_LENS} fill="var(--txt-faint)" fillOpacity=".12" />
    <path d={ISO_LIQUIDUS} fill="none" stroke="var(--acc)" strokeWidth="2" />
    <path d={ISO_SOLIDUS} fill="none" stroke="var(--acc2)" strokeWidth="2" />
    {ISO_TICKS.map(w => {
      const x = 500 - 4.1 * w;
      return (
        <g key={w}>
          <line x1={x} y1="330" x2={x} y2="335" stroke="var(--line-strong)" />
          <text x={x} y="347" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)" textAnchor="middle">{w}</text>
        </g>
      );
    })}
    <circle cx="500" cy="274.1" r="3.5" fill="var(--bad)" />
    <circle cx="90" cy="75.4" r="3.5" fill="var(--bad)" />
    <line x1="500" y1="274.1" x2="500" y2="330" stroke="var(--txt-faint)" strokeDasharray="3,3" />
    <line x1="90" y1="75.4" x2="90" y2="330" stroke="var(--txt-faint)" strokeDasharray="3,3" />
    <text x="500" y="264" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle">Cu</text>
    <text x="90" y="65" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle">Ni</text>
    <text x="295" y="58" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle" fontStyle="italic">נק' היתוך של שני הרכיבים</text>
    <text x="430" y="112" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc)" fontWeight="700">L</text>
    <text x="150" y="298" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc2)" fontWeight="700">α</text>
    <text x="300" y="200" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)" fontWeight="700" textAnchor="middle">L + α</text>
    <text x="305" y="365" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" textAnchor="middle">הרכב (wt% Ni ←)</text>
    <text x="26" y="185" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" textAnchor="middle" transform="rotate(-90,26,185)">טמפרטורה</text>
  </svg>
);

export const FigLeverRule = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="כלל המנוף על קו קשירה בתחום דו-פאזי">
    <path d={LEV_LENS} fill="var(--txt-faint)" fillOpacity=".1" />
    <path d={LEV_LIQUIDUS} fill="none" stroke="var(--acc)" strokeWidth="2" />
    <path d={LEV_SOLIDUS} fill="none" stroke="var(--acc2)" strokeWidth="2" />
    <text x="435" y="68" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--acc)" fontWeight="700">L</text>
    <text x="435" y="300" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--acc2)" fontWeight="700">α</text>
    <text x="300" y="175" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" textAnchor="middle">L + α</text>
    <line x1="163.3" y1="145" x2="338.9" y2="145" stroke="var(--txt)" strokeWidth="1.5" />
    <line x1="163.3" y1="145" x2="230" y2="145" stroke="var(--acc3)" strokeWidth="4" strokeLinecap="round" />
    <line x1="230" y1="145" x2="338.9" y2="145" stroke="var(--warn)" strokeWidth="4" strokeLinecap="round" />
    <path d="M163.3,152 Q180,166 196.7,166 Q213.3,166 230,152" fill="none" stroke="var(--acc3)" strokeWidth="1.3" />
    <path d="M230,152 Q257.2,166 284.5,166 Q311.7,166 338.9,152" fill="none" stroke="var(--warn)" strokeWidth="1.3" />
    <path d="M230,145 l-7,12 l14,0 z" fill="var(--line-strong)" />
    <circle cx="163.3" cy="145" r="3.5" fill="var(--acc)" />
    <circle cx="338.9" cy="145" r="3.5" fill="var(--acc2)" />
    <circle cx="230" cy="145" r="3.5" fill="var(--txt)" />
    <line x1="230" y1="145" x2="230" y2="320" stroke="var(--txt-faint)" strokeDasharray="3,3" />
    <line x1="163.3" y1="145" x2="163.3" y2="215" stroke="var(--txt-faint)" strokeDasharray="2,3" />
    <line x1="338.9" y1="145" x2="338.9" y2="215" stroke="var(--txt-faint)" strokeDasharray="2,3" />
    <text x="163.3" y="132" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--acc)" textAnchor="middle">C_L</text>
    <text x="230" y="132" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" textAnchor="middle">C₀</text>
    <text x="338.9" y="132" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--acc2)" textAnchor="middle">C_α</text>
    <text x="100" y="141" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="end">T₁</text>
    <text x="90" y="348" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--acc)" fontWeight="700">W_L = (C_α − C₀)/(C_α − C_L)</text>
    <text x="90" y="368" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--acc3)" fontWeight="700">W_α = (C₀ − C_L)/(C_α − C_L)</text>
  </svg>
);

export const FigEutectic = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="דיאגרמת פאזות אאוטקטית בינארית">
    <line x1="90" y1="330" x2="510" y2="330" stroke="var(--line-strong)" strokeWidth="1.5" />
    <line x1="90" y1="330" x2="90" y2="35" stroke="var(--line-strong)" strokeWidth="1.5" />
    <path d="M90,35 l-4,9 l8,0 z" fill="var(--line-strong)" />
    <path d={EUT_R_L} fill="var(--acc)" fillOpacity=".07" />
    <path d={EUT_R_A} fill="var(--acc2)" fillOpacity=".13" />
    <path d={EUT_R_B} fill="var(--acc3)" fillOpacity=".13" />
    <path d={EUT_R_AL} fill="var(--txt-faint)" fillOpacity=".09" />
    <path d={EUT_R_BL} fill="var(--txt-faint)" fillOpacity=".09" />
    <path d={EUT_R_AB} fill="var(--txt-faint)" fillOpacity=".13" />
    <path d={EUT_LIQ_A} fill="none" stroke="var(--acc)" strokeWidth="2" />
    <path d={EUT_LIQ_B} fill="none" stroke="var(--acc)" strokeWidth="2" />
    <path d={EUT_A_UP} fill="none" stroke="var(--acc2)" strokeWidth="2" />
    <path d={EUT_A_LO} fill="none" stroke="var(--acc2)" strokeWidth="2" />
    <path d={EUT_B_UP} fill="none" stroke="var(--acc3)" strokeWidth="2" />
    <path d={EUT_B_LO} fill="none" stroke="var(--acc3)" strokeWidth="2" />
    <line x1="122.8" y1="223.3" x2="463.9" y2="223.3" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <circle cx="90" cy="58.1" r="3" fill="var(--txt-faint)" />
    <circle cx="500" cy="124.5" r="3" fill="var(--txt-faint)" />
    <circle cx="384.8" cy="223.3" r="4.5" fill="var(--bad)" />
    <line x1="384.8" y1="223.3" x2="384.8" y2="330" stroke="var(--bad)" strokeDasharray="3,3" strokeLinecap="round" />
    <line x1="384.8" y1="223.3" x2="122.8" y2="223.3" stroke="var(--bad)" strokeDasharray="3,3" strokeLinecap="round" />
    <text x="384.8" y="343" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--bad)" textAnchor="middle">C_E</text>
    <text x="112" y="219" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--bad)" textAnchor="end">T_E</text>
    <text x="393" y="214" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--bad)" fontWeight="700">E</text>
    <text x="270" y="68" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc)" fontWeight="700" textAnchor="middle">L</text>
    <text x="100" y="258" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc2)" fontWeight="700" textAnchor="middle">α</text>
    <text x="485" y="258" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc3)" fontWeight="700" textAnchor="middle">β</text>
    <text x="150" y="150" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" textAnchor="middle">α+L</text>
    <text x="435" y="150" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" textAnchor="middle">β+L</text>
    <text x="290" y="280" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)" fontWeight="700" textAnchor="middle">α+β</text>
    <text x="300" y="365" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle">הרכב (wt% B →)</text>
    <text x="24" y="185" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle" transform="rotate(-90,24,185)">טמפרטורה</text>
    <text x="300" y="16" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)" textAnchor="middle" fontStyle="italic">L → α + β בנקודה האאוטקטית</text>
  </svg>
);

export const FigFeC = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="דיאגרמת פאזות ברזל-פחמן מפושטת">
    <line x1="90" y1="330" x2="515" y2="330" stroke="var(--line-strong)" strokeWidth="1.5" />
    <line x1="90" y1="330" x2="90" y2="35" stroke="var(--line-strong)" strokeWidth="1.5" />
    <path d="M90,35 l-4,9 l8,0 z" fill="var(--line-strong)" />
    <path d={FEC_R_GAMMA} fill="var(--acc)" fillOpacity=".13" />
    <path d={FEC_R_ALPHA} fill="var(--acc2)" fillOpacity=".13" />
    <path d={FEC_R_GFE3C} fill="var(--txt-faint)" fillOpacity=".08" />
    <path d={FEC_R_AFE3C} fill="var(--txt-faint)" fillOpacity=".13" />
    <path d={FEC_A3} fill="none" stroke="var(--acc)" strokeWidth="2" />
    <path d={FEC_ACM} fill="none" stroke="var(--acc)" strokeWidth="2" />
    <path d={FEC_FERRITE} fill="none" stroke="var(--acc2)" strokeWidth="1.5" />
    <line x1="100.4" y1="306.5" x2="500" y2="306.5" stroke="var(--bad)" strokeWidth="2.2" />
    <line x1="90" y1="178.3" x2="500" y2="178.3" stroke="var(--txt-faint)" strokeWidth="1" strokeDasharray="4,3" />
    <line x1="500" y1="178.3" x2="500" y2="330" stroke="var(--line-strong)" strokeWidth="1.5" />
    {FEC_TICKS_T.map(([t, y]) => (
      <g key={t}>
        <line x1="85" y1={y} x2="90" y2={y} stroke="var(--line-strong)" />
        <text x="78" y={y + 4} fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)" textAnchor="end">{t}</text>
      </g>
    ))}
    {[0, 2, 4, 6].map(c => {
      const x = 90 + 61.19 * c;
      return (
        <g key={c}>
          <line x1={x} y1="330" x2={x} y2="335" stroke="var(--line-strong)" />
          <text x={x} y="347" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)" textAnchor="middle">{c}</text>
        </g>
      );
    })}
    <circle cx="136.5" cy="306.5" r="4.5" fill="var(--bad)" />
    <line x1="136.5" y1="306.5" x2="136.5" y2="317" stroke="var(--bad)" strokeDasharray="3,3" />
    <line x1="136.5" y1="306.5" x2="90" y2="306.5" stroke="var(--bad)" strokeDasharray="3,3" />
    <text x="136.5" y="343" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--bad)" textAnchor="middle">0.76</text>
    <text x="172" y="324" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt)" fontWeight="700" textAnchor="middle">פרליט = α + Fe₃C</text>
    <circle cx="353.1" cy="178.3" r="3" fill="var(--txt-faint)" />
    <line x1="353.1" y1="178.3" x2="353.1" y2="330" stroke="var(--txt-faint)" strokeWidth="1" strokeDasharray="2,3" />
    <text x="353.1" y="343" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-faint)" textAnchor="middle">4.30</text>
    <text x="497" y="228" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" textAnchor="end">Fe₃C</text>
    <text x="497" y="243" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)" textAnchor="end">(6.70%)</text>
    <text x="107" y="220" fontFamily="Heebo, sans-serif" fontSize="14" fill="var(--acc)" fontWeight="700">γ</text>
    <text x="95" y="309" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--acc2)" fontWeight="700" textAnchor="middle">α</text>
    <text x="330" y="248" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" textAnchor="middle">γ+Fe₃C</text>
    <text x="300" y="320" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" textAnchor="middle">α+Fe₃C</text>
    <text x="300" y="365" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" textAnchor="middle">wt% C</text>
    <text x="24" y="185" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" textAnchor="middle" transform="rotate(-90,24,185)">טמפרטורה (°C)</text>
  </svg>
);
