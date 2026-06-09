import { useEffect, useState } from "react";
import Footer from "../../../config/footer";
import { Link } from "react-router-dom";
import HeaderHome from "../../../config/header copy";

export default function ICCBTrucksProductListing() {
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
      slug: "diesel-forklift-8t-10t",
      name: "Diesel Forklift Trucks 8.0 - 10.0T",
      img: "/linde/iccb/1.png",
      capacity: "8000 - 10000 kg",
      height: "3000 mm",
    },
    {
      slug: "diesel-lpg-forklift-2-5t-3-5t-a",
      name: "Diesel/LPG Forklift Trucks 2.5 - 3.5T",
      img: "/linde/iccb/2.png",
      capacity: "2500 - 3500 kg",
      height: "2750 - 6275 mm",
    },
    {
      slug: "diesel-lpg-forklift-2-5t-3-5t-b",
      name: "Diesel/LPG Forklift Trucks 2.5 - 3.5T",
      img: "/linde/iccb/3.png",
      capacity: "2500 - 3500 kg",
      height: "2850 - 6605 mm",
    },
    {
      slug: "diesel-forklift-4t-5t",
      name: "Diesel Forklift Trucks 4.0 - 5.0T",
      img: "/linde/iccb/4.png",
      capacity: "4000 - 5000 kg",
      height: "3150 - 6325 mm",
    },
    {
      slug: "diesel-lpg-forklift-4t-5t",
      name: "Diesel/LPG Forklift Trucks 4.0 - 5.0T",
      img: "/linde/iccb/5.png",
      capacity: "4000 - 5000 kg",
      height: "3000 - 5865 mm",
    },
    {
      slug: "diesel-lpg-forklift-6t-8t",
      name: "Diesel/LPG Forklift Trucks 6.0 - 8.0T",
      img: "/linde/iccb/6.png",
      capacity: "6000 - 8000 kg",
      height: "2750 - 3150 mm",
    },
    {
      slug: "diesel-forklift-6t-8t",
      name: "Diesel Forklift Trucks 6.0 - 8.0T",
      img: "/linde/iccb/7.png",
      capacity: "6000 - 8000 kg",
      height: "2750 - 3150 mm",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="pt-0">
        {/* ── HERO BANNER ── */}
        <section className="relative w-full h-[620px] md:h-[700px] overflow-hidden">
          <img
            src="https://www.linde-mh.com/media/Global-Content/04-About-Linde/Magazine/Ostendorf/Ostendorf-Xi20_PH-4681_0768_CX_16x9w1920.jpg"
            alt="ICCB Forklift Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e00]/90 via-[#1a0e00]/65 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 12px)",
            }}
          />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f97316]" />

          <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center">
            <div className="inline-flex mt-20 md:mt-0 items-center gap-2 px-2 py-1 md:px-4 md:py-1.5 rounded-full border border-[#f97316]/50 mb-4 bg-black/40 backdrop-blur-sm w-fit">
              <span className="material-symbols-outlined text-[#f97316] text-[15px]">
                local_shipping
              </span>
              <span className="uppercase tracking-[0.25em] text-[8px] md:text-[11px] text-[#f97316] font-semibold">
                ICCB Series · Heavy Duty
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 max-w-2xl">
              ICCB Forklift
              <br />
              <span className="text-[#f97316]">Trucks.</span>
            </h1>

            <p className="text-white/55 text-sm md:text-base max-w-[20em] md:max-w-lg mb-10 leading-relaxed">
              Diesel and LPG-powered forklifts built for outdoor terrain and
              heavy industrial lifting — where raw power and uptime are
              non-negotiable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="bg-[#f97316] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#ea6c0a] transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
                Browse Models
              </a>
              <a
                href="/contact"
                className="border border-white/25 text-white/80 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#f97316] hover:text-[#f97316] transition-all duration-200 backdrop-blur-sm"
              >
                Request a Quote
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "7", label: "Models Available" },
                { value: "10T", label: "Max Capacity" },
                { value: "Diesel/LPG", label: "Power Options" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-[#f97316] font-mono">
                    {stat.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-white/40 mt-0.5">
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
              className="flex items-center gap-2 text-[#f97316] hover:gap-3 transition-all duration-300"
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
                    ? "bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316]"
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
                    ? "bg-[#f97316]/10 border border-[#f97316]/30 text-[#f97316]"
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
                  className="group border border-slate-300 dark:border-slate-700 bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-[#f97316]"
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
                        <span className="material-symbols-outlined text-[#f97316]">
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
                        <span className="material-symbols-outlined text-[#f97316]">
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
                      to={`/solutions/mhe/iccb-trucks/${p.slug}`}
                      className="mt-auto flex items-center justify-between w-full bg-[#f97316] text-white px-6 py-4 font-bold uppercase tracking-wider hover:bg-[#ea6c0a] transition-all active:scale-95"
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
                  className="group flex flex-col md:flex-row border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b0f10] overflow-hidden transition-all duration-300 hover:border-[#f97316]"
                  style={{
                    boxShadow: "none",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 15px -3px rgba(249,115,22,0.2)")
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
                          <span className="material-symbols-outlined text-[#f97316]">
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
                          <span className="material-symbols-outlined text-[#f97316]">
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
                          <span className="block text-[11px] uppercase tracking-wider text-[#f97316] font-mono mb-1">
                            In Stock
                          </span>
                          <span className="text-gray-500 dark:text-[#baccb0] text-xs font-mono">
                            Enterprise Pricing
                          </span>
                        </div>
                        <Link
                          to={`/solutions/mhe/iccb-trucks/${p.slug}`}
                          className="bg-[#f97316]/10 border border-[#f97316] text-[#f97316] px-6 py-3 font-bold uppercase tracking-wider text-xs font-mono hover:bg-[#f97316] hover:text-white transition-all text-center w-full"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>

                    {/* Tablet/mobile: stacked specs + CTA */}
                    <div className="lg:hidden flex flex-row items-center justify-between gap-4">
                      <div className="flex flex-col gap-3 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#f97316] text-[18px]">
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
                          <span className="material-symbols-outlined text-[#f97316] text-[18px]">
                            height
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[9px] uppercase tracking-widest text-gray-500 dark:text-[#baccb0] font-mono">
                              Lift Height
                            </span>
                            <span className="text-xs font-bold font-mono text-gray-800 dark:text-gray-100">
                              {p.height}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-4 shrink-0">
                        <div className="text-right">
                          <span className="block text-[10px] uppercase tracking-wider text-[#f97316] font-mono mb-0.5">
                            In Stock
                          </span>
                          <span className="text-gray-500 dark:text-[#baccb0] text-[10px] font-mono">
                            Enterprise Pricing
                          </span>
                        </div>
                        <Link
                          to={`/solutions/mhe/iccb-trucks/${p.slug}`}
                          className="bg-[#f97316]/10 border border-[#f97316] text-[#f97316] px-3 py-2 font-bold uppercase tracking-wider text-[10px] font-mono hover:bg-[#f97316] hover:text-white transition-all text-center whitespace-nowrap"
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
            <div className="p-8">
              <span className="material-symbols-outlined text-[#f97316] text-4xl mb-4">
                local_fire_department
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                High Torque Power
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Diesel and LPG engines deliver exceptional torque for heavy
                industrial loads.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#f97316] text-4xl mb-4">
                terrain
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                All-Terrain Ready
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Built for outdoor and rugged environments where performance
                cannot be compromised.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#f97316] text-4xl mb-4">
                build
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Robust Engineering
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Heavy-duty frames and components designed for maximum uptime and
                longevity.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#f97316] text-4xl mb-4">
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
