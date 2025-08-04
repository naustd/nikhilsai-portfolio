import React, { useEffect, useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const experiences = [
    {
      company: "Northern Arizona University",
      role: "Graduate Teaching Assistant",
      duration: "6 Months",
      description: `
      1. Mentored students in React.js, Spring Boot, and RESTful APIs, emphasizing modular code structure, clean patterns, and best practices in full-stack development.

      2. Led workshops on secure API development with JWT, OAuth2, HTTPS, and Spring Security, demonstrating real-world vulnerabilities and effective mitigation techniques.

      3. Conducted PostgreSQL labs covering indexing, query tuning, and transaction management, and optimized front-end performance with debouncing, lazy loading, and Redux state control.

    `,
    },
    {
      company: "Tata Consultancy Services",
      role: "Full Stack Developer",
      duration: "2 yrs",
      description: `
      1. Developed Spring Boot microservices, implemented business logic, APIs, and validation; ensured secure transactions and scalable CRUD operations.

      2. Built dynamic React.js UIs with real-time validation, integrated Spring backend, and migrated monolith to modular microservices architecture.

      3. Used Hibernate, Oracle SQL, AWS EC2, and JUnit; handled deployments, test coverage, Agile ceremonies, and performance tuning in cloud setups.`,
    },
    {
      company: "ECIL",
      role: "Java Intern",
      duration: "1 yr",
      description: `
      1. Built RESTful APIs using Spring Boot, applied OOP principles, and wrote unit tests with JUnit and Mockito for components.

      2. Integrated Java backend with React.js and Thymeleaf frontends, deployed on AWS EC2/S3, and automated builds using Jenkins.

      3. Supported PostgreSQL CRUD operations, optimized queries, built microservices with Spring Cloud, and collaborated via Git, JIRA, and Confluence in Agile.`,
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

                    <p className="text-gray-800 font-medium">
                      {exp.role}{" "}
                      <span className="text-sm text-gray-600">
                        ({exp.duration})
                      </span>
                    </p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? "max-h-60 mt-2" : "max-h-0"
                      }`}
                    >
                      {exp.description
                        .trim()
                        .split("\n")
                        .map((line, idx) => (
                          <p
                            key={idx}
                            className="text-justify text-gray-800 mb-1 leading-relaxed"
                          >
                            {line.trim()}
                          </p>
                        ))}
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
