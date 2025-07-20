import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Roshan_Kumar_B_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="block">Roshan</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Kumar B
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            AI/ML Engineer
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Specialized in Computer Vision, NLP, and LLMs. Building scalable AI systems 
            that drive real-world impact at Ko Innovation Software Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={handleDownloadResume}
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </button>
            
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Roshankumarb31"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              
              <a
                href="https://linkedin.com/in/roshan-kumar-b-ab6147268"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
              
              <a
                href="mailto:broshankumar4@gmail.com"
                className="p-3 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;