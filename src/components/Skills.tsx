import React from 'react';
import { Code, Database, Cloud, Wrench, Cpu, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "Java", "JavaScript", "SQL", "HTML/CSS"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "AI/ML Frameworks",
      icon: Cpu,
      skills: ["PyTorch", "TensorFlow", "HuggingFace Transformers", "LangChain", "OpenCV"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Backend & APIs",
      icon: Database,
      skills: ["Django", "REST Framework", "PostgreSQL", "FastAPI", "Node.js"],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Google Cloud", "Vertex AI", "Docker", "Git"],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: ["Postman", "Jupyter", "VS Code", "Docker", "Linux"],
      color: "from-teal-400 to-cyan-500"
    },
    {
      title: "AI Specializations",
      icon: Globe,
      skills: ["Computer Vision", "NLP", "LLMs", "GANs", "Image Processing"],
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the full AI/ML development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-white/10 dark:bg-gray-700/30 rounded-lg hover:bg-white/20 dark:hover:bg-gray-600/40 transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-cyan-400' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">AI/ML Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Domains</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;