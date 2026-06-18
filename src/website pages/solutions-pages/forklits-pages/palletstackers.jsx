import { useEffect, useState } from "react";
import Footer from "../../../config/footer";
import { Link } from "react-router-dom";
import HeaderHome from "../../../config/header copy";

export default function PalletStackersProductList() {
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
      slug: "pedestrian-pallet-stacker-1-4t-2t-a",
      name: "Pedestrian Pallet Stacker 1.4, 1.6, 2.0 t",
      img: "/linde/palletstackers/1.png",
      capacity: "1400 - 2000 kg",
      height: "1844 - 5316 mm",
    },
    {
      slug: "stand-on-pallet-stacker-1-4t-2t",
      name: "Stand-On Pallet Stacker 1.4, 1.6, 2.0 t",
      img: "/linde/palletstackers/2.png",
      capacity: "1400 - 2000 kg",
      height: "1844 - 5316 mm",
    },
    {
      slug: "electric-pallet-stacker-1-6t",
      name: "Electric Pallet Stacker 1.6 t",
      img: "/linde/palletstackers/3.png",
      capacity: "1600 kg",
      height: "2650 - 4970 mm",
    },
    {
      slug: "electric-pallet-stacker-1-5t",
      name: "Electric Pallet Stacker 1.5 t",
      img: "/linde/palletstackers/4.png",
      capacity: "1500 kg",
      height: "2430 - 3230 mm",
    },
    {
      slug: "pedestrian-pallet-stacker-1t-1-2t",
      name: "Pedestrian Pallet Stacker 1.0 - 1.2 t",
      img: "/linde/palletstackers/5.png",
      capacity: "1000 - 1200 kg",
      height: "2427 - 3527 mm",
    },
    {
      slug: "pedestrian-pallet-stacker-1t-1-4t",
      name: "Pedestrian Pallet Stacker 1.0 - 1.4 t",
      img: "/linde/palletstackers/6.png",
      capacity: "1000 - 1400 kg",
      height: "1924 - 4716 mm",
    },
    {
      slug: "stand-on-pallet-stacker-1-4t-1-6t",
      name: "Stand-On Pallet Stacker 1.4 - 1.6 t",
      img: "/linde/palletstackers/7.png",
      capacity: "1000 - 1400 kg",
      height: "1924 - 4266 mm",
    },
    {
      slug: "reach-truck-1-2t-1-5t",
      name: "Reach Truck 1.2 - 1.5 T",
      img: "/linde/reachtrucks/2.png",
      capacity: "1200 - 1500 kg",
      height: "2700 - 4500 mm",
    },
    {
      slug: "straddle-electric-pallet-stacker-1-4t-1-6t",
      name: "Straddle Electric Pallet Stacker 1.4 - 1.6 t",
      img: "/linde/palletstackers/8.png",
      capacity: "1400 - 1600 kg",
      height: "1844 - 4644 mm",
    },
  ];

  const accent = "#a855f7";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="pt-0">
        {/* ── HERO BANNER ── */}
        <section className="relative w-full h-[620px] md:h-[700px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1440&q=80&fm=webp"
            alt="Pallet Stackers Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(30,10,60,0.93) 0%, rgba(30,10,60,0.62) 50%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.03,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#a855f7]" />

          <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center">
            <div
              className="inline-flex items-center mt-20 md:mt-0 gap-2 px-2 py-1 md:px-4 md:py-1.5 rounded-full border mb-4 w-fit backdrop-blur-sm"
              style={{
                borderColor: "rgba(168,85,247,0.5)",
                background: "rgba(0,0,0,0.4)",
              }}
            >
              <span className="material-symbols-outlined text-[15px] text-[#a855f7]">
                stacks
              </span>
              <span className="uppercase tracking-[0.25em] text-[8px] md:text-[11px] font-semibold text-[#a855f7]">
                Stacker Series · Compact &amp; Versatile
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 max-w-2xl">
              Pallet
              <br />
              <span className="text-[#a855f7]">Stackers.</span>
            </h1>

            <p className="text-white/55 text-sm md:text-base max-w-[20em] md:max-w-lg mb-10 leading-relaxed">
              Pedestrian, stand-on, and straddle stackers built for tight aisles
              and compact spaces — precise, electric, and built for full-shift
              endurance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="bg-[#a855f7] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#9333ea] transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
                Browse Models
              </a>
              <a
                href="/contact"
                className="border border-white/25 text-white/80 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#a855f7] hover:text-[#a855f7] transition-all duration-200 backdrop-blur-sm"
              >
                Request a Quote
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "8", label: "Models Available" },
                { value: "2T", label: "Max Capacity" },
                { value: "5.3m", label: "Max Lift Height" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold font-mono text-[#a855f7]">
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
              className="flex items-center gap-2 text-[#a855f7] hover:gap-3 transition-all duration-300"
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
                    ? "bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7]"
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
                    ? "bg-[#a855f7]/10 border border-[#a855f7]/30 text-[#a855f7]"
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
                  className="group border border-slate-300 dark:border-slate-700 bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-[#a855f7]"
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
                        <span className="material-symbols-outlined text-[#a855f7]">
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
                        <span className="material-symbols-outlined text-[#a855f7]">
                          height
                        </span>
                        <span className="text-sm text-gray-500 dark:text-[#baccb0]">
                          Lift Height:
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
                          {p.height}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/solutions/mhe/pallet-stackers/${p.slug}`}
                      className="mt-auto flex items-center justify-between w-full bg-[#a855f7] text-white px-6 py-4 font-bold uppercase tracking-wider hover:bg-[#9333ea] transition-all active:scale-95"
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
            <div className="space-y-4 md:space-y-6">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="group flex flex-row md:flex-row border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b0f10] overflow-hidden transition-all duration-300 hover:border-[#a855f7]"
                  style={{
                    boxShadow: "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 15px -3px rgba(168,85,247,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  {/* Image: small square on mobile, larger panel on desktop */}
                  <div className="w-[110px] sm:w-[140px] md:w-1/3 lg:w-1/4 h-[140px] sm:h-[140px] md:h-auto bg-gray-50 dark:bg-white flex items-center justify-center p-2 md:p-8 shrink-0">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full md:h-auto object-contain max-h-full md:max-h-[200px] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-grow p-3 md:p-6 lg:p-8 flex flex-col gap-2 lg:gap-4 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-snug text-gray-800 dark:text-gray-100 line-clamp-2">
                      {p.name}
                    </h3>

                    {/* lg+: horizontal specs + CTA */}
                    <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                      <div className="flex flex-row gap-8">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#a855f7]">
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
                          <span className="material-symbols-outlined text-[#a855f7]">
                            height
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#baccb0] font-mono">
                              Lift Height
                            </span>
                            <span className="text-sm font-bold font-mono text-gray-800 dark:text-gray-100">
                              {p.height}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-8 shrink-0 min-w-[180px]">
                        <div className="text-right">
                          <span className="block text-[11px] uppercase tracking-wider text-[#a855f7] font-mono mb-1">
                            In Stock
                          </span>
                          <span className="text-gray-500 dark:text-[#baccb0] text-xs font-mono">
                            Enterprise Pricing
                          </span>
                        </div>
                        <Link
                          to={`/solutions/mhe/pallet-stackers/${p.slug}`}
                          className="bg-[#a855f7]/10 border border-[#a855f7] text-[#a855f7] px-6 py-3 font-bold uppercase tracking-wider text-xs font-mono hover:bg-[#a855f7] hover:text-white transition-all text-center w-full"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Mobile/Tablet: compact specs row + thin CTA */}
                    <div className="lg:hidden flex flex-col gap-2">
                      <div className="flex flex-row items-center gap-3 sm:gap-4 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#a855f7] text-[16px] sm:text-[18px]">
                            weight
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold font-mono text-gray-800 dark:text-gray-100 leading-tight">
                            {p.capacity}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#a855f7] text-[16px] sm:text-[18px]">
                            height
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold font-mono text-gray-800 dark:text-gray-100 leading-tight">
                            {p.height}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#a855f7] font-mono shrink-0">
                          In Stock
                        </span>
                        <Link
                          to={`/solutions/mhe/pallet-stackers/${p.slug}`}
                          className="bg-[#a855f7]/10 border border-[#a855f7] text-[#a855f7] px-4 py-2 font-bold uppercase tracking-wider text-[10px] sm:text-[11px] font-mono hover:bg-[#a855f7] hover:text-white transition-all text-center whitespace-nowrap"
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
                icon: "straighten",
                title: "Compact Design",
                body: "Narrow footprint allows operation in tight aisles and confined warehouse spaces.",
              },
              {
                icon: "electric_bolt",
                title: "Electric Powered",
                body: "Zero-emission electric drives for clean, quiet indoor operation at full shift capacity.",
              },
              {
                icon: "tune",
                title: "Versatile Range",
                body: "Pedestrian, stand-on, and straddle variants to suit every operational requirement.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#a855f7] text-4xl mb-4">
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
