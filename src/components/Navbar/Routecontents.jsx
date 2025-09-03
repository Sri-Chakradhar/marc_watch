"use client";

import React, { useEffect, useState } from "react";
import Route from "./Route";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const routetrasition = {
  init: { scale: 1.5, opacity: 0, x: 40 },
  ani: { y: 0, opacity: 1, scale: 1 },
};

const Routecontents = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));

      const syncToken = () => setToken(localStorage.getItem("token"));
      window.addEventListener("storage", syncToken);

      return () => window.removeEventListener("storage", syncToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/Login");
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial="init"
          animate="ani"
          transition={{ ease: "easeInOut", duration: 1.5 }}
          variants={routetrasition}
          className="grid grid-flow-row grid-cols-6 items-center"
        >
          <Route href="/Main" name="Home" />
          <Route href="/Store" name="Store" />
          <Route href="/Contact" name="Contact" />
          <Route href="/Cart" name="Cart" />

          {token ? (
            <Route
              name="Logout"
              onClick={handleLogout}
            />
          ) : (
            <Route href="/Login" name="Login" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Routecontents;
