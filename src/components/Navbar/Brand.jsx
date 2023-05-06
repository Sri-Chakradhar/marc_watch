import React from "react";
import logo from "../../img/logo.jpg";
import Image from "next/image";

const Branding = () => {
  return (
    <div className="p-4 px-6">
      <a href="../../pages/Main.jsx" className="cursor-pointer">
      <Image src={logo} alt="Logo" className="w-48 lg:w-44" />
      </a>
    </div>
  );
};

export default Branding;
