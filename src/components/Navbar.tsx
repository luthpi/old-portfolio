import React from "react";
import MobileNav from "./MobileNav";
import WideNavbar from "./WideNavbar";
const Navbar: React.FC = () => {
  return (
    <div
      id="navbar"
      className="dot5-transition fixed top-0 z-[99] flex h-[60px] w-full items-center justify-between bg-transparent px-4 py-3 text-white md:px-20"
    >
      <WideNavbar />
      <MobileNav />
    </div>
  );
};

export default Navbar;
