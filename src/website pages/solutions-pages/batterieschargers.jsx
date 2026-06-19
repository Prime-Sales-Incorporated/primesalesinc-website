import React from "react";
import { Helmet } from "react-helmet-async";

const batteriesChargersSolutions = [
  {
    title: "Industrial Batteries",
    desc: "High-performance traction batteries for electric forklifts and trucks.",
    img: "https://www.batteryasia.com.sg/image/catalog/Lithium/Duroxo%20pic%202png.png",
    applications: [
      "Used in material handling and AGV systems.",
      "Long service life and deep-cycle performance.",
      "Available in lead-acid or lithium-ion variants.",
      "Provides consistent power for 24/7 operations.",
    ],
  },
  {
    title: "Battery Chargers",
    desc: "Smart charging systems for energy efficiency and battery longevity.",
    img: "https://www.batteryasia.com.sg//image/cache/catalog/Product/Chargers/High%20Frequency%20Charger%202-600x600.png",
    applications: [
      "Ensures efficient power management.",
      "Reduces charging time with optimized algorithms.",
      "Supports opportunity and fast charging.",
      "Protects battery health and temperature.",
    ],
  },
  // {
  //   title: "Battery Management Systems",
  //   desc: "Monitoring and control solutions for optimized battery performance.",
  //   img: "https://ek-robotics.com/fileadmin/_processed_/d/1/csm_ek_robotics-agv-amr-x_move_1200-hubbalken-ladestation-rgb_971386577b.jpg",
  //   applications: [
  //     "Monitors charging status and cell health.",
  //     "Prevents overcharging and deep discharge.",
  //     "Integrates with fleet management software.",
  //     "Enhances energy usage and safety compliance.",
  //   ],
  // },
];

const BatteriesChargers = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>Industrial Batteries & Chargers | Prime Sales Incorporated</title>
      <meta
        name="description"
        content="Prime Sales Incorporated offers high-performance forklift batteries, chargers, and battery management systems for reliable and uninterrupted warehouse operations in the Philippines."
      />
      <link
        rel="canonical"
        href="https://www.primegroup.com.ph/solutions/industrial-batteries-and-chargers"
      />
    </Helmet>
    <div className="text-center mb-12">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Industrial Batteries & Chargers – High-Performance Forklift Power
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-4xl mx-auto">
        Prime Sales Incorporated offers durable and hygienic plastic pallets,
        bins, and crates designed for logistics, warehouse storage, and
        industrial applications, ensuring efficiency, safety, and long-term
        reliability in operations across the Philippines.
      </p>
    </div>

    {/* Desktop: original alternating big-image layout. Mobile: compact list row like a shopping app. */}
    <div className="flex flex-col gap-5 md:gap-12">
      {batteriesChargersSolutions.map((solution, index) => (
        <div
          key={index}
          className={`flex flex-row md:items-center gap-4 md:gap-0 rounded-2xl overflow-hidden border border-primary/20 dark:border-primary/30
          bg-background-light dark:bg-background-dark shadow-sm md:shadow-md hover:shadow-lg transition p-3 md:p-0
          md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
        >
          {/* Thumbnail: small square on mobile, large half-width image on desktop */}
          <div
            className="w-20 h-20 shrink-0 rounded-lg bg-center bg-cover
            md:w-1/2 md:h-56 md:rounded-none sm:md:h-64 md:h-[18em]"
            style={{ backgroundImage: `url(${solution.img})` }}
          ></div>

          <div className="flex-1 min-w-0 text-left md:w-1/2 md:p-6 md:sm:p-8 md:text-center md:md:text-left">
            <h3 className="text-sm sm:text-base md:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-3 truncate md:whitespace-normal">
              {solution.title}
            </h3>
            <p className="hidden md:block text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
              {solution.desc}
            </p>
            <p className="md:hidden text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
              {solution.desc}
            </p>

            {/* Applications: bullet lines (compact preview on mobile, full list on desktop) */}
            <div className="mt-2 md:mt-4">
              <h4 className="hidden md:block text-lg font-semibold text-green-500 mb-2">
                Applications
              </h4>
              <ul className="hidden md:block list-disc pl-5 text-sm md:text-base  text-gray-600 dark:text-gray-300 space-y-1">
                {solution.applications.map((app, i) => (
                  <li key={i}>{app}</li>
                ))}
              </ul>
              {/* Compact mobile bullet preview */}
              <ul className="md:hidden flex flex-col gap-1 mt-1.5">
                {solution.applications.slice(0, 2).map((app, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-gray-500 dark:text-gray-400 truncate flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-500 shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BatteriesChargers;
