import logoImage from "../assets/samplePortfolioImage.jpg";
import { useEffect, useState } from "react";
import ToggleIcon from "../app/ToggleIcon";

const Header = ({ activeSection, onNavigate }) => {
  // const [isVertical, setIsVertical] = useState(true);
  // const toggleLayout = () => {
  //   setIsVertical(!isVertical);
  // };
  const menuItems = ["home", "about", "experience", "projects", "contact"];
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const shoudlBeSticky = window.scrollY > 100;
      setIsSticky(shoudlBeSticky);
      // Checking if scrolled out of the home section.
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        setIsDarkTheme(window.scrollY > homeBottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      <header
        className={`bg-white shadow-md fixed top-0 w-full transition-all duration-300 z-50 ${
          isSticky
            ? "shadow-lg " +
              (isDarkTheme
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800")
            : "bg-transparent text-white"
        }`}
      >
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
          <ToggleIcon isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <div className="md:flex hidden flex-1 items-center justify-end">
            <ul className="flex gap-6">
              {menuItems.map((item) => {
                return (
                  <li
                    key={item}
                    onClick={() => onNavigate(item)}
                    className={`cursor-pointer capitalize hover:text-zinc-100 ${
                      activeSection === item
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        {isMobile && isMenuOpen && (
          <div className="md:hidden bg-white w-full shadow-lg absolute z-50 ">
            <nav>
              <ul className="flex flex-col divide-y divide-gray-100">
                {menuItems.map((item) => {
                  return (
                    <li
                      key={item}
                      onClick={() => onNavigate(item)}
                      className={`py-4 pr-8 cursor-pointer text-end  capitalize hover:text-blue-500 ${
                        activeSection === item
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
