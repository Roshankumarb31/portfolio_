import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "LLM Engineer",
      company: "Ko Innovation Software Solutions",
      period: "Nov 2024 – Present",
      location: "Trichy, India",
      achievements: [
        "Developed Vision Transformer-based property search system with vector databases using HNSW, achieving 60% improvement in search efficiency",
        "Built production-ready AI Interview Simulator using Whisper (transcription), LLaMA (evaluation), and computer vision for emotion detection",
        "Architected dual-agent R&D platform for collaborative research and automatic summarization",
        "Engineered robust Django/PostgreSQL backend managing 150+ car variant attributes with 0.2s retrieval time"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "NIT Trichy",
      period: "Jun 2023 – Nov 2023",
      location: "Trichy, India",
      achievements: [
        "Designed image forgery detection pipeline using PyTorch, GAN-based augmentation, and classical CV techniques, improving accuracy by 40%",
        "Built and optimized car price prediction models using XGBoost, AdaBoost, and other regressors, improving performance by 25%",
        "Collaborated with research team on advanced machine learning algorithms and model optimization techniques",
        "Implemented data preprocessing pipelines and feature engineering solutions for large-scale datasets"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building cutting-edge AI solutions with measurable impact across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-3">
                    {exp.company}
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Achievements
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <ChevronRight className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              With a proven track record of delivering impactful AI solutions, I'm excited to 
              take on new challenges and contribute to innovative projects that push the 
              boundaries of what's possible with artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;