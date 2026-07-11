import { shuffle, sample } from "./ui.js";
import { chap } from "./store.js";

/** 14 שאלות לפרק: עד 4 שאלות שנכשלת בהן בעבר + תמהיל קל/בינוני/קשה */
export function pickChapterQuiz(c) {
  const weak = new Set(chap(c.id).weak || []);
  const weakQs = c.quiz.filter((q) => weak.has(q.q));
  const pool = c.quiz.filter((q) => !weak.has(q.q));
  const byLvl = (l) => pool.filter((q) => (q.level || "medium") === l);

  let out = sample(weakQs, 4);
  [["easy", 5], ["medium", 6], ["hard", 3]].forEach(([l, n]) => {
    out = out.concat(sample(byLvl(l), n));
  });

  const rest = shuffle(pool.filter((q) => !out.includes(q)));
  while (out.length < 14 && rest.length) out.push(rest.pop());
  return shuffle(out).slice(0, 14);
}

/** שאלות "מהי ההגדרה" שנבנות מזוגות ההתאמה של הפרק — רמה קלה */
export function matchingQuestions(c, n = 4) {
  const pairs = c.matching || [];
  if (pairs.length < 4) return [];
  return sample(pairs, n).map((p) => {
    const options = shuffle([p.b, ...sample(pairs.filter((x) => x.b !== p.b), 3).map((x) => x.b)]);
    return {
      q: `איזו הגדרה מתאימה למונח "${p.a}"?`,
      options,
      answer: options.indexOf(p.b),
      explain: `${p.a} — ${p.b}`,
      hint: "היזכר בהקשר שבו המונח הופיע בפרק.",
      level: "easy"
    };
  });
}

/** תרגול מדורג: קל → בינוני → קשה. משלב הגדרות, שאלות חישוב (c.practice) ושאלות אתגר.
    נפרד ממאגר המבחן (c.quiz) — כך שהמבחן בוחן שאלות דומות בסגנון אך שונות. */
export function buildPractice(c) {
  const calc = c.practice || [];
  const byLvl = (l) => calc.filter((q) => (q.level || "medium") === l);
  const easy = shuffle([...matchingQuestions(c, 4), ...byLvl("easy")]).slice(0, 5);
  const medium = shuffle(byLvl("medium")).slice(0, 5);
  const hardPool = [...byLvl("hard"), ...(c.challenge || [])];
  const seen = new Set();
  const hard = shuffle(hardPool).filter((q) => !seen.has(q.q) && seen.add(q.q)).slice(0, 5)
    .map((q) => ({ level: "hard", ...q }));
  return [...easy, ...medium.map((q) => ({ level: "medium", ...q })), ...hard];
}

const poolOf = (c) => c.quiz.concat(c.challenge || []).map((q) => ({ ...q, _ch: c.id }));

/** דגימה מאוזנת בין הפרקים */
export function examQuestions(chapters, n) {
  const per = Math.max(1, Math.floor(n / chapters.length));
  let out = [];
  let rest = [];
  chapters.forEach((c) => {
    const p = shuffle(poolOf(c));
    out = out.concat(p.slice(0, per));
    rest = rest.concat(p.slice(per));
  });
  rest = shuffle(rest);
  while (out.length < n && rest.length) out.push(rest.pop());
  return shuffle(out).slice(0, n);
}
