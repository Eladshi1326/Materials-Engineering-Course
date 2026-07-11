/* איורי SVG מקוריים — גאומטריה וערכים מחושבים מראש (לא מועתקים מספר כלשהו). */

export const FigBondEnergy = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="גרף אנרגיית קשר בין-אטומית כתלות במרחק">
    <line x1="88" y1="300" x2="88" y2="22" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="88,14 82,26 94,26" fill="var(--txt-dim)" />
    <line x1="86" y1="169.4" x2="542" y2="169.4" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="550,169.4 538,163.4 538,175.4" fill="var(--txt-dim)" />

    <path d="M88 283.6 L88.2 283.4 L88.8 282.8 L89.9 281.8 L91.4 280.5 L93.3 278.8 L95.6 276.8 L98.3 274.5 L101.5 272 L105.1 269.3 L109.1 266.5 L113.5 263.5 L118.4 260.5 L123.6 257.4 L129.3 254.3 L135.4 251.2 L142 248.1 L148.9 245 L156.3 242.1 L164.1 239.2 L172.3 236.4 L181 233.6 L190 231 L199.5 228.5 L209.4 226 L219.7 223.7 L230.5 221.5 L241.7 219.4 L253.2 217.3 L265.3 215.4 L277.7 213.5 L290.6 211.8 L303.8 210.1 L317.5 208.5 L331.7 207 L346.2 205.5 L361.2 204.2 L376.6 202.8 L392.4 201.6 L408.6 200.4 L425.2 199.3 L442.3 198.2 L459.8 197.2 L477.7 196.2 L496.1 195.3 L514.8 194.4 L534 193.5" fill="none" stroke="var(--acc2)" strokeWidth="2.2" />
    <path d="M88 43.2 L88.2 45.2 L88.8 50.9 L89.9 59.9 L91.4 71.2 L93.3 83.9 L95.6 96.9 L98.3 109.6 L101.5 121.3 L105.1 131.5 L109.1 140.2 L113.5 147.3 L118.4 153 L123.6 157.4 L129.3 160.7 L135.4 163.2 L142 165 L148.9 166.3 L156.3 167.3 L164.1 167.9 L172.3 168.4 L181 168.7 L190 168.9 L199.5 169.1 L209.4 169.2 L219.7 169.3 L230.5 169.3 L241.7 169.4 L253.2 169.4 L265.3 169.4 L277.7 169.4 L290.6 169.4 L303.8 169.4 L317.5 169.4 L331.7 169.4 L346.2 169.4 L361.2 169.4 L376.6 169.4 L392.4 169.4 L408.6 169.4 L425.2 169.4 L442.3 169.4 L459.8 169.4 L477.7 169.4 L496.1 169.4 L514.8 169.4 L534 169.4" fill="none" stroke="var(--bad)" strokeWidth="2.2" />
    <path d="M88 157.4 L88.2 159.2 L88.8 164.3 L89.9 172.3 L91.4 182.3 L93.3 193.2 L95.6 204.3 L98.3 214.7 L101.5 223.9 L105.1 231.4 L109.1 237.3 L113.5 241.4 L118.4 244 L123.6 245.3 L129.3 245.6 L135.4 244.9 L142 243.7 L148.9 242 L156.3 239.9 L164.1 237.7 L172.3 235.3 L181 232.9 L190 230.5 L199.5 228.1 L209.4 225.8 L219.7 223.6 L230.5 221.4 L241.7 219.3 L253.2 217.3 L265.3 215.3 L277.7 213.5 L290.6 211.8 L303.8 210.1 L317.5 208.5 L331.7 207 L346.2 205.5 L361.2 204.1 L376.6 202.8 L392.4 201.6 L408.6 200.4 L425.2 199.3 L442.3 198.2 L459.8 197.2 L477.7 196.2 L496.1 195.3 L514.8 194.4 L534 193.5" fill="none" stroke="var(--acc)" strokeWidth="3" strokeLinecap="round" />

    <line x1="127.7" y1="169.4" x2="127.7" y2="245.6" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="4 4" />
    <line x1="88" y1="245.6" x2="127.7" y2="245.6" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="4 4" />
    <circle cx="127.7" cy="245.6" r="4.5" fill="var(--acc)" />

    <text x="127.7" y="313" textAnchor="middle" fontSize="13" fill="var(--txt)" fontFamily="Heebo, sans-serif">r₀</text>
    <text x="68" y="249" textAnchor="middle" fontSize="13" fill="var(--txt)" fontFamily="Heebo, sans-serif">E₀</text>
    <text x="311" y="344" textAnchor="middle" fontSize="13" fill="var(--txt)" fontFamily="Heebo, sans-serif">r (מרחק בין-אטומי)</text>
    <text x="32" y="165" textAnchor="middle" fontSize="13" fill="var(--txt)" fontFamily="Heebo, sans-serif" transform="rotate(-90 32 165)">אנרגיה E</text>

    <text x="140" y="113" textAnchor="middle" fontSize="13" fill="var(--bad)" fontFamily="Heebo, sans-serif">דחייה</text>
    <text x="185" y="222" textAnchor="middle" fontSize="13" fill="var(--acc)" fontFamily="Heebo, sans-serif">נטו</text>
    <text x="333" y="226" textAnchor="middle" fontSize="13" fill="var(--acc2)" fontFamily="Heebo, sans-serif">משיכה</text>
  </svg>
);

