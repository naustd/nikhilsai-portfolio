import React, { useEffect, useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const experiences = [
    {
      year: "2017",
      company: "Northern Arizona University",
      role: "Frontend Developer",
      duration: "1.5 yrs",
      description: "Built reusable UI components using React and Redux.",
    },
    {
      year: "2018.5",
      company: "Tata Consultancy Services",
      role: "Full Stack Developer",
      duration: "2 yrs",
      description: "Developed full-stack apps using Spring Boot and React.",
    },
    {
      year: "2020.5",
      company: "ECIL",
      role: "Senior Developer",
      duration: "1 yr",
      description: "Led UI team, introduced Storybook for component testing.",
    },
  ];

  // Detect screen size on initial load
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = (index) => {
    if (isMobile) {
      setHoveredIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-zinc-50 mb-2">
          Experience
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
      </div>

      <div className="relative flex justify-center">
        <div className="w-full max-w-6xl relative">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-500 z-0"></div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            const isActive = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`relative mb-16 flex ${
                  isEven ? "justify-start" : "justify-end"
                }`}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => handleToggle(index)}
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 top-5 w-4 h-4 rounded-full z-10 transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 ring-4 ring-blue-300 scale-125"
                      : "bg-blue-500"
                  }`}
                ></div>

                {/* Experience Card */}
                <div
                  className={`md:w-[48%] relative group transition-all duration-300 ${
                    isEven ? "mr-0 md:mr-[10%]" : "ml-0 md:ml-[10%]"
                  }`}
                >
                  <div
                    className={`bg-white p-4 rounded-xl shadow-md border border-blue-100 group-hover:shadow-lg transition-all duration-300 cursor-pointer group-hover:scale-[1.02] group-hover:bg-blue-50 ${
                      isActive ? "ring-1 ring-blue-200" : ""
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-blue-700">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{exp.year}</p>
                    <p className="text-gray-800 font-medium">
                      {exp.role}{" "}
                      <span className="text-sm text-gray-600">
                        ({exp.duration})
                      </span>
                    </p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? "max-h-60 mt-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
