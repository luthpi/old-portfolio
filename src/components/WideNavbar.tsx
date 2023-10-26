import React from "react";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

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
      <ul className="jusify-end animate__animated animate__fadeInRight animate__faster hidden h-full items-center gap-4 text-[15px] font-semibold uppercase md:flex">
        <li className="liFunc" id="liHome">
          <a href="#home"> Home</a>
        </li>
        <li className="liFunc" id="liAbout">
          <a href="#about"> About</a>
        </li>
        <li className="liFunc" id="liSkills">
          <a href="#skills"> Skills</a>
        </li>
        <li className="liFunc" id="liProjects">
          <a href="#projects"> Projects</a>
        </li>
        <li className="liFunc" id="liContact">
          <a href="#contact"> Contact</a>
        </li>
        <li className="liFunc" id="liBlog">
          <Link to="/blog"> Blog</Link>
        </li>
      </ul>
    </>
  );
};

export default WideNavbar;
