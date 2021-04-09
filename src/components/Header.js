import React from "react";
// import { FaSearch } from "react-icons/fa";
import Jesus from "../assets/7.svg";

const Header = () => {
  return (
    <>
      <header className="fixed w-full flex items-center justify-between px-5 py-3 lg:justify-around bg-gradient-to-b from-black to-transparent z-50">
        <div className="logo">
          <h2 className="text-2xl lg:text-4xl text-white">Mój Jezus</h2>
        </div>
        <nav>
          <ul className="flex items-center">
            <li className="mx-2 lg:mx-5">
              <a href="#home" className="lg:text-xl text-white">
                Start
              </a>
            </li>
            <li>
              <img src={Jesus} className="w-10" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
