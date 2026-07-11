/* איורים מקוריים (SVG), מצוירים מאפס — פרק 10: גרעון + TTT, פרק 11: ג'ומיני, פרק 15: פולימרים */

export const FigNucleation = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="אנרגיה חופשית של גרעין כתלות ברדיוס">
    <defs><clipPath id="nucClip"><rect x="90" y="44" width="410" height="262" /></clipPath></defs>
    <line x1="90" y1="44" x2="90" y2="308" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="86.5,52 90,44 93.5,52" fill="var(--txt-dim)" />
    <line x1="88" y1="205" x2="504" y2="205" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="504,201.5 512,205 504,208.5" fill="var(--txt-dim)" />
    <g clipPath="url(#nucClip)" fill="none">
      <path d="M90 205 L100.8 204.3 L111.5 202.4 L122.3 199.1 L133 194.5 L143.8 188.6 L154.5 181.4 L165.3 172.9 L176 163.1 L186.8 151.9 L197.5 139.5 L208.3 125.7 L219 110.6 L229.8 94.2 L240.5 76.5 L251.3 57.5 L262 37.2 L272.8 15.6 L283.5 -7.3 L294.3 -31.6 L305 -57.1 L315.8 -84 L326.5 -112.2 L337.3 -141.7 L348 -172.5 L358.8 -204.6 L369.5 -238 L380.3 -272.8 L391 -308.8 L401.8 -346.2 L412.5 -384.8 L423.3 -424.8 L434 -466.1 L444.8 -508.7 L455.5 -552.6 L466.3 -597.8 L477 -644.4 L487.8 -692.2 L498.5 -741.3 L509.3 -791.8 L520 -843.6" stroke="var(--warn)" strokeWidth="2" />
      <path d="M90 205 L100.8 205 L111.5 205.2 L122.3 205.6 L133 206.3 L143.8 207.6 L154.5 209.4 L165.3 212 L176 215.5 L186.8 219.9 L197.5 225.4 L208.3 232.2 L219 240.3 L229.8 249.9 L240.5 261 L251.3 273.9 L262 288.6 L272.8 305.3 L283.5 324.1 L294.3 345.1 L305 368.4 L315.8 394.1 L326.5 422.4 L337.3 453.5 L348 487.3 L358.8 524.1 L369.5 563.9 L380.3 606.9 L391 653.3 L401.8 703 L412.5 756.4 L423.3 813.4 L434 874.1 L444.8 938.9 L455.5 1007.6 L466.3 1080.5 L477 1157.8 L487.8 1239.4 L498.5 1325.5 L509.3 1416.3 L520 1511.9" stroke="var(--acc2)" strokeWidth="2" />
      <path d="M90 205 L100.8 204.4 L111.5 202.5 L122.3 199.7 L133 195.8 L143.8 191.2 L154.5 185.8 L165.3 179.9 L176 173.5 L186.8 166.8 L197.5 159.9 L208.3 152.9 L219 145.9 L229.8 139.1 L240.5 132.6 L251.3 126.5 L262 120.9 L272.8 115.9 L283.5 111.8 L294.3 108.5 L305 106.2 L315.8 105.1 L326.5 105.2 L337.3 106.8 L348 109.8 L358.8 114.5 L369.5 120.9 L380.3 129.2 L391 139.5 L401.8 151.9 L412.5 166.5 L423.3 183.6 L434 203.1 L444.8 225.2 L455.5 250 L466.3 277.7 L477 308.4 L487.8 342.2 L498.5 379.2 L509.3 419.5 L520 463.3" stroke="var(--acc)" strokeWidth="2.6" />
    </g>
    <line x1="320" y1="205" x2="320" y2="105" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="4 3" />
    <line x1="90" y1="105" x2="320" y2="105" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="4 3" />
    <circle cx="320" cy="105" r="3.5" fill="var(--acc)" />
    <text x="320" y="223" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">r*</text>
    <text x="82" y="102" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">ΔG*</text>
    <text x="50" y="50" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">ΔG</text>
    <text x="285" y="343" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">רדיוס גרעין r</text>
    <text x="112" y="175" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--warn)">4πr²γ</text>
    <text x="128" y="240" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--acc2)">(4/3)πr³ΔGv</text>
    <text x="250" y="140" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--acc)">ΔG(r)</text>
    <text x="285" y="364" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">r &lt; r*: מתפרק · r &gt; r*: גדל</text>
  </svg>
);

