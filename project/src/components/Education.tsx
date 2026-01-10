import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'T John College',
      year: '2021 - 2023',
      highlights: [
        'Specialized in Full-Stack Web Development',
        'Completed multiple real-world projects',
        'Strong foundation in Data Structures and Algorithms'
      ]
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'The Oxford College of Science',
      year: '2018 - 2021',
      highlights: [
        'Core computer science fundamentals',
        'Database Management Systems',
        'Object-Oriented Programming'
      ]
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={18} />
                  <span className="font-medium">{edu.year}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {edu.degree}
              </h3>

              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-6">
                <Award size={20} />
                <span>{edu.institution}</span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700">{highlight}</span>
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

export default Education;
