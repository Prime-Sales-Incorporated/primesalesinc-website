import React from "react";
import { Helmet } from "react-helmet-async";

const commercialSolutions = [
  {
    title: "Retail Shelving Systems",
    desc: "Stylish and modular display systems for modern retail environments.",
    img: "https://images.unsplash.com/photo-1593085512428-5cc0f42b3c95",
    applications: [
      "Used in supermarkets, pharmacies, and showrooms.",
      "Customizable configurations and finishes.",
      "Supports both light and heavy merchandise.",
      "Designed for aesthetic and durability.",
    ],
  },
  {
    title: "Parking Barriers",
    desc: "Automatic barriers and gates for secure and efficient parking control.",
    img: "https://images.unsplash.com/photo-1617687617038-f07f6d1f5149",
    applications: [
      "Deployed in parking lots and gated facilities.",
      "Supports RFID, ticketing, or sensor systems.",
      "Weatherproof and low maintenance.",
      "Improves security and access control.",
    ],
  },
  {
    title: "Rolling Shutters",
    desc: "Heavy-duty shutters for storefronts and industrial applications.",
    img: "https://images.unsplash.com/photo-1623394213591-1f4d0a6f7f29",
    applications: [
      "Provides security for warehouses and shops.",
      "Available in manual or motorized types.",
      "Made with galvanized or stainless steel slats.",
      "Resists impact, weather, and corrosion.",
    ],
  },
];

const CommercialSolutions = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>Commercial Solutions | Prime Sales Inc.</title>
      <meta
        name="description"
        content="Explore Prime Sales Inc.’s commercial solutions — from warehouse storage and material handling systems to customized racking and cold chain equipment designed for retail, logistics, and industrial operations in the Philippines."
      />
      <link
        rel="canonical"
        href="https://www.primegroup.com.ph/solutions/commercial-solutions"
      />
    </Helmet>

    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Commercial Solutions – Retail Shelving & Rolling Shutters
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
        Prime Sales Incorporated provides high-quality commercial solutions,
        including retail shelving, barriers, and rolling shutters, designed to
        enhance store efficiency, security, and product presentation for
        businesses across the Philippines.
      </p>
    </div>

    {commercialSolutions.map((solution, index) => (
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

export default CommercialSolutions;
