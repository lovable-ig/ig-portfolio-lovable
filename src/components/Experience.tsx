
import { useState, useEffect } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Creative Developer',
      company: 'Digital Innovation Studio',
      description: 'Leading creative development projects for high-profile clients, specializing in interactive web experiences and brand-focused digital solutions.',
      achievements: [
        'Led development of 15+ award-winning websites',
        'Improved client satisfaction scores by 40%',
        'Mentored junior developers and designers'
      ]
    },
    {
      year: '2021 - 2023',
      title: 'Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed and maintained complex web applications using modern frameworks and technologies, with a focus on performance and user experience.',
      achievements: [
        'Built scalable applications serving 100k+ users',
        'Reduced load times by 60% through optimization',
        'Implemented automated testing protocols'
      ]
    },
    {
      year: '2019 - 2021',
      title: 'UI/UX Designer',
      company: 'Creative Agency Co.',
      description: 'Designed user interfaces and experiences for mobile and web applications across various industries including fintech, healthcare, and e-commerce.',
      achievements: [
        'Designed 50+ user interfaces and prototypes',
        'Increased user engagement by 35%',
        'Established design system guidelines'
      ]
    },
    {
      year: '2018 - 2019',
      title: 'Frontend Developer',
      company: 'Startup Hub',
      description: 'Focused on frontend development and responsive design implementation, working closely with designers to bring creative visions to life.',
      achievements: [
        'Developed mobile-first responsive websites',
        'Collaborated with cross-functional teams',
        'Implemented modern CSS and JavaScript techniques'
      ]
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      icon: '01'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that balance aesthetics with functionality and usability.',
      icon: '02'
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand identity systems including logos, guidelines, and visual assets.',
      icon: '03'
    },
    {
      title: 'Creative Direction',
      description: 'Strategic creative leadership for digital projects and brand campaigns.',
      icon: '04'
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Experience Timeline */}
        <div className="mb-20">
          <div className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide font-playfair">
              EXPERIENCE
            </h2>
            <p className="text-foreground text-opacity-60 text-lg">
              A journey through creative and technical challenges that shaped my expertise.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-foreground via-foreground to-transparent opacity-30"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-foreground rounded-full border-4 border-background"></div>
                
                {/* Content */}
                <div className="ml-16">
                  <div className="text-sm text-foreground text-opacity-60 tracking-wider mb-2">
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-foreground text-opacity-70 mb-3">
                    {exp.company}
                  </div>
                  <p className="text-foreground text-opacity-60 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Achievements */}
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-foreground text-opacity-50 flex items-start">
                        <span className="w-1 h-1 bg-foreground bg-opacity-50 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className={`mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide font-playfair">
              SERVICES
            </h2>
            <p className="text-foreground text-opacity-60 text-lg">
              Comprehensive solutions tailored to your creative and technical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-foreground bg-opacity-5 border border-foreground border-opacity-10 rounded-2xl p-6 backdrop-blur-sm hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl font-bold text-foreground text-opacity-60 group-hover:text-opacity-40 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-opacity-70 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground text-opacity-60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
