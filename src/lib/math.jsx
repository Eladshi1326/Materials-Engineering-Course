/* רינדור נוסחאות בסגנון הספר — KaTeX
   - Fml: קומפוננטת נוסחה (block/inline). מעדיפה latex מוכן; אחרת ממירה טקסט רגיל.
   - typesetProse: משדרג נוסחאות שמופיעות בתוך ה-HTML של השיעור (span.en / .fml).
*/
import katex from "katex";

/* ------------------------------------------------ המרת טקסט רגיל → TeX */
const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁺": "+", "⁻": "-", "ⁿ": "n" };
const SUB = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };
const GREEK = {
  "α": "\\alpha", "β": "\\beta", "γ": "\\gamma", "δ": "\\delta", "ε": "\\varepsilon", "ζ": "\\zeta",
  "η": "\\eta", "θ": "\\theta", "λ": "\\lambda", "μ": "\\mu", "ν": "\\nu", "ξ": "\\xi", "π": "\\pi",
  "ρ": "\\rho", "σ": "\\sigma", "τ": "\\tau", "φ": "\\phi", "χ": "\\chi", "ψ": "\\psi", "ω": "\\omega",
  "Δ": "\\Delta", "Γ": "\\Gamma", "Θ": "\\Theta", "Λ": "\\Lambda", "Σ": "\\Sigma", "Φ": "\\Phi",
  "Ψ": "\\Psi", "Ω": "\\Omega", "∂": "\\partial", "∞": "\\infty", "ℓ": "\\ell"
};
const OPS = [
  ["≈", " \\approx "], ["≠", " \\ne "], ["≤", " \\le "], ["≥", " \\ge "],
  ["∝", " \\propto "], ["±", " \\pm "], ["×", " \\times "], ["·", " \\cdot "],
  ["→", " \\rightarrow "], ["⇌", " \\rightleftharpoons "], ["⇔", " \\Leftrightarrow "],
  ["⟨", "\\langle "], ["⟩", " \\rangle"], ["√", "\\surd "], ["°", "^{\\circ}"],
  ["½", "\\tfrac{1}{2}"], ["⅓", "\\tfrac{1}{3}"], ["¼", "\\tfrac{1}{4}"], ["⅔", "\\tfrac{2}{3}"], ["¾", "\\tfrac{3}{4}"],
  ["−", "-"], ["–", "-"], ["%", "\\%"], ["…", "\\dots"]
];

const hasHebrew = (s) => /[֐-׿]/.test(s);

/** √(...) → \sqrt{...} עם איזון סוגריים; √x → \sqrt{x} */
function fixSqrt(s) {
  let out = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "√") { out += s[i]; continue; }
    let j = i + 1;
    while (j < s.length && s[j] === " ") j++;
    if (s[j] === "(") {
      let depth = 0, k = j;
      for (; k < s.length; k++) {
        if (s[k] === "(") depth++;
        else if (s[k] === ")") { depth--; if (depth === 0) break; }
      }
      out += "\\sqrt{" + fixSqrt(s.slice(j + 1, k)) + "}";
      i = k;
    } else {
      let k = j;
      while (k < s.length && /[A-Za-z0-9.]/.test(s[k])) k++;
      out += "\\sqrt{" + s.slice(j, k) + "}";
      i = k - 1;
    }
  }
  return out;
}

