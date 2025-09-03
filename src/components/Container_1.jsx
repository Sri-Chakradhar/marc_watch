import React from "react";
import watch from "../img/watch.png";
import Image from "next/image";
import StringAni from "./Text_animate";
import { AnimatePresence, motion } from "framer-motion";

const Imagetrasition = {
  init: { scale: 1.5, opacity: 0, y: 40 },
  ani: { y: 0, opacity: 1, scale: 1 },
};

const Container = () => {
  return (
    <AnimatePresence>
      <section className="w-full h-full p-16 bg-gradient-to-br from-black via-slate-700 to-slate-300">
        <div className=" grid grid-cols-1 md:grid-cols-2 md:justify-between ">
          <motion.div
            initial="init"
            whileInView="ani"
            transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
            variants={Imagetrasition}
            className="lg:py-5 py-14 pl-20"
          >
            <Image src={watch} alt="watch" className="w-3/4 -rotate-12" />
          </motion.div>
          <div className="grid md:grid-rows-2 gap-35">
            <div className="grid grid-rows-2 gap-4 py-8">
              <div className="text-8xl">
                <StringAni name="Weather Lite pro" />
              </div>
              <div className="text-5xl">
                <StringAni name="AI Powered"/>
              </div>
            </div>
            <div className="place-items-center text-md text-slate-800">
              <div className="p-2 hover:text-slate-900 text-lg">
                <StringAni name="Terms & Conditions Apply" />
              </div>
              <motion.div
                initial="init"
                whileInView="ani"
                transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
                variants={Imagetrasition}
              >
                <button className="bg-black text-white p-3 px-24 rounded-xl outline-offset-2 hover:scale-125 transform duration-200 ease-out hover:border-white border-2 hover:bg-slate-800 shadow-md">
                  Buy Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Container;
