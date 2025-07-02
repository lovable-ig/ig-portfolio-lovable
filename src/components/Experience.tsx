import { useState, useEffect } from "react";

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

    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      year: "Jan 2025 - Present",
      title: "CAD Admin Intern",
      company: "StackTeck Canada",
      description:
        "Managed CAD systems and provided technical support for injection molding design operations at a global manufacturing solutions company.",
      achievements: [
        "Administered CAD software systems for 15+ engineers designing injection molds and plastic tooling solutions",
        "Streamlined design workflows by implementing standardized CAD procedures and best practices documentation",
        "Provided technical support and training to engineering teams, reducing design-related delays by 25%",
      ],
    },
    {
      year: "Jan 2024 - Apr 2024",
      title: "C++ Teaching Assistant",
      company: "McMaster University",
      description:
        "Facilitated learning and provided academic support for undergraduate computer science students in C++ programming courses.",
      achievements: [
        "Conducted weekly tutorial sessions for 30+ students, improving class comprehension scores by 20%",
        "Provided one-on-one coding assistance and debugging support for students during office hours",        "Graded assignments and exams for 150+ students, ensuring consistent evaluation standards and timely feedback",
      ],
    },
    {
      year: "Dec 2023 - Jan 2024",
      title: "Fullstack Developer",
      company: "Startup (Failed)",
      description:
        "Developed and maintained web applications across the full technology stack in a fast-paced startup environment.",
      achievements: [
        "Implemented a website for a hiring agency using NextJS, resulting in a responsive and user-friendly interface that improved conversion rate by 0.8%",
        "Utilized OpenAI to create a chatbot that answers inquiries in real time, providing visitors with 24/7 support",
        "Integrated a backend infrastructure with an admin interface to manage users and track visitors, allowing for customer insights",
      ],
    },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      icon: "01",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design solutions that balance aesthetics with functionality and usability.",
      icon: "02",
    },
    {
      title: "Brand Identity",
      description:
        "Complete brand identity systems including logos, guidelines, and visual assets.",
      icon: "03",
    },
    {
      title: "Creative Direction",
      description:
        "Strategic creative leadership for digital projects and brand campaigns.",
      icon: "04",
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Experience Timeline */}
        <div className="mb-20">
          <div
            className={`mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-widest">
              EXPERIENCE
            </h2>
            <p className="text-foreground text-opacity-60 text-lg">
              A journey through creative and technical challenges that shaped my
              expertise.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-foreground via-foreground to-transparent opacity-30"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
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
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <div className="text-foreground text-opacity-70 mb-3">
                    {exp.company}
                  </div>
                  <p className="text-foreground text-opacity-60 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-sm text-foreground text-opacity-50 flex items-start"
                      >
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
      </div>
    </section>
  );
};

export default Experience;