export const FigTtt = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="דיאגרמת TTT לפלדה אאוטקטואידית">
    <line x1="100" y1="40" x2="100" y2="330" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="96.5,48 100,40 103.5,48" fill="var(--txt-dim)" />
    <line x1="100" y1="330" x2="533" y2="330" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="529.5,326.5 537,330 529.5,333.5" fill="var(--txt-dim)" />
    {[[0.1,"0.1"],[1,"1"],[10,"10"],[100,"10²"],[1000,"10³"],[10000,"10⁴"],[100000,"10⁵"]].map(([t,lab])=>{
      const x=100+(Math.log10(t)+1)*71.667;
      return (<g key={t}><line x1={x} y1="330" x2={x} y2="335" stroke="var(--txt-dim)" strokeWidth="1" /><text x={x} y="348" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)">{lab}</text></g>);
    })}
    {[100,200,300,400,500,600,700,800].map(T=>{
      const y=330-(T-100)/700*290;
      return (<g key={T}><line x1="95" y1={y} x2="100" y2={y} stroke="var(--txt-dim)" strokeWidth="1" /><text x="90" y={y+4} textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)">{T}</text></g>);
    })}
    <text x="316" y="365" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">זמן, s (סקאלה לוגריתמית)</text>
    <text x="22" y="185" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)" transform="rotate(-90 22 185)">טמפרטורה (°C)</text>
    <line x1="100" y1="70.2" x2="533" y2="70.2" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="5 3" />
    <text x="104" y="61" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt-dim)">טמפרטורה אאוטקטואידית · 727°C</text>
    <line x1="100" y1="280.3" x2="533" y2="280.3" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="5 3" />
    <line x1="100" y1="296.9" x2="533" y2="296.9" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="5 3" />
    <line x1="100" y1="313.4" x2="533" y2="313.4" stroke="var(--txt-faint)" strokeWidth="1.2" strokeDasharray="5 3" />
    <text x="525" y="277" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="11.5" fill="var(--txt-dim)">Ms ≈ 220°C</text>
    <text x="525" y="293.5" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="11.5" fill="var(--txt-dim)">M50</text>
    <text x="525" y="310" textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="11.5" fill="var(--txt-dim)">M90</text>
    <path d="M336.6 73.1 C323.1 78,277.7 93.9,255.9 102.1 C234.2 110.4,219.9 116,205.9 122.9 C191.8 129.8,171.7 136.7,171.7 143.6 C171.7 150.5,193 157.4,205.9 164.3 C218.8 171.2,233.5 178.1,249 185 C264.6 191.9,279.8 198.8,299.1 205.7 C318.5 212.6,348.4 219.5,365.1 226.4 C381.8 233.3,387.9 239.6,399.3 247.1 C410.7 254.7,427.8 267.9,433.5 272" fill="none" stroke="var(--acc)" strokeWidth="2.2" />
    <path d="M408.2 73.1 C392.7 78,340.4 93.9,315 102.1 C289.6 110.4,271.5 116,255.9 122.9 C240.4 129.8,221.8 136.7,221.8 143.6 C221.8 150.5,243.1 157.4,255.9 164.3 C268.8 171.2,283.6 178.1,299.1 185 C314.6 191.9,331 198.8,349.2 205.7 C367.4 212.6,392.7 219.5,408.2 226.4 C423.8 233.3,432 240.2,442.4 247.1 C452.9 254.1,462.6 263,470.9 267.9 C479.3 272.7,488.9 274.8,492.5 276.1" fill="none" stroke="var(--acc3)" strokeWidth="2.2" />
    <circle cx="171.7" cy="143.6" r="2.6" fill="var(--txt-dim)" />
    <text x="118" y="90" fontFamily="Heebo, sans-serif" fontSize="11.5" fill="var(--txt-faint)">אוסטניט (יציב)</text>
    <text x="420" y="97" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">פרליט</text>
    <text x="420" y="112" fontFamily="Heebo, sans-serif" fontSize="11.5" fill="var(--txt-dim)">(גס למעלה · דק למטה)</text>
    <text x="395" y="215" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">ביינייט</text>
    <text x="345" y="176" fontFamily="Heebo, sans-serif" fontSize="11.5" fill="var(--txt-dim)">טרנספורמציה הושלמה</text>
  </svg>
);

