import { Link } from "react-router-dom";
import { CHAPTERS } from "../data/index.js";
import {
  useStore, rankOf, completedCount, overallProgress, nextChapter, allDone, weakChapters
} from "../lib/store.js";
import { Stat, Bar } from "../components/Bits.jsx";
import { fmt } from "../lib/ui.js";
import UnitList from "./UnitList.jsx";

export default function Dashboard() {
  const S = useStore();
  const done = completedCount();
  const acc = S.answered ? Math.round((S.correct / S.answered) * 100) : 0;
  const nx = nextChapter();
  const r = rankOf(S.xp);
  const weak = weakChapters();

  return (
    <>
      <section className="hero">
        <div className="eyebrow">Callister · 9th Edition · 22 פרקים</div>
        <h1 className="h1 mt">מעבדת <span className="grad-txt">החומרים</span></h1>
        <p>
          קורס מלא בעברית על מדע והנדסת חומרים: שיעורים מעמיקים, 230 נוסחאות בכתיב מתמטי מלא,
          מבחנים עם הסברים, כרטיסיות ומשחקי למידה. הכול פתוח — מתקדמים בקצב שלך,
          והמערכת עוקבת אחרי הנושאים שכדאי לך לחזק.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary btn-lg" to={`/ch/${nx.id}`}>
            {done ? `המשך מפרק ${nx.id}` : "התחל ללמוד"} ←
          </Link>
          <Link className="btn btn-lg" to="/map">מסלול הלימוד</Link>
          {allDone() && <Link className="btn btn-lg" to="/exam/final">המבחן המסכם ★</Link>}
        </div>
      </section>

      <div className="stats">
        <Stat ico="⬡" v={`${done} / ${CHAPTERS.length}`} k="פרקים שהושלמו" />
        <Stat ico="◎" v={`${overallProgress()}%`} k="התקדמות כוללת" />
        <Stat ico="∑" v={fmt(S.answered)} k="שאלות שנענו" />
        <Stat ico="◈" v={`${acc}%`} k="דיוק ממוצע" />
        <Stat ico="🔥" v={`${S.streak.count} ימים`} k={`רצף לימוד (שיא ${S.streak.best || 0})`} />
        <Stat ico={r.rank.icon} v={fmt(S.xp)} k="נקודות ניסיון" />
      </div>

      <div className="card pad mt2">
        <div className="row">
          <div>
            <div className="h3">{r.rank.icon} {r.rank.name}</div>
            <div className="tiny">
              {r.next ? `עוד ${fmt(r.next.xp - S.xp)} XP לדרגת ${r.next.name}` : "הגעת לדרגה הגבוהה ביותר"}
            </div>
          </div>
          <div className="spacer" />
          <div className="mono" style={{ fontWeight: 800 }}>{r.pct}%</div>
        </div>
        <div className="mt"><Bar pct={r.pct} /></div>
      </div>

      {weak.length > 0 && (
        <div className="mt2">
          <div className="h2 mb">נושאים לחיזוק</div>
          <div className="sumlist">
            {weak.slice(0, 4).map(({ c, n }) => (
              <Link className="sumitem" key={c.id} to={`/ch/${c.id}/play/quiz`}>
                <span className="n">{c.id}</span>
                <span>
                  <b>{c.title}</b>
                  <div className="tiny">{n} שאלות שטעית בהן · לחץ לתרגול חוזר</div>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt2"><UnitList compact /></div>
    </>
  );
}
