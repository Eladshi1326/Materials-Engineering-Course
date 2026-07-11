import { useSyncExternalStore } from "react";
import { CHAPTERS, RANKS, BADGES, PASS, UNITS } from "../data/index.js";
import { toast, confetti } from "./ui.js";

const KEY = "callister_he_v2";
const LEGACY = "callister_he_v1";

const blank = () => ({
  xp: 0,
  answered: 0,
  correct: 0,
  badges: [],
  streak: { count: 0, last: null, best: 0 },
  ch: {},
  exams: {},
  name: "",
  settings: { free: true, theme: "light", fs: "md" }
});

function readLS() {
  if (typeof localStorage === "undefined") return blank();
  try {
    const raw = localStorage.getItem(KEY) || localStorage.getItem(LEGACY);
    if (!raw) return blank();
    const s = Object.assign(blank(), JSON.parse(raw));
    if (!s.settings) s.settings = blank().settings;
    if (!s.streak) s.streak = blank().streak;
    if (!s.ch) s.ch = {};
    if (!s.exams) s.exams = {};
    return s;
  } catch {
    return blank();
  }
}

let state = readLS();
const subs = new Set();

function persist() {
  if (typeof localStorage === "undefined") return;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* quota */ }
}

/** מפרסם עדכון: יוצר snapshot חדש כדי ש-React יזהה שינוי */
function commit() {
  state = { ...state };
  persist();
  subs.forEach((f) => f());
}

const subscribe = (f) => { subs.add(f); return () => subs.delete(f); };
const getState = () => state;

export function useStore() {
  return useSyncExternalStore(subscribe, getState, getState);
}
export { getState };

/* ------------------------------------------------------------------ chapters */
export function chap(id) {
  const k = String(id);
  if (!state.ch[k]) {
    state.ch[k] = { read: [], quizBest: 0, attempts: 0, cards: false, prac: 0, fdrill: 0, weak: [] };
  }
  if (!state.ch[k].weak) state.ch[k].weak = [];
  if (state.ch[k].fdrill == null) state.ch[k].fdrill = 0;
  if (state.ch[k].prac == null) state.ch[k].prac = 0;
  return state.ch[k];
}

export const isDone = (id) => chap(id).quizBest >= PASS;

/* כל התוכן פתוח — המסלול הוא המלצה, לא נעילה */
export function isUnlocked() { return true; }

export const unitDone = (u) => u.chapters.every(isDone);
export const allDone = () => CHAPTERS.every((c) => isDone(c.id));
export const completedCount = () => CHAPTERS.filter((c) => isDone(c.id)).length;

export function chapterProgress(id) {
  const c = CHAPTERS.find((x) => x.id === Number(id));
  if (!c) return 0;
  const p = chap(id);
  const parts = [
    p.read.length / Math.max(1, c.sections.length),
    Math.min(1, p.quizBest / PASS),
    p.cards ? 1 : 0,
    Math.min(1, p.prac / 80)
  ];
  return Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100);
}

export const overallProgress = () =>
  Math.round(CHAPTERS.reduce((a, c) => a + chapterProgress(c.id), 0) / CHAPTERS.length);

export function nextChapter() {
  for (const c of CHAPTERS) if (isUnlocked(c.id) && !isDone(c.id)) return c;
  return CHAPTERS.find((c) => !isDone(c.id)) || CHAPTERS[0];
}

/* ------------------------------------------------------------------ ranks + xp */
export function rankOf(xp) {
  let idx = 0;
  RANKS.forEach((r, i) => { if (xp >= r.xp) idx = i; });
  const rank = RANKS[idx];
  const next = RANKS[idx + 1] || null;
  const pct = next ? Math.round(((xp - rank.xp) / (next.xp - rank.xp)) * 100) : 100;
  return { rank, idx, next, pct: Math.max(0, Math.min(100, pct)) };
}

export function addXP(n, silent) {
  if (!n) return;
  const before = rankOf(state.xp).idx;
  state.xp += n;
  commit();
  if (!silent) toast("+" + n + " XP");
  const after = rankOf(state.xp).idx;
  if (after > before) {
    setTimeout(() => {
      toast(`דרגה חדשה: ${RANKS[after].name} ${RANKS[after].icon}`, "gold");
      confetti();
    }, 650);
  }
}

