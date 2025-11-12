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
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Plastic Pallets, Bins & Crates – Durable & Hygienic Storage Solutions
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Prime Sales Incorporated provides durable and hygienic plastic pallets,
        bins, and crates for warehouse storage, logistics, and industrial
        applications, ensuring efficiency, safety, and long-lasting performance
        across the Philippines.
      </p>
    </div>

    {plasticPallets.map((solution, index) => (
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

export default PlasticPallets;
