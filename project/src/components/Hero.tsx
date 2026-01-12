import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-xl">
              VR
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Vidyavathi R
          </h1>

          {/* Role */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4 font-medium">
            Junior Web Developer | React.js | Python | Django
          </h2>

          {/* Short intro */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10">
            MCA graduate with internship experience in building responsive web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => handleScroll('#projects')}
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium text-base sm:text-lg"
            >
              View Projects
              <ArrowRight size={20} />
            </button>

            {/* Resume Download */}
            <a
              href="/Vidyavathi_R_Junior_Web_Developer.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl font-medium text-base sm:text-lg"
            >
              
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/VidyavathiR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg group"
              aria-label="GitHub Profile"
            >
              <Github size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/vidyavathir"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
