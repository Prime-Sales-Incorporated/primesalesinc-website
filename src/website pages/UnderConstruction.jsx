import React, { useEffect, useState } from "react";
import { Construction, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../config/header";
import HeaderHome from "../config/header copy";

const UnderConstruction = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-background-dark bg-background-light text-gray-800">
      <HeaderHome dark={dark} setDark={setDark} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8"
      >
        <div className="flex justify-center mb-4">
          <Construction size={80} className="text-yellow-500 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-background-dark dark:text-background-light">
          This Page is Under Construction
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          We’re working hard to bring you something awesome. Please check back
          soon!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-500"
        >
          <Clock size={20} />
          <span>Estimated completion: Coming Soon</span>
        </motion.div>
      </motion.div>

      <footer className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Prime Sales Incorporated. All rights
        reserved.
      </footer>
    </div>
  );
};

export default UnderConstruction;
