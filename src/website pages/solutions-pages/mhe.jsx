import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const mheSolutions = [
  {
    title: "Electric Forklift Truck",
    slug: "electric-forklift",
    desc: "Efficient and reliable forklifts for various material handling needs.",
    img: "/forklift.jpg",
    applications: [
      "Ideal for indoor warehousing with zero-emission operation.",
      "Used in manufacturing lines and logistics hubs.",
      "Efficient for palletized material handling.",
      "Low noise and reduced maintenance requirements.",
    ],
  },
  {
    title: "Internal Combustion Counterbalance Truck",
    slug: "ice-forklift",
    desc: "Durable forklifts designed for outdoor and heavy-duty lifting operations.",
    img: "https://www.linde-mh.com/media/Global-Content/Landingpage-Forklift-Truck/LMH_Range_Portfolio_02_002_Small_16x9w1920.jpg",
    applications: [
      "Designed for rugged outdoor use and heavy loads.",
      "Used in ports, construction, and manufacturing sites.",
      "Handles uneven surfaces and long-duty cycles.",
      "Powered by LPG or diesel for high endurance.",
    ],
  },
  {
    title: "Reach Trucks",
    slug: "reach-trucks",
    desc: "High-reaching trucks for maximizing vertical storage space.",
    img: "https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/reach_truck-loading-retail-3959_4046_16x9w1920.jpg",
    applications: [
      "Operates efficiently in narrow aisles and tall racks.",
      "Enables pallet retrieval at high elevations.",
      "Ideal for cold storage and dense warehouse systems.",
      "Provides advanced stability and load control.",
    ],
  },
  {
    title: "Order Pickers",
    slug: "order-pickers",
    desc: "Specialized order pickers for efficient and accurate order fulfillment.",
    img: "https://www.linde-mh.com/media/Global-Content/01-Products/07_Order-Pickers_Kommissionierer/Order_picker-stacking-warehouse_16x9w1920.jpg",
    applications: [
      "Ideal for e-commerce and distribution centers.",
      "Allows fast, ergonomic order picking operations.",
      "Handles individual SKU selection in racking.",
      "Integrated safety systems for operator protection.",
    ],
  },
  {
    title: "Pallet Trucks",
    slug: "pallet-trucks",
    desc: "Powerful trucks for safe and efficient movement of palletized goods.",
    img: "https://www.linde-mh.com/media/Global-Content/04-About-Linde/Press_Releases/2014/22_2014/pm_22-2014_4196_490_B_16x9w1920.jpg",
    applications: [
      "Used in short-distance horizontal transport.",
      "Ideal for loading docks and vehicle unloading.",
      "Lightweight and maneuverable in tight spaces.",
      "Low maintenance and high efficiency.",
    ],
  },
  {
    title: "Pallet Stackers",
    slug: "pallet-stackers",
    desc: "Versatile stackers for stacking and retrieving materials in tight spaces.",
    img: "https://kion.scene7.com/is/image/kiongroup/application-8907:XXLarge-16-9",
    applications: [
      "For compact warehouse and retail stockrooms.",
      "Efficient in low to medium height stacking.",
      "Used in assembly and light industrial areas.",
      "Battery-powered for indoor applications.",
    ],
  },
  {
    title: "VNA Trucks",
    slug: "vna-trucks",
    desc: "Very Narrow Aisle trucks for high-density storage systems.",
    img: "https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/VNA-order_picking-retail-3795_286_1x1w960.jpg",
    applications: [
      "Ideal for maximizing warehouse space utilization.",
      "Operates in aisles under 2 meters wide.",
      "Supports wire or rail guidance systems.",
      "Designed for precise pallet handling at height.",
    ],
  },
];

const MHESolutions = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>
        Material Handling Equipment | Forklifts, Reach Trucks, Stackers &
        Warehouse Solutions | Prime Sales Incorporated
      </title>
      <meta
        name="description"
        content="Prime Sales Incorporated offers electric forklifts, reach trucks, pallet stackers, and other material handling equipment to improve warehouse efficiency, safety, and productivity in the Philippines."
      />
      <link
        rel="canonical"
        href="https://www.primegroup.com.ph/solutions/mhe"
      />
    </Helmet>

    <div className="text-center mb-12">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Material Handling Equipment – Efficient Forklifts & Warehouse Tools
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-4xl mx-auto">
        Prime Sales Incorporated is a leading material handling equipment
        supplier in the Philippines, specializing in electric forklifts, reach
        trucks, pallet stackers, and warehouse equipment. Our solutions are
        designed to enhance warehouse efficiency, safety, and productivity for
        logistics, manufacturing, and distribution operations across the
        Philippines.
      </p>
    </div>

    <div className="flex flex-col gap-5 md:gap-12">
      {mheSolutions.map((solution, index) => (
        <Link key={index} to={`${solution.slug}`} className="block">
          <div
            className={`flex flex-row md:items-center gap-3 md:gap-0 rounded-2xl border border-primary/20 dark:border-primary/30
              bg-background-light dark:bg-background-dark shadow-sm md:shadow-md hover:shadow-lg transition p-3 md:p-0
              md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Thumbnail */}
            <div
              className="w-20 h-20 shrink-0 rounded-lg bg-center bg-cover md:w-1/2 md:rounded-none md:h-[18em]"
              style={{ backgroundImage: `url(${solution.img})` }}
            />

            {/* Text content — no truncation, no overflow hidden, just wrap freely */}
            <div className="flex-1 md:w-1/2 md:p-6">
              <h3 className="text-sm sm:text-base md:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-3 break-words">
                {solution.title}
              </h3>

              <p className="text-xs md:text-base text-gray-500 dark:text-gray-400 mb-2 md:mb-4 break-words">
                {solution.desc}
              </p>

              <div className="mt-1 md:mt-4">
                <h4 className="hidden md:block text-lg font-semibold text-green-500 mb-2">
                  Applications
                </h4>
                <ul className="flex flex-col gap-1 md:list-disc md:pl-5 md:space-y-1">
                  {solution.applications.map((app, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 md:list-item text-[11px] md:text-base text-gray-500 dark:text-gray-400 break-words"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-green-500 shrink-0 md:hidden" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default MHESolutions;
