import { useEffect, useState } from "react";
import Header from "../../../config/header";
import Footer from "../../../config/footer";
import { Link } from "react-router-dom";

export default function ElectrickPalletTrucks() {
  useEffect(() => {
    document.documentElement.classList.add("font-display");
  }, []);

  const products = [
    {
      name: "Electric Pallet Truck 1.5 - 2.0 T",
      img: "/linde/pallettrucks/1.png",
      capacity: "1500 - 2000 kg",
      height: "115 mm",
    },
    // {
    //   name: "Electric Pallet Truck 1.5T",
    //   img: "https://www.lindemh-cn.com/wp-content/uploads/2021/02/192015B.png",
    //   capacity: "1500 kg",
    //   height: "115 mm",
    // },
    // {
    //   name: "Electric Pallet Truck 1.5T",
    //   img: "https://www.lindemh-cn.com/wp-content/uploads/2021/12/mt15c.png",
    //   capacity: "1500 kg",
    //   height: "115 mm",
    // },
    // {
    //   name: "Electric Pallet Truck 1.5T",
    //   img: "https://www.lindemh-cn.com/wp-content/uploads/2022/06/mt15a.png",
    //   capacity: "1500-2000 kg",
    //   height: "115 mm",
    // },
    // {
    //   name: "Electric Pallet Trucks 1.5/2.0t ",
    //   img: "https://www.lindemh-cn.com/wp-content/uploads/2022/06/BG-1.png",
    //   capacity: "2000 kg",
    //   height: "120 mm",
    // },
    {
      name: "Pedestrian Pallet Trucks 1.6 - 2.0 t",
      img: "/linde/pallettrucks/2.png",
      capacity: "1600 - 2000 kg",
      height: "125 mm",
    },

    {
      name: "Stand-on Electric Pallet Trucks 2.0T",
      img: "/linde/pallettrucks/3.png",
      capacity: "2000 kg",
      height: "120 mm",
    },
    {
      name: "Stand-on Electric Pallet Trucks 2.0T",
      img: "/linde/pallettrucks/4.png",
      capacity: "2000 kg",
      height: "120 mm",
    },
    {
      name: "Stand-on Electric Pallet Trucks 2.0T",
      img: "/linde/pallettrucks/5.png",
      capacity: "2000 kg",
      height: "125 mm",
    },
    {
      name: "Pedestrian Pallet Trucks 3.0 t",
      img: "/linde/pallettrucks/6.png",
      capacity: "3000 kg",
      height: "125 mm",
    },
  ];
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  return (
    <div className="bg-background-light p-8 dark:bg-background-dark text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Header dark={dark} setDark={setDark} />
      <div className="container mx-auto px-4 py-12">
        <div className="mt-8">
          <Link to="/solutions/mhe/" className="py-12 font- font-">
            <span className="mt-16 text-green-500">View all Forklifts</span>
          </Link>
        </div>
        <header className="mb-12 text-center mt-8">
          <h1 className="text-3xl font-bold mb-4 text-">Pallet Trucks</h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto text-">
            Explore our range of high-performance pallet trucks designed for
            efficiency and durability.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl gap-x-8 gap-y-16 max-w-8xl mx-auto">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-rows-1 md:flex-col h-52 md:h-full group border border-gray-600 rounded-lg"
            >
              <div className="flex justify-center  w-52 md:w-full items-end h-52 md:h-64 px-8 mb-[-40px] relative z-10 bg-background-light border rounded-l-lg md:rounded-b-none  md:rounded-t-lg">
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
