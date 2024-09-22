import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyle';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/About/AboutPage';
import PublicSpeakingPage from './components/Skills/PublicSpeaking/PublicSpeakingPage';
import TechnicalSkillsPage from './components/Skills/TechnicalSkills/TechnicalSkillsPage';
import ProjectManagementPage from './components/Skills/ProjectManagement/ProjectManagementPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/public-speaking" element={<PublicSpeakingPage />} />
        <Route path="/technical-skills" element={<TechnicalSkillsPage />} />
        <Route path="/project-management" element={<ProjectManagementPage />} />
      </Routes>
    </>
  );
}

export default App;
