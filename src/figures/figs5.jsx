/* איורי SVG מקוריים — פרק 7-8: החלקה, הול-פץ', עייפות, זחילה (לא העתקי ספר) */

export const FigSlipGeometry = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>גאומטריית שמיד — מאמץ גזירה נפתר על מישור החלקה</title>
    <defs>
      <marker id="sgF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--txt-dim)" />
      </marker>
      <marker id="sgN" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--acc)" />
      </marker>
      <marker id="sgL" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--acc3)" />
      </marker>
    </defs>

    {/* גליל תחת מאמץ צירי */}
    <rect x="250" y="60" width="60" height="200" fill="var(--line-strong)" fillOpacity="0.3" />
    <line x1="250" y1="60" x2="250" y2="260" stroke="var(--txt-dim)" strokeWidth="1.6" />
    <line x1="310" y1="60" x2="310" y2="260" stroke="var(--txt-dim)" strokeWidth="1.6" />
    <ellipse cx="280" cy="60" rx="30" ry="9" fill="var(--line-strong)" fillOpacity="0.45" stroke="var(--txt-dim)" strokeWidth="1.6" />
    <ellipse cx="280" cy="260" rx="30" ry="9" fill="var(--line-strong)" fillOpacity="0.45" stroke="var(--txt-dim)" strokeWidth="1.6" />

    {/* חצי כוח F */}
    <line x1="280" y1="58" x2="280" y2="24" stroke="var(--txt-dim)" strokeWidth="2.2" markerEnd="url(#sgF)" />
    <line x1="280" y1="262" x2="280" y2="296" stroke="var(--txt-dim)" strokeWidth="2.2" markerEnd="url(#sgF)" />
    <text x="280" y="16" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)">F</text>
    <text x="280" y="313" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--txt)">F</text>

    {/* מישור החלקה (אליפסה נטויה) */}
    <ellipse cx="280" cy="160" rx="44" ry="13" transform="rotate(-30 280 160)" fill="var(--acc2)" fillOpacity="0.16" stroke="var(--acc2)" strokeWidth="1.8" />
    <text x="195" y="208" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--acc2)">מישור החלקה</text>

    {/* ציר ייחוס מקווקו (כיוון העומס) */}
    <line x1="280" y1="160" x2="280" y2="100" stroke="var(--txt-faint)" strokeDasharray="4 3" strokeWidth="1.4" />

    {/* נורמל n */}
    <line x1="280" y1="160" x2="317.5" y2="95" stroke="var(--acc)" strokeWidth="2.2" markerEnd="url(#sgN)" />
    <text x="325" y="89" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--acc)">n</text>

    {/* כיוון ההחלקה */}
    <line x1="280" y1="160" x2="337.2" y2="127" stroke="var(--acc3)" strokeWidth="2.2" markerEnd="url(#sgL)" />
    <text x="343" y="130" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--acc3)">כיוון החלקה</text>

    {/* קשתות זווית */}
    <path d="M280,134 A26,26 0 0,1 293,137.5" fill="none" stroke="var(--acc)" strokeWidth="1.5" />
    <text x="290" y="121" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--acc)">φ</text>
    <path d="M280,120 A40,40 0 0,1 314.6,140" fill="none" stroke="var(--acc3)" strokeWidth="1.5" />
    <text x="319" y="125" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--acc3)">λ</text>

    {/* נוסחת שמיד */}
    <line x1="150" y1="330" x2="410" y2="330" stroke="var(--line-strong)" strokeWidth="1" />
    <text x="280" y="350" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="14" fontWeight="700" fill="var(--acc)">τᴿ = σ·cosφ·cosλ</text>
  </svg>
);

