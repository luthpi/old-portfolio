import React, { useEffect } from "react";
import { onscroll } from "../onscroll";
import MobileNav from "./MobileNav";
import { WideNavbar, options } from "./WideNavbar";

const Navbar = () => {
  useEffect(() => {
    if (options.onscroll) {
      onscroll();
    }
  }, []);

  return (
    <div
      id="navbar"
      className="dot5-transition fixed top-0 z-[99] flex h-[60px] w-full items-center justify-between bg-transparent px-4 py-1 text-white md:px-20"
    >
      <WideNavbar />
      <MobileNav />
    </div>
  );
};

export default Navbar;
