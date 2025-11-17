import react from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t mt-8 border-primary/20 dark:border-primary/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0 max-w-xs ">
          <img
            src="/logo1.png"
            alt="Prime Sales Logo"
            className="h-8 w-16 mb-4"
          />
          <h1 className="text-semibold mb-4 text-start  ">
            Prime Sales Incorporated
          </h1>
          <p className=" text-xs leading-5 text-gray-500 dark:text-gray-400">
            Prime Sales Inc. (PSI) founded in 1976, is a leading supplier
            ofintelligent intralogistics solutions for dry and cold
            chainapplications. With over 40 years of proven reputation, PSI
            workswith global partners to offer strong and efficient supply chain
            systems in the Philippines.
          </p>
        </div>

        <div className="flex justify-center space-x-4 md:space-x-12 md:order-2 mt-8 md:mt-0">
          {/* About */}
          <div className="flex flex-col items-start ">
            <Link
              to="/about"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-600 text-lg dark:hover:text-gray-300 mb-2 font-semibold"
            >
              About
            </Link>
          </div>

          {/* Products */}
          <div className="flex flex-col items-start">
            <p className="text-gray-500 dark:text-gray-400 hover:text-gray-600 text-lg dark:hover:text-gray-300 mb-2 font-semibold">
              Solutions
            </p>
            <a
              href="/solutions/mhe"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Material Handling Equipment
            </a>
            <a
              href="/solutions/industrial-storage"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Industrial Storage Solutions
            </a>
            <a
              href="/solutions/cold-chain"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Cold Chain Solutions
            </a>

            <a
              href="/solutions/docks-and-doors"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Docks and Doors
            </a>
            <a
              href="/solutions/plastic-pallets,-bins-and-crates"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Plastic Pallets, Bins and Crates
            </a>
            <a
              href="/solutions/industrial-batteries-and-chargers"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Industrial Batteries and Chargers
            </a>
            <a
              href="/solutions/automation-solutions"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Automation Solutions
            </a>
            <a
              href="/solutions/warehouse-management-system"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Warehouse Management Solutions
            </a>
            <a
              href="/solutions/commercial-solutions"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Commercial Solutions
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <p className="text-gray-500 dark:text-gray-400 hover:text-gray-600 text-lg dark:hover:text-gray-300 mb-2 font-semibold">
              Contact
            </p>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Locations
            </a>
          </div>

          {/* Terms of Service */}
          {/* <div className="flex flex-col items-start">
            <p className="text-gray-500 dark:text-gray-400 hover:text-gray-600 text-lg dark:hover:text-gray-300 mb-2 font-semibold">
              Terms of Service
            </p>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-gray-500 dark:hover:text-gray-300"
            >
              Cookies
            </a>
          </div> */}
        </div>
        <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400 mt-8">
          © 2025 Prime Sales. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
