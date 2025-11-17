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
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        Warehouse Management System (WMS)
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
        Manhattan’s industry-leading WMS provides real-time visibility,
        optimized warehouse workflows, intelligent slotting, and seamless
        automation integration—enabling faster, smarter, and more efficient
        warehouse operations.
      </p>
    </div>

    {/* Single Tile Section */}
    <div
      className="flex flex-col md:flex-row items-center rounded-2xl overflow-hidden border border-primary/20 dark:border-primary/30 
      bg-background-light dark:bg-background-dark shadow-md hover:shadow-lg"
    >
      <div
        className="w-full md:w-1/2 h-56 sm:h-64 md:h-[32em] bg-center bg-cover"
        style={{
          backgroundImage: `url(https://images2.cmp.optimizely.com/assets/Insight-promotion-state-of-warehouse-operations-2024/Zz02ZDk1ZDliNDJkOGMxMWVmOGIxYTJlZDEwMzFmODk2ZA==?w=1056&h=594&format=webp)`,
        }}
      ></div>

      <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Warehouse Management System
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
          A modern, cloud-native warehouse solution designed to improve
          inventory accuracy, optimize warehouse workflows, enhance picking
          efficiency, and support advanced warehouse automation.
        </p>

        <h4 className="text-lg font-semibold text-green-500 mb-2">
          Key Features
        </h4>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
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
      </div>
    </div>

    {/* Applications Section */}
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center md:text-left">
        Applications
      </h2>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 max-w-3xl mx-auto md:mx-0">
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
