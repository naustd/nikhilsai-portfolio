import { useState } from "react";
<<<<<<< HEAD

=======
import { Link } from "react-router-dom";
<link defer rel="stylesheet" href="../src/index.css"></link>;
>>>>>>> master
function ToggleIcon() {
  // State is toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className="relative">
    //     {/* Hamburger Icon */}

    // </div>
    <div className="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
<<<<<<< HEAD
      <button
        id="mobile-menu-button"
        className="group peer"
        onClick={toggleMenu}
      >
=======
      <button id="mobile-menu-button" class="group peer" onClick={toggleMenu}>
>>>>>>> master
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path
<<<<<<< HEAD
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
=======
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
>>>>>>> master
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
<<<<<<< HEAD
            className="size-10"
=======
            class="size-10"
>>>>>>> master
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
<<<<<<< HEAD
=======
      {/* <div
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-0 bg-gray-800 bg-opacity-75 transition-transform duration-300 lg:hidden`}
      >
        <ul>
          <li className="mb-4">
            <Link to="/home" className="text-zinc-50">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/about" className="text-zinc-50">
              About
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/projects" className="text-zinc-50">
              Projects
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/contact" className="text-zinc-50">
              Contact
            </Link>
          </li>
        </ul>
      </div> */}
>>>>>>> master

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 top-20 left-full h-full w-1/2 bg-gray-800 bg-opacity-75 transition-transform duration-300 lg:hidden`}
      >
        {/* Sidebar List */}
        <ul className="flex flex-col items-center justify-center h-full">
<<<<<<< HEAD
          {/* <li className="top-4" to="">
=======
          <li className="top-4" to="">
>>>>>>> master
            <Link>Home</Link>
          </li>
          <li className="mb-4" to="">
            <Link>About</Link>
          </li>
          <li className="mb-4" to="">
            <Link>Projects</Link>
          </li>
          <li className="mb-4" to="">
            <Link>Contact</Link>
<<<<<<< HEAD
          </li> */}
=======
          </li>
>>>>>>> master
        </ul>
      </div>
    </div>
  );
}

export default ToggleIcon;
