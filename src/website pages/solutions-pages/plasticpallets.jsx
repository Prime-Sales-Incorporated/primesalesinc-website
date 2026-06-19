import React from "react";
import { Helmet } from "react-helmet-async";

const plasticPallets = [
  {
    title: "Eco Pallets",
    desc: "Sustainable and lightweight pallets made from recycled or eco-friendly materials.",
    img: "https://ecopallets.com.au/wp-content/uploads/2023/03/Slider-eco-1160L.png",
    applications: [
      "Environmentally friendly alternative to traditional pallets.",
      "Reusable and recyclable for cost efficiency.",
      "Resistant to moisture and pests.",
      "Used in export and light-duty logistics.",
    ],
  },
  {
    title: "Warehouse Pallets",
    desc: "Standard industrial pallets for general warehouse operations.",
    img: "https://www.rajapack.co.uk/blog-uk/wp-content/uploads/2019/07/pallets-guide.jpg",
    applications: [
      "Used for material handling and product storage.",
      "Compatible with forklifts and pallet jacks.",
      "Available in wood, plastic, or metal materials.",
      "Supports uniform load distribution.",
    ],
  },
  {
    title: "Hygiene Pallets",
    desc: "Plastic pallets designed for environments with high hygiene standards.",
    img: "https://zdn.nz/ic/copacksales/1993947642/Hygiene%20Pallet%20with%20Rim-148-365.jpg",
    applications: [
      "Ideal for food, pharmaceutical, and cleanroom industries.",
      "Easy to wash and disinfect.",
      "Corrosion-free and durable.",
      "Complies with international hygiene regulations.",
    ],
  },
  {
    title: "Metal Reinforced Pallets",
    desc: "Heavy-duty pallets strengthened with steel or metal reinforcements.",
    img: "https://m.industrialwirecontainer.com/photo/pl25282747-steel_reinforced_plastic_pallets_for_warehouse_6_t_static_load_1000x1000mm.jpg",
    applications: [
      "Used for heavy or high-load applications.",
      "Provides added durability and longevity.",
      "Ideal for automated handling systems.",
      "Resistant to impact and deformation.",
    ],
  },
  {
    title: "Spill Containment Pallets",
    desc: "Pallets with built-in sump to contain leaks or spills from drums and containers.",
    img: "https://media.rs-online.com/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/R1772742-01?pgw=1",
    applications: [
      "Used for safe storage of hazardous materials.",
      "Prevents environmental contamination.",
      "Complies with safety and spill control standards.",
      "Ideal for chemical and industrial facilities.",
    ],
  },
];

const PlasticPallets = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>Plastic Pallets, Bins & Crates | Prime Sales Incorporated</title>
      <meta
        name="description"
        content="Prime Sales Incorporated provides durable and hygienic plastic pallets, bins, and crates for logistics, warehousing, and industrial storage solutions in the Philippines."
      />
      <link
        rel="canonical"
        href="https://www.primesalesincorporated.com/plastic-pallets-bins-crates"
      />
    </Helmet>
    <div className="text-center mb-12">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Plastic Pallets, Bins & Crates – Durable & Hygienic Storage Solutions
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-4xl mx-auto">
        Prime Sales Incorporated provides durable and hygienic plastic pallets,
        bins, and crates for warehouse storage, logistics, and industrial
        applications, ensuring efficiency, safety, and long-lasting performance
        across the Philippines.
      </p>
    </div>

    {/* Desktop: original alternating big-image layout. Mobile: compact list row like a shopping app. */}
    <div className="flex flex-col gap-5 md:gap-12">
      {plasticPallets.map((solution, index) => (
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
              <ul className="hidden md:block list-disc pl-5 text-gray-600 text-sm md:text-base dark:text-gray-300 space-y-1">
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

export default PlasticPallets;
