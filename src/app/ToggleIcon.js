import { useState } from "react";

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
      <button
        id="mobile-menu-button"
        className="group peer"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 top-20 left-full h-full w-1/2 bg-gray-800 bg-opacity-75 transition-transform duration-300 lg:hidden`}
      >
        {/* Sidebar List */}
        <ul className="flex flex-col items-center justify-center h-full">
          {/* <li className="top-4" to="">
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
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default ToggleIcon;
