import { useState } from "react";
import SideButtons from "../app/SideButtons";
import Projects from "./Projects";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
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
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            HEY I
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path fill="none" d="M0 0h24v24H0z"></path>{" "}
                  <path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C9.591 12.322 8.17 10.841 8.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            m NIKHILSAI PARIMALLA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center max-w-xl">
            <FaQuoteLeft /> A passionate Full Stack Developer crafting scalable,
            elegant, and secure applications.
            <FaQuoteRight />
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center max-w-xl">
            <FaQuoteLeft /> I love solving real-world problems through code and
            continuously learning new technologies.
            <FaQuoteRight />
          </p> */}
          <h2 className="text-2xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-1">
            HEY I
            <svg
              className="w-8 h-10 md:w-12 md:h-12 animate-bounce"
              viewBox="0 0 24 24"
              fill="#3B82F6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C9.591 12.322 8.17 10.841 8.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" />
            </svg>
            M NIKHILSAI PARIMALLA
          </h2>

          {/* <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2">
              <FaQuoteLeft className="text-blue-500" />
              A passionate Full Stack Developer crafting scalable, elegant, and
              secure applications.
              <FaQuoteRight className="text-blue-500" />
            </span>
          </p> */}
          <div className="relative max-w-2xl mx-auto text-center mb-6">
            <FaQuoteLeft className="absolute left-0 top-0 text-3xl text-blue-500 -translate-x-8 -translate-y-1" />

            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              A passionate Full Stack Developer crafting scalable, elegant, and
              secure applications.
            </p>

            <FaQuoteRight className="absolute right-0 bottom-0 text-3xl text-blue-500 translate-x-8 translate-y-1" />
          </div>

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