export const FigHallPetch = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>יחס הול-פץ' — חוזק כניעה מול d בחזקת מינוס חצי</title>
    <defs>
      <marker id="hpAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--txt-dim)" />
      </marker>
      <marker id="hpAr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--acc3)" />
      </marker>
    </defs>

    {/* ציר עליון משני: כיוון גודל הגרגיר */}
    <line x1="105" y1="24" x2="485" y2="24" stroke="var(--acc3)" strokeWidth="1.6" markerEnd="url(#hpAr)" />
    <text x="105" y="14" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">גרגיר גס</text>
    <text x="485" y="14" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">גרגיר עדין</text>

    {/* צירים */}
    <line x1="70" y1="290" x2="528" y2="290" stroke="var(--txt-dim)" strokeWidth="1.8" markerEnd="url(#hpAx)" />
    <line x1="70" y1="290" x2="70" y2="38" stroke="var(--txt-dim)" strokeWidth="1.8" markerEnd="url(#hpAx)" />
    <text x="524" y="312" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">d^(-1/2)</text>
    <text x="34" y="165" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" transform="rotate(-90 34 165)">σy</text>

    {/* חיתוך ציר y — σ0 */}
    <line x1="42" y1="230" x2="70" y2="230" stroke="var(--txt-faint)" strokeDasharray="4 3" strokeWidth="1.4" />
    <text x="38" y="234" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">σ₀</text>

    {/* קו הול-פץ' */}
    <line x1="70" y1="230" x2="520" y2="70" stroke="var(--acc)" strokeWidth="2.4" />

    {/* 3 נקודות מדידה */}
    {[150, 300, 450].map((x, i) => (
      <circle key={i} cx={x} cy={230 - (160 * (x - 70)) / 450} r="4.6" fill="var(--acc)" stroke="var(--txt)" strokeWidth="1" />
    ))}

    {/* משולש שיפוע */}
    <line x1="260" y1="162.4" x2="340" y2="162.4" stroke="var(--txt-dim)" strokeDasharray="3 2" strokeWidth="1.3" />
    <line x1="340" y1="162.4" x2="340" y2="134" stroke="var(--txt-dim)" strokeDasharray="3 2" strokeWidth="1.3" />
    <text x="352" y="152" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--acc)">שיפוע k_y</text>
  </svg>
);

export const FigSnCurve = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>עקומות S-N בעייפות: פלדה מול אלומיניום</title>
    <defs>
      <marker id="snAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--txt-dim)" />
      </marker>
    </defs>

    {/* צירים וכותרות */}
    <line x1="65" y1="295" x2="533" y2="295" stroke="var(--txt-dim)" strokeWidth="1.8" markerEnd="url(#snAx)" />
    <line x1="65" y1="295" x2="65" y2="30" stroke="var(--txt-dim)" strokeWidth="1.8" markerEnd="url(#snAx)" />
    <text x="300" y="337" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">מספר מחזורים N (לוג)</text>
    <text x="24" y="163" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" transform="rotate(-90 24 163)">משרעת מאמץ S</text>

    {/* סימוני עשרור על ציר ה-N */}
    {[70, 145, 220, 295, 370, 445, 520].map((x, i) => (
      <g key={i}>
        <line x1={x} y1="295" x2={x} y2="301" stroke="var(--txt-dim)" strokeWidth="1.2" />
        <text x={x} y="315" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-faint)">
          {["10³", "10⁴", "10⁵", "10⁶", "10⁷", "10⁸", "10⁹"][i]}
        </text>
      </g>
    ))}

    {/* קו ייחוס — גבול עייפות */}
    <line x1="350" y1="230" x2="533" y2="230" stroke="var(--txt-faint)" strokeDasharray="4 3" strokeWidth="1.3" />
    <text x="452" y="219" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12.5" fill="var(--txt-dim)">גבול עייפות</text>

    {/* עקומה A — פלדה: יורדת ואז מגיעה למישור */}
    <path
      d="M70.0,68.0 C78.3,79.0 103.3,116.7 120.0,134.3 C136.7,151.9 153.3,163.1 170.0,173.5 C186.7,183.8 203.3,190.5 220.0,196.6 C236.7,202.7 253.3,206.6 270.0,210.3 C286.7,213.9 303.3,216.2 320.0,218.3 C336.7,220.5 353.3,221.8 370.0,223.1 C386.7,224.4 403.3,225.2 420.0,225.9 C436.7,226.7 453.3,227.2 470.0,227.6 C486.7,228.0 511.7,228.4 520.0,228.6"
      fill="none" stroke="var(--acc)" strokeWidth="2.6" strokeLinecap="round"
    />

    {/* עקומה B — אלומיניום: יורדת ברציפות, בלי גבול */}
    <path
      d="M70.0,72.0 C78.3,83.0 103.3,122.4 120.0,138.0 C136.7,153.5 153.3,157.3 170.0,165.3 C186.7,173.3 203.3,179.8 220.0,186.3 C236.7,192.7 253.3,198.4 270.0,203.9 C286.7,209.5 303.3,214.6 320.0,219.5 C336.7,224.5 353.3,229.1 370.0,233.6 C386.7,238.1 403.3,242.4 420.0,246.5 C436.7,250.7 453.3,254.7 470.0,258.6 C486.7,262.5 511.7,268.0 520.0,269.9"
      fill="none" stroke="var(--warn)" strokeWidth="2.6" strokeLinecap="round"
    />

    {/* מקרא */}
    <line x1="410" y1="46" x2="442" y2="46" stroke="var(--acc)" strokeWidth="3.2" />
    <text x="449" y="50" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">פלדה</text>
    <line x1="410" y1="66" x2="442" y2="66" stroke="var(--warn)" strokeWidth="3.2" />
    <text x="449" y="70" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">אלומיניום</text>
  </svg>
);

