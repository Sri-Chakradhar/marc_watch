import React, { useState } from "react";
import { useRouter } from 'next/router'; 
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const AuthBox = () => {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const endpoint = isLogin ? "/login" : "/register";
      const payload = isLogin ? { email, password } : { username, email, password } ;

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`${isLogin ? "Login" : "Register"} failed`);

      const data = await res.json();
      localStorage.setItem("token",data.token)
      if (isLogin) {
        router.push("/Store");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col w-screen min-h-screen font-serif bg-gradient-to-br from-black via-slate-700 to-slate-300 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <AnimatePresence mode="wait">
            {isLogin ? (
              // Login form
              <motion.div
                key="login"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-black/30 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none text-white"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-black/30 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none text-white"
                  />
                </div>
              </motion.div>
            ) : (
              // Register form
              <motion.div
                key="register"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-black/30 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-black/30 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none text-white"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-black/30 focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none text-white"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className={`w-full py-3 rounded-lg font-semibold shadow-md transition ${
              isLogin
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isLogin ? "Login" : "Register"}
          </motion.button>

          {/* Switch Auth Mode */}
          <p className="text-sm text-center mt-6 text-gray-300">
            {isLogin ? "Don’t have an account?" : "Already registered?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="cursor-pointer text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              {isLogin ? "Register here" : "Login here"}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthBox;
