import React from "react";
import { Construction, Clock } from "lucide-react";
import { motion } from "framer-motion";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background-light text-gray-800">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center p-8"
      >
        <div className="flex justify-center mb-4">
          <Construction size={80} className="text-yellow-500 animate-bounce" />
        </div>
        <h1 className="text-4xl font-bold mb-2">
          This Page is Under Construction
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We’re working hard to bring you something awesome. Please check back
          soon!
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2 text-gray-500"
        >
          <Clock size={20} />
          <span>Estimated completion: Coming Soon</span>
        </motion.div>
      </motion.div>

      <footer className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Prime Group. All rights reserved.
      </footer>
    </div>
  );
};

export default UnderConstruction;
