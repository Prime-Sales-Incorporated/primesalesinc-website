import React from "react";
import { Helmet } from "react-helmet-async";

const commercialSolutions = [
  {
    title: "Electrical mobile shelving",
    desc: "High-efficiency mobile shelving powered by electric motors, designed to maximize storage capacity with minimal effort.",
    img: "https://bruynzeel-storage.com/storage/17112/conversions/5.-Mobile-storage-systems-for-archives---Compactus┬«-Dynamic-II-overview.jpg",
    applications: [
      "Ideal for archives, offices, and high-density storage areas.",
      "Reduces floor space while increasing storage capacity.",
      "Motorized movement for easy access to stored items.",
      "Customizable to fit different shelving heights and widths.",
    ],
  },
  {
    title: "Mechanical mobile shelving",
    desc: "Space-saving shelving systems operated manually, combining durability with easy access and flexible configurations.",
    img: "https://bruynzeel-storage.com/storage/653/conversions/Smart-warehousing-nieuw-default.jpg",
    applications: [
      "Perfect for warehouses, libraries, and storage rooms.",
      "Manual crank system allows smooth movement.",
      "Optimizes storage density without electricity.",
      "Robust construction for heavy-duty use.",
    ],
  },
  {
    title: "Static shelving",
    desc: "Traditional stationary shelving for versatile and reliable storage of a wide range of items.",
    img: "https://bruynzeel-storage.com/storage/12329/conversions/Archive_static_sysco-default.jpg",
    applications: [
      "Used in offices, warehouses, and retail backrooms.",
      "Supports light to heavy items with strong, stable construction.",
      "Easily configurable to different shelf heights.",
      "Durable and low maintenance solution.",
    ],
  },
  {
    title: "Art racks",
    desc: "Specialized storage racks designed to safely store and protect artwork, prints, and fragile items.",
    img: "https://bruynzeel-storage.com/storage/17114/conversions/ArteStore-Terra-5_Bruynzeel-Storage-Systems_Boijmans-Van-Beuningen_©Ossip-van-Duivenbode-overview.jpg",
    applications: [
      "Ideal for museums, galleries, and art storage facilities.",
      "Maximizes storage while minimizing handling damage.",
      "Adjustable racks for different artwork sizes.",
      "Protects sensitive materials from environmental damage.",
    ],
  },
  {
    title: "Library shelving",
    desc: "Optimized shelving solutions for libraries and archives, ensuring accessibility and organized storage.",
    img: "https://bruynzeel-storage.com/storage/604/conversions/Library-default.jpg",
    applications: [
      "Supports books, magazines, and media collections.",
      "Can be static or mobile to save space.",
      "Durable and modular for future expansion.",
      "Enhances library organization and user accessibility.",
    ],
  },
  {
    title: "Double decker shelving",
    desc: "Maximizes vertical storage space with multi-level shelving, ideal for high-density storage environments.",
    img: "https://bruynzeel-storage.com/storage/12798/conversions/Compactus-Double-Decker_Bruynzeel-Storage-Systems_Amsab-overview.jpg",
    applications: [
      "Perfect for warehouses and large storage rooms.",
      "Two levels of shelving increase storage capacity without extra floor space.",
      "Strong construction supports heavy loads.",
      "Customizable layouts to optimize space utilization.",
    ],
  },
  {
    title: "Compactus XTR",
    desc: "High-performance mobile shelving system designed for heavy-duty and high-density storage applications.",
    img: "https://bruynzeel-storage.com/storage/12651/conversions/Project-462_EdenRavenscroft-03-default.jpg",
    applications: [
      "Ideal for offices, archives, and industrial storage.",
      "Motorized system ensures smooth, effortless operation.",
      "Optimizes storage space while keeping items easily accessible.",
      "Customizable configurations and safety features included.",
    ],
  },
  {
    title: "Compactus XT",
    desc: "Advanced mobile shelving system combining durability, high capacity, and efficient access for professional storage solutions.",
    img: "https://bruynzeel-storage.com/storage/12480/conversions/Saab-large-default.jpg",
    applications: [
      "Suitable for offices, museums, and industrial environments.",
      "Motorized movement for quick access to stored items.",
      "Maximizes storage density with minimal footprint.",
      "Built for heavy loads and frequent use.",
    ],
  },
  {
    title: "Hörmann Steel Doors",
    desc: "Robust steel doors designed for security, durability, and long-lasting performance in commercial and industrial buildings.",
    img: "https://shaktihormann.com/wp-content/uploads/2022/12/DSC_7480_RD.jpg", // placeholder, you can replace with actual
    applications: [
      "Ideal for warehouses, factories, and commercial premises.",
      "Provides high-level security and resistance to impact.",
      "Available in multiple finishes and sizes.",
      "Low maintenance and long service life.",
    ],
  },
  {
    title: "Hörmann Multi-Purpose Steel Doors",
    desc: "Versatile steel doors suitable for a wide range of applications, combining functionality, strength, and reliability.",
    img: "https://images.hoermann-cloud.de/landingpages/de/Neuheiten_2023/Collage-Stahltu__r-ZK-Mehrzweck-3x2.jpg?auto=compress%2Cformat&ixlib=php-4.1.0&q=70&s=77b1a804da21bf2aea4146dbc022e126", // placeholder
    applications: [
      "Used in industrial, commercial, and institutional buildings.",
      "Can be customized for different security and insulation requirements.",
      "Durable steel construction with modern design.",
      "Suitable for high-traffic entrances.",
    ],
  },
  {
    title: "Hörmann Fire-Rated Doors",
    desc: "Specialized steel doors offering fire protection, ensuring safety and compliance with building regulations.",
    img: "https://images.hoermann-cloud.de/landingpages/de/Neuheiten_2023/070T_DHH_Souterrain_TM1.jpg?auto=compress%2Cformat&ixlib=php-4.1.0&q=70&rect=370%2C318%2C3808%2C2539&s=bde66782352a4d4edc0ea137387a3a6a", // placeholder
    applications: [
      "Used in commercial buildings, warehouses, and fire-rated zones.",
      "Resistant to fire for certified durations (e.g., 30–120 minutes).",
      "Supports safety regulations and emergency planning.",
      "Available in various sizes and finishes for different applications.",
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
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Commercial Solutions – Retail Shelving & Rolling Shutters
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300  text-sm md:text-base max-w-4xl mx-auto">
        Prime Sales Incorporated provides high-quality commercial solutions,
        including retail shelving, barriers, and rolling shutters, designed to
        enhance store efficiency, security, and product presentation for
        businesses across the Philippines.
      </p>
    </div>

    {/* Desktop: original alternating big-image layout. Mobile: compact list row like a shopping app. */}
    <div className="flex flex-col gap-5 md:gap-12">
      {commercialSolutions.map((solution, index) => (
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
              <ul className="hidden md:block list-disc pl-5 text-sm md:text-base text-gray-600 dark:text-gray-300 space-y-1">
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

export default CommercialSolutions;
