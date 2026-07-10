import { useRef } from "react";
import { useStore, setSetting, setName, resetAll, importState, getState } from "../lib/store.js";
import { toast } from "../lib/ui.js";

const Row = ({ t, d, children }) => (
  <div className="setrow">
    <div className="info"><div className="t">{t}</div><div className="d">{d}</div></div>
    {children}
  </div>
);

export default function SettingsPage() {
  const S = useStore();
  const fileRef = useRef(null);

  const doExport = () => {
    const blob = new Blob([JSON.stringify(getState(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "callister-progress.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const doImport = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      try { importState(JSON.parse(rd.result)); toast("ההתקדמות יובאה"); }
      catch { toast("קובץ לא תקין"); }
    };
    rd.readAsText(f);
  };

  return (
    <>
      <h1 className="h1">הגדרות</h1>

      <div className="card pad mt2">
        <Row t="מצב חופשי" d="מבטל את נעילת הפרקים ומאפשר לדלג לכל פרק. מומלץ להשאיר כבוי כדי ללמוד בשלבים.">
          <button
            className={"switch" + (S.settings.free ? " on" : "")}
            onClick={() => {
              const v = !S.settings.free;
              setSetting("free", v);
              toast(v ? "מצב חופשי הופעל — כל הפרקים פתוחים" : "מצב חופשי כובה — הפרקים ננעלו מחדש");
            }}
          >
            <i />
          </button>
        </Row>

        <Row t="גודל טקסט" d="התאמת גודל הגופן לנוחות הקריאה.">
          <div className="seg">
            {[["sm", "קטן"], ["md", "רגיל"], ["lg", "גדול"]].map(([k, label]) => (
              <button key={k} className={S.settings.fs === k ? "on" : ""} onClick={() => setSetting("fs", k)}>{label}</button>
            ))}
          </div>
        </Row>

        <Row t="מצב תצוגה" d="כהה או בהיר.">
          <div className="seg">
            {[["dark", "כהה"], ["light", "בהיר"]].map(([k, label]) => (
              <button key={k} className={S.settings.theme === k ? "on" : ""} onClick={() => setSetting("theme", k)}>{label}</button>
            ))}
          </div>
        </Row>

        <Row t="שמך (לתעודה)" d="יופיע בתעודת ההסמכה בסיום.">
          <input
            className="txt-in"
            defaultValue={S.name}
            placeholder="שם מלא"
            onBlur={(e) => { setName(e.target.value.trim()); toast("נשמר"); }}
          />
        </Row>

        <Row t="גיבוי התקדמות" d="הורדה או טעינה של קובץ JSON עם כל ההתקדמות שלך.">
          <div className="row">
            <button className="btn btn-sm" onClick={doExport}>ייצוא</button>
            <button className="btn btn-sm" onClick={() => fileRef.current?.click()}>ייבוא</button>
            <input ref={fileRef} type="file" accept="application/json" hidden onChange={doImport} />
          </div>
        </Row>

        <Row t="איפוס" d="מחיקת כל ההתקדמות, ה-XP וההישגים. אין דרך חזרה.">
          <button
            className="btn btn-sm"
            style={{ borderColor: "#ef444455", color: "var(--bad)" }}
            onClick={() => { if (confirm("למחוק את כל ההתקדמות? אי אפשר לשחזר.")) { resetAll(); toast("הכול אופס"); } }}
          >
            אפס הכול
          </button>
        </Row>
      </div>

      <div className="card pad mt2">
        <div className="h3 mb">על האתר</div>
        <p className="sub">
          אתר לימוד עצמאי בעברית המבוסס על הספר <b>Materials Science and Engineering: An Introduction</b> מאת
          William D. Callister Jr. ו-David G. Rethwisch, מהדורה תשיעית. התוכן נכתב ועובד לעברית לצורכי לימוד;
          זכויות הספר שמורות למחבריו ולהוצאה.
        </p>
        <p className="sub mt">כל ההתקדמות נשמרת מקומית בדפדפן (localStorage) ולא נשלחת לשום שרת.</p>
      </div>
    </>
  );
}
