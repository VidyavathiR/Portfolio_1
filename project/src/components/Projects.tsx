import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Responsive Landing Page',
      description: 'Modern, conversion-optimized landing page with smooth animations and mobile-first design',
      techStack: ['React.js', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Fully responsive across all devices',
        'Smooth scroll animations',
        'Optimized performance and accessibility'
      ],
      github: 'https://github.com/VidyavathiR/virtualr',
      demo: 'https://virtualr-rho.vercel.app/',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Client Portfolio Website',
      description: 'Responsive portfolio website developed for an architecture client.',
      techStack: ['Django', 'Bootstrap', 'HTML & CSS', 'JavaScript'],
      features: [
        'Responsive and modern UI design',
        'Project showcase with image galleries',
        'Contact form for client inquiries'
      ],      
      github: 'https://github.com/VidyavathiR/shilpakalamandir_website',
      demo: 'https://shilpakalamandir-website.onrender.com/',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'FoodApp',
      description: 'A React-based food application that fetches real-time recipe data using a public API and displays detailed recipe information.',
      techStack: ['React.js', 'REST API', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Implemented API integration and data rendering using React Hooks',
        'Built reusable components and responsive layouts',
        'Improved user experience with clean UI design '
      ],
      github: 'https://github.com/VidyavathiR/FoodApp-React',
      demo: '',
      gradient: 'from-orange-500 to-red-500'
    },
    
    {
      title: 'Career Glide',
      description: 'Job portal connecting employers and job seekers with advanced search and application features',
      techStack: ['Flask', 'Python', 'SQLite', 'HTML/CSS'],
      features: [
        'Job posting and search functionality',
        'Resume upload and management',
        'Application tracking system'
      ],
      github: 'https://github.com/VidyavathiR/CareerGlide',
      demo: '',
      gradient: 'from-green-500 to-teal-500'
    },

  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
