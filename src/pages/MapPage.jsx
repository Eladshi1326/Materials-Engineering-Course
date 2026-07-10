import UnitList from "./UnitList.jsx";
import { PASS } from "../data/index.js";

export default function MapPage() {
  return (
    <>
      <h1 className="h1">מסלול הלימוד</h1>
      <p className="sub mt" style={{ maxWidth: "70ch" }}>
        חמש יחידות, 22 פרקים — הכול פתוח, לומדים בקצב שלך.
        הסדר המומלץ הוא לפי המספור: כל פרק נבנה על קודמיו. סימן ✓ מציין פרק שעברת
        את המבחן שלו בציון {PASS} ומעלה; בסוף כל יחידה ממתין מבחן יחידה, ובסוף — מבחן ההסמכה.
      </p>
      <UnitList />
    </>
  );
}
