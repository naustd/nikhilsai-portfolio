import HoverProjLink from "../app/HoverProjLink";
import projectImage1 from "../assets/projectImage1.png";
import React, { useState } from "react";
export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-zinc-50 mb-2">
              Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-4 py-10  bg-white dark:bg-gray-900">
          {/* Project Images */}
          <div className="md:basis-1/2 flex flex-col items-center">
            {/* <img
              src={projectImage1}
              alt="Project1"
              className="w-1/2 h-1/2 rounded-md mb-2"
            /> */}
            <HoverProjLink
              imageUrl={projectImage1}
              siteUrl={`https://web-final-proj-ptuw.vercel.app/home`}
              altText="Project 1"
            />
          </div>
          {/* Project Description */}
          <div className="md:basis-1/2 text-center md:text-left">
            <p
              className={`text-md text-justify text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-all duration-300 ease-in-out ${
                isExpanded ? "line-clamp-none" : "line-clamp-6"
              }`}
            >
              Developed a responsive, user-friendly front-end using ReactJS with
              Hooks, Context API, and React Router DOM, ensuring seamless
              navigation and efficient state management. Employed Tailwind CSS
              to implement a mobile-first design strategy, delivering a
              consistent user experience across all screen sizes. Designed and
              implemented secure, layered RESTful APIs using Spring Boot,
              incorporating JWT-based authentication, role-based access control
              (RBAC), and Spring Security filters to protect endpoints and
              ensure data compliance. Built normalized PostgreSQL schemas and
              optimized SQL/JPQL queries using Spring Data JPA to enable
              high-performance CRUD operations for user and product data.
              Integrated React with Spring Boot through Axios and JSON
              serialization, ensuring smooth real-time communication, robust
              error handling, and responsive feedback mechanisms. Managed build
              processes with Maven, implemented clean code practices, and
              maintained version control with Git and GitHub. Actively
              contributed to Agile workflows including sprints, stand-ups, and
              code reviews to ensure timely feature delivery and effective
              collaboration across the development team.
            </p>
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-blue-600 font-medium hover:underline focus:outline-none"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
