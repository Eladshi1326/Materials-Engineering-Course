# מעבדת החומרים ⬡

אפליקציית **React** ללימוד מדע והנדסת חומרים בעברית (RTL), על בסיס
**Materials Science and Engineering: An Introduction** מאת *Callister & Rethwisch*, מהדורה 9.

`React 18` · `Vite 5` · `React Router 6` · אפס backend · הכול נשמר ב-`localStorage`

---

## הפעלה מהירה

| רוצה... | עשה |
|---|---|
| להריץ מקומית | דאבל-קליק על **`dev.bat`** (או `npm install && npm run dev`) |
| להעלות לגיטהאב | דאבל-קליק על **`push.bat`** |
| לבנות לפרודקשן | `npm run build` → התוצאה ב-`dist/` |
| לבדוק את התוכן | `npm run check` |

> `push.bat` עושה הכול לבד: `git init` אם צריך, מוסיף את ה-remote, מבצע `add` + `commit` + `push`,
> ואם הענף המרוחק מקדים — מסנכרן עם `pull --rebase` ומנסה שוב.

---

## מה יש בקורס

| | |
|---|---|
| **22 פרקים** | כל פרקי הספר, כתובים מחדש בעברית ברמת מומחה |
| **192 סעיפים** | לכל סעיף: הסבר מלא, כפתור "עדיין לא הבנתי" שפותח הסבר חלופי בשפה פשוטה, ואנלוגיה |
| **508 שאלות** | 407 שאלות מבחן + 101 שאלות אתגר — כל אחת עם הסבר ורמז |
| **230 נוסחאות** | בכתיב מתמטי מלא (KaTeX) כמו בספר, עם פירוט המשתנים והערות שימוש |
| **585 מונחים** | מילון דו-לשוני עם חיפוש חי |
| **95 דוגמאות פתורות** | חישובים מספריים מלאים, שלב-אחר-שלב |
| **345 כרטיסיות** | חפיסות שינון עם היפוך תלת-ממדי |
| **טעויות נפוצות** | טעות ↔ תיקון, לכל פרק |

### פעילויות
- **מבחן פרק** — 14 שאלות, רמזים, הסבר לכל תשובה, ציון מעבר 75
- **כרטיסיות** — כרטיס שלא ידעת חוזר לסוף החפיסה
- **משחק התאמה** — מונח ↔ הגדרה, עם רצפי בונוס, ניקוד ושיא אישי
- **שליטה בנוסחאות** — זיהוי והתאמת נוסחאות הפרק ברינדור מתמטי, ללא לחץ זמן
- **אתגר מהיר** — שאלות קשות, 30 שניות לשאלה, 3 חיים
- **5 מבחני יחידה** — 20 שאלות כל אחד
- **מבחן הסמכה** — 50 שאלות מכל הספר → תעודה מודפסת

### מערכת ההתקדמות
- **הכול פתוח** — אין נעילות; המסלול המומלץ הוא לפי סדר הפרקים, ופרק נחשב "הושלם" אחרי **75+** במבחן שלו
- **מבחני יחידה ומבחן ההסמכה** פתוחים תמיד, עם המלצה לגשת אליהם אחרי השלמת הפרקים (מעבר: 80)
- **XP ו-8 דרגות**: מ*מתלמד* ועד *מאסטר קליסטר*
- **16 הישגים**, רצף לימוד יומי, ומעקב **"נושאים לחיזוק"** לפי שאלות שנכשלת בהן — הן חוזרות בתרגול הבא
- ייצוא/ייבוא התקדמות כ-JSON בהגדרות

---

## מבנה הפרויקט

```
index.html               נקודת הכניסה של Vite
vite.config.js           base:"./" — עובד ב-Netlify, ב-GitHub Pages ומקומית
push.bat / dev.bat       סקריפטים לוינדוס
scripts/
  validate-content.mjs   בדיקת סכמה לכל 22 הפרקים
src/
  main.jsx               HashRouter + createRoot
  App.jsx                כל הנתיבים
  styles/main.css        מערכת העיצוב: RTL, כהה/בהיר, מובייל
  lib/
    store.js             מצב גלובלי (useSyncExternalStore) + localStorage + XP/דרגות/נעילה
    questions.js         בחירת שאלות למבחנים ולמבחני יחידה
    ui.js                toast, confetti, shuffle
  components/
    TopBar.jsx  Bits.jsx  QuizRunner.jsx
  pages/
    Dashboard  MapPage  UnitList  Chapter  ChapterQuiz  Challenge
    Flashcards  Matching  UnitExam  FinalExam  Glossary
    Achievements  Settings  Certificate
  data/
    index.js             CHAPTERS, UNITS, RANKS, BADGES, ספי מעבר
    chapters/ch01…ch22.js
```

### סכמת פרק

```js
export default {
  id, unit, title, titleEn, pages, minutes, tagline,
  objectives: [],
  sections:  [{ id, title, html, simple, analogy }],
  formulas:  [{ name, expr, where: [{ sym, desc }], note }],
  terms:     [{ he, en, def }],
  summary:   [],
  pitfalls:  [{ wrong, right }],
  worked:    [{ q, steps: [], answer }],
  flashcards:[{ front, back }],
  matching:  [{ a, b }],
  quiz:      [{ q, options: [4], answer: 0..3, explain, hint, level }],
  challenge: [{ ... }]
};
```

`npm run check` מוודא שכל 22 הקבצים עומדים בסכמה (4 מסיחים, אינדקס תשובה תקין, אין מסיחים כפולים, לכל סעיף יש `simple`).

---

## פריסה

**Netlify** — חבר את הריפו. `netlify.toml` כבר מוגדר:
`command = "npm run build"`, `publish = "dist"`, Node 20.

**GitHub Pages** — הוורקפלואו ב-`.github/workflows/deploy.yml` בונה ומעלה בכל דחיפה ל-`main`.
צריך רק להפעיל: Settings → Pages → Source: **GitHub Actions**.

הניתוב הוא `HashRouter`, אז אין 404 ברענון בשום פלטפורמה.

---

## קיצורי מקלדת

| מקש | פעולה |
|---|---|
| `רווח` | היפוך כרטיסייה |

---

## רישיון ותוכן

הקוד — חופשי לשימוש אישי ולימודי.
התוכן מבוסס על ספרו של Callister; זכויות הספר שמורות למחברים ולהוצאת Wiley.
הספר עצמו לא נכלל בריפו (ראה `.gitignore`).
