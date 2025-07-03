import SideButtons from "../app/SideButtons";

export default function Home() {
  return (
    <>
      {/* box with buttons like linkedin, instagram, twitter */}
      <SideButtons />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-950 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          HEY MY NAME IS NIKHILSAI PARIMALLA
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center max-w-xl">
          I am kind like a person passionate about technologies.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300">
          Projects
        </button>
      </div>
    </>
  );
}
