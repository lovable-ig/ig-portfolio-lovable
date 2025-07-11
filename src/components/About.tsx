import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

const About = () => {
  const { isDark } = useTheme();

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

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Fullstack Development",
    "Process Automation",
    "Data Science",
    "Photography",
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-8 tracking-widest">
              ABOUT
            </h2>

            <div
              className={`space-y-6 text-${
                isDark ? "gray-300" : "gray-600"
              } leading-relaxed text-lg`}
            >
              <p className="text-lg">
                I&apos;m a passionate creative developer who bridges the gap
                between beautiful design and functional technology. With over 5
                years of experience, I specialize in crafting digital
                experiences that are both visually stunning and technically
                robust.
              </p>

              <p>
                My approach combines strategic thinking with meticulous
                attention to detail, ensuring every project not only meets but
                exceeds expectations. I believe in the power of minimalism and
                the impact of purposeful design.
              </p>

              <p>
                When I&apos;m not coding or designing, you'll find me exploring
                new technologies, studying design trends, or working on personal
                creative projects that push the boundaries of what's possible.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 tracking-wider">
                EXPERTISE
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`${
                      isDark
                        ? "bg-white bg-opacity-5 border border-white border-opacity-10"
                        : "bg-black bg-opacity-5 border border-black border-opacity-20"
                    } px-4 py-3 rounded-lg backdrop-blur-sm transition-all duration-500 hover:bg-opacity-10 hover:border-opacity-20 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="text-md tracking-wide">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile image placeholder - replace with actual image */}
              <div className="w-full h-full border-white border-opacity-10 flex items-center justify-center">
                <img src="me.png" alt="Profile" className=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
