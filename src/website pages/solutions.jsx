import React, { useRef } from "react";
import { Link } from "react-router-dom";

const OurSolutions = () => {
  const solutions = [
    {
      title: "Cold Chain",
      img: "https://www.seoulz.com/wp-content/uploads/2022/06/coldchain.jpg",
      desc: "Boost productivity and precision with our cutting-edge automated systems and robotics.",
      video: "/cold.mp4",
      tab: "Cold Chain",
    },

    {
      title: "Industrial Storage Solutions",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNW_nVSRhCGbRNUmfJjMf_qqbetLTR1MfkYTjlbN1bxowIFGpPc_pqjlkz57tkrqzGzTxPq8PwzE9ipVXNDdZIAcKiVL5N4Mz3E6P2z-We6QhbdIFbA831k-Xr4BLA58iwOx551cKoYW8PmuSg3HT7CMPJIcIoL7cn-HQRpWWzfpZg00nFAVOORvBeAQvR4Qd0YnaiVZIF0cIvTnm6Dvi1xXQ9nfy5pWpChb4G6UiUZD4aVnHtb8QUacEPEQZG-H8IW_1JI0spUF4",
      desc: "Optimize your warehouse space with our durable and versatile racking and shelving solutions.",
      video: "/iss.mp4",
      tab: "Industrial Storage",
    },
    {
      title: "Material Handling Equipment",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATOnPlS6_h1gQHBxebXeHQ65NaJbuzE9WWEXhMj-Inc5ncODptXaj4QDgF05LEJ0dN609FyDQlQU05aLKlgvZLEzLe5-U3ECLktbo-1YTIezHRFW1nmWF8b2yh6yGvYMdh03-XSWDrv1Gg16SVcP79LEDxIjZW89lu3ApyXieFFh1a5VOTDs93reQVwD45DJ5jZPFNXyGxrjGC8NYZIthDrUmTDhYHvQW-oV_yrkA1huasJYkPmjp9aQhoDtN5qOm9WcpM9Xk6dkE",
      desc: "High-performance forklifts designed for reliability and efficiency in various industrial applications.",
      video: "/mhe.mp4",
      tab: "MHE",
    },
    {
      title: "Plastic Pallets, Bins and Crates",
      img: "/pallets.png",
      desc: "High-performance forklifts designed for reliability and efficiency in various industrial applications.",
      video: "/mhe.mp4",
      tab: "MHE",
    },
    {
      title: "Automation Solutions",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGGSThrlguVhMZyhxolbW6gvgAG3wmWFGtc-9atK_OJxP1UDmqJ167tUmqymcGpawV6khJuXBqqm9z19CBdWX9qHLT972AGYuHwNTR6YHK8GZoEAGlPjAgGeQYO5H59j7r1VslSNDMpmSCvHS85actfkRSPlfLliBCDDb57G1jWrpS_5s4Ew5OlPa0D_q2gqZrMCk0EX2TZLCoCCigcLqHyOuJvU8WWfLIloxFoIIQCB71aAIE8tqdUZmBxdBVzj0kxoLqz-yNXWA",
      desc: "Boost productivity and precision with our cutting-edge automated systems and robotics.",
      video: "/automationvid.mp4",
      tab: "Automation Solutions",
    },

    {
      title: "Docks & Doors",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZi1mz4AVCxzDP_KgpTcu9rfEVAkWAMxLWw&s",
      desc: "Boost productivity and precision with our cutting-edge automated systems and robotics.",
      video: "/hormann.mp4",
      tab: "Docks & Doors",
    },
    {
      title: "Industrial Batteries and Chargers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedKd_YgLpG2K8vHBxekSlDwjX6qcwvX3RFw&s",
      desc: "Boost productivity and precision with our cutting-edge automated systems and robotics.",
      video: "/automationvid.mp4",
      tab: "Industrial Batteries and Chargers",
    },

    {
      title: "Commercial Solutions",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2ohA0l7JjkFtGBBUZNnuYBCFf0GbvKi78Q&s",
      desc: "Boost productivity and precision with our cutting-edge automated systems and robotics.",
      video: "/brunzyeel.mp4",
      tab: "Commercial Solutions",
    },
  ];

  const tabSlug = (str) => str.trim().toLowerCase().replace(/\s+/g, "-");

  // Create a ref array for all videos
  const videoRefs = useRef([]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-display relative">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
            Our <span className="text-green-500">Solutions</span>
          </h1>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            We provide a comprehensive range of intralogistics solutions
            tailored to meet your specific needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <Link to={`/solutions/${tabSlug(solution.tab)}`} key={i}>
              <div
                className="bg-background-light dark:bg-background-dark rounded-lg shadow-lg shadow-gray-400 dark:shadow-gray-800 overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
                onMouseEnter={() => {
                  const vid = videoRefs.current[i];
                  if (vid) {
                    vid.currentTime = 0;
                    vid.play().catch(() => {});
                  }
                }}
                onMouseLeave={() => {
                  const vid = videoRefs.current[i];
                  if (vid) vid.pause();
                }}
              >
                <div className="relative h-56 w-full">
                  <img
                    src={solution.img}
                    alt={`${solution.title} solutions in the Philippines | Prime Sales Inc.`}
                    className="h-full w-full object-cover absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {solution.video && (
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={solution.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text-light dark:text-text-dark">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {solution.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OurSolutions;
