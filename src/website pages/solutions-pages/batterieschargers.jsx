import React from "react";

const batteriesChargersSolutions = [
  {
    title: "Industrial Batteries",
    desc: "High-performance traction batteries for electric forklifts and trucks.",
    img: "https://juicestoredenergy.co.uk/cdn/shop/files/Forklift_Battery_Components.jpg?v=1692805221",
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
    img: "https://micropower-group.com/storage/media/729/729-fit-844x731.webp",
    applications: [
      "Ensures efficient power management.",
      "Reduces charging time with optimized algorithms.",
      "Supports opportunity and fast charging.",
      "Protects battery health and temperature.",
    ],
  },
  {
    title: "Battery Management Systems",
    desc: "Monitoring and control solutions for optimized battery performance.",
    img: "https://ek-robotics.com/fileadmin/_processed_/d/1/csm_ek_robotics-agv-amr-x_move_1200-hubbalken-ladestation-rgb_971386577b.jpg",
    applications: [
      "Monitors charging status and cell health.",
      "Prevents overcharging and deep discharge.",
      "Integrates with fleet management software.",
      "Enhances energy usage and safety compliance.",
    ],
  },
];

const BatteriesChargers = () => (
  <div className="flex flex-col gap-12">
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Industrial Batteries & Chargers – High-Performance Forklift Power
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Discover reliable forklift batteries, chargers, and battery management
        systems for uninterrupted warehouse operations.
      </p>
    </div>

    {batteriesChargersSolutions.map((solution, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center rounded-2xl overflow-hidden border border-primary/20 dark:border-primary/30 
        bg-background-light dark:bg-background-dark shadow-md hover:shadow-lg 
        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
      >
        <div
          className="w-full md:w-1/2 h-56 sm:h-64 md:h-[32em] bg-center bg-cover"
          style={{ backgroundImage: `url(${solution.img})` }}
        ></div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {solution.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
            {solution.desc}
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-green-500 mb-2">
              Applications
            </h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              {solution.applications.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default BatteriesChargers;
