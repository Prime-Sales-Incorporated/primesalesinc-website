import React from "react";

// React Component
const HolidayGreetingBanner = () => {
  const menuItems = [
    "Best wishes from Linde Mat...",
    "November 12/13, 2025",
    "In Sync with your Rhythm",
    "New E-trucks E14 – E20 and ...",
    "Energy Consulting",
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark  mt-8 flex items-center justify-center ">
      <div className="w-full max-w-[1400px] bg-background-light dark:bg-background-dark overflow-hidden shadow- lg:  border-primary/20 dark:border-primary/30 rounded-none  flex flex-col relative">
        {/* Main content */}
        <div className="flex flex-col-reverse md:flex-row lg:flex-row h-auto lg:h-[600px] ">
          {/* Left Side */}
          <div className="w-full md:w-7/12 lg:w-5/12 p-8 lg:p-16 flex flex-col justify-center bg-background-light dark:bg-background-dark z-10 relative">
            <div className="w-16 h-1 bg-primary mb-6 lg:hidden"></div>
            <h3 className="text-red-900 font-bold text-base md:text-lg mb-4 tracking-wide uppercase dark:text-white">
              Best wishes from{" "}
              <span className="text-green-500">Prime Sales Inc.</span>
            </h3>
            <h1 className="text-4xl md:text-6xl font-extrabold text-red-900 dark:text-white leading-tight mb-6">
              Happy Holidays!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md hidden lg:block">
              Wishing you a season of joy and a prosperous new year.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-7/12 relative h-64 md:h-[400px] lg:h-auto overflow-hidden">
            <img
              alt="Christmas tree background with blurred lights"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/greet2.png"
            />
            <div className="absolute inset-0 bg-black/5 dark:bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none"></div>
          </div>
        </div>

        {/* Bottom Navigation */}
        {/* <div className="bg-[#E5E7EB] dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 w-full overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex-1 p-4 md:p-5 cursor-pointer border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-500 transition-colors ${
                  index === 0
                    ? "bg-white dark:bg-gray-600 border-b-2 border-primary"
                    : "hover:bg-white dark:hover:bg-gray-600"
                } ${index > 0 && index < 2 ? "hidden sm:block" : ""} ${
                  index > 1 && index < 3 ? "hidden md:block" : ""
                } ${index > 2 && index < 4 ? "hidden lg:block" : ""} ${
                  index > 3 ? "hidden xl:block" : ""
                }`}
              >
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate font-semibold">
                  {item}
                </p>
              </div>
            ))}

            <div className="flex items-center bg-[#E5E7EB] dark:bg-gray-700 border-l border-gray-300 dark:border-gray-600">
              <button className="h-full px-5 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors focus:outline-none">
                <span className="material-icons text-sm">arrow_back_ios</span>
              </button>
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
              <button className="h-full px-5 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 transition-colors focus:outline-none">
                <span className="material-icons text-sm">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HolidayGreetingBanner;
