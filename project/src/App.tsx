import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/PFSENTHOO">
      <div className="content-wrapper">
        <Navigation />
        <main className="scroll-container">
          <AnimatePresence mode="wait">
            <Routes>
              {/* ✅ Redirection automatique vers Home */}
              <Route path="/" element={<Navigate replace to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate replace to="/Home" />} /> {/* Gestion des erreurs */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
