import React, { useState, useEffect, useRef } from "react";
import HeaderHome from "../config/header copy";
import Footer from "../config/footer";
import Header from "../config/header";
import { FaArrowLeft, FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
const slides = [
  { id: 1, img: "/event/5.jpg" },
  { id: 2, img: "/event/4.jpg" },
  { id: 3, img: "/event/7.jpg" },
  { id: 4, img: "/event/6.jpg" },
  { id: 5, img: "/event/9.jpg" },
  { id: 6, img: "/event/8.jpg" },
  { id: 7, img: "/event/10.jpg" },

  { id: 8, img: "/event/11.jpg" },
  { id: 9, img: "/event/12.jpg" },
];

export default function Gallery() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="w-full min-h-screen bg-background-light dark:bg-background-dark">
      <section className="relative py-24 px-4 min-h-screen w-full  overflow-hidden">
        <Header dark={dark} setDark={setDark} />

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-green-500">Solutions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Explore our commitment to innovation and operational excellence.
          </p>
        </div>

        {/* DRAGGABLE SCROLL GALLERY */}
        <div
          ref={sliderRef}
          className="w-full max-w-6xl mx-auto overflow-x-auto px-4 pb-8 no-scrollbar cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-6">
            {slides.map((item) => (
              <div
                key={item.id}
                className="min-w-[300px] md:min-w-[450px] h-[300px] md:h-[380px] rounded-2xl shadow-lg overflow-hidden flex-shrink-0 relative group select-none"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                  alt="gallery"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg font- text-center items-center flex justify-center font-sans leading-normal mt-8 text-gray-300">
          {" "}
          <span className="mr-2 ">Swipe left </span>{" "}
          <GoArrowLeft className="mr-2" />{" "}
          <span className="mr-2"> and right </span> <GoArrowRight />
        </p>
      </section>

      <Footer />
    </div>
  );
}
