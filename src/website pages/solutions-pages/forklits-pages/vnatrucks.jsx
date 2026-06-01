import { useEffect, useState } from "react";
import Footer from "../../../config/footer";
import { Link } from "react-router-dom";
import HeaderHome from "../../../config/header copy";

export default function VNAProductList() {
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
      name: "Very Narrow Aisle Man-Up Trucks 0.5 - 1.5 t",
      img: "/linde/VNA/1.png",
      capacity: "500 - 1500 kg",
      height: "4460 - 17000 mm",
    },
    {
      name: "Very Narrow Aisle Man-Down Trucks 0.5 - 1.5 t",
      img: "/linde/VNA/2.png",
      capacity: "7450 - 12850 kg",
      height: "120 mm",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="pt-">
        {/* ── HERO BANNER ── */}
        <section className="relative w-full h-[420px] md:h-[700px] overflow-hidden">
          {/* Background — extreme height / very narrow warehouse aisle */}
          <img
            src="https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/VNA-order_picking-retail-4270_249_16x9w1920.jpg"
            alt="VNA Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Deep gold/amber overlay — premium, distinct from all previous */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(40,28,0,0.95) 0%, rgba(40,28,0,0.62) 50%, transparent 100%)",
            }}
          />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />

          {/* Diamond/argyle pattern — unique to VNA, suggests precision grid navigation */}
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.035,
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 20px)",
            }}
          />

          {/* Gold accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{ background: "#eab308" }}
          />

          {/* Content */}
          <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 w-fit backdrop-blur-sm"
              style={{
                borderColor: "rgba(234,179,8,0.5)",
                background: "rgba(0,0,0,0.4)",
              }}
            >
              <span
                className="material-symbols-outlined text-[15px]"
                style={{ color: "#eab308" }}
              >
                swap_horiz
              </span>
              <span
                className="uppercase tracking-[0.25em] text-[11px] font-semibold"
                style={{ color: "#eab308" }}
              >
                VNA Series · Maximum Space Utilization
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 max-w-2xl">
              Very Narrow
              <br />
              <span style={{ color: "#eab308" }}>Aisle.</span>
            </h1>

            <p
              className="text-sm md:text-base max-w-lg mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Man-up and man-down VNA trucks reaching up to 17,000 mm —
              engineered to extract maximum storage density from the most
              space-constrained warehouse environments.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="flex items-center gap-2 px-8 py-3.5 font-bold uppercase tracking-widest text-xs transition-all duration-200 active:scale-95"
                style={{ background: "#eab308", color: "#1a0f00" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#ca8a04")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#eab308")
                }
              >
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
                Browse Models
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 font-bold uppercase tracking-widest text-xs transition-all duration-200 backdrop-blur-sm"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.8)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#eab308";
                  e.currentTarget.style.color = "#eab308";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                }}
              >
                Request a Quote
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex items-center gap-8 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              {[
                { value: "2", label: "Models Available" },
                { value: "17mm", label: "Max Lift Height" },
                { value: "12.8T", label: "Max Capacity" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span
                    className="text-2xl font-bold font-mono"
                    style={{ color: "#eab308" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-widest mt-0.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
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
              className="flex items-center gap-2 text-[#2ae500] hover:gap-3 transition-all duration-300"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="uppercase text-xs font-bold tracking-widest">
                View All Forklifts
              </span>
            </Link>

            <div className="flex gap-1 p-1 bg-gray-100 dark:bg-[#1d2022] rounded">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-[#2ae500]/10 border border-[#2ae500]/30 text-[#2ae500]"
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
                    ? "bg-[#2ae500]/10 border border-[#2ae500]/30 text-[#2ae500]"
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
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="group border border-slate-300 dark:border-slate-700 bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-[#2ae500]"
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
                        <span className="material-symbols-outlined text-[#2ae500]">
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
                        <span className="material-symbols-outlined text-[#2ae500]">
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
                    <button className="mt-auto flex items-center justify-between w-full bg-[#39ff14] text-[#022100] px-6 py-4 font-bold uppercase tracking-wider hover:bg-[#2ae500] transition-all active:scale-95">
                      Details
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewMode === "list" && (
            <div className="space-y-6">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="group flex flex-col lg:flex-row border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b0f10] overflow-hidden transition-all duration-300 hover:border-[#2ae500]"
                  style={{
                    boxShadow: "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 15px -3px rgba(42,229,0,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "none")
                  }
                >
                  <div className="lg:w-1/4 bg-gray-50 dark:bg-white flex items-center justify-center p-8 shrink-0">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-auto object-contain max-h-[200px] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-grow p-8 flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-6 leading-snug text-gray-800 dark:text-gray-100">
                        {p.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#2ae500]">
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
                          <span className="material-symbols-outlined text-[#2ae500]">
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
                    </div>
                    <div className="flex flex-row md:flex-col justify-between md:justify-center items-end gap-4 md:min-w-[180px] md:border-l md:border-slate-300 dark:md:border-slate-700 md:pl-8">
                      <div className="text-right">
                        <span className="block text-[11px] uppercase tracking-wider text-[#2ae500] font-mono mb-1">
                          In Stock
                        </span>
                        <span className="text-gray-500 dark:text-[#baccb0] text-xs font-mono">
                          Enterprise Pricing
                        </span>
                      </div>
                      <button className="bg-[#2ae500]/10 border border-[#2ae500] text-[#2ae500] px-6 py-3 font-bold uppercase tracking-wider text-xs font-mono hover:bg-[#39ff14] hover:text-[#022100] transition-all w-full md:w-auto text-center">
                        View Details
                      </button>
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
            <div className="p-8">
              <span className="material-symbols-outlined text-[#2ae500] text-4xl mb-4">
                width_normal
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Aisle-Width Optimized
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Designed to operate in aisles as narrow as 1.5 m, dramatically
                increasing storage capacity.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#2ae500] text-4xl mb-4">
                expand
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Extreme Lift Heights
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Reach heights up to 17,000 mm for full utilization of high-bay
                storage systems.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#2ae500] text-4xl mb-4">
                person
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Man-Up &amp; Man-Down
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Operator cabin rises with the forks for precise, safe picking at
                any rack level.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#2ae500] text-4xl mb-4">
                support_agent
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                24/7 Service
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Global support network and readily available spare parts.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