export const FigBondTypes = () => (
  <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="שלושת סוגי הקשר הכימי הראשוניים">
    <line x1="187.5" y1="15" x2="187.5" y2="285" stroke="var(--line-strong)" strokeWidth="1" />
    <line x1="372.5" y1="15" x2="372.5" y2="285" stroke="var(--line-strong)" strokeWidth="1" />

    <g transform="translate(10,0)">
      <text x="85" y="26" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--txt)" fontFamily="Heebo, sans-serif">קשר יוני</text>
      <circle cx="58" cy="155" r="20" fill="var(--acc)" />
      <circle cx="118" cy="155" r="27" fill="var(--acc2)" />
      <text x="58" y="155" textAnchor="middle" dominantBaseline="central" fontSize="18" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <text x="118" y="155" textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">−</text>
      <path d="M60 133 Q90 98 114 127" fill="none" stroke="var(--warn)" strokeWidth="2" strokeLinecap="round" />
      <polygon points="0,0 -8,-3.5 -8,3.5" transform="translate(114,127) rotate(50)" fill="var(--warn)" />
      <text x="86" y="90" textAnchor="middle" fontSize="12" fill="var(--warn)" fontFamily="Heebo, sans-serif">e⁻</text>
      <text x="58" y="194" textAnchor="middle" fontSize="11" fill="var(--txt-dim)" fontFamily="Heebo, sans-serif">קטיון (+)</text>
      <text x="118" y="200" textAnchor="middle" fontSize="11" fill="var(--txt-dim)" fontFamily="Heebo, sans-serif">אניון (−)</text>
    </g>

    <g transform="translate(195,0)">
      <text x="85" y="26" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--txt)" fontFamily="Heebo, sans-serif">קשר קוולנטי</text>
      <circle cx="58" cy="150" r="36" fill="var(--acc2)" fillOpacity="0.15" stroke="var(--acc2)" strokeWidth="2" />
      <circle cx="112" cy="150" r="36" fill="var(--acc2)" fillOpacity="0.15" stroke="var(--acc2)" strokeWidth="2" />
      <circle cx="58" cy="150" r="4.5" fill="var(--acc2)" />
      <circle cx="112" cy="150" r="4.5" fill="var(--acc2)" />
      <circle cx="80" cy="142" r="3.5" fill="var(--warn)" />
      <circle cx="90" cy="158" r="3.5" fill="var(--warn)" />
      <text x="85" y="255" textAnchor="middle" fontSize="11" fill="var(--txt-dim)" fontFamily="Heebo, sans-serif">זוג אלקטרונים משותף</text>
    </g>

    <g transform="translate(380,0)">
      <text x="85" y="26" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--txt)" fontFamily="Heebo, sans-serif">קשר מתכתי</text>
      <rect x="15" y="48" width="140" height="175" rx="14" fill="var(--copper)" fillOpacity="0.12" stroke="var(--copper)" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="50" cy="88" r="12" fill="var(--copper)" />
      <text x="50" y="88" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="85" cy="88" r="12" fill="var(--copper)" />
      <text x="85" y="88" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="120" cy="88" r="12" fill="var(--copper)" />
      <text x="120" y="88" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="50" cy="140" r="12" fill="var(--copper)" />
      <text x="50" y="140" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="85" cy="140" r="12" fill="var(--copper)" />
      <text x="85" y="140" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="120" cy="140" r="12" fill="var(--copper)" />
      <text x="120" y="140" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="50" cy="192" r="12" fill="var(--copper)" />
      <text x="50" y="192" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="85" cy="192" r="12" fill="var(--copper)" />
      <text x="85" y="192" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="120" cy="192" r="12" fill="var(--copper)" />
      <text x="120" y="192" textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight="700" fill="var(--panel)" fontFamily="Heebo, sans-serif">+</text>
      <circle cx="67.5" cy="114" r="3" fill="var(--acc3)" />
      <circle cx="102.5" cy="114" r="3" fill="var(--acc3)" />
      <circle cx="67.5" cy="166" r="3" fill="var(--acc3)" />
      <circle cx="102.5" cy="166" r="3" fill="var(--acc3)" />
      <circle cx="32" cy="140" r="3" fill="var(--acc3)" />
      <circle cx="138" cy="140" r="3" fill="var(--acc3)" />
      <text x="85" y="255" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--copper)" fontFamily="Heebo, sans-serif">ים אלקטרונים</text>
    </g>
  </svg>
);