export const FigCreepCurve = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img">
    <title>עקומת זחילה: שלב ראשוני, משני ושלישוני עד כשל</title>
    <defs>
      <marker id="crAx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="var(--txt-dim)" />
      </marker>
    </defs>

    {/* גבולות שלבים מקווקוים + תוויות אזור */}
    {[150, 350].map((x, i) => (
      <line key={i} x1={x} y1="300" x2={x} y2="40" stroke="var(--txt-faint)" strokeDasharray="3 3" strokeWidth="1.2" />
    ))}
    <text x="105" y="316" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-faint)">ראשוני</text>
    <text x="250" y="316" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-faint)">משני</text>
    <text x="415" y="316" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-faint)">שלישוני</text>

    {/* צירים */}
    <line x1="60" y1="300" x2="530" y2="300" stroke="var(--txt-dim)" strokeWidth="1.8" markerEnd="url(#crAx)" />
    <line x1="60" y1="300" x2="60" y2="28" stroke="var(--txt-dim)" strokeWidth="1.8" markerEnd="url(#crAx)" />
    <text x="295" y="341" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)">זמן t</text>
    <text x="20" y="165" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt-dim)" transform="rotate(-90 20 165)">מעוות ε</text>

    {/* קפיצה אלסטית מיידית ב-t=0 */}
    <line x1="60" y1="300" x2="60" y2="250" stroke="var(--acc)" strokeWidth="2.4" />
    <text x="67" y="278" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">אלסטי</text>

    {/* זחילה ראשונית — קצב יורד */}
    <path
      d="M60.0,250.0 C62.5,247.5 70.0,239.6 75.0,235.1 C80.0,230.7 85.0,226.8 90.0,223.4 C95.0,220.1 100.0,217.2 105.0,214.8 C110.0,212.4 115.0,210.5 120.0,209.0 C125.0,207.5 130.0,206.5 135.0,205.9 C140.0,205.2 147.5,205.1 150.0,205.0"
      fill="none" stroke="var(--acc)" strokeWidth="2.4" strokeLinecap="round"
    />

    {/* זחילה משנית — קצב קבוע */}
    <line x1="150" y1="205" x2="350" y2="150" stroke="var(--acc)" strokeWidth="2.4" />
    <line x1="220" y1="185.8" x2="280" y2="185.8" stroke="var(--txt-dim)" strokeDasharray="3 2" strokeWidth="1.2" />
    <line x1="280" y1="185.8" x2="280" y2="169.3" stroke="var(--txt-dim)" strokeDasharray="3 2" strokeWidth="1.2" />
    <text x="238" y="199" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">Δt</text>
    <text x="286" y="180" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">Δε</text>
    <text x="250" y="128" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12.5" fontWeight="700" fill="var(--acc)">
      זחילה משנית — קצב קבוע
    </text>

    {/* זחילה שלישונית — מואצת עד כשל */}
    <path
      d="M350.0,150.0 C352.7,149.9 360.8,149.9 366.3,149.4 C371.7,148.8 377.1,148.1 382.5,146.8 C387.9,145.4 393.3,143.8 398.8,141.5 C404.2,139.1 409.6,136.4 415.0,132.9 C420.4,129.5 425.8,125.5 431.3,120.9 C436.7,116.2 442.1,110.9 447.5,104.9 C452.9,98.8 458.3,92.2 463.8,84.7 C469.2,77.2 477.3,64.1 480.0,60.0"
      fill="none" stroke="var(--acc)" strokeWidth="2.4" strokeLinecap="round"
    />

    {/* סימון כשל */}
    <path d="M474,54 L486,66 M474,66 L486,54" stroke="var(--bad)" strokeWidth="2.6" strokeLinecap="round" />
    <text x="493" y="58" fontFamily="Heebo, sans-serif" fontSize="13" fontWeight="700" fill="var(--bad)">כשל</text>
  </svg>
);
