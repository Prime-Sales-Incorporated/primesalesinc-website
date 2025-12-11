import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "1976",
    text: "Prime Sales Inc. started as an insulation company using aluminum foil.",
    imageLight: "/foil.png",

    imageDark: "/foil.png",
  },
  {
    year: "1978",
    text: "Transitioned to insulated sandwich panel.",
    imageLight:
      "https://cycleworld.com.my/wp-content/uploads/2020/11/CWP-%E2%80%93-1-3.jpg",

    imageDark:
      "https://cycleworld.com.my/wp-content/uploads/2020/11/CWP-%E2%80%93-1-3.jpg",
  },
  {
    year: "1986",
    text: "Introduced “Racking System” as a storage solution.",
    imageLight:
      "https://www.dexion.com/contentassets/9101ec80c33649f18be836f70e8deb22/dsc_0078-2.jpg?w=720&quality=50",

    imageDark:
      "https://www.dexion.com/contentassets/9101ec80c33649f18be836f70e8deb22/dsc_0078-2.jpg?w=720&quality=50",
  },
  {
    year: "1988",
    text: "Added “Battery Operated Lift Truck” in the product portfolio.",
    imageLight:
      "https://www.lindemhe.com/wp-content/uploads/2017/04/electric-4-wheel-truck-2-5-3-5ton.jpg",

    imageDark:
      "https://www.lindemhe.com/wp-content/uploads/2017/04/electric-4-wheel-truck-2-5-3-5ton.jpg",
  },
  {
    year: "2008",
    text: "Strenghten product portfolio  with the addition of  loading technology and doors for various applications.",
    imageLight:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNumngild1auwpJuap0VjyQnwvQKRjfw2ZDA&s",

    imageDark:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNumngild1auwpJuap0VjyQnwvQKRjfw2ZDA&s",
  },
  {
    year: "2009",
    text: "Completed the materials handling line by adding Internal Combustion Engine Forklifts.",
    imageLight:
      "https://elevex.ca/wp-content/uploads/2019/01/Linde-1319-series.jpg",

    imageDark:
      "https://elevex.ca/wp-content/uploads/2019/01/Linde-1319-series.jpg",
  },
  {
    year: "2013",
    text: "PSI ventured as an exclusive distributor of warehouse automation technology in the country. ",

    imageLight: "/venture.png",

    imageDark: "/venture.png",
  },
  {
    year: "2015",
    text: "Warehouse Management Software for better supply chain visibility and performance",
    imageLight: "/wms.png",

    imageDark: "/wms.png",
  },
  {
    year: "2017",
    text: "Moved to our new headquarters at Prime Corporate Center East Service Road, Paranaque .",
    imageLight: "/psi-cover.jpg",

    imageDark: "/psi-cover.jpg",
  },
  {
    year: "2019",
    text: "Prime Sales Inc. established its sister company, Optichain Solutions Inc. to offer material handling and industrial storage solutions to booming midrange market.",
    imageLight: "/6.png",
    imageDark: "/6.png",
  },
];

const TimelineItem = ({ year, text, imageLight, imageDark, active, dark }) => (
  <div
    className="relative flex gap-6 items-start"
    style={{ minHeight: "96px" }}
  >
    <div
      className={`w-4 h-4 rounded-full border-2 transition-colors duration-500 ${
        active
          ? "bg-green-500 border-green-500"
          : dark
          ? "bg-gray-700 border-gray-600"
          : "bg-gray-300 border-gray-400"
      }`}
    />
    <div className="">
      <h3
        className={`font-bold text-lg  transition-colors duration-500 ${
          active ? "text-green-400" : dark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {year}
      </h3>
      <p
        className={`text-[12.8px] md:text-sm max-w-xs  transition-colors duration-500 ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {text}
      </p>

      {(imageLight || imageDark) && (
        <img
          src={dark ? imageDark : imageLight}
          alt={`${year} event`}
          className="mt-3 w-36 h-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
        />
      )}
    </div>
  </div>
);

const Timeline = ({ dark, onEndReached }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      let lastVisibleIndex = 0;
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const itemTop = ref.getBoundingClientRect().top;
          if (itemTop < window.innerHeight * 0.8) lastVisibleIndex = index + 1;
        }
      });
      const percent = Math.min(lastVisibleIndex / timelineData.length, 1);
      setScrollPercent(percent);

      setScrollPercent(percent);

      // 🔥 Notify parent when reaching bottom (near 100%)
      if (percent >= 0.98 && onEndReached) {
        onEndReached();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onEndReached]);

  return (
    <div
      className={`relative flex justify-center py-10 min-h-screen mb-8 ${
        dark ? "bg-[#101922] text-white" : "bg-[#f6f7f8] text-gray-900"
      }`}
    >
      <div className="flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl mb-8 font-bold text-center text-gray-900 dark:text-white">
          Our <span className="text-green-500">Timeline</span>
        </h2>

        <div
          ref={containerRef}
          className="relative flex flex-col justify-center items-start gap-16 pl-10"
        >
          {/* Gray base line */}
          <div
            className={`absolute left-[6px] top-0 w-[2px] h-full rounded-full ${
              dark ? "bg-gray-700" : "bg-gray-300"
            }`}
          />

          {/* Green progress line */}
          {/* Green progress line */}
          <motion.div
            className="absolute left-[6px] top-0 w-[2px] bg-green-500 rounded-full origin-top"
            animate={{ height: `${scrollPercent * 100}%` }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />

          {/* 🏗️ Forklift stays at the end of the green line */}
          <motion.img
            src="/f2.png"
            alt="Forklift"
            className="absolute top-0 left-[-18px] w-12"
            animate={{
              y: Math.min(
                scrollPercent * containerHeight,
                containerHeight - 40
              ),
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <div key={index} ref={(el) => (itemRefs.current[index] = el)}>
              <TimelineItem
                {...item}
                dark={dark}
                active={scrollPercent >= (index + 1) / timelineData.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
