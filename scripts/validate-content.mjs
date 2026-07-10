/* בדיקת תקינות התוכן: npm run check */
import { CHAPTERS } from "../src/data/index.js";

let problems = 0;
const bad = (msg) => { problems += 1; console.log("✘ " + msg); };

if (CHAPTERS.length !== 22) bad(`מספר פרקים: ${CHAPTERS.length} (צפוי 22)`);

const totals = { sections: 0, formulas: 0, terms: 0, worked: 0, flashcards: 0, quiz: 0, challenge: 0 };

for (const c of CHAPTERS) {
  const need = ["id", "unit", "title", "titleEn", "pages", "tagline", "objectives",
    "sections", "formulas", "terms", "summary", "pitfalls", "worked",
    "flashcards", "matching", "quiz"];
  need.forEach((k) => { if (!(k in c)) bad(`פרק ${c.id}: חסר שדה ${k}`); });

  totals.sections += c.sections.length;
  totals.formulas += c.formulas.length;
  totals.terms += c.terms.length;
  totals.worked += c.worked.length;
  totals.flashcards += c.flashcards.length;
  totals.quiz += c.quiz.length;
  totals.challenge += (c.challenge || []).length;

  c.sections.forEach((s) => {
    if (!s.id || !s.title || !s.html || !s.simple) bad(`פרק ${c.id}: סעיף פגום ${s.id}`);
  });

  c.quiz.concat(c.challenge || []).forEach((q, i) => {
    if (!Array.isArray(q.options) || q.options.length !== 4) bad(`פרק ${c.id} שאלה ${i}: אין 4 מסיחים`);
    if (new Set(q.options).size !== 4) bad(`פרק ${c.id} שאלה ${i}: מסיחים כפולים`);
    if (typeof q.answer !== "number" || q.answer < 0 || q.answer > 3) bad(`פרק ${c.id} שאלה ${i}: answer לא תקין`);
    if (!q.explain) bad(`פרק ${c.id} שאלה ${i}: אין הסבר`);
  });

  c.matching.forEach((m, i) => { if (!m.a || !m.b) bad(`פרק ${c.id} התאמה ${i}`); });
  if (new Set(c.matching.map((m) => m.b)).size !== c.matching.length) bad(`פרק ${c.id}: הגדרות התאמה כפולות`);
}

console.log("\nסה\"כ:", totals, "\nשאלות בסך הכול:", totals.quiz + totals.challenge);
console.log(problems === 0 ? "\n✔ כל הבדיקות עברו" : `\n✘ ${problems} בעיות`);
process.exit(problems === 0 ? 0 : 1);
