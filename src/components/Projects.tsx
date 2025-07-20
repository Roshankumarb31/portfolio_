import React from 'react';
import { ExternalLink, Github, Zap, Target, Brain, Shield, Bot, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Aided Jobhunter",
      description: "Intelligent resume parser and job recommendation system with ~85% match accuracy using advanced NLP algorithms.",
      icon: Target,
      technologies: ["Python", "NLP", "Machine Learning", "Django", "PostgreSQL"],
      metrics: "85% match accuracy"
    },
    {
      title: "Railway Crime Detection",
      description: "Vision Transformer + YOLO integration for enhanced CCTV-based crime detection system with 28% improvement.",
      icon: Shield,
      technologies: ["Vision Transformers", "YOLO", "PyTorch", "Computer Vision"],
      metrics: "28% improvement"
    },
    {
      title: "Voice Emotion Recognition",
      description: "LSTM-based emotion detection system integrated with Google Speech API achieving 82% accuracy.",
      icon: Brain,
      technologies: ["LSTM", "Google Speech API", "TensorFlow", "Audio Processing"],
      metrics: "82% accuracy"
    },
    {
      title: "Legal Advice LLM",
      description: "Context-aware legal Q&A system leveraging Mixtral 8x7B, Qdrant vector database, and LangChain framework.",
      icon: Bot,
      technologies: ["Mixtral 8x7B", "Qdrant", "LangChain", "Vector Database"],
      metrics: "Production-ready"
    },
    {
      title: "AI Interviewer",
      description: "Multi-modal interview simulator integrating LLMs, knowledge graphs, and facial analysis for comprehensive evaluation.",
      icon: Zap,
      technologies: ["LLMs", "Knowledge Graphs", "Computer Vision", "Multi-modal AI"],
      metrics: "Multi-modal analysis"
    },
    {
      title: "Itinerary Generator",
      description: "Full-stack travel planning application with Django REST API, React.js frontend, integrated with Foursquare and AWS.",
      icon: MapPin,
      technologies: ["Django REST", "React.js", "Foursquare API", "AWS"],
      metrics: "Full-stack solution"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative AI solutions that demonstrate technical excellence and real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg w-fit group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <project.icon className="h-6 w-6 text-cyan-400" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full px-3 py-1 text-xs font-medium text-cyan-400">
                  <Zap className="h-3 w-3" />
                  {project.metrics}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 dark:bg-gray-700/50 rounded-md text-xs text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                  <Github className="h-4 w-4" />
                  Code
                </button>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm constantly working on new AI projects and exploring innovative solutions. 
              Follow my GitHub for the latest updates and contributions to the AI community.
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/Roshankumarb31"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Github className="h-5 w-5" />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;