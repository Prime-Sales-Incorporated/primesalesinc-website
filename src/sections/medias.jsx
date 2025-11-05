import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Innovative Warehousing",
    desc: "Smart, space-efficient storage systems designed to optimize your logistics operations.",
    img: "/proj/1.jpg",
  },
  {
    id: 2,
    title: "Innovative Warehousing",
    desc: "Smart, space-efficient storage systems designed to optimize your logistics operations.",
    img: "/proj/4.png",
  },
  {
    id: 3,
    title: "Innovative Warehousing",
    desc: "Smart, space-efficient storage systems designed to optimize your logistics operations.",
    img: "/proj/3.png",
  },
  {
    id: 4,
    title: "Innovative Warehousing",
    desc: "Smart, space-efficient storage systems designed to optimize your logistics operations.",
    img: "/proj/2.jpg",
  },
];

const ShowcaseCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our <span className="text-green-500">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Explore our commitment to innovation and operational excellence.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <div className="relative h-[22rem] md:h-[36rem]">
          <AnimatePresence>
            <motion.img
              key={slides[index].id}
              src={slides[index].img}
              alt={slides[index].title}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
          >
            {/* <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              {slides[index].title}
            </h3> */}
            {/* <p className="max-w-2xl text-gray-200 text-sm sm:text-base">
              {slides[index].desc}
            </p> */}
          </motion.div>
        </div>

        {/* Controls */}
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/50 hover:bg-gray-900 text-white p-2 rounded-full"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-green-500 w-5" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCarousel;
