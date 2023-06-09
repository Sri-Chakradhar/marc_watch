import React from "react";
import Branding from "./Navbar/Brand";
import Routecontents from "./Navbar/Routecontents";

const Navbar = () => {
  return (
    <div className="w-full h-full flex justify-between items-center shadow-md p-5 bg-gradient-to-tr from-black via-slate-700 to-slate-300">
      <Branding />
      <Routecontents />
    </div>
  );
};

export default Navbar;
