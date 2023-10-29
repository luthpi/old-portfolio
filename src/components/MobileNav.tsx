import React, { useState, useRef, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { AiOutlineFolderOpen, AiOutlineMail } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiSolidChevronsUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [nav, setNav] = useState(false);
  const navClick = () => setNav(!nav);
  const ref = useRef();
  useOnClickOutside(ref, () => setNav(false));
  return (
    <>
      <div
        id="hamburger"
        className="cursor-pointer text-3xl md:hidden"
        onClick={navClick}
      >
        <FontAwesomeIcon className="custom-transition" icon={faBars} />
      </div>
      <div
        id="mobileMenuToggle"
        ref={ref}
        className={
          !nav
            ? "mnshadow fixed right-0 top-0 box-border flex h-fit w-[45vw] translate-y-[-120%] flex-col items-center justify-center rounded-bl-2xl border-b-[2px] border-l-[2px] border-gray-400 bg-[#161616] pb-14 pt-6 shadow-2xl md:hidden"
            : "mnshadow fixed right-0 top-0 box-border flex h-fit w-[45vw] translate-y-100 flex-col items-center justify-center rounded-bl-2xl border-b-[2px] border-l-[2px] border-gray-400 bg-[#161616] pb-14 pt-6 md:hidden"
        }
      >
        <ul className="flex flex-col items-start justify-center gap-[9px] text-[20px]">
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2  hover:scale-110 hover:text-gray-300"
          >
            <AiOutlineHome />
            <a href="#home"> Home</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2  hover:scale-110 hover:text-gray-300"
          >
            <BsPerson />
            <a href="#about"> About</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2  hover:scale-110 hover:text-gray-300"
          >
            <HiOutlineComputerDesktop />
            <a href="#skills"> Skills</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2  hover:scale-110 hover:text-gray-300"
          >
            <AiOutlineFolderOpen />
            <a href="#projects"> Projects</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2  hover:scale-110 hover:text-gray-300"
          >
            <AiOutlineMail />
            <a href="#contact"> Contact</a>
          </li>
          <li
            onClick={navClick}
            className="custom-transition flex items-center justify-between gap-2  hover:scale-110 hover:text-gray-300"
          >
            <IoDocumentTextOutline />
            <Link to="/blog"> Blog</Link>
          </li>
        </ul>
        <button
          aria-label="button"
          onClick={navClick}
          className="absolute -bottom-5 w-fit rounded-full border-[2px] border-gray-400 bg-[#202020] p-2 text-xl"
        >
          <BiSolidChevronsUp />
        </button>
      </div>
    </>
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
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
