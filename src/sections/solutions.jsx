import React, { useRef } from "react";
import { Link } from "react-router-dom";

const OurSolutions = () => {
  const solutions = [
    {
      title: "Cold Chain",
      img: "https://www.seoulz.com/wp-content/uploads/2022/06/coldchain.jpg",
      desc: "Comprehensive cold chain solutions designed for temperature control like structural insulated panels, insulated doors and panel and door accessories that ensure durability, energy efficiency, and reliable thermal performance.",
      video: "/cold.mp4",
      tab: "Cold Chain",
    },
    {
      title: "Industrial Storage ",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNW_nVSRhCGbRNUmfJjMf_qqbetLTR1MfkYTjlbN1bxowIFGpPc_pqjlkz57tkrqzGzTxPq8PwzE9ipVXNDdZIAcKiVL5N4Mz3E6P2z-We6QhbdIFbA831k-Xr4BLA58iwOx551cKoYW8PmuSg3HT7CMPJIcIoL7cn-HQRpWWzfpZg00nFAVOORvBeAQvR4Qd0YnaiVZIF0cIvTnm6Dvi1xXQ9nfy5pWpChb4G6UiUZD4aVnHtb8QUacEPEQZG-H8IW_1JI0spUF4",
      desc: "Storage solutions designed to maximize warehouse space through durable and versatile racking systems, like wide aisle, narrow aisle, mobile pallet, pallet shuttle systems, drive-in, pallet flow and multi-tier racking.",
      video: "/iss.mp4",
      tab: "Industrial Storage",
    },
    {
      title: "Material Handling Equipment",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATOnPlS6_h1gQHBxebXeHQ65NaJbuzE9WWEXhMj-Inc5ncODptXaj4QDgF05LEJ0dN609FyDQlQU05aLKlgvZLEzLe5-U3ECLktbo-1YTIezHRFW1nmWF8b2yh6yGvYMdh03-XSWDrv1Gg16SVcP79LEDxIjZW89lu3ApyXieFFh1a5VOTDs93reQVwD45DJ5jZPFNXyGxrjGC8NYZIthDrUmTDhYHvQW-oV_yrkA1huasJYkPmjp9aQhoDtN5qOm9WcpM9Xk6dkE",
      desc: "A complete lineup of material handling equipment, including forklifts, reach trucks, order pickers, pallet movers, stackers, and very narrow aisle trucks, engineered to deliver efficient and reliable performance across all industries.",
      video: "/mhe.mp4",
      tab: "MHE",
    },
    {
      title: "Plastic Pallets, Bins & Crates",
      img: "/pallets.png",
      desc: "Comprehensive set  of durable and hygienic handling products including eco pallets, warehouse pallets, metal reinforced pallets and spill containment pallets designed for efficient and compliant logistics operations.",
      video: "/pallets.mp4",
      tab: "Plastic Pallets, Bins and Crates",
    },
    {
      title: "Automation Solutions",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGGSThrlguVhMZyhxolbW6gvgAG3wmWFGtc-9atK_OJxP1UDmqJ167tUmqymcGpawV6khJuXBqqm9z19CBdWX9qHLT972AGYuHwNTR6YHK8GZoEAGlPjAgGeQYO5H59j7r1VslSNDMpmSCvHS85actfkRSPlfLliBCDDb57G1jWrpS_5s4Ew5OlPa0D_q2gqZrMCk0EX2TZLCoCCigcLqHyOuJvU8WWfLIloxFoIIQCB71aAIE8tqdUZmBxdBVzj0kxoLqz-yNXWA",
      desc: "Comprehensive automation solutions including conveyor systems, automated storage and retrieval systems (AS/RS) and multishuttle robots to enhance productivity, precision and operational efficiency in warehouses and facilities.",
      video: "/automationvid.mp4",
      tab: "Automation Solutions",
    },
    {
      title: "Docks and Doors",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZi1mz4AVCxzDP_KgpTcu9rfEVAkWAMxLWw&s",
      desc: "Comprehensive dock and door solutions including levelers, shelters, loading houses, control systems, sectional and high-speed doors, ISO cold doors and rolling shutters designed for safe and efficient warehouse operations.",
      video: "/hormann.mp4",
      tab: "Docks and Doors",
    },
    {
      title: "Warehouse Management System",
      img: "https://images3.welcomesoftware.com/Zz05ZTBlZTI3MDBhYmExMWVlYWE4NzY2YjhiM2IzOTMzYQ==?w=1400&h=1120&format=webp",
      desc: "Advanced warehouse management solutions providing real-time inventory visibility, efficient picking and putaway, and automation-ready workflows, designed to streamline operations and enhance productivity across warehouse and distribution environments.",
      video: "/wms.mp4",
      tab: "Warehouse Management System",
    },
    {
      title: "Industrial Batteries & Chargers",
      img: "https://media.licdn.com/dms/image/v2/C561BAQHaY1KfM2dfGQ/company-background_10000/company-background_10000/0/1630636203551/batteryasiasingapore_cover?e=2147483647&v=beta&t=Gq3eJS9DGVbtHLFoJHaK5uSoEOTEBjin7UJirmHNB4s",
      desc: "Complete battery and charging solutions, including industrial batteries, smart battery chargers, and battery management systems, designed to deliver reliable power, optimize performance, and support efficient operations for material handling equipment.",
      video: "/batteries.mp4",
      tab: "Industrial Batteries and Chargers",
    },
    {
      title: "Commercial Solutions",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2ohA0l7JjkFtGBBUZNnuYBCFf0GbvKi78Q&s",
      desc: "Comprehensive commercial solutions including retail shelving systems, parking barriers, and rolling shutters designed to enhance security, functionality, and aesthetics while providing efficient and reliable performance in commercial spaces. ",
      video: "/brunzyeel.mp4",
      tab: "Commercial Solutions",
    },
  ];

  const tabSlug = (str) => str.trim().toLowerCase().replace(/\s+/g, "-");
  const videoRefs = useRef([]);

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-display relative min-h-screen">
      {/* Hidden links for SEO / prerendering */}
      <div style={{ display: "none" }}>
        {solutions.map((s, i) => (
          <a key={i} href={`/solutions/${tabSlug(s.tab)}`}>
            {s.title}
          </a>
        ))}
      </div>

      <main className="container mx-auto px-2 xl:px-2 2xl:px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
            Our <span className="text-green-500">Solutions</span>
          </h1>
          <p className="mt-4  text-sm md:text-base text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            We provide a comprehensive range of intralogistics solutions
            tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <Link key={i} to={`/solutions/${tabSlug(solution.tab)}`}>
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
                  <h3 className="text-xl text-gray-900 dark:text-white font-bold text-text-light dark:text-text-dark">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                    {/* {solution.desc} */}
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