/** המרה שמרנית של ביטוי טקסטואלי ל-TeX (fallback כשאין latex מהמחבר) */
export function plainToTex(src) {
  if (!src || hasHebrew(src)) return null;
  let s = String(src);

  // משפטים מילוליים באנגלית (בלי '=') — לא נוסחה, עדיף טקסט רגיל
  if (/[A-Za-z]{3,}[^A-Za-z]{1,3}[A-Za-z]{3,}/.test(s) && !s.includes("=")) return null;

  // נוסחה כימית פשוטה: SiO₂, H₂O, Fe₃C → \mathrm{...}
  if (/^[A-Za-z()₀-₉0-9·\s]+$/.test(s) && /[₀-₉]/.test(s) && !/[=<>]/.test(s)) {
    let chem = s.replace(/[₀-₉]+/g, (run) => "_{" + [...run].map((c) => SUB[c]).join("") + "}").replace(/·/g, "\\cdot ");
    return "\\mathrm{" + chem + "}";
  }

  s = fixSqrt(s);
  // רצפי כתב-עילי: r² → r^{2}, Mⁿ⁺ → M^{n+}
  s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/g, (run) => "^{" + [...run].map((c) => SUP[c]).join("") + "}");
  // כתב-תחתי יוניקוד: x₀ → x_{0}
  s = s.replace(/[₀-₉]+/g, (run) => "_{" + [...run].map((c) => SUB[c]).join("") + "}");
  // d_hkl → d_{hkl} (רק כשאחרי _ באות רצף אלפאנומרי)
  s = s.replace(/_([A-Za-z0-9]{2,})/g, "_{$1}");
  // אותיות יווניות
  s = s.replace(/[αβγδεζηθλμνξπρστφχψωΔΓΘΛΣΦΨΩ∂∞ℓ]/g, (c) => GREEK[c] + " ");
  for (const [from, to] of OPS) s = s.split(from).join(to);
  // פונקציות נפוצות
  s = s.replace(/\b(exp|ln|log|sin|cos|tan|erf)\b/g, (m) => (m === "erf" ? "\\operatorname{erf}" : "\\" + m));
  return s.trim();
}

/* ------------------------------------------------ רינדור */
const cache = new Map();

export function texToHtml(tex, display = false) {
  const key = (display ? "D" : "I") + tex;
  if (cache.has(key)) return cache.get(key);
  let html = null;
  try {
    html = katex.renderToString(tex, {
      displayMode: display,
      throwOnError: false,
      strict: false,
      output: "html"
    });
  } catch { html = null; }
  cache.set(key, html);
  return html;
}

/** נוסחה של כרטיס נוסחאות: מעדיפה f.latex, אחרת המרה, אחרת טקסט גולמי */
export function Fml({ tex, plain, block = true }) {
  const t = tex || plainToTex(plain);
  const html = t ? texToHtml(t, block) : null;
  if (html) {
    return (
      <div
        className={"k-fml" + (block ? " k-block" : " k-inline")}
        dir="ltr"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return <div className={block ? "fml" : "mono"} dir="ltr">{plain}</div>;
}

/** סימון משתנה בודד (עמודת "כאשר") */
export function Sym({ children }) {
  const t = plainToTex(String(children ?? ""));
  const html = t ? texToHtml(t, false) : null;
  if (html) return <span className="k-sym" dir="ltr" dangerouslySetInnerHTML={{ __html: html }} />;
  return <span className="s" dir="ltr">{children}</span>;
}

/* ------------------------------------------------ שדרוג נוסחאות בתוך פרוזה */
const MATHY = /[=√⟨∝≤≥±⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻₀-₉]|_[A-Za-z]/;
const WORDY = /[A-Za-z]{3,}[\s-][A-Za-z]{3,}/; // משפטים באנגלית — לא נוסחה

/** עובר על אלמנט שהוזרק מ-HTML ומחליף נוסחאות טקסטואליות ברינדור KaTeX */
export function typesetProse(root) {
  if (!root) return;
  root.querySelectorAll("span.en:not(.k-done), span.fml:not(.k-done), div.fml:not(.k-done)").forEach((el) => {
    const txt = el.textContent || "";
    const isBlock = el.tagName === "DIV";
    if (hasHebrew(txt) || txt.length > 90) return;
    if (!isBlock && (!MATHY.test(txt) || (WORDY.test(txt) && !txt.includes("=")))) return;
    const t = plainToTex(txt);
    if (!t) return;
    const html = texToHtml(t, isBlock);
    if (!html) return;
    el.innerHTML = html;
    el.classList.add("k-done");
    el.setAttribute("dir", "ltr");
  });
}
