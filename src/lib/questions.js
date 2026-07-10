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

export function chapterChallenge(c) {
  const arr = c.challenge?.length ? c.challenge : c.quiz.filter((q) => q.level === "hard");
  return shuffle(arr).map((q) => ({ level: "hard", ...q }));
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
