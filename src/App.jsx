import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import TopBar from "./components/TopBar.jsx";
import { Toaster, ConfettiCanvas } from "./components/Bits.jsx";
import { applyPrefs, touchStreak } from "./lib/store.js";

import Dashboard from "./pages/Dashboard.jsx";
import MapPage from "./pages/MapPage.jsx";
import Chapter from "./pages/Chapter.jsx";
import ChapterQuiz from "./pages/ChapterQuiz.jsx";
import Challenge from "./pages/Challenge.jsx";
import Flashcards from "./pages/Flashcards.jsx";
import Matching from "./pages/Matching.jsx";
import FormulaDrill from "./pages/FormulaDrill.jsx";
import UnitExam from "./pages/UnitExam.jsx";
import FinalExam from "./pages/FinalExam.jsx";
import Glossary from "./pages/Glossary.jsx";
import Achievements from "./pages/Achievements.jsx";
import SettingsPage from "./pages/Settings.jsx";
import Certificate from "./pages/Certificate.jsx";

/* גלילה לראש הדף רק במעבר לעמוד חדש באמת —
   מעבר בין לשוניות של אותו פרק לא מזיז את הגלילה */
function ScrollTop() {
  const { pathname } = useLocation();
  const key = pathname.replace(
    /^(\/ch\/\d+)(\/(lesson|formulas|terms|summary|pitfalls|worked))?$/,
    "$1"
  );
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [key]);
  return null;
}

export default function App() {
  useEffect(() => {
    applyPrefs();
    touchStreak();
  }, []);

  return (
    <>
      <TopBar />
      <ScrollTop />
      <main className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/ch/:id" element={<Chapter />} />
          <Route path="/ch/:id/:tab" element={<Chapter />} />
          <Route path="/ch/:id/play/quiz" element={<ChapterQuiz />} />
          <Route path="/ch/:id/play/cards" element={<Flashcards />} />
          <Route path="/ch/:id/play/match" element={<Matching />} />
          <Route path="/ch/:id/play/formula" element={<FormulaDrill />} />
          <Route path="/ch/:id/play/challenge" element={<Challenge />} />
          <Route path="/exam/unit/:uid" element={<UnitExam />} />
          <Route path="/exam/final" element={<FinalExam />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="*" element={<div className="empty">הדף לא נמצא. <Link to="/">חזרה ללוח הבקרה</Link></div>} />
        </Routes>
      </main>

      <footer className="foot">
        <span>נבנה על בסיס <b>Callister &amp; Rethwisch — Materials Science and Engineering, 9th ed.</b></span>
        <span className="dot">•</span>
        <span>ההתקדמות נשמרת מקומית בדפדפן שלך</span>
      </footer>

      <Toaster />
      <ConfettiCanvas />
    </>
  );
}