export const FigFcc = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="תא יחידה קובייתי צפוף-פאות FCC">
    <line x1="240" y1="252.5" x2="390" y2="252.5" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="5 4" />
    <line x1="240" y1="102.5" x2="240" y2="252.5" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="5 4" />
    <line x1="175" y1="290" x2="240" y2="252.5" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="5 4" />

    <line x1="175" y1="290" x2="325" y2="290" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="290" x2="325" y2="140" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="140" x2="175" y2="140" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="175" y1="140" x2="175" y2="290" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="390" y1="252.5" x2="390" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="390" y1="102.5" x2="240" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="290" x2="390" y2="252.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="140" x2="390" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="175" y1="140" x2="240" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />

    <line x1="175" y1="290" x2="325" y2="140" stroke="var(--acc3)" strokeWidth="3" />

    <circle cx="240" cy="252.5" r="13" fill="var(--acc)" fillOpacity="0.35" />
    <circle cx="315" cy="177.5" r="12" fill="var(--acc2)" fillOpacity="0.35" />
    <circle cx="282.5" cy="271.3" r="12" fill="var(--acc2)" fillOpacity="0.35" />
    <circle cx="207.5" cy="196.3" r="12" fill="var(--acc2)" fillOpacity="0.35" />

    <circle cx="175" cy="290" r="13" fill="var(--acc)" />
    <circle cx="325" cy="290" r="13" fill="var(--acc)" />
    <circle cx="325" cy="140" r="13" fill="var(--acc)" />
    <circle cx="175" cy="140" r="13" fill="var(--acc)" />
    <circle cx="390" cy="252.5" r="13" fill="var(--acc)" />
    <circle cx="390" cy="102.5" r="13" fill="var(--acc)" />
    <circle cx="240" cy="102.5" r="13" fill="var(--acc)" />

    <circle cx="250" cy="215" r="12" fill="var(--acc2)" />
    <circle cx="282.5" cy="121.3" r="12" fill="var(--acc2)" />
    <circle cx="357.5" cy="196.3" r="12" fill="var(--acc2)" />

    <line x1="175" y1="298" x2="175" y2="308" stroke="var(--txt-dim)" strokeWidth="1" />
    <line x1="325" y1="298" x2="325" y2="308" stroke="var(--txt-dim)" strokeWidth="1" />
    <line x1="175" y1="306" x2="325" y2="306" stroke="var(--txt-dim)" strokeWidth="1" />
    <text x="250" y="322" textAnchor="middle" fontSize="13" fill="var(--txt)" fontFamily="Heebo, sans-serif">a</text>

    <text x="465" y="175" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--acc3)" fontFamily="Heebo, sans-serif">a√2 = 4R</text>

    <circle cx="30" cy="24" r="8" fill="var(--acc)" />
    <text x="100" y="28" textAnchor="middle" fontSize="11" fill="var(--txt-dim)" fontFamily="Heebo, sans-serif">אטום בקודקוד</text>
    <circle cx="30" cy="48" r="8" fill="var(--acc2)" />
    <text x="100" y="52" textAnchor="middle" fontSize="11" fill="var(--txt-dim)" fontFamily="Heebo, sans-serif">אטום במרכז פאה</text>
  </svg>
);

