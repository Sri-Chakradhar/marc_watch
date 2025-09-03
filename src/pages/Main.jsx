import React from "react";
import Navbar from "../components/Navbar";
import Container from "@/components/Container_1";
import Container2 from "@/components/Container_2";
import Contacts_info from "@/components/Contacts_info";

const Main = () => {
  return (
    <div className="w-full min-h-screen font-serif bg-gradient-to-b from-black via-slate-500 to-black overflow-x-hidden">
      <span name="main page" >
        <Navbar />
        <div>
          <Container />
          <Container2 />
        </div>
        <Contacts_info />
      </span>
    </div>
  );
};

export default Main;
