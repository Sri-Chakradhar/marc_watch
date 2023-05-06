import React from "react";
import watch1 from "../img/watch1.png";
import Image from "next/image";
import { motion } from "framer-motion";
import StringAni from "./Text_animate";

const Container_2 = () => {
  return (
    <section className="p-16 bg-gradient-to-tr from-black via-slate-700 to-slate-300 text-clip">
      <div className="w-auto h-1/3 flex justify-between py-14 text-slate-100 items-center">
        <div className="grid gap-40">
          <div className="grid grid-rows-2 lg:gap-4 gap-7  py-14">
            <div className="text-8xl">
              <StringAni name="Highly Water Resistent" />
            </div>
            <motion.div className="text-4xl">
              <StringAni name="And" />

              <StringAni name="Sweat Proof" />
            </motion.div>
          </div>
        </div>
        <div className="py-5 pl-20">
          <motion.div initial={{ scale: 1.5, opacity: 0, y: 40 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
            className="lg:py-5 py-14 pl-20">
          <Image
            src={watch1}
            alt="watch"
            className="w-[750px] h-[550px] pl-16 rotate-12"
          />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Container_2;
