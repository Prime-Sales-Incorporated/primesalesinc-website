import { useEffect, useState } from "react";
import Footer from "../../../config/footer";
import { Link } from "react-router-dom";
import HeaderHome from "../../../config/header copy";

export default function OrderPickersProductList() {
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
    // {
    //   slug: "battery-order-picker-1-36t",
    //   name: "Battery Order Picking Truck 1.36 t",
    //   img: "/linde/orderpickers/1.png",
    //   capacity: "1360 kg",
    //   height: "6030 - 9130 mm",
    // },
    {
      slug: "low-level-order-picker-2t",
      name: "Low Level Order Pickers 2.0 t",
      img: "/linde/orderpickers/2.png",
      capacity: "2000 kg",
      height: "120 mm",
    },
    {
      slug: "low-level-man-up-order-picker-0-7t-1t",
      name: "Low Level Man-up Order Pickers 0.7 - 1.0 t",
      img: "/linde/orderpickers/3.png",
      capacity: "700 - 1000 kg",
      height: "86 - 1065 mm",
    },
    {
      slug: "electric-medium-level-order-picker-1t",
      name: "Electric Medium-Level Order Picker 1.0 t",
      img: "/linde/orderpickers/4.png",
      capacity: "1000 kg",
      height: "1000 - 5415 mm",
    },
    {
      slug: "modular-high-level-order-picker-0-8t-1-2t",
      name: "Modular High Level Man-Up Order Picker Stacker 0.8 - 1.2 t",
      img: "/linde/orderpickers/5.png",
      capacity: "800 - 1200 kg",
      height: "2825 - 10965 mm",
    },
  ];

  const accent = "#38bdf8";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="pt-0">
        {/* ── HERO BANNER ── */}
        <section className="relative w-full h-[620px] md:h-[700px] overflow-hidden">
          <img
            src="https://www.lindemh-cn.com/wp-content/uploads/2017/10/v-1920x800.jpg"
            alt="Order Pickers Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,17,43,0.92) 0%, rgba(0,17,43,0.65) 50%, transparent 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#38bdf8]" />

          <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center">
            <div className="inline-flex mt-20 md:mt-0 items-center gap-2 px-2 py-1 md:px-4 md:py-1.5 rounded-full border border-[#38bdf8]/50 mb-4 bg-black/40 backdrop-blur-sm w-fit">
              <span className="material-symbols-outlined text-[#38bdf8] text-[15px]">
                inventory
              </span>
              <span className="uppercase tracking-[0.25em] text-[8px] md:text-[11px] text-[#38bdf8] font-semibold">
                Order Picker Series · Precision Fulfillment
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 max-w-2xl">
              Order
              <br />
              <span className="text-[#38bdf8]">Pickers.</span>
            </h1>

            <p className="text-white/55 text-sm md:text-base max-w-[18em] md:max-w-lg mb-10 leading-relaxed">
              From low-level floor picking to high-reach aisle operations —
              precision-engineered for fast, accurate order fulfillment at every
              level.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="bg-[#38bdf8] text-[#00112b] px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#0ea5e9] transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
                Browse Models
              </a>
              <a
                href="/contact"
                className="border border-white/25 text-white/80 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all duration-200 backdrop-blur-sm"
              >
                Request a Quote
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "5", label: "Models Available" },
                { value: "11m", label: "Max Lift Height" },
                { value: "Low–High", label: "Level Range" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-[#38bdf8] font-mono">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 mt-0.5">
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
              className="flex items-center gap-2 text-[#38bdf8] hover:gap-3 transition-all duration-300"
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
                    ? "bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8]"
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
                    ? "bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8]"
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
                  className="group border border-slate-300 dark:border-slate-700 bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-[#38bdf8]"
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
                        <span className="material-symbols-outlined text-[#38bdf8]">
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
                        <span className="material-symbols-outlined text-[#38bdf8]">
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
                      to={`/solutions/mhe/order-pickers/${p.slug}`}
                      className="mt-auto flex items-center justify-between w-full bg-[#38bdf8] text-[#00112b] px-6 py-4 font-bold uppercase tracking-wider hover:bg-[#0ea5e9] transition-all active:scale-95"
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
                  className="group flex flex-row md:flex-row border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b0f10] overflow-hidden transition-all duration-300 hover:border-[#38bdf8]"
                  style={{
                    boxShadow: "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 15px -3px rgba(56,189,248,0.2)")
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
                          <span className="material-symbols-outlined text-[#38bdf8]">
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
                          <span className="material-symbols-outlined text-[#38bdf8]">
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
                          <span className="block text-[11px] uppercase tracking-wider text-[#38bdf8] font-mono mb-1">
                            In Stock
                          </span>
                          <span className="text-gray-500 dark:text-[#baccb0] text-xs font-mono">
                            Enterprise Pricing
                          </span>
                        </div>
                        <Link
                          to={`/solutions/mhe/order-pickers/${p.slug}`}
                          className="bg-[#38bdf8]/10 border border-[#38bdf8] text-[#38bdf8] px-6 py-3 font-bold uppercase tracking-wider text-xs font-mono hover:bg-[#38bdf8] hover:text-[#00112b] transition-all text-center w-full"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Mobile/Tablet: compact specs row + thin CTA */}
                    <div className="lg:hidden flex flex-col gap-2">
                      <div className="flex flex-row items-center gap-3 sm:gap-4 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#38bdf8] text-[16px] sm:text-[18px]">
                            weight
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold font-mono text-gray-800 dark:text-gray-100 leading-tight">
                            {p.capacity}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#38bdf8] text-[16px] sm:text-[18px]">
                            height
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold font-mono text-gray-800 dark:text-gray-100 leading-tight">
                            {p.height}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#38bdf8] font-mono shrink-0">
                          In Stock
                        </span>
                        <Link
                          to={`/solutions/mhe/order-pickers/${p.slug}`}
                          className="bg-[#38bdf8]/10 border border-[#38bdf8] text-[#38bdf8] px-4 py-2 font-bold uppercase tracking-wider text-[10px] sm:text-[11px] font-mono hover:bg-[#38bdf8] hover:text-[#00112b] transition-all text-center whitespace-nowrap"
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
                icon: "speed",
                title: "Fast Picking",
                body: "Optimized travel speeds and ergonomic controls reduce picking cycle times significantly.",
              },
              {
                icon: "view_in_ar",
                title: "Multi-Level Access",
                body: "From low-level to high-reach configurations for flexible warehouse racking systems.",
              },
              {
                icon: "self_improvement",
                title: "Operator Comfort",
                body: "Ergonomic platforms and intuitive controls for fatigue-free operation across long shifts.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#38bdf8] text-4xl mb-4">
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
