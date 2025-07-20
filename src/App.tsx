import React, { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Update document class and save preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Custom Cursor */}
        <CustomCursor />
        
        {/* Navigation */}
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t border-white/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2024 Roshan Kumar B. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;