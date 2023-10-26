import React from 'react'
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="animate__animated animate__fadeInDown animate__faster flex flex-col items-center justify-center pt-8">
      <Link to="/" className="flex flex-col items-center">
        <img src={Logo} width="64" />
        <h1 className="text-xl font-bold tracking-widest text-sky-400">
          Luthpai <span className="text-lg text-white">Blog</span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
