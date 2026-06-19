import React from "react";
import { Helmet } from "react-helmet-async";

const industrialStorageSolutions = [
  {
    title: "Wide Aisle",
    desc: "Conventional pallet racking allowing easy access to all pallets.",
    img: "https://www.primeworkspacesolutions.co.uk/storage/products/April2020/ec3ZeakyLpAnyZNJlCAl-default.jpg",
    applications: [
      "Used in general warehousing operations.",
      "Compatible with standard forklifts.",
      "Easy to reconfigure and maintain.",
      "Ideal for low to medium storage density.",
    ],
  },
  {
    title: "Narrow Aisle",
    desc: "Maximizes storage capacity while maintaining access efficiency.",
    img: "https://cms.ar-racking.com/uploads/2022/12/estanterias-pasillo-estrecho-1.jpg",
    applications: [
      "Operates with VNA or turret trucks.",
      "Increases warehouse density by up to 40%.",
      "Used in logistics and distribution centers.",
      "Maintains 100% pallet accessibility.",
    ],
  },
  {
    title: "Mobile Pallet Racking",
    desc: "Motorized storage racks on mobile bases for compact warehousing.",
    img: "https://img.directindustry.com/images_di/photo-g/167790-10862989.jpg",
    applications: [
      "Used in cold stores and high-value storage areas.",
      "Eliminates unnecessary aisles for space efficiency.",
      "Controlled via remote or PLC system.",
      "Ensures operator safety with sensors and locks.",
    ],
  },
  {
    title: "Pallet Shuttle System",
    desc: "Semi-automated storage system using shuttles to move pallets within racks.",
    img: "https://igps.net/wp-content/uploads/2025/01/a-guide-to-pallet-shuttle-racking-system.webp",
    applications: [
      "Ideal for high-density storage.",
      "Reduces forklift travel time inside aisles.",
      "Perfect for cold storage and fast-moving goods.",
      "Improves warehouse efficiency and safety.",
    ],
  },
  {
    title: "Drive-In Racking",
    desc: "High-density storage system designed for last-in, first-out (LIFO) operations.",
    img: "https://www.dexion.com/globalassets/images/products/pallet-racking/drive-in-racking/pp-drive-in-04.jpg?w=800&h=400",
    applications: [
      "Maximizes storage space for homogeneous products.",
      "Used in cold storage and bulk storage warehouses.",
      "Minimizes aisle space for increased capacity.",
      "Ideal for seasonal goods or batch storage.",
    ],
  },
  {
    title: "Pallet Flow Racking",
    desc: "Gravity-fed racking system for FIFO inventory management.",
    img: "https://www.dexion.com/globalassets/images/products/pallet-racking/pallet-flow/pp-p90-pallet-flow-03.jpg?w=800&h=400",
    applications: [
      "Ensures automatic stock rotation.",
      "Perfect for perishable goods and high-turnover products.",
      "Uses rollers for smooth pallet movement.",
      "Improves loading and unloading efficiency.",
    ],
  },
  {
    title: "Multi-Tier Racking",
    desc: "Multi-level storage system for maximizing vertical warehouse space.",
    img: "https://www.dexion.com/globalassets/images/products/pallet-racking/multi-tier-pallet-racking/pp-p90-multi-tier-04.jpg?w=800&h=400",
    applications: [
      "Ideal for manual picking and inventory operations.",
      "Maximizes cubic storage area.",
      "Can include walkways and stairs for upper levels.",
      "Used in e-commerce and parts storage.",
    ],
  },
];

const IndustrialStorage = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>Industrial Storage Solutions | Prime Sales Incorporated</title>
      <meta
        name="description"
        content="Prime Sales Incorporated offers a wide range of industrial storage solutions, including pallet racking systems, warehouse shelving, and high-density storage options to maximize efficiency and safety."
      />
      <link
        rel="canonical"
        href="https://www.primegroup.com.ph/solutions/industrial-storage"
      />
    </Helmet>
    <div className="text-center mb-12">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Industrial Storage Solutions – Maximize Warehouse Efficiency
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-xl mx-auto">
        Explore a wide range of pallet racking systems and warehouse storage
        solutions from a trusted Philippine supplier, designed to maximize
        space, improve safety, and support high-density warehouse operations
        across the Philippines.
      </p>
    </div>

    {/* Desktop: original alternating big-image layout. Mobile: compact list row like a shopping app. */}
    <div className="flex flex-col gap-5 md:gap-12">
      {industrialStorageSolutions.map((solution, index) => (
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
              <ul className="hidden md:block list-disc pl-4 text-sm md:text-base text-gray-600 dark:text-gray-300 space-y-1">
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

export default IndustrialStorage;