export const FigJominy = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="מבחן ג'ומיני ועקומות קשיות לאורך הדגימה">
    <ellipse cx="127" cy="46" rx="27" ry="7" fill="var(--txt-faint)" fillOpacity="0.14" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <rect x="100" y="46" width="54" height="204" fill="var(--txt-faint)" fillOpacity="0.1" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <line x1="100" y1="250" x2="154" y2="250" stroke="var(--acc2)" strokeWidth="2.6" />
    {[80,120,160,200,240].map(y=>(<line key={y} x1="100" y1={y} x2="107" y2={y} stroke="var(--txt-dim)" strokeWidth="1" />))}
    <path d="M110 316 L144 316 L134 300 L120 300 Z" fill="var(--txt-dim)" fillOpacity="0.16" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <path d="M120 300 L134 300 L134 250 L120 250 Z" fill="var(--acc2)" fillOpacity="0.12" stroke="var(--acc2)" strokeWidth="1" />
    {[290,275,260].map(y=>(<polygon key={y} points={`121,${y} 133,${y} 127,${y-9}`} fill="var(--acc2)" />))}
    <text x="127" y="335" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)">סילון מים 24°C</text>
    <line x1="182" y1="250" x2="182" y2="70" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <polygon points="178.5,78 182,70 185.5,78" fill="var(--txt-dim)" />
    <line x1="176" y1="250" x2="188" y2="250" stroke="var(--txt-dim)" strokeWidth="1.2" />
    <text x="210" y="160" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)" transform="rotate(-90 210 160)">מרחק מהקצה המוקרש d</text>
    <line x1="290" y1="40" x2="290" y2="310" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <line x1="290" y1="310" x2="540" y2="310" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="536.5,306.5 544,310 536.5,313.5" fill="var(--txt-dim)" />
    {[0,10,20,30,40,50].map(d=>{
      const x=290+d/50*245;
      return (<g key={d}><line x1={x} y1="310" x2={x} y2="315" stroke="var(--txt-dim)" strokeWidth="1" /><text x={x} y="327" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)">{d}</text></g>);
    })}
    {[20,25,30,35,40,45,50,55].map(h=>{
      const y=310-(h-20)/35*260;
      return (<g key={h}><line x1="285" y1={y} x2="290" y2={y} stroke="var(--txt-dim)" strokeWidth="1" /><text x="281" y={y+4} textAnchor="end" fontFamily="Heebo, sans-serif" fontSize="11" fill="var(--txt-dim)">{h}</text></g>);
    })}
    <text x="415" y="352" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">מרחק ג'ומיני (מ"מ)</text>
    <text x="252" y="175" textAnchor="middle" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)" transform="rotate(-90 252 175)">קשיות HRC</text>
    <path d="M290 50 L302.3 53.1 L314.5 56 L326.8 58.9 L339 61.7 L351.3 64.4 L363.5 67.1 L375.8 69.7 L388 72.2 L400.3 74.6 L412.5 77 L424.8 79.3 L437 81.6 L449.3 83.8 L461.5 85.9 L473.8 88 L486 90 L498.3 91.9 L510.5 93.8 L522.8 95.7 L535 97.5" fill="none" stroke="var(--acc)" strokeWidth="2.4" />
    <path d="M290 50 L302.3 157 L314.5 214.3 L326.8 245 L339 261.4 L351.3 270.2 L363.5 274.9 L375.8 277.4 L388 278.7 L400.3 279.5 L412.5 279.8 L424.8 280 L437 280.2 L449.3 280.2 L461.5 280.2 L473.8 280.3 L486 280.3 L498.3 280.3 L510.5 280.3 L522.8 280.3 L535 280.3" fill="none" stroke="var(--warn)" strokeWidth="2.4" />
    <line x1="452" y1="60" x2="470" y2="60" stroke="var(--acc)" strokeWidth="2.4" />
    <text x="475" y="64" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)">4340</text>
    <line x1="452" y1="78" x2="470" y2="78" stroke="var(--warn)" strokeWidth="2.4" />
    <text x="475" y="82" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--txt)">1040</text>
  </svg>
);

