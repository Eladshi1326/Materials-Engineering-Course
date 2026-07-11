/* רישום האיורים: מיפוי סעיף ← איורים.
   האיורים הם דיאגרמות SVG מקוריות שמציגות את המדע שבספר (לא העתקי אמנות). */
import { FigBondEnergy, FigBondTypes, FigFcc, FigBcc } from "./figs1.jsx";
import { FigHcp, FigMiller, FigBragg, FigAmorphous } from "./figs2.jsx";
import { FigPointDefects, FigDislocations, FigGrainBoundary, FigDiffusionProfile } from "./figs3.jsx";
import { FigArrhenius, FigStressStrain, FigResilienceToughness, FigTrueVsEng } from "./figs4.jsx";
import { FigSlipGeometry, FigHallPetch, FigSnCurve, FigCreepCurve } from "./figs5.jsx";
import { FigIsomorphous, FigLeverRule, FigEutectic, FigFeC } from "./figs6.jsx";
import { FigNucleation, FigTtt, FigJominy, FigPolymerStressStrain } from "./figs7.jsx";
import { FigRuleOfMixtures, FigBands, FigHysteresis, FigEmSpectrum } from "./figs8.jsx";

const FIGS = {
  "2.5": [{ C: FigBondEnergy, cap: "אנרגיית קשר בין שני אטומים: משיכה, דחייה והאנרגיה נטו. מרחק שיווי המשקל r₀ בתחתית הבור, ועומק הבור E₀ הוא אנרגיית הקשר." }],
  "2.6": [{ C: FigBondTypes, cap: "שלושת הקשרים הראשוניים: יוני (מסירת אלקטרון), קוולנטי (שיתוף אלקטרונים) ומתכתי (ים אלקטרונים חופשיים)." }],
  "3.2": [
    { C: FigFcc, cap: "תא יחידה FCC — אטומים בקודקודים ובמרכזי הפאות. מגע לאורך אלכסון הפאה: a = 2R√2." },
    { C: FigBcc, cap: "תא יחידה BCC — אטומים בקודקודים ואטום במרכז הגוף. מגע לאורך אלכסון הגוף: a = 4R/√3." },
    { C: FigHcp, cap: "מבנה HCP — ערימת מישורים צפופים ברצף ABAB, עם יחס אידיאלי c/a = 1.633." }
  ],
  "3.6": [{ C: FigMiller, cap: "דוגמה לאינדקסי מילר: המישור (110) והכיוון [111] בתא קובייתי." }],
  "3.9": [{ C: FigBragg, cap: "עקיפת קרני רנטגן: הפרש הדרכים בין קרניים המוחזרות ממישורים סמוכים שווה 2d·sinθ — חוק בראג." }],
  "3.10": [{ C: FigAmorphous, cap: "סדר גבישי (משמאל) מול מבנה אמורפי (מימין) — אותם בלוקים, בלי סדר ארוך-טווח." }],
  "4.2": [{ C: FigPointDefects, cap: "פגמים נקודתיים בסריג: משרה (אתר ריק) ואטום בין-סריגי עצמי הדוחק את שכניו." }],
  "4.6": [{ C: FigDislocations, cap: "נקע קצה — חצי-מישור אטומים נוסף (⊥); וקטור בורגרס b מאונך לקו הנקע." }],
  "4.7": [{ C: FigGrainBoundary, cap: "גבולות גרגיר: אזורי אי-התאמה בין גרגירים בעלי כיווניות שונה; זווית קטנה מול זווית גדולה." }],
  "5.4": [{ C: FigDiffusionProfile, cap: "פרופילי ריכוז C(x) בזמנים עולים בדיפוזיה לא-יציבה — פתרון פונקציית השגיאה של חוק פיק השני." }],
  "5.6": [{ C: FigArrhenius, cap: "גרף ארניוס: ln D מול ‎1/T נותן קו ישר ששיפועו ‎−Q_d/R — כך מחלצים את אנרגיית האקטיבציה." }],
  "6.4": [{ C: FigStressStrain, cap: "עקומת מאמץ-מעוות הנדסית: תחום אלסטי ליניארי, כניעה בשיטת ההיסט 0.002, חוזק מרבי (TS) ושבר." }],
  "6.6": [{ C: FigResilienceToughness, cap: "חוסן (Resilience) — השטח עד הכניעה; קשיחות-שבר (Toughness) — כל השטח עד השבר." }],
  "6.7": [{ C: FigTrueVsEng, cap: "מאמץ אמיתי מול הנדסי: העקומה האמיתית ממשיכה לעלות גם אחרי ההיצרות, כי השטח האמיתי קטן." }],
  "7.3": [{ C: FigSlipGeometry, cap: "גאומטריית שמיד: מאמץ הגזירה הנפתר תלוי בזוויות φ (נורמל המישור) ו-λ (כיוון ההחלקה): τᴿ = σ·cosφ·cosλ." }],
  "7.5": [{ C: FigHallPetch, cap: "יחס הול-פץ': חוזק הכניעה עולה ליניארית עם d^‎−1/2 — גרגירים קטנים מחזקים." }],
  "8.5": [{ C: FigSnCurve, cap: "עקומות S-N בעייפות: פלדה עם גבול עייפות מובהק מול סגסוגת אלומיניום ללא גבול." }],
  "8.7": [{ C: FigCreepCurve, cap: "עקומת זחילה: שלב ראשוני (קצב יורד), משני (קצב קבוע — התכן ההנדסי) ושלישוני (האצה עד כשל)." }],
  "9.4": [{ C: FigIsomorphous, cap: "דיאגרמה איזומורפית (דמוית Cu-Ni): עדשת L+α בין קו הליקווידוס לקו הסולידוס." }],
  "9.5": [{ C: FigLeverRule, cap: "כלל המנוף על קו קשירה: שברי המסה של הפאזות ביחס הפוך לזרועות המנוף." }],
  "9.7": [{ C: FigEutectic, cap: "דיאגרמה אאוטקטית בינארית: שלושה תחומים חד-פאזיים (L, α, β) והנקודה האאוטקטית שבה L → α + β." }],
  "9.10": [{ C: FigFeC, cap: "דיאגרמת ברזל-פחמן (מפושטת): פריט α, אוסטניט γ, צמנטיט Fe₃C, והנקודה האאוטקטואידית 0.76% פחמן ב-727°C." }],
  "10.2": [{ C: FigNucleation, cap: "אנרגיה חופשית של גרעין כתלות ברדיוס: תרומת נפח שלילית, תרומת פנים חיובית, ומחסום ΔG* ברדיוס הקריטי r*." }],
  "10.4": [{ C: FigTtt, cap: "דיאגרמת TTT לפלדה אאוטקטואידית: אף הפרליט, תחום הביינייט וקווי המרטנזיט." }],
  "11.8": [{ C: FigJominy, cap: "מבחן ג'ומיני: הקרשה מקצה אחד ומדידת קשיות לאורך הדגימה — עקומות התאמנות-לחישול לשתי פלדות." }],
  "15.1": [{ C: FigPolymerStressStrain, cap: "שלוש התנהגויות של פולימרים: שביר, פלסטי (עם כניעה והתארכות) ואלסטומר (מעוות ענק הפיך)." }],
  "16.2": [{ C: FigRuleOfMixtures, cap: "כלל התערובות: מודול המרוכב בין הגבול העליון (איזו-מעוות) לגבול התחתון (איזו-מאמץ) כתלות בשבר הנפח." }],
  "18.2": [{ C: FigBands, cap: "ארבעה מבני פסי אנרגיה: מתכת (פס חלקי / חפיפה), מוליך למחצה (פער צר) ומבודד (פער רחב)." }],
  "20.7": [{ C: FigHysteresis, cap: "לולאת היסטרזיס B-H: רוויה, שיור B_r וכוח קוארציבי H_c. חומר רך — לולאה צרה; קשה — רחבה." }],
  "21.1": [{ C: FigEmSpectrum, cap: "הספקטרום האלקטרומגנטי: מגלי רדיו עד קרני γ, עם התחום הנראה (0.4–0.7 מיקרומטר) מוגדל." }]
};

export function SectionFigs({ secId }) {
  const list = FIGS[secId];
  if (!list) return null;
  const ready = list.filter(({ C }) => !C.stub);
  if (!ready.length) return null;
  return (
    <>
      {ready.map(({ C, cap }, i) => (
        <figure className="fig" key={i} dir="ltr">
          <C />
          <figcaption dir="rtl">{cap}</figcaption>
        </figure>
      ))}
    </>
  );
}
