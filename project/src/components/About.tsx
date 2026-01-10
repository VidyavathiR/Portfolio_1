import { User, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                <User className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Background</h3>
                <p className="text-gray-600 leading-relaxed">
                  I am a Junior Web Developer with hands-on internship experience. 
                  I build responsive web applications using React.js and Python-based frameworks.
                  Currently seeking an entry-level role to grow and contribute to real-world projects.

                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                <Code className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Skills</h3>
                <p className="text-gray-600 leading-relaxed">
                  Proficient in React.js, JavaScript, Python, and Django. Strong foundation in building
                  responsive frontends and developing RESTful APIs for seamless integrations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                <Target className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Actively seeking Junior Web Developer or React Developer roles where I can contribute
                  to meaningful projects and continue growing as a full-stack developer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
            <ul className="space-y-4">
              {[
                'Frontend Development with React.js',
                'Backend Development with Django & Flask',
                'RESTful API Design & Integration',
                'Responsive UI/UX Implementation',
                'Database Management (SQL, MongoDB)',
                'Version Control with Git & GitHub',
                'Problem Solving & Debugging',
                'Agile Development Practices'
              ].map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
