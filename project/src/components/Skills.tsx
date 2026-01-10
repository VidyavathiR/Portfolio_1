import { Code2, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 size={28} />,
      color: 'from-blue-500 to-blue-600',
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: <Server size={28} />,
      color: 'from-green-500 to-green-600',
      skills: ['Python', 'Django', 'Flask']
    },
    {
      title: 'Database',
      icon: <Database size={28} />,
      color: 'from-orange-500 to-orange-600',
      skills: ['SQL', 'MongoDB', 'Database Design']
    },
    {
      title: 'Tools',
      icon: <Wrench size={28} />,
      color: 'from-gray-600 to-gray-700',
      skills: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Vercel', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-gray-50 rounded-lg text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Expertise</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Responsive Design',
              'API Integration',
              'Problem Solving',
              'Team Collaboration',
              'Code Optimization',
              'Debugging & Testing'
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
