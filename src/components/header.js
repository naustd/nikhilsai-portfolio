import { Link } from "react-router-dom";
import logoImage from "../assets/samplePortfolioImage.jpg";
import { useState } from "react";
import ToggleIcon from "../app/ToggleIcon";
<link defer rel="stylesheet" href="../src/index.css"></link>;

function Header() {
  // const [isVertical, setIsVertical] = useState(true);
  // const toggleLayout = () => {
  //   setIsVertical(!isVertical);
  // };

  return (
    <>
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
            <li className="navbar-item">
              <Link to="/home" className="active">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
