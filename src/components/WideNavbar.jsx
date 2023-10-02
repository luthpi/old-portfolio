import React from "react";
import logo from "../assets/logo.png";
let options = { onscroll: true };

const WideNavbar = () => {
  return (
    <>
      <a
        href="./"
        className="flex items-center gap-1 overflow-hidden text-xl font-bold tracking-widest text-sky-400"
      >
        <img src={logo} alt="My Logo" className="box-border w-[48px] p-1" />
        <span>Luthpai</span>
      </a>
      <ul className="jusify-end hidden h-full items-center gap-4 text-[15px] font-semibold uppercase md:flex">
        <li className="hovScale">
          <a href="#home"> Home</a>
        </li>
        <li className="hovScale">
          <a href="#about"> About</a>
        </li>
        <li className="hovScale">
          <a href="#skills"> Skills</a>
        </li>
        <li className="hovScale">
          <a href="#projects"> Projects</a>
        </li>
        <li className="hovScale">
          <a href="#contact"> Contact</a>
        </li>
      </ul>
    </>
  );
};

export { WideNavbar, options };
