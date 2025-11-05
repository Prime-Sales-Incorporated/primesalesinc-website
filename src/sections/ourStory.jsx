import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    title: "The Beginning — 1976",
    text: "It was a risky yet promising opportunity courageously taken. In 1976, Prime Sales Inc. (PSI) began as a bold idea — a small team with big dreams to change the way supply chains worked.",
    image: "/images/story1.jpg",
  },
  {
    title: "Built on Trust",
    text: "Guided by excellent salesmanship and genuine understanding of customers’ unique challenges, PSI grew into a trusted name in intralogistics and supply chain solutions.",
    image: "/images/story2.jpg",
  },
  {
    title: "Global Partnerships",
    text: "Our reputation for quality opened doors to partnerships with global leaders like DEXION and DEMATIC, enhancing our ability to deliver world-class storage and material handling systems.",
    image: "/images/story3.jpg",
  },
  {
    title: "Innovation & Expertise",
    text: "With over four decades of experience, our engineers and managers continually refine their craft — mastering the art of designing efficient and intelligent supply chain systems.",
    image: "/images/story4.jpg",
  },
  {
    title: "Moving Forward",
    text: "Today, PSI continues to innovate with strong partners, modern technology, and unwavering commitment to helping clients lead their markets.",
    image: "/images/story5.jpg",
  },
];

const BookStory = () => {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % stories.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative flex flex-col items-center justify-end h-[24em] md:h-[28em]  overflow-hidden bg-gradient-to-b bg-background-light dark:bg-background-dark text-gray-100 mb-4">
      {/* Floating story text */}
      <div className="absolute bottom-[100%] md:bottom-[100%] w-full flex justify-center">
        <div className="relative w-[80%] md:w-[60%] text-center ">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl w-full font-bold dark:text-white text-background-dark mb-4">
                {stories[index].title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {stories[index].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Book image at bottom */}
      <div className="absolute  bottom-[20%] lg:bottom-[10%] md:bottom-[2%]   w-full flex justify-center">
        <motion.img
          src="/book1.png"
          alt="Book"
          className="w-[350px] md:w-[700px] drop-shadow-[0_0_30px_rgba(0,255,128,0.3)]"
          initial={{ scale: 0.95 }}
          animate={{ scale: [0.95, 1, 0.95] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Optional manual controls */}
      <div className="absolute bottom-[15%] md:bottom-[2%] flex gap-4">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-green-500" : "bg-gray-600"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BookStory;
