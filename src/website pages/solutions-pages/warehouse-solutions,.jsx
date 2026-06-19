import React from "react";
import { Helmet } from "react-helmet-async";

const WMSSolutions = () => (
  <div className="flex flex-col gap-12">
    <Helmet>
      <title>
        Warehouse Management System | Manhattan WMS Partner | Prime Sales
        Incorporated
      </title>
      <meta
        name="description"
        content="Prime Sales Incorporated provides Manhattan's Warehouse Management System with real-time inventory visibility, optimized warehouse workflows, slotting intelligence, and automation-ready operations."
      />
      <link
        rel="canonical"
        href="https://www.primegroup.com.ph/solutions/wms"
      />
    </Helmet>

    <div className="text-center mb-12">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Warehouse Management System (WMS)
      </h1>
      <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-gray-300 max-w-4xl mx-auto">
        Manhattan’s industry-leading WMS provides real-time visibility,
        optimized warehouse workflows, intelligent slotting, and seamless
        automation integration—enabling faster, smarter, and more efficient
        warehouse operations.
      </p>
    </div>

    {/* Single Tile Section: thumbnail-left list row on mobile, full alternating layout on desktop */}
    <div
      className="flex flex-row md:items-center gap-4 md:gap-0 rounded-2xl overflow-hidden border border-primary/20 dark:border-primary/30 
      bg-background-light dark:bg-background-dark shadow-sm md:shadow-md hover:shadow-lg transition p-3 md:p-0 md:flex-row"
    >
      <div
        className="w-20 h-20 shrink-0 rounded-lg bg-center bg-cover
        md:w-1/2 md:h-56 md:rounded-none sm:md:h-64 md:h-[18em]"
        style={{
          backgroundImage: `url(https://images2.cmp.optimizely.com/assets/Insight-promotion-state-of-warehouse-operations-2024/Zz02ZDk1ZDliNDJkOGMxMWVmOGIxYTJlZDEwMzFmODk2ZA==?w=1056&h=594&format=webp)`,
        }}
      ></div>

      <div className="flex-1 min-w-0 text-left md:w-1/2 md:p-6 md:sm:p-8 md:text-left">
        <h3 className="text-sm sm:text-base md:text-2xl font-bold text-gray-900 dark:text-white mb-1 md:mb-3 truncate md:whitespace-normal">
          Warehouse Management System
        </h3>
        <p className="hidden md:block text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
          A modern, cloud-native warehouse solution designed to improve
          inventory accuracy, optimize warehouse workflows, enhance picking
          efficiency, and support advanced warehouse automation.
        </p>
        <p className="md:hidden text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
          A modern, cloud-native warehouse solution designed to improve
          inventory accuracy, optimize warehouse workflows, enhance picking
          efficiency, and support advanced warehouse automation.
        </p>

        <div className="mt-2 md:mt-4">
          <h4 className="hidden md:block text-lg font-semibold text-green-500 mb-2">
            Key Features
          </h4>
          <ul className="hidden md:block list-disc pl-5 text-gray-600 text-sm md:text-base dark:text-gray-300 space-y-1">
            <li>Real-time inventory visibility & control</li>
            <li>
              Automated receiving, putaway, picking, packing, and shipping
              workflows
            </li>
            <li>Slotting optimization and pick-path efficiency</li>
            <li>Intelligent task orchestration across warehouse activities</li>
            <li>
              Integration with AMRs, AS/RS, conveyors, and automation systems
            </li>
            <li>Cloud-native, scalable warehouse platform</li>
          </ul>
          {/* Compact mobile bullet preview */}
          <ul className="md:hidden flex flex-col gap-1 mt-1.5">
            <li className="text-[11px] text-gray-500 dark:text-gray-400 truncate flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-green-500 shrink-0" />
              Real-time inventory visibility & control
            </li>
            <li className="text-[11px] text-gray-500 dark:text-gray-400 truncate flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-green-500 shrink-0" />
              Automated receiving, putaway, picking & shipping
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Applications Section */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center md:text-left">
        Applications
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 dark:text-gray-300 space-y-2 max-w-3xl mx-auto md:mx-0">
        <li>Distribution Centers</li>
        <li>Retail Warehouses</li>
        <li>E-commerce Fulfillment Centers</li>
        <li>Cold Storage Facilities</li>
        <li>3PL and Logistics Providers</li>
      </ul>
    </div>
  </div>
);

export default WMSSolutions;
