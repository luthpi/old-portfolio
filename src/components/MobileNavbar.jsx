import React, { useState } from "react";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNavbar = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => setNav(!nav);
  return (
    <>
      <div
        id="hamburger"
        className="cursor-pointer md:hidden z-10 text-3xl custom-transition"
        onClick={navClick}
      >
        {!nav ? (
          <FontAwesomeIcon className="custom-transition" icon={faBars} />
        ) : (
          <FontAwesomeIcon className="custom-transition" icon={faClose} />
        )}
      </div>
      <ul
        id="mobileMenuToggle"
        className={
          !nav
            ? "fixed -top-[30rem] w-full shadow-lg left-0 custom-transition bg-[#202020] flex flex-col justify-center items-center gap-2"
            : "fixed top-0 left-0 w-full custom-transition h-screen bg-[#202020] flex flex-col justify-center items-center gap-2"
        }
      >
        <li
          onClick={navClick}
          className="text-3xl py-2 custom-transition hover:text-gray-300"
        >
          <a href="#home"> Home</a>
        </li>
        <li
          onClick={navClick}
          className="text-3xl py-2 custom-transition hover:text-gray-300"
        >
          <a href="#about"> About</a>
        </li>
        <li
          onClick={navClick}
          className="text-3xl py-2 custom-transition hover:text-gray-300"
        >
          <a href="#skills"> Skills</a>
        </li>
        <li
          onClick={navClick}
          className="text-3xl py-2 custom-transition hover:text-gray-300"
        >
          <a href="#projects"> Projects</a>
        </li>
        <li
          onClick={navClick}
          className="text-3xl py-2 custom-transition hover:text-gray-300"
        >
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </>
  );
};

export default MobileNavbar;
