import Education from "../app/Education";
import Skills from "../app/Skills";
import profileImg from "../assets/profilePhoto.jpg";
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-4 py-10  bg-white dark:bg-gray-900">
          {/* Profile and Typewriter */}
          <div className="md:basis-1/2 flex flex-col items-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-48 h-48 rounded-full mb-6"
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
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate and results-driven full-stack developer with a
              strong foundation in Java, Spring Boot, React.js, and PostgreSQL.
              With over two years of experience at Tata Consultancy Services, I
              developed and maintained scalable enterprise-level applications
              while working in agile teams. Currently pursuing a Master’s in
              Information Technology at Northern Arizona University with a GPA
              of 3.83, I continue to grow my skills in Kafka, GraphQL, FastAPI,
              and cloud computing. I’ve built secure full-stack applications
              with RESTful APIs and responsive UIs using Tailwind CSS. I value
              clean code, collaboration, and continuous learning.
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
            <button className="buttons ml-10">Resume</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-4 py-10  bg-white dark:bg-gray-900">
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
