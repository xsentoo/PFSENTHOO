import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
              <Route path="/" element={<Home />} /> {/* ✅ Home affiché sur / */}
              <Route path="/home" element={<Home />} /> {/* ✅ /home fonctionne aussi */}
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} /> {/* ✅ Redirection si la route n'existe pas */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
