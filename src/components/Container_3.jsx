import React from "react";
import Image from "next/image";
import watch2 from "../img/watch2.png";

const Container3 = () => {
  return (
    <section className="w-full h-full pl-16 pr-16 pt-16 center bg-gradient-to-br from-black via-slate-700 to-slate-300 text-clip">
      <div className=" py-14 text-slate-100 center bg-">
        <div className="grid gap-40">
          <div className="grid grid-rows-2 lg:gap-4 gap-7  py-14">
            <div className="text-8xl">
              <p className="">Conquer The World</p>
            </div>
            <div className="text-4xl">
              <p className=""></p>
            </div>
          </div>
        </div>
        <div className="center">
          <Image
            src={watch2}
            alt="watch"
            className="w-[750px] h-[550px] bg-fixed"
          />
        </div>
      </div>
    </section>
  );
};

export default Container3;