export const FigBcc = () => (
  <svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="תא יחידה קובייתית צפופת-גוף BCC">
    <line x1="240" y1="252.5" x2="390" y2="252.5" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="5 4" />
    <line x1="240" y1="102.5" x2="240" y2="252.5" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="5 4" />
    <line x1="175" y1="290" x2="240" y2="252.5" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="5 4" />

    <line x1="175" y1="290" x2="325" y2="290" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="290" x2="325" y2="140" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="140" x2="175" y2="140" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="175" y1="140" x2="175" y2="290" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="390" y1="252.5" x2="390" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="390" y1="102.5" x2="240" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="290" x2="390" y2="252.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="325" y1="140" x2="390" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />
    <line x1="175" y1="140" x2="240" y2="102.5" stroke="var(--line-strong)" strokeWidth="2" />

    <line x1="175" y1="290" x2="390" y2="102.5" stroke="var(--acc3)" strokeWidth="3" />

    <circle cx="240" cy="252.5" r="13" fill="var(--acc)" fillOpacity="0.35" />

    <circle cx="175" cy="290" r="13" fill="var(--acc)" />
    <circle cx="325" cy="290" r="13" fill="var(--acc)" />
    <circle cx="325" cy="140" r="13" fill="var(--acc)" />
    <circle cx="175" cy="140" r="13" fill="var(--acc)" />
    <circle cx="390" cy="252.5" r="13" fill="var(--acc)" />
    <circle cx="390" cy="102.5" r="13" fill="var(--acc)" />
    <circle cx="240" cy="102.5" r="13" fill="var(--acc)" />

    <circle cx="282.5" cy="196.3" r="14" fill="var(--acc2)" />

    <line x1="175" y1="298" x2="175" y2="308" stroke="var(--txt-dim)" strokeWidth="1" />
    <line x1="325" y1="298" x2="325" y2="308" stroke="var(--txt-dim)" strokeWidth="1" />
    <line x1="175" y1="306" x2="325" y2="306" stroke="var(--txt-dim)" strokeWidth="1" />
    <text x="250" y="322" textAnchor="middle" fontSize="13" fill="var(--txt)" fontFamily="Heebo, sans-serif">a</text>

    <text x="465" y="150" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--acc3)" fontFamily="Heebo, sans-serif">a√3 = 4R</text>

    <circle cx="30" cy="24" r="8" fill="var(--acc)" />
    <text x="100" y="28" textAnchor="middle" fontSize="11" fill="var(--txt-dim)" fontFamily="Heebo, sans-serif">אטום בקודקוד</text>
    <circle cx="30" cy="48" r="8" fill="var(--acc2)" />
    <text x="100" y="52" textAnchor="middle" fontSize="11" fill="var(--txt-dim)" fontFamily="Heebo, sans-serif">אטום במרכז הגוף</text>
  </svg>
);
