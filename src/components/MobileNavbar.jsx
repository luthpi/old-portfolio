import React, { useState, useRef, useEffect } from "react";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { AiOutlineFolderOpen, AiOutlineMail } from 'react-icons/ai'

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
      <div
        id="mobileMenuToggle"
        ref={ref}
        className={
          !nav
            ? "fixed top-0 -right-[70vh] w-[50vw] shadow-2xl h-[100vh] bg-[#161616] flex flex-col justify-start items-center shadow-2xl border-l-[2px] lg:hidden pt-16 border-gray-500 mnshadow box-border"
            : "fixed right-0 w-[50vw] top-0 h-[100vh] bg-[#161616] lg:hidden flex flex-col justify-start items-center  lg:hidden shadow-2xl border-l-[2px] pt-16 border-gray-500 mnshadow box-border"
        }
      >
      <ul className="flex justify-center items-start flex-col gap-3">
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300 flex justify-between gap-2 items-center hover:scale-110"
        >
          <AiOutlineHome />
          <a href="#home"> Home</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300 flex justify-between gap-2 items-center hover:scale-110"
        >
        <BsPerson />
          <a href="#about"> About</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300 flex justify-between gap-2 items-center hover:scale-110"
        >
        <HiOutlineComputerDesktop />
          <a href="#skills"> Skills</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300 flex justify-between gap-2 items-center hover:scale-110"
        >
        <AiOutlineFolderOpen />
          <a href="#projects"> Projects</a>
        </li>
        <li
          onClick={navClick}
          className="text-2xl custom-transition hover:text-gray-300 flex justify-between gap-2 items-center hover:scale-110"
        >
        <AiOutlineMail />
          <a href="#contact"> Contact</a>
        </li>
        <li
          onClick={navClick}
          className="text-3xl custom-transition absolute z-20 -left-6 p-3 rounded-full border-2 border-gray-500 w-[45px] h-[45px] bg-[#202020] flex items-center justify-center top-[30vh]"
        >
          <FontAwesomeIcon
            className="custom-transition text-4xl"
            icon={faClose}
          />
        </li>
      </ul>
      </div>
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