export const FigPolymerStressStrain = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="עקומות מאמץ-מעוות עבור פולימרים שביר, פלסטי ואלסטומר">
    <line x1="70" y1="335" x2="70" y2="28" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="66.5,36 70,28 73.5,36" fill="var(--txt-dim)" />
    <line x1="65" y1="330" x2="538" y2="330" stroke="var(--txt-dim)" strokeWidth="1.5" />
    <polygon points="534,326.5 542,330 534,333.5" fill="var(--txt-dim)" />
    <text x="546" y="334" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">ε</text>
    <text x="76" y="30" fontFamily="Heebo, sans-serif" fontSize="13" fill="var(--txt)">σ</text>
    <path d="M70 330 L81.25 119.75" fill="none" stroke="var(--bad)" strokeWidth="2.4" />
    <line x1="77" y1="115.3" x2="85.5" y2="124.2" stroke="var(--bad)" strokeWidth="2" />
    <line x1="85.5" y1="115.3" x2="77" y2="124.2" stroke="var(--bad)" strokeWidth="2" />
    <text x="90" y="205" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--bad)">שביר</text>
    <path d="M70 330 C70.8 315.5,73.3 267.2,74.5 243 C75.8 218.8,76.6 196.2,77.5 185 C78.4 173.8,78.5 174.4,79.8 175.9 C81 177.4,79.1 191.5,85 194.1 C90.9 196.6,102.5 192.2,115 191.2 C127.5 190.1,145 188.9,160 187.9 C175 186.9,191.3 186.1,205 185 C218.8 183.9,232.5 182.9,242.5 181.4 C252.5 179.9,258.1 182.6,265 175.9 C271.9 169.3,278.1 155.7,283.8 141.5 C289.4 127.3,294.1 107.7,298.8 90.8 C303.4 73.8,309.4 48.5,311.5 40" fill="none" stroke="var(--acc)" strokeWidth="2.4" />
    <circle cx="311.5" cy="40" r="3.4" fill="var(--acc)" />
    <text x="150" y="177" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--acc)">פלסטי</text>
    <path d="M70 330 C76.3 328.2,88.8 323.4,107.5 319.1 C126.3 314.9,157.5 308.9,182.5 304.6 C207.5 300.4,232.5 297.4,257.5 293.8 C282.5 290.1,307.5 287.1,332.5 282.9 C357.5 278.6,388.8 273.8,407.5 268.4 C426.3 262.9,435 258.1,445 250.3 C455 242.4,461.3 233.3,467.5 221.3 C473.8 209.2,478.1 195.9,482.5 177.8 C486.9 159.6,490.6 132.4,493.8 112.5 C496.9 92.6,500 67.2,501.3 58.1" fill="none" stroke="var(--ok)" strokeWidth="2.4" />
    <circle cx="501.3" cy="58.1" r="3.4" fill="var(--ok)" />
    <text x="245" y="284" fontFamily="Heebo, sans-serif" fontSize="12" fill="var(--ok)">אלסטומר</text>
  </svg>
);
