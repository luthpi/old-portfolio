import React from "react";
import logo from "../assets/logo.png";
import Socials from "./Socials";
import { GiCoffeeCup } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#171717] py-3 pb-16 flex flex-col justify-center items-center text-white">
      <div className="flex flex-col gap-1 items-center">
        <img src={logo} alt="logo" width="48" />
        <span className="text-sm text-sky-400 font-semibold">Luthpai</span>
      </div>
      <Socials />
      <div className="flex flex-col gap-1 items-center text-center text-sm w-full px-4">
        <span className="flex justify-center w-full items-center gap-2 border-t-[1px] border-t-gray-800 pt-2">
          Built with <FaHeart /> by Luthpai
        </span>
      </div>
    </footer>
  );
};

export default Footer;
