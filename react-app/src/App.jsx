import React, { useState, useEffect } from 'react';
import { DATA } from './data/questionsData';
import { AuthOverlay } from './components/AuthOverlay';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { BadgesSection } from './components/BadgesSection';
import { StatsGrid } from './components/StatsGrid';
import { WeaknessAnalysis } from './components/WeaknessAnalysis';
import { QuestionList } from './components/QuestionList';
import { PracticeModal } from './components/PracticeModal';
import { AudioExamModal } from './components/AudioExamModal';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [scores, setScores] = useState({});
  const [practiceQuestion, setPracticeQuestion] = useState(null);
  const [isExamOpen, setIsExamOpen] = useState(false);

  // Load scores & theme on mount
  useEffect(() => {
    try {
      const savedScores = JSON.parse(localStorage.getItem('qa_scores') || '{}');
      setScores(savedScores);
    } catch (e) {}

    try {
      const savedTheme = localStorage.getItem('qa_theme') || 'dark';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } catch (e) {}
  }, []);

  // Keyboard shortcut Ctrl+K to search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        const inp = document.getElementById('searchInput');
        if (inp) {
          inp.focus();
          inp.select();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('qa_theme', next); } catch (e) {}
  };

  const handleSaveScore = (qid, scoreVal) => {
    const nextScores = { ...scores, [qid]: scoreVal };
    setScores(nextScores);
    try {
      localStorage.setItem('qa_scores', JSON.stringify(nextScores));
      const hist = JSON.parse(localStorage.getItem('qa_history') || '[]');
      hist.push(scoreVal);
      if (hist.length > 50) hist.splice(0, hist.length - 50);
      localStorage.setItem('qa_history', JSON.stringify(hist));
    } catch (e) {}
  };

  // Extract all questions in array
  const allQuestions = DATA.sections.reduce((acc, sec) => acc.concat(sec.questions), []);

  const handleNextPracticeQuestion = () => {
    if (!practiceQuestion) return;
    const currentIdx = allQuestions.findIndex((q) => q.id === practiceQuestion.id);
    const nextIdx = (currentIdx + 1) % allQuestions.length;
    setPracticeQuestion(allQuestions[nextIdx]);
  };

  // Stats calculation
  const totalQuestions = allQuestions.length;
  const practicedCount = Object.keys(scores).length;
  const remainingCount = totalQuestions - practicedCount;
  const sumScores = Object.values(scores).reduce((acc, curr) => acc + curr, 0);
  const avgScore = practicedCount > 0 ? (sumScores / practicedCount).toFixed(1) : 0;

  return (
    <div>
      <AuthOverlay />
      <Header
        totalQuestions={totalQuestions}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenExam={() => setIsExamOpen(true)}
      />
      <Navbar
        sections={DATA.sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <BadgesSection scores={scores} allQuestions={allQuestions} />
      <StatsGrid
        total={totalQuestions}
        done={practicedCount}
        left={remainingCount}
        avgScore={avgScore}
      />
      <WeaknessAnalysis sections={DATA.sections} scores={scores} />
      <QuestionList
        sections={DATA.sections}
        activeSection={activeSection}
        searchFilter={searchInput}
        scores={scores}
        onPractice={(q) => setPracticeQuestion(q)}
      />
      <Footer />

      {practiceQuestion && (
        <PracticeModal
          question={practiceQuestion}
          onClose={() => setPracticeQuestion(null)}
          onSaveScore={handleSaveScore}
          onNext={handleNextPracticeQuestion}
        />
      )}

      {isExamOpen && (
        <AudioExamModal
          allQuestions={allQuestions}
          onClose={() => setIsExamOpen(false)}
        />
      )}
    </div>
  );
}
