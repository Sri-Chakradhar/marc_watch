import React from "react";
import Navbar from "../components/Navbar";
import Container from "@/components/Container_1";
import Container2 from "@/components/Container_2";
import Contacts_info from "@/components/Contacts_info";
import Container3 from "@/components/Container_3";

const Main = () => {
  return (
    <d className="App font-serif">
      <span name="main page">
        <Navbar />
        <div className="shadow-2xl">
          <Container />
          <Container2 />
        </div>
        <Contacts_info />
      </span>
    </d>
  );
};

export default Main;
