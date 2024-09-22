import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyle';
import HomePage from './components/HomePage/HomePage';
import PublicSpeakingPage from './components/Skills/PublicSpeakingPage';
import TechnicalSkillsPage from './components/Skills/TechnicalSkillsPage';
import ProjectManagementPage from './components/Skills/ProjectManagementPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/public-speaking" element={<PublicSpeakingPage />} />
        <Route path="/technical-skills" element={<TechnicalSkillsPage />} />
        <Route path="/project-management" element={<ProjectManagementPage />} />
      </Routes>
    </>
  );
}

export default App;
