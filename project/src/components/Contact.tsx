import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'vidyavathi.r@example.com',
      link: 'mailto:vidyavathi.r@example.com',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'github.com/vidyavathi',
      link: 'https://github.com/vidyavathi',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vidyavathi-r',
      link: 'https://linkedin.com/in/vidyavathi-r',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Let's connect! I'm open to discussing new opportunities and collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-600 break-words group-hover:text-blue-600 transition-colors">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-gray-600">
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vidyavathi.r@example.com"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium text-lg"
              >
                <Send size={20} />
                Send Email
              </a>

              <a
                href="/Vidyavathi_R_Junior_Web_Developer.pdf"
                download
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl font-medium text-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
