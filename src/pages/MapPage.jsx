import { PASS } from "../data/index.js";
import UnitList from "./UnitList.jsx";

export default function MapPage() {
  return (
    <>
      <h1 className="h1">מסלול הלימוד</h1>
      <p className="sub mt" style={{ maxWidth: "70ch" }}>
        חמש יחידות, 22 פרקים. כל פרק נפתח רק אחרי שעברת את מבחן הפרק הקודם בציון {PASS} ומעלה.
        בסוף כל יחידה ממתין מבחן יחידה, ובסוף הכול — מבחן ההסמכה.
      </p>
      <UnitList />
    </>
  );
}
