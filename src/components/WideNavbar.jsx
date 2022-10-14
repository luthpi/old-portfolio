import React from "react";
import logo from "../assets/logo.png";
let options = { onscroll: true };

const WideNavbar = () => {
  return (
    <>
      <a
        href="./"
        className="flex items-center gap-1 text-xl font-bold tracking-widest text-sky-400 overflow-hidden"
      >
        <img src={logo} alt="My Logo" className="w-[48px] p-1 box-border" />
        <span>Luthpai</span>
      </a>
      <ul className="hidden md:flex gap-4 uppercase text-[15px] font-semibold h-full items-center jusify-end">
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
