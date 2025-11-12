import React from "react";
import { Helmet } from "react-helmet-async";

const automationSolutions = [
  {
    title: "Conveyor Systems",
    desc: "Automated conveyor lines to streamline material flow.",
    img: "https://static.wixstatic.com/media/f0d37b_5c09084196e7438ebf1af896b51892e3~mv2.jpg/v1/fill/w_948,h_775,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0d37b_5c09084196e7438ebf1af896b51892e3~mv2.jpg",
    applications: [
      "Automates transport in warehouses and factories.",
      "Used for packaging, sorting, and inspection lines.",
      "Integrates with WMS or ERP systems.",
      "Reduces manual handling and cycle time.",
    ],
  },
  {
    title: "Automated Storage and Retrieval Systems (AS/RS)",
    desc: "Precision storage and retrieval with robotic automation.",
    img: "https://www.kardex.com/hubfs/Etra01_FeaturedImage.jpg",
    applications: [
      "High-bay automated warehousing systems.",
      "Increases storage density and picking speed.",
      "Used in cold, pharmaceutical, and e-commerce industries.",
      "Minimizes human error and operational cost.",
    ],
  },
  {
    title: "Multishuttle",
    desc: "Smart transport robots for efficient warehouse mobility.",
    img: "https://img.directindustry.com/images_di/photo-g/32730-18419940.webp",
    applications: [
      "Ideal for fast-moving goods and order picking.",
      "Scalable solution for high throughput operations.",
      "Works in ambient and cold storage environments.",
      "Supports dynamic storage and retrieval systems.",
    ],
  },
];

const AutomationSolutions = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>Automation Solutions | Prime Sales Incorporated</title>
      <meta
        name="description"
        content="Prime Sales Incorporated provides automated conveyors, storage, and retrieval systems to boost warehouse productivity, efficiency, and accuracy in the Philippines."
      />
      <link
        rel="canonical"
        href="https://www.primesalesincorporated.com/automation-solutions"
      />
    </Helmet>
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Automation Solutions – Boost Warehouse Productivity
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
        Prime Sales Incorporated provides automation solutions, including
        conveyors, automated storage, and retrieval systems, designed to enhance
        warehouse efficiency, accuracy, and productivity for businesses across
        the Philippines.
      </p>
    </div>

    {automationSolutions.map((solution, index) => (
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

export default AutomationSolutions;
