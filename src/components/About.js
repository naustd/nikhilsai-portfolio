import Education from "../app/Education";
import Skills from "../app/Skills";
import profileImg from "../assets/ProfileImg.jpg";
import { Typewriter } from "react-simple-typewriter";
export default function About() {
  return (
    <>
      <section className="py-4">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-gray-900">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-zinc-50 mb-2">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am a hard worker who loves exploring new technologies.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-2 py-10  bg-white dark:bg-gray-900">
          {/* Profile and Typewriter */}
          <div className="md:basis-1/2 flex flex-col items-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-48 h-48 rounded-2xl mb-4  shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            />

            <p className="text-xl font-semibold text-gray-800  dark:text-gray-300 text-center">
              <Typewriter
                words={["Nikhilsai Parimalla"]}
                loop={1}
                cursor
                cursorStyle="_"
                cursorBlinking
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>

          {/* Bio Text and Contact Button */}
          <div className="md:basis-1/2 text-center md:text-left">
            <p className="text-md text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-justify">
              I'm a passionate Java Full Stack Developer with over 4 years of
              industry experience in building scalable, secure, and
              high-performance web applications across finance, healthcare, and
              education sectors. My core expertise lies in Java 17, Spring Boot,
              React.js, and RESTful APIs, combined with strong knowledge of
              cloud platforms like AWS and GCP, DevOps tools like Jenkins and
              Docker, and CI/CD automation. I’ve developed microservices with
              secure access using JWT, OAuth2, and Spring Security, and worked
              extensively with PostgreSQL, Oracle, and MongoDB for efficient
              data handling. I’ve also mentored students at Northern Arizona
              University, conducted workshops on secure API design, and
              optimized databases in high-concurrency environments. My work is
              driven by clean code, performance, and user-first design. I thrive
              in Agile teams, follow TDD practices, and consistently deliver
              reliable and maintainable solutions. I'm always eager to learn,
              collaborate, and innovate with modern technologies.
            </p>
            <button
              className="buttons"
              onClick={() => {
                const section = document.getElementById("contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </button>
            <button
              className="buttons ml-10"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1pcZT6RGw1sPVeYgpujCkt1oSlACwo8vK/view?usp=sharing"
                );
              }}
            >
              Resume
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 px-2 py-10  bg-white dark:bg-gray-900">
          <div className="md:basis-1/2 flex flex-col items-center">
            <Skills id="hide-target" />
          </div>
          <div className="md:basis-1/2 flex flex-col ">
            <Education />
          </div>
        </div>
      </section>
    </>
  );
}
