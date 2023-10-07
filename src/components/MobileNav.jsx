import React, { useState, useRef, useEffect } from "react";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineFolderOpen, AiOutlineMail } from "react-icons/ai";

const MobileNav = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => setNav(!nav);
  const ref = useRef();
  useOnClickOutside(ref, () => setNav(false));
  return (
    <>
      <div
        id="hamburger"
        className="custom-transition cursor-pointer
text-3xl md:hidden"
        onClick={navClick}
      >
        <FontAwesomeIcon className="custom-transition" icon={faBars} />
      </div>
      <div
        id="mobileMenuToggle"
        ref={ref}
        className={
          !nav
            ? "mnshadow fixed -right-[100vh] top-0 box-border flex h-[100vh] w-[50vw] flex-col items-center justify-start border-l-[2px] border-gray-500 bg-[#161616] pt-16 shadow-2xl md:hidden"
            : "mnshadow fixed right-0 top-0 box-border flex h-[100vh] w-[50vw] flex-col items-center justify-start  border-l-[2px] border-gray-500 bg-[#161616] pt-16 md:hidden"
        }
      >
        <ul className="flex flex-col items-start justify-center gap-3">
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2 text-2xl hover:scale-110 hover:text-gray-300"
          >
            <AiOutlineHome />
            <a href="#home"> Home</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2 text-2xl hover:scale-110 hover:text-gray-300"
          >
            <BsPerson />
            <a href="#about"> About</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2 text-2xl hover:scale-110 hover:text-gray-300"
          >
            <HiOutlineComputerDesktop />
            <a href="#skills"> Skills</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2 text-2xl hover:scale-110 hover:text-gray-300"
          >
            <AiOutlineFolderOpen />
            <a href="#projects"> Projects</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2 text-2xl hover:scale-110 hover:text-gray-300"
          >
            <AiOutlineMail />
            <a href="#contact"> Contact</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition absolute -left-6 top-[30vh] z-20 flex h-[45px] w-[45px] items-center justify-center rounded-full text-white border-2 border-gray-500 bg-[#202020] p-3 text-3xl"
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

export default MobileNav;
