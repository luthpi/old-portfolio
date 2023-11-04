import React from "react";
import logo from "../../assets/logo.png";
import Socials from "./Socials";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#171717] py-8 text-white">
      <div className="flex flex-col items-center gap-1">
        <img src={logo} alt="logo" width="48" />
        <span className="text-sm font-semibold text-sky-400">Luthpai</span>
      </div>
      <Socials />
      <div className="flex w-full flex-col items-center gap-1 px-4 text-center text-sm">
        <span className="flex w-full items-center justify-center gap-2 pt-1">
          Built with <FaHeart /> by Luthpai
        </span>
      </div>
    </footer>
  );
};

export default Footer;
