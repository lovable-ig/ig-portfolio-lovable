import { useState, useEffect } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/itteba-gilani/", handle: "itteba-gilani" },
    { name: "GitHub", url: "https://github.com/ittebagilani", handle: "ittebagilani" },
    { name: "Substack", url: "https://itteba.substack.com/", handle: "the lazy engineer" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-widest">
            LET'S WORK TOGETHER
          </h2>
          <p
            className={`space-y-6 max-w-2xl mx-auto text-${
              isDark ? "gray-300" : "gray-600"
            } leading-relaxed text-lg`}
          >
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm tracking-wider text-gray-400 mb-2"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                      isDark
                        ? "bg-white text-white bg-opacity-5 border border-white border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                        : "bg-black text-black bg-opacity-5 border border-black border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm tracking-wider text-gray-400 mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                      isDark
                        ? "bg-white text-white bg-opacity-5 border border-white border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                        : "bg-black text-black bg-opacity-5 border border-black border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm tracking-wider text-gray-400 mb-2"
                >
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                    isDark
                      ? "bg-white text-white bg-opacity-5 border border-white border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                      : "bg-black text-black bg-opacity-5 border border-black border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                  }`}
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm tracking-wider text-gray-400 mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full rounded-lg px-4 py-3 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                    isDark
                      ? "bg-white text-white bg-opacity-5 border border-white border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                      : "bg-black text-black bg-opacity-5 border border-black border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full group flex items-center justify-center space-x-2 rounded-lg px-4 py-4 placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                  isDark
                    ? "bg-white text-white bg-opacity-5 border border-white border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                    : "bg-black text-black bg-opacity-5 border border-black border-opacity-20 focus:border-opacity-40 focus:bg-opacity-10"
                }`}
              >
                <Mail className="w-5 h-5" />
                <span className="tracking-wider">Send Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            {/* Direct Contact */}
            <div className="mb-12">
              <h3 className="text-2xl font-light mb-6 tracking-widest uppercase">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm tracking-wider text-gray-400 mb-1">
                    EMAIL
                  </div>
                  <a
                    href="mailto:itteba1@gmail.com"
                    className="text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    itteba1@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm tracking-wider text-gray-400 mb-1">
                    PHONE
                  </div>
                  <a
                    href="tel:+16476774937"
                    className="text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    +1 647 | 677 | 4937
                  </a>
                </div>
                <div>
                  <div className="text-sm tracking-wider text-gray-400 mb-1">
                    LOCATION
                  </div>
                  <div className="text-lg hover:text-gray-300 transition-colors duration-300">
                    Toronto, Canada
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-light uppercase mb-6 tracking-widest">
                Connect
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between rounded-lg p-4 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 ${
                      isDark
                        ? "bg-white bg-opacity-5 border border-white border-opacity-10"
                        : "bg-black bg-opacity-5 border border-black border-opacity-10"
                    }`}
                  >
                    <div>
                      <div className="text-sm tracking-wider text-gray-400">
                        {social.name}
                      </div>
                      <div className=" group-hover:text-gray-300 transition-colors duration-300">
                        {social.handle}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        {/* Footer */}
        <div
          className={`text-center mt-20 pt-8 border-t border-white border-opacity-10 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-gray-500 text-sm tracking-wider">
            © 2024 ITTEBA GILANI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