export function grantBadge(id) {
  if (state.badges.includes(id)) return false;
  const b = BADGES.find((x) => x.id === id);
  if (!b) return false;
  state.badges.push(id);
  commit();
  setTimeout(() => { toast(`הישג חדש: ${b.t} ${b.ic}`, "gold"); confetti(); }, 400);
  return true;
}

/* ------------------------------------------------------------------ streak */
const today = () => new Date().toISOString().slice(0, 10);

export function touchStreak() {
  const t = today();
  if (state.streak.last === t) return;
  const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  state.streak.count = state.streak.last === y ? state.streak.count + 1 : 1;
  state.streak.last = t;
  state.streak.best = Math.max(state.streak.best || 0, state.streak.count);
  if (state.streak.count >= 7) grantBadge("streak7");
  commit();
}

/* ------------------------------------------------------------------ mutations */
export function markRead(chId, secId) {
  const p = chap(chId);
  if (p.read.includes(secId)) return false;
  p.read.push(secId);
  commit();
  addXP(10);
  touchStreak();
  return true;
}

export function markWeak(chId, qText) {
  const p = chap(chId);
  if (!p.weak.includes(qText)) p.weak.unshift(qText);
  p.weak = p.weak.slice(0, 12);
  commit();
}
export function clearWeak(chId) { chap(chId).weak = []; commit(); }

export function recordAnswer(ok) {
  state.answered++;
  if (ok) state.correct++;
  commit();
  if (state.answered >= 100) grantBadge("q100");
  if (state.answered >= 500) grantBadge("q500");
}

export function recordQuiz(chId, pct) {
  const p = chap(chId);
  p.attempts++;
  const wasDone = p.quizBest >= PASS;
  p.quizBest = Math.max(p.quizBest, pct);
  commit();
  if (pct >= PASS) {
    if (completedCount() === 1) grantBadge("first");
    if (completedCount() >= 11) grantBadge("half");
    if (allDone()) grantBadge("all");
    if (pct >= 90) clearWeak(chId);
  }
  return wasDone;
}

export function recordExam(key, pct) {
  if (!state.exams[key]) state.exams[key] = { best: 0 };
  state.exams[key].best = Math.max(state.exams[key].best, pct);
  commit();
}
export const examBest = (key) => (state.exams[key] || {}).best || 0;

export function recordCards(chId) {
  const p = chap(chId);
  const first = !p.cards;
  p.cards = true;
  commit();
  if (first) { addXP(40); grantBadge("cards"); }
  touchStreak();
  return first;
}

export function recordPractice(chId, pct) {
  const p = chap(chId);
  const isBest = pct > p.prac;
  p.prac = Math.max(p.prac, pct);
  commit();
  touchStreak();
  if (pct >= 80) grantBadge("match");
  if (pct === 100) grantBadge("speed");
  return isBest;
}

export function recordFormulaDrill(chId, score) {
  const p = chap(chId);
  const isBest = score > p.fdrill;
  p.fdrill = Math.max(p.fdrill, score);
  commit();
  touchStreak();
  return isBest;
}

/* ------------------------------------------------------------------ settings */
export function setSetting(k, v) {
  state.settings = { ...state.settings, [k]: v };
  commit();
  applyPrefs();
}
export function setName(n) { state.name = n; commit(); }

export function applyPrefs() {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", state.settings.theme || "light");
  document.documentElement.setAttribute("data-fs", state.settings.fs || "md");
}

export function resetAll() {
  state = blank();
  persist();
  subs.forEach((f) => f());
  applyPrefs();
}

export function importState(obj) {
  state = Object.assign(blank(), obj);
  commit();
  applyPrefs();
}

export const weakChapters = () =>
  CHAPTERS
    .map((c) => ({ c, n: (chap(c.id).weak || []).length }))
    .filter((x) => x.n > 0 && chap(x.c.id).quizBest < 90)
    .sort((a, b) => b.n - a.n);

export { UNITS, CHAPTERS, RANKS, BADGES, PASS };
