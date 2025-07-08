import projectImage1 from "../assets/projectImage1.png";
export default function Projects() {
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
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 px-4 py-10">
          {/* Project Images */}
          <div className="md:basis-1/2 flex flex-col items-center">
            <img
              src={projectImage1}
              alt="Project1"
              className="w-1/2 h-1/2 rounded-md mb-2"
            />
          </div>
          {/* Project Description */}
          <div className="md:basis-1/2 text-center md:text-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As a Full-Stack Developer, I have built dynamic and responsive
              user interfaces using ReactJS, leveraging advanced features like
              Hooks, Context API, and React Router to enhance component
              reusability, state management, and seamless navigation. On the
              backend, I developed secure and efficient RESTful APIs using
              Spring Boot, implementing authentication and role-based access
              control to safeguard sensitive data and ensure proper user
              permissions. To support robust and scalable application logic, I
              designed PostgreSQL databases optimized for high-performance
              querying, effective data modeling, and minimal redundancy. I
              ensured smooth integration between the front-end and back-end by
              enabling seamless data exchange through Axios and Spring Boot’s
              JSON serialization, resulting in a cohesive, real-time user
              experience. This end-to-end development experience reflects my
              ability to build secure, maintainable, and performance-driven
              applications—qualities that are crucial in fast-paced,
              production-grade environments. Url :
              https://web-final-proj-ptuw.vercel.app/home
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
