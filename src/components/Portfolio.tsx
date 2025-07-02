import { useState, useEffect } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "/e-commerce-platform",
    },
    {
      id: 2,
      title: "Brand Identity System",
      category: "Design",
      description:
        "Complete brand identity redesign for a tech startup, including logo design, color palette, typography, and brand guidelines.",
      technologies: ["Figma", "Adobe Creative Suite", "Brand Strategy"],
      image:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
      link: "/brand-identity-system",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description:
        "User-centered design for a mobile banking application, focusing on security, accessibility, and seamless user experience.",
      technologies: ["React Native", "Figma", "User Research"],
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      link: "/mobile-banking-app",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Full-Stack",
      description:
        "Custom portfolio website with advanced animations, CMS integration, and optimized performance across all devices.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      link: "/portfolio-website",
    },
  ];

  const handleProjectClick = (link) => {
    // In a real app, you'd use Next.js router or React Router
    // For now, this is a placeholder
    console.log(`Navigating to: ${link}`);
    // window.location.href = link; // Uncomment this in a real app
  };

  return (
    <section id="portfolio" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-widest">
            SELECTED WORK
          </h2>
          <p
            className={`text-${
              isDark ? "gray-300" : "gray-600"
            } text-lg max-w-2xl`}
          >
            A curated collection of recent projects showcasing my expertise in
            design, development, and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => handleProjectClick(project.link)}
            >
              {/* Project Card */}
              <div
                className={`rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-500 ${
                  isDark
                    ? "bg-white bg-opacity-5 border border-white border-opacity-10"
                    : "bg-black bg-opacity-5 border border-black border-opacity-10"
                }`}
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-500"></div>

                  {/* Overlay with external link */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs tracking-wider text-gray-400 uppercase">
                      {project.category}
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies - Now always visible */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                          isDark
                            ? "bg-white text-white border border-white/50 bg-opacity-10"
                            : "bg-black text-gray-500 border border-black/50 bg-opacity-5"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            className={`group px-8 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 ${
              isDark
                ? "bg-white bg-opacity-5 border border-white border-opacity-20 text-white"
                : "bg-black bg-opacity-5 border border-black border-opacity-20 text-black"
            }`}
          >
            <span className="text-sm tracking-wider">View All Projects</span>
            <ChevronRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
