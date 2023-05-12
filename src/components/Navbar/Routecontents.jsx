import React from "react";
import Route from "./Route";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Link from "next/link";

const routetrasition = {
  init: { scale: 1.5, opacity: 0, x: 40 },
  ani: { y: 0, opacity: 1, scale: 1 },
};

const Routecontents = () => {
  return (
    <div>
      <AnimatePresence>
        <motion.div initial="init" animate="ani" transition={{ease:"easeInOut",duration:1.5}} variants={routetrasition} className="grid grid-flow-row grid-cols-3 items-center">
          <Route href="../../pages/Contact.jsx" name="Contact" />
          <Route href="../../pages/Deals.jsx" name="Deals" />
          <div className="p-3 pl-3">
            <Link href="../../pages/Login.jsx">
              <button className="font-serif text-2xl text-center p-3 hover:border-gray-600 transform hover:scale-125 duration-500 border-transparent border-2 hover:border-2 rounded-lg hover:bg-gradient-to-tr hover:from-slate-700 hover:from-10% hover:via-slate-400 hover:via-50% hover:to-white hover:text-slate-600">
                Login
              </button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Routecontents;
