import React from "react";
import logo from "../assets/logo.png";
import Socials from "./Socials";
import { GiCoffeeCup } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#171717] py-3 pb-16 flex flex-col justify-center items-center text-white">
      <div className="flex flex-col gap-1 items-center">
        <img src={logo} alt="" width="32" />
        <span className="text-sm text-sky-400 font-semibold">Luthpai</span>
      </div>
      <Socials />
      <div className="flex flex-col gap-1 items-center text-center text-sm">
        <span>Copyright &copy; 2022 Muhammad Luthfi Afriansyah</span>
        <span className="flex items-center gap-2 border-y-[1px] p-2 mt-2">
          Built with <GiCoffeeCup /> & <FaHeart /> by Luthpai
        </span>
      </div>
    </footer>
  );
};

export default Footer;
