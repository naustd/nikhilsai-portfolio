import logoImage from "../assets/samplePortfolioImage.jpg";
// import { useState } from "react";
import ToggleIcon from "../app/ToggleIcon";

const Header = ({ setActiveSection, activeSection }) => {
  // const [isVertical, setIsVertical] = useState(true);
  // const toggleLayout = () => {
  //   setIsVertical(!isVertical);
  // };
  const menuItems = ["home", "about", "projects", "contact"];
  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="sticky flex top-0 p-2 z-10 bg-gradient-to-r from-blue-500 to-slate-400">
          <div className="flex items-center p-2 gap-2">
            <img
              src={logoImage}
              alt="myImage"
              className="logo rounded-full h-10"
              width="40"
            ></img>
            <p className="open-sans-description">
              <span className="text-gray-950 font-bold">Nikhilsai</span>{" "}
              <span className="text-zinc-50 font-bold">Parimalla</span>
            </p>
          </div>
          <ToggleIcon />
          <div className="md:flex hidden flex-1 items-center justify-end">
            <ul className="flex gap-6">
              {menuItems.map((item) => {
                return (
                  <li
                    key={item}
                    onClick={() => setActiveSection(item)}
                    className={`cursor-pointer capitalize hover:text-blue-500 ${
                      activeSection === item
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
