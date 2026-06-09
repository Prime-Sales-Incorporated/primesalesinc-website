import { useEffect, useState } from "react";
import Footer from "../../../config/footer";
import { Link } from "react-router-dom";
import HeaderHome from "../../../config/header copy";

export default function ElectricPalletTrucks() {
  useEffect(() => {
    document.documentElement.classList.add("font-display");
  }, []);

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const [viewMode, setViewMode] = useState("list");

  const products = [
    {
      slug: "electric-pallet-truck-1-5t-2t",
      name: "Electric Pallet Truck 1.5 - 2.0 T",
      img: "/linde/pallettrucks/1.png",
      capacity: "1500 - 2000 kg",
      height: "115 mm",
    },
    {
      slug: "pedestrian-pallet-truck-1-6t-2t",
      name: "Pedestrian Pallet Trucks 1.6 - 2.0 t",
      img: "/linde/pallettrucks/2.png",
      capacity: "1600 - 2000 kg",
      height: "125 mm",
    },
    {
      slug: "stand-on-pallet-truck-2t-a",
      name: "Stand-on Electric Pallet Trucks 2.0T",
      img: "/linde/pallettrucks/3.png",
      capacity: "2000 kg",
      height: "120 mm",
    },
    {
      slug: "stand-on-pallet-truck-2t-b",
      name: "Stand-on Electric Pallet Trucks 2.0T",
      img: "/linde/pallettrucks/4.png",
      capacity: "2000 kg",
      height: "120 mm",
    },
    {
      slug: "stand-on-pallet-truck-2t-c",
      name: "Stand-on Electric Pallet Trucks 2.0T",
      img: "/linde/pallettrucks/5.png",
      capacity: "2000 kg",
      height: "125 mm",
    },
    {
      slug: "pedestrian-pallet-truck-3t",
      name: "Pedestrian Pallet Trucks 3.0 t",
      img: "/linde/pallettrucks/6.png",
      capacity: "3000 kg",
      height: "125 mm",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="pt-0">
        {/* ── HERO BANNER ── */}
        <section className="relative w-full h-[620px] md:h-[700px] overflow-hidden">
          <img
            src="https://www.mmh.com/images/old_imported_images/MMH2208_LTS_toyota_Inline1.jpg"
            alt="Pallet Trucks Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 z-[1]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(5,40,45,0.94) 0%, rgba(5,40,45,0.60) 50%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14b8a6]" />

          <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center">
            <div
              className="inline-flex mt-20 md:mt-0 items-center gap-2 px-4 py-1.5 rounded-full border mb-4 w-fit backdrop-blur-sm"
              style={{
                borderColor: "rgba(20,184,166,0.5)",
                background: "rgba(0,0,0,0.4)",
              }}
            >
              <span className="material-symbols-outlined text-[15px] text-[#14b8a6]">
                conveyor_belt
              </span>
              <span className="uppercase tracking-[0.25em] text-[8px] md:text-[11px] font-semibold text-[#14b8a6]">
                Pallet Truck Series · Agile &amp; Reliable
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 max-w-2xl">
              Pallet
              <br />
              <span className="text-[#14b8a6]">Trucks.</span>
            </h1>

            <p className="text-sm md:text-base max-w-[18em] md:max-w-lg mb-10 leading-relaxed text-white/55">
              Pedestrian and stand-on electric pallet trucks engineered for
              smooth, fast goods movement — built for every warehouse floor,
              every shift.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="bg-[#14b8a6] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#0d9488] transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
                Browse Models
              </a>
              <a
                href="/contact"
                className="border border-white/25 text-white/80 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all duration-200 backdrop-blur-sm"
              >
                Request a Quote
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "6", label: "Models Available" },
                { value: "3T", label: "Max Capacity" },
                { value: "Walk/Ride", label: "Operation Modes" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold font-mono text-[#14b8a6]">
                    {stat.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest mt-0.5 text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Actions */}
        <section
          id="products"
          className="max-w-[1440px] mx-auto px-4 md:px-16 mb-10 mt-16"
        >
          <div className="flex items-center justify-between border-b border-slate-300 dark:border-slate-700 pb-6">
            <Link
              to="/solutions/mhe/"
              className="flex items-center gap-2 text-[#14b8a6] hover:gap-3 transition-all duration-300"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="uppercase text-xs font-bold tracking-widest">
                View All Products
              </span>
            </Link>

            <div className="flex gap-1 p-1 bg-gray-100 dark:bg-[#1d2022] rounded">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-[#14b8a6]/10 border border-[#14b8a6]/30 text-[#14b8a6]"
                    : "text-gray-400 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
                }`}
                title="Grid view"
              >
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-[#14b8a6]/10 border border-[#14b8a6]/30 text-[#14b8a6]"
                    : "text-gray-400 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200"
                }`}
                title="List view"
              >
                <span className="material-symbols-outlined">view_list</span>
              </button>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-16 pb-32">
          {/* GRID VIEW */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="group border border-slate-300 dark:border-slate-700 bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-[#14b8a6]"
                >
                  <div className="relative bg-gray-50 dark:bg-white h-[320px] flex items-center justify-center overflow-hidden p-8">
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage:
                          "radial-gradient(#051424 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <img
                      src={p.img}
                      alt={p.name}
                      className="relative z-10 object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h2 className="text-xl font-semibold mb-6 leading-snug text-gray-800 dark:text-gray-100">
                      {p.name}
                    </h2>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#14b8a6]">
                          weight
                        </span>
                        <span className="text-sm text-gray-500 dark:text-[#baccb0]">
                          Capacity:
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
                          {p.capacity}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#14b8a6]">
                          height
                        </span>
                        <span className="text-sm text-gray-500 dark:text-[#baccb0]">
                          Fork Height:
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
                          {p.height}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/solutions/mhe/pallet-trucks/${p.slug}`}
                      className="mt-auto flex items-center justify-between w-full bg-[#14b8a6] text-white px-6 py-4 font-bold uppercase tracking-wider hover:bg-[#0d9488] transition-all active:scale-95"
                    >
                      View Details
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* LIST VIEW */}
          {viewMode === "list" && (
            <div className="space-y-6">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b0f10] overflow-hidden transition-all duration-300 hover:border-[#14b8a6]"
                  style={{
                    boxShadow: "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 15px -3px rgba(20,184,166,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  <div className="md:w-1/3 lg:w-1/4 md:h-auto bg-gray-50 dark:bg-white flex items-center justify-center p-8 shrink-0">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-auto object-contain max-h-[200px] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-grow p-5 md:p-6 lg:p-8 flex flex-col gap-3 lg:gap-4">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold leading-snug text-gray-800 dark:text-gray-100">
                      {p.name}
                    </h3>

                    {/* lg+: horizontal specs + CTA */}
                    <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                      <div className="flex flex-row gap-8">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#14b8a6]">
                            weight
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#baccb0] font-mono">
                              Capacity
                            </span>
                            <span className="text-sm font-bold font-mono text-gray-800 dark:text-gray-100">
                              {p.capacity}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#14b8a6]">
                            height
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#baccb0] font-mono">
                              Fork Height
                            </span>
                            <span className="text-sm font-bold font-mono text-gray-800 dark:text-gray-100">
                              {p.height}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-8 shrink-0 min-w-[180px]">
                        <div className="text-right">
                          <span className="block text-[11px] uppercase tracking-wider text-[#14b8a6] font-mono mb-1">
                            In Stock
                          </span>
                          <span className="text-gray-500 dark:text-[#baccb0] text-xs font-mono">
                            Enterprise Pricing
                          </span>
                        </div>
                        <Link
                          to={`/solutions/mhe/pallet-trucks/${p.slug}`}
                          className="bg-[#14b8a6]/10 border border-[#14b8a6] text-[#14b8a6] px-6 py-3 font-bold uppercase tracking-wider text-xs font-mono hover:bg-[#14b8a6] hover:text-white transition-all text-center w-full"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Tablet/mobile: stacked specs + CTA */}
                    <div className="lg:hidden flex flex-row items-center justify-between gap-4">
                      <div className="flex flex-col gap-3 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#14b8a6] text-[18px]">
                            weight
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-widest text-gray-500 dark:text-[#baccb0] font-mono">
                              Capacity
                            </span>
                            <span className="text-xs font-bold font-mono text-gray-800 dark:text-gray-100">
                              {p.capacity}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#14b8a6] text-[18px]">
                            height
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-widest text-gray-500 dark:text-[#baccb0] font-mono">
                              Fork Height
                            </span>
                            <span className="text-xs font-bold font-mono text-gray-800 dark:text-gray-100">
                              {p.height}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-4 shrink-0">
                        <div className="text-right">
                          <span className="block text-[10px] uppercase tracking-wider text-[#14b8a6] font-mono mb-0.5">
                            In Stock
                          </span>
                          <span className="text-gray-500 dark:text-[#baccb0] text-[10px] font-mono">
                            Enterprise Pricing
                          </span>
                        </div>
                        <Link
                          to={`/solutions/mhe/pallet-trucks/${p.slug}`}
                          className="bg-[#14b8a6]/10 border border-[#14b8a6] text-[#14b8a6] px-3 py-2 font-bold uppercase tracking-wider text-[10px] font-mono hover:bg-[#14b8a6] hover:text-white transition-all text-center whitespace-nowrap"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Technical Excellence */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-16 pb-32">
          <div className="border border-slate-300 dark:border-slate-700 bg-gray-50 dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-300 dark:divide-slate-700">
            {[
              {
                icon: "directions_run",
                title: "High Maneuverability",
                body: "Tight turning radius and responsive steering for smooth navigation in congested areas.",
              },
              {
                icon: "bolt",
                title: "Electric Efficiency",
                body: "Low energy consumption with regenerative braking for extended battery life per shift.",
              },
              {
                icon: "group",
                title: "Pedestrian & Ride-On",
                body: "Available in walk-behind and stand-on variants to match your workflow and throughput needs.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#14b8a6] text-4xl mb-4">
                  {f.icon}
                </span>
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {f.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
