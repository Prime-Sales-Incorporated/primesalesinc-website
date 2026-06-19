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
        href="https://www.primegroup.com.ph/solutions/automation-solutions"
      />
    </Helmet>
    <div className="text-center mb-12">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Automation Solutions – Boost Warehouse Productivity
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-4xl mx-auto">
        Prime Sales Incorporated provides automation solutions, including
        conveyors, automated storage, and retrieval systems, designed to enhance
        warehouse efficiency, accuracy, and productivity for businesses across
        the Philippines.
      </p>
    </div>

    {/* Desktop: original alternating big-image layout. Mobile: compact list row like a shopping app. */}
    <div className="flex flex-col gap-5 md:gap-12">
      {automationSolutions.map((solution, index) => (
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

export default AutomationSolutions;
