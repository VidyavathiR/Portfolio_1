import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Cognifyz Technologies',
      duration: 'Apr 2025 – May 2025',
      location: 'Remote',
      responsibilities: [
        'Developed responsive web pages using HTML, CSS, and JavaScript',
        'Collaborated with design team to implement UI/UX improvements',
        'Built interactive features with React.js for client projects',
        
      ],
      color: 'blue'
    },
    {
      role: 'Python Full-Stack Intern',
      company: 'LinuxWorld Informatics Pvt Ltd',
      duration: 'Jul 2023 – Sep 2023',
      location: 'Remote',
      responsibilities: [
        'Developed backend APIs using Django and Flask frameworks',
        'Implemented database models and performed CRUD operations',
        'Worked on debugging and optimizing application performance'
      ],
      color: 'green'
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on experience building real-world applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg mb-3">
                    <Briefcase size={20} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, resIndex) => (
                    <li key={resIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${exp.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex-shrink-0 mt-2`}></div>
                      <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
