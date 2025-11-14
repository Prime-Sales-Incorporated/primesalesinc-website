import React from "react";
import { Helmet } from "react-helmet-async";

const mheSolutions = [
  {
    title: "Electric Forklift Truck",
    desc: "Efficient and reliable forklifts for various material handling needs.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_vw9NEPHJp7s3azmXzhzd00bTrCQGZ2c1ZAD5e2-aEyYniVjTCf9XAW-eiAQ_dCxgPl_PxIUA57KiDZ02WDjEhDcDoNsAa2N5Ehniin0vIkKB43SPG5uurQMmC_gi7ccKy--nbmRTXselEQklN5AESR-QxnEkCucuxrQh9YPVlJfzfhwdkTHm6UbrT3sbfSeC6nkaUl9KNFZ1VGthZS2m_1gQ9hOBbycXju-Wfcij5iWNSgg3Gac7D0OF2O0jfWh3TiZIQofBwCg",
    applications: [
      "Ideal for indoor warehousing with zero-emission operation.",
      "Used in manufacturing lines and logistics hubs.",
      "Efficient for palletized material handling.",
      "Low noise and reduced maintenance requirements.",
    ],
  },
  {
    title: "ICE Forklift Truck",
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
      <title>Material Handling Equipment | Prime Sales Incorporated</title>
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
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Material Handling Equipment – Efficient Forklifts & Warehouse Tools
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
        Prime Sales Incorporated offers a wide range of material handling
        equipment, including electric forklifts, reach trucks, pallet stackers,
        and other warehouse tools, designed to improve efficiency, safety, and
        productivity in Philippine warehouses and logistics operations.
      </p>
    </div>

    {mheSolutions.map((solution, index) => (
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

export default MHESolutions;
