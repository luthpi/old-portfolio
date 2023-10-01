import React, { useState, useRef, useEffect } from "react";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNavbar = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => setNav(!nav);
  const ref = useRef();
  useOnClickOutside(ref, () => setNav(false));
  return (
    <>
      <div
        id="hamburger"
        className="cursor-pointer md:hidden
text-3xl custom-transition"
        onClick={navClick}
      >
        <FontAwesomeIcon className="custom-transition" icon={faBars} />
      </div>
      <ul
        id="mobileMenuToggle"
        ref={ref}
        className={
          !nav
            ? "fixed -top-[30rem] w-full shadow-2xl h-[50vh] left-0 bg-[#202020] flex flex-col justify-center items-center gap-2 rounded-b-3xl shadow-2xl border-b-[2px]"
            : "fixed top-0 left-0 w-full h-[50vh] bg-[#202020] flex flex-col justify-center items-center gap-2 rounded-b-3xl shadow-2xl border-b-[2px]"
        }
      >
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300"
        >
          <a href="#home"> Home</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300"
        >
          <a href="#about"> About</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300"
        >
          <a href="#skills"> Skills</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300"
        >
          <a href="#projects"> Projects</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300"
        >
          <a href="#contact"> Contact</a>
        </li>
        <li
          onClick={navClick}
          className="text-3xl custom-transition absolute z-20 -bottom-5 p-3 rounded-full border-2 w-[45px] h-[45px] bg-[#202020] flex items-center justify-center right-5"
        >
          <FontAwesomeIcon
            className="custom-transition text-4xl"
            icon={faClose}
          />
        </li>
      </ul>
    </>
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default MobileNavbar;
