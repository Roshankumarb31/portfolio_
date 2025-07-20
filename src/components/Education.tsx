import React from 'react';
import { GraduationCap, Award, Users, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "Intel GenAI Hackathon Winner",
      description: "₹20,000 prize for innovative AI solution"
    },
    {
      icon: Users,
      title: "Technical Workshop Organizer",
      description: "Led workshops on LLMs, Git, Vertex AI, and RAG"
    },
    {
      icon: GraduationCap,
      title: "Department Representative",
      description: "Active in coding club and technical events"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic excellence combined with practical leadership and community involvement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Education Card */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg">
                <GraduationCap className="h-8 w-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  B.Tech in AI & Data Science
                </h3>
                <p className="text-lg text-cyan-400 font-semibold mb-2">
                  Saranathan College of Engineering
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>2021 – 2025</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <span className="font-medium">CGPA:</span>
                  <span className="text-lg font-bold text-green-400">8.39/10</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 dark:bg-gray-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Academic Focus
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Specialized curriculum in Artificial Intelligence, Machine Learning, 
                  Data Science, and Computer Vision with hands-on projects in deep learning frameworks.
                </p>
              </div>

              <div className="bg-white/10 dark:bg-gray-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Location
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Trichy, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Achievements
            </h3>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <achievement.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Academic Leadership & Community Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technical Workshops
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Large Language Models (LLMs) fundamentals</li>
                  <li>• Git version control and collaboration</li>
                  <li>• Google Vertex AI platform</li>
                  <li>• Retrieval-Augmented Generation (RAG)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Community Involvement
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Department coding club representative</li>
                  <li>• Technical event organizer</li>
                  <li>• Peer mentoring and tutoring</li>
                  <li>• AI research community contributor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;