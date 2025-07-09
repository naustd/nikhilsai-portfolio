import { useState } from "react";
import SideButtons from "../app/SideButtons";
import Projects from "./Projects";
export default function Home() {
  // const [activeProjSectiion, setActiveProjSection] = useState(false);
  // const goProjSection = () => {
  //   setActiveProjSection(!activeProjSectiion);
  // };
  return (
    <>
      <section className="text-center min-h-screen">
        <SideButtons />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-950 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            HEY I'm NIKHILSAI PARIMALLA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center max-w-xl">
            I am kind like a person passionate about technologies.
          </p>
          <button
            className="buttons"
            onClick={() => {
              const section = document.getElementById("projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>
          <div className="flex justify-center mt-10">
            <div className="w-6 h-10 border-2 border-blue-900 rounded-full flex items-start justify-center dark:border-zinc-50">
              <div className="w-1 h-1 bg-blue-900 rounded-full animate-bounce size-9 mt-1 dark:bg-zinc-50" />
            </div>
          </div>
        </div>
      </section>
      {/* box with buttons like linkedin, instagram, twitter */}
    </>
  );
}
