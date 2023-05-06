import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const StringAni = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0,x:-40}}
              animate={{x:0,opacity:1}}
              transition={{ ease:"easeOut", duration:1,delay:0.5}}
              
      >
        <p>{props.name}</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default StringAni;
