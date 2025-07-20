import React from 'react';
import { Brain, Code, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep knowledge in Computer Vision, NLP, and LLMs with hands-on experience deploying cutting-edge models."
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building scalable backend systems and APIs using Django, PostgreSQL, and modern web technologies."
    },
    {
      icon: Zap,
      title: "Research & Innovation",
      description: "Research-oriented approach with focus on Vision Transformers, GANs, and innovative AI solutions."
    },
    {
      icon: Target,
      title: "Real-World Impact",
      description: "Passionate about deploying AI systems that solve practical problems and drive business value."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Results-driven AI/ML Engineer from Trichy, India, specializing in cutting-edge 
            artificial intelligence solutions that bridge research and real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently working at Ko Innovation Software Solutions as an LLM Engineer, 
                I specialize in developing production-ready AI systems that combine 
                technical excellence with innovative problem-solving. My expertise spans 
                across multiple AI domains, from computer vision to natural language processing.
              </p>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Research & Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about pushing the boundaries of AI technology, working with 
                Vision Transformers, Large Language Models, and GANs to create solutions 
                that have meaningful real-world impact. My research-oriented approach ensures 
                I stay at the forefront of AI innovation.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <highlight.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build the Future Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always excited to collaborate on innovative AI projects and explore new 
              possibilities in machine learning. Whether it's developing cutting-edge models 
              or solving complex real-world problems, I'm ready to contribute my expertise 
              to your team's success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;