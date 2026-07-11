import ch01 from "./chapters/ch01.js";
import ch02 from "./chapters/ch02.js";
import ch03 from "./chapters/ch03.js";
import ch04 from "./chapters/ch04.js";
import ch05 from "./chapters/ch05.js";
import ch06 from "./chapters/ch06.js";
import ch07 from "./chapters/ch07.js";
import ch08 from "./chapters/ch08.js";
import ch09 from "./chapters/ch09.js";
import ch10 from "./chapters/ch10.js";
import ch11 from "./chapters/ch11.js";
import ch12 from "./chapters/ch12.js";
import ch13 from "./chapters/ch13.js";
import ch14 from "./chapters/ch14.js";
import ch15 from "./chapters/ch15.js";
import ch16 from "./chapters/ch16.js";
import ch17 from "./chapters/ch17.js";
import ch18 from "./chapters/ch18.js";
import ch19 from "./chapters/ch19.js";
import ch20 from "./chapters/ch20.js";
import ch21 from "./chapters/ch21.js";
import ch22 from "./chapters/ch22.js";

import x01 from "./extras/ch01.js";
import x02 from "./extras/ch02.js";
import x03 from "./extras/ch03.js";
import x04 from "./extras/ch04.js";
import x05 from "./extras/ch05.js";
import x06 from "./extras/ch06.js";
import x07 from "./extras/ch07.js";
import x08 from "./extras/ch08.js";
import x09 from "./extras/ch09.js";
import x10 from "./extras/ch10.js";
import x11 from "./extras/ch11.js";
import x12 from "./extras/ch12.js";
import x13 from "./extras/ch13.js";
import x14 from "./extras/ch14.js";
import x15 from "./extras/ch15.js";
import x16 from "./extras/ch16.js";
import x17 from "./extras/ch17.js";
import x18 from "./extras/ch18.js";
import x19 from "./extras/ch19.js";
import x20 from "./extras/ch20.js";
import x21 from "./extras/ch21.js";
import x22 from "./extras/ch22.js";

const EXTRAS = {
  1: x01, 2: x02, 3: x03, 4: x04, 5: x05, 6: x06, 7: x07, 8: x08, 9: x09, 10: x10, 11: x11,
  12: x12, 13: x13, 14: x14, 15: x15, 16: x16, 17: x17, 18: x18, 19: x19, 20: x20, 21: x21, 22: x22
};

/* מיזוג תוספות לפרק:
   - rebalance: מסיחים משוכתבים (איזון אורך התשובות) לפי טקסט השאלה
   - examExtra: שאלות חדשות (בעיקר חישוביות) שמצטרפות למאגר המבחן
   - practice:  שאלות לתרגול המדורג בלבד — לא מופיעות במבחן */
function withExtras(c) {
  const x = EXTRAS[c.id] || {};
  const map = new Map((x.rebalance || []).map((o) => [o.q, o]));
  const fix = (arr) => arr.map((q) => {
    const o = map.get(q.q);
    return o ? { ...q, options: o.options, answer: o.answer } : q;
  });
  return {
    ...c,
    quiz: [...fix(c.quiz), ...(x.examExtra || [])],
    challenge: fix(c.challenge || []),
    practice: x.practice || []
  };
}

export const CHAPTERS = [
  ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10, ch11,
  ch12, ch13, ch14, ch15, ch16, ch17, ch18, ch19, ch20, ch21, ch22
].map(withExtras).sort((a, b) => a.id - b.id);

export const byId = (id) => CHAPTERS.find((c) => c.id === Number(id));

export const UNITS = [
  { id: 1, name: "יסודות המבנה", desc: "מהאטום אל הגביש: מה בונה חומר, ואיך פגמים ודיפוזיה מכתיבים התנהגות.", chapters: [1, 2, 3, 4, 5] },
  { id: 2, name: "התנהגות מכנית וכשל", desc: "מאמץ, מעוות, נקעים, מנגנוני חיזוק, שבר, עייפות וזחילה.", chapters: [6, 7, 8] },
  { id: 3, name: "פאזות, התמרות ועיבוד", desc: "דיאגרמות פאזה, קינטיקה של התמרות וטיפולי חום בסגסוגות.", chapters: [9, 10, 11] },
  { id: 4, name: "משפחות החומרים", desc: "קרמיקה, פולימרים ומרוכבים — מבנה, תכונות ועיבוד.", chapters: [12, 13, 14, 15, 16] },
  { id: 5, name: "תכונות פיזיקליות ויישום", desc: "קורוזיה, חשמל, חום, מגנטיות, אופטיקה ושיקולי הנדסה.", chapters: [17, 18, 19, 20, 21, 22] }
];

export const RANKS = [
  { xp: 0, name: "מתלמד", icon: "◇" },
  { xp: 600, name: "חניך חומרים", icon: "◈" },
  { xp: 1800, name: "טכנאי חומרים", icon: "◆" },
  { xp: 3800, name: "מהנדס זוטר", icon: "⬡" },
  { xp: 7000, name: "מהנדס חומרים", icon: "⬢" },
  { xp: 11500, name: "חוקר חומרים", icon: "✦" },
  { xp: 18000, name: "מומחה חומרים", icon: "✧" },
  { xp: 27000, name: "מאסטר קליסטר", icon: "★" }
];

export const BADGES = [
  { id: "first", ic: "🜂", t: "צעד ראשון", d: "השלמת את הפרק הראשון" },
  { id: "perfect", ic: "◎", t: "מושלם", d: "100% במבחן פרק" },
  { id: "q100", ic: "∑", t: "מאה שאלות", d: "ענית על 100 שאלות" },
  { id: "q500", ic: "∞", t: "חמש מאות", d: "ענית על 500 שאלות" },
  { id: "streak7", ic: "🜄", t: "שבוע ברצף", d: "7 ימי לימוד רצופים" },
  { id: "cards", ic: "▤", t: "כרטיסן", d: "סיימת חפיסת כרטיסיות מלאה" },
  { id: "match", ic: "⟡", t: "מתרגל מדורג", d: "תרגול מדורג בציון 80 ומעלה" },
  { id: "speed", ic: "∫", t: "שליטה מלאה", d: "תרגול מדורג מושלם — 100%" },
  { id: "unit1", ic: "①", t: "יסודות המבנה", d: "עברת את מבחן יחידה 1" },
  { id: "unit2", ic: "②", t: "התנהגות מכנית", d: "עברת את מבחן יחידה 2" },
  { id: "unit3", ic: "③", t: "פאזות והתמרות", d: "עברת את מבחן יחידה 3" },
  { id: "unit4", ic: "④", t: "משפחות החומרים", d: "עברת את מבחן יחידה 4" },
  { id: "unit5", ic: "⑤", t: "תכונות פיזיקליות", d: "עברת את מבחן יחידה 5" },
  { id: "half", ic: "◐", t: "חצי הדרך", d: "11 פרקים הושלמו" },
  { id: "all", ic: "⬢", t: "כל הפרקים", d: "22 פרקים הושלמו" },
  { id: "final", ic: "★", t: "מומחה חומרים", d: "עברת את המבחן המסכם על כל הספר" }
];

export const PASS = 75;
export const EXAM_PASS = 80;
export const FINAL_PASS = 80;
