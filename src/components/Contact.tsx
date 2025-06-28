
import { useState, useEffect } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: '#', handle: 'itteba-gilani' },
    { name: 'GitHub', url: '#', handle: 'ittebagilani' },
    { name: 'Twitter', url: '#', handle: '@ittebagilani' },
    { name: 'Dribbble', url: '#', handle: 'itteba' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wider text-gray-400 mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm tracking-wider text-gray-400 mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm tracking-wider text-gray-400 mb-2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-wider text-gray-400 mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-opacity-40 focus:bg-opacity-10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-white bg-opacity-10 border border-white border-opacity-20 py-4 px-8 rounded-lg hover:bg-opacity-20 focus:outline-none focus:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span className="tracking-wider">Send Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Direct Contact */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 tracking-wide">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm tracking-wider text-gray-400 mb-1">EMAIL</div>
                  <a 
                    href="mailto:hello@ittebagilani.com"
                    className="text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    hello@ittebagilani.com
                  </a>
                </div>
                <div>
                  <div className="text-sm tracking-wider text-gray-400 mb-1">PHONE</div>
                  <a 
                    href="tel:+1234567890"
                    className="text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div>
                  <div className="text-sm tracking-wider text-gray-400 mb-1">LOCATION</div>
                  <div className="text-lg text-gray-300">
                    New York, NY
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 tracking-wide">
                Connect
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="group flex items-center justify-between bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300"
                  >
                    <div>
                      <div className="text-sm tracking-wider text-gray-400">
                        {social.name}
                      </div>
                      <div className="text-white group-hover:text-gray-300 transition-colors duration-300">
                        {social.handle}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Fun fact or quote */}
            <div className="mt-12 p-6 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg backdrop-blur-sm">
              <p className="text-gray-400 italic leading-relaxed">
                "Great design is not just what it looks like and feels like. 
                Great design is how it works."
              </p>
              <div className="text-sm text-gray-500 mt-2">— Steve Jobs</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-20 pt-8 border-t border-white border-opacity-10 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-500 text-sm tracking-wider">
            © 2024 ITTEBA GILANI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
