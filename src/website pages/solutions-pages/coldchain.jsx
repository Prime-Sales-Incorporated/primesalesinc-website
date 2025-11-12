import React from "react";
import { Helmet } from "react-helmet-async";

const coldChainSolutions = [
  {
    title: "Structural Insulated Panels",
    desc: "High-performance insulated panels for temperature-controlled environments.",
    img: "https://cdn.prod.website-files.com/65b78bf37d2c3fb937b48de0/666c05755512f939a027e001_structural-insulated-panels-sips.jpg",
    applications: [
      "Used for cold rooms, freezers, and chillers.",
      "Ensures consistent temperature control.",
      "Lightweight with superior insulation performance.",
      "Provides structural integrity and energy savings.",
    ],
  },
  {
    title: "Insulated Doors",
    desc: "Energy-efficient cooling systems for industrial cold rooms and warehouses.",
    img: "https://image.made-in-china.com/365f3j00qJScKvjdigou/Cold-Storage-Doors-Polyurethane-Insulation-Stainless-Steel-Sliding-Door-for-Cold-Room.webp",
    applications: [
      "Maintains temperature stability in cold facilities.",
      "Available in sliding, hinged, or automatic types.",
      "Reduces energy loss during frequent access.",
      "Corrosion-resistant and hygienic design.",
    ],
  },
  {
    title: "Panel and Door Accessories",
    desc: "Fast freezing technology for food preservation and product safety.",
    img: "https://image.made-in-china.com/365f3j00APycNQCbruoY/Vertical-Lifting-up-Industrial-Overhead-Panel-Door.webp",
    applications: [
      "Includes trims, gaskets, and sealants.",
      "Enhances insulation performance.",
      "Simplifies installation and maintenance.",
      "Ensures long-term thermal efficiency.",
    ],
  },
];

const ColdChain = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>Cold Chain Solutions | Prime Sales Incorporated</title>
      <meta
        name="description"
        content="Reliable temperature-controlled storage solutions by Prime Sales Incorporated — including insulated panels, doors, and accessories."
      />
      <link
        rel="canonical"
        href="https://www.primesalesincorporated.com/cold-chain"
      />
    </Helmet>
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Cold Chain Solutions – Reliable Temperature-Controlled Storage
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        High-quality cold storage and refrigeration systems to preserve
        products, maintain freshness, and optimize logistics.
      </p>
    </div>

    {coldChainSolutions.map((solution, index) => (
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

export default ColdChain;
