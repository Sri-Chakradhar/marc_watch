import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const ContactCard = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="flex-1 flex items-center justify-center font-serif bg-gradient-to-br from-black via-slate-700 to-slate-300 px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="max-w-md w-full mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 text-white border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Mail className="w-6 h-6" />
            </div>
            <p className="text-lg">support@watchstore.com</p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Phone className="w-6 h-6" />
            </div>
            <p className="text-lg">+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="text-lg">Hyderabad, India</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 w-full py-3 bg-white text-black font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            Send a Message
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCard;
