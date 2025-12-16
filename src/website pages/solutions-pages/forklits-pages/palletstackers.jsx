import { useEffect, useState } from "react";
import Header from "../../../config/header";
import Footer from "../../../config/footer";

export default function PalletStackersProductList() {
  useEffect(() => {
    document.documentElement.classList.add("font-display");
  }, []);

  const products = [
    {
      name: "Pedestrian Pallet Stacker 1.4, 1.6, 2.0 t",
      img: "/linde/palletstackers/1.png",
      capacity: "1400 - 2000 kg",
      height: "1844 - 5316 mm",
    },
    {
      name: "Stand-On Pallet Stacker 1.4, 1.6, 2.0 t",
      img: "/linde/palletstackers/2.png",
      capacity: "1400 - 2000 kg",
      height: "1844 - 5316 mm",
    },
    {
      name: "Electric Pallet Stacker 1.6 t",
      img: "/linde/palletstackers/3.png",
      capacity: "1600 kg",
      height: "2650 - 4970 mm",
    },
    {
      name: "Electric Pallet Stacker 1.5 t",
      img: "/linde/palletstackers/4.png",
      capacity: "1500 kg",
      height: "2430 - 3230 mm",
    },
    {
      name: "Pedestrian Pallet Stacker 1.0 - 1.2 t",
      img: "/linde/palletstackers/5.png",
      capacity: "1000 - 1200 kg",
      height: "2427 - 3527 mm",
    },
    {
      name: "Pedestrian Pallet Stacker 1.0 - 1.4 t",
      img: "/linde/palletstackers/6.png",
      capacity: "1000 - 1400 kg",
      height: "1924 - 4716 mm",
    },
    {
      name: "Stand-On Pallet Stacker 1.4 - 1.6 t ",
      img: "/linde/palletstackers/7.png",
      capacity: "1000 - 1400 kg",
      height: "1924 - 4266 mm",
    },
    {
      name: "Straddle Electric Pallet Stacker 1.4 - 1.6 t ",
      img: "/linde/palletstackers/8.png",
      capacity: "1400 - 1600 kg",
      height: "1844 - 4644 mm",
    },
  ];
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  return (
    <div className="bg-background-light  dark:bg-background-dark text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Header dark={dark} setDark={setDark} />
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center mt-8">
          <h1 className="text-3xl font-bold mb-4 text-">Pallet Stackers</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-">
            Explore our range of high-performance pallet stackers designed for
            efficiency and durability.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl gap-x-8 gap-y-16 max-w-8xl mx-auto">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-rows-1 md:flex-col h-52 md:h-full group border border-gray-600 rounded-lg"
            >
              <div className="flex justify-center  w-52 md:w-full items-end h-52 md:h-64 px-8 mb-[-40px] relative z-10 bg-background-light border rounded-l-lg md:rounded-b-none md:rounded-t-lg">
                <img
                  src={p.img}
                  alt={p.name}
                  className="object-contain w-full h-full drop-shadow-xl transform group-hover:-translate-y-2 transition-transform duration-300"
                />
              </div>

              <div className="bg-card-light dark:bg-card-dark pt-14 pb-8 px-8  max-w-2xl relative shadow-sm hover:shadow-md transition-shadow rounded-sm">
                <span className="inline- bg-label-bg hidden md:text-block text-xs px-3 py-1 mb-3 rounded-sm">
                  Electric Forklifts
                </span>

                <h2 className="text-sm  md:text-xl font-bold mb-4 text-">
                  {p.name}
                </h2>

                <div className="space-y-2 mb-8 text-text-secondary-light dark:text-text-secondary-dark">
                  <div className="flex items-center">
                    <span className=" text-xs md:text-base material-symbols-outlined mr-2 text-">
                      weight
                    </span>
                    <span className="text-xs md:text-lg font-medium text-">
                      {p.capacity}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className=" text-xs md:text-base material-symbols-outlined mr-2 text-">
                      upload
                    </span>
                    <span className="text-xs md:text-lg font-medium text-wite">
                      {p.height}
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-5 right-8">
                  <button className="bg-green-500 hover:bg-red-800 text- py-2 px-6 shadow-md transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark mode toggle */}
      {/* <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed bottom-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg border"
      >
        <span className="material-symbols-outlined dark:hidden">dark_mode</span>
        <span className="material-symbols-outlined hidden dark:block">
          light_mode
        </span>
      </button> */}
      <Footer />
    </div>
  );
}
