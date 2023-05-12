import React from "react";
import watch1 from "../img/watch1.webp";
import Image from "next/image";
import { motion } from "framer-motion";
import StringAni from "./Text_animate";

const Imagetrasition2 = {
  init1:{ scale: 1.5, opacity: 0, y: -40 },
  ani1:{scale: 1, opacity: 1,y: 0  },
};

const Container_2 = () => {
  return (
    <section className="p-16 bg-gradient-to-tr from-black via-slate-700 to-slate-300 text-clip">
      <div className="w-max h-max grid grid-cols-1 md:flex md:justify-between py-14 text-slate-100 items-center">
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
          <motion.div initial="init1"
            whileInView="ani1"
            variants={Imagetrasition2}
            transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
            className="lg:py-5 py-14 pl-20">
          <Image
            src={watch1}
            alt="watch1"
            className="pl-16 rotate-12"
          />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Container_2;
