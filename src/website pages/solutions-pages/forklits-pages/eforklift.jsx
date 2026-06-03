import { useEffect, useState } from "react";
import Footer from "../../../config/footer";
import { Link } from "react-router-dom";
import HeaderHome from "../../../config/header copy";

export default function ElectricForkliftProductListing() {
  useEffect(() => {
    document.documentElement.classList.add("font-display");
  }, []);

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const [viewMode, setViewMode] = useState("list"); // "grid" | "list"

  const products = [
    {
      name: "Electric Forklift Truck 3.0-3.5T",
      img: "/linde/forklift/1.png",
      capacity: "3000 - 3500 kg",
      height: "3000 mm",
      voltage: "80V / 600Ah",
    },
    {
      name: "Electric Forklift Truck 1.5-2.0T",
      img: "/linde/forklift/2.png",
      capacity: "1500 - 2000 kg",
      height: "3000 mm",
      voltage: "48V / 500Ah",
    },
    {
      name: "Electric Forklift Trucks 2.0-2.5T",
      img: "/linde/forklift/3.png",
      capacity: "2000 - 2500 kg",
      height: "3600 - 6500 mm",
      voltage: "80V / 625Ah",
    },
    {
      name: "Electric Forklift Trucks 1.6-2.0T",
      img: "/linde/forklift/4.png",
      capacity: "1600 - 2000 kg",
      height: "2770 - 6220 mm",
      voltage: "48V / 625Ah",
    },
    {
      name: "Electric Forklift Trucks 2.5-3.5T",
      img: "/linde/forklift/5.png",
      capacity: "2500 - 3500 kg",
      height: "2850 - 6605 mm",
      voltage: "80V / 700Ah",
    },
    {
      name: "Electric Forklift Trucks 3.0-3.8T",
      img: "/linde/forklift/6.png",
      capacity: "3000 - 3800 kg",
      height: "3000 mm",
      voltage: "80V / 750Ah",
    },
    {
      name: "Electric Forklift Trucks 3.5-5.0T",
      img: "/linde/forklift/7.png",
      capacity: "3500 - 5000 kg",
      height: "3100 - 6015 mm",
      voltage: "80V / 840Ah",
    },
    {
      name: "Electric Forklift Trucks 6.0-8.0T",
      img: "/linde/forklift/8.png",
      capacity: "6000 - 8000 kg",
      height: "3050 - 7255 mm",
      voltage: "96V / 1000Ah",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="pt-0">
        {/* ── HERO BANNER ── */}
        <section className="relative w-full h-[620px] md:h-[700px] overflow-hidden">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1440&q=80&fm=webp"
            alt="Electric Forklift Banner"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-[1]" />

          {/* Gradient overlay — left side darker for text legibility, right side lighter to show forklift */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e00]/90 via-[#1a0e00]/65 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />

          {/* Subtle grid overlay for industrial feel */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2ae500]" />

          {/* Content */}
          <div className="relative z-10   h-full max-w-[1440px] mx-auto px-4 md:px-16 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex mt-20 md:mt-0 items-center gap-2 px-2 py-1 md:px-4 md:py-1.5 rounded-full border border-[#2ae500]/50 mb-4 bg-black/40 backdrop-blur-sm w-fit">
              <span className="material-symbols-outlined text-[#2ae500] text-[15px]">
                bolt
              </span>
              <span className="uppercase tracking-[0.25em] text-[8px] md:text-[11px] text-[#2ae500] font-semibold">
                Electric Series · Zero Emission
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 max-w-2xl">
              Electric
              <br />
              <span className="text-[#2ae500]">Forklifts.</span>
            </h1>

            <p className="text-white/55 text-sm md:text-base max-w-[20em] md:max-w-lg mb-10 leading-relaxed">
              High-performance, zero-emission forklifts engineered for demanding
              warehouse and industrial logistics — built to run harder, last
              longer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="bg-[#39ff14] text-[#022100] px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#2ae500] transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
                Browse Models
              </a>
              <a
                href="/contact"
                className="border border-white/25 text-white/80 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#2ae500] hover:text-[#2ae500] transition-all duration-200 backdrop-blur-sm"
              >
                Request a Quote
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              {[
                { value: "8", label: "Models Available" },
                { value: "8T", label: "Max Capacity" },
                { value: "12m", label: "Max Lift Height" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-[#2ae500] font-mono">
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

        {/* Old hero section replaced — spacer removed since banner handles spacing */}

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

            {/* View Toggle */}
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
          {/* ── GRID VIEW ── */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="group border border-slate-300 dark:border-slate-700 bg-white dark:bg-black overflow-hidden transition-all duration-300 hover:border-[#2ae500]"
                >
                  {/* Image */}
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

                  {/* Content */}
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
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#2ae500]">
                          battery_charging_full
                        </span>
                        <span className="text-sm text-gray-500 dark:text-[#baccb0]">
                          Voltage:
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
                          {p.voltage}
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

          {/* ── LIST VIEW ── */}
          {viewMode === "list" && (
            <div className="space-y-6">
              {products.map((p, index) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0b0f10] overflow-hidden transition-all duration-300 hover:border-[#2ae500]"
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
                  {/* Image — always white bg so product photos look right */}
                  <div className="lg:w-1/4 bg-gray-50 dark:bg-white flex items-center justify-center p-8 shrink-0">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-auto object-contain max-h-[200px] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-8 flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-6 leading-snug text-gray-800 dark:text-gray-100">
                        {p.name}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Capacity */}
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
                        {/* Height */}
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
                        {/* Voltage */}
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-[#2ae500]">
                            battery_charging_full
                          </span>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#baccb0] font-mono">
                              Voltage
                            </span>
                            <span className="text-sm font-bold font-mono text-gray-800 dark:text-gray-100">
                              {p.voltage}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
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
                precision_manufacturing
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Precision Control
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Advanced ergonomics for fatigue-free operation in long shifts.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#2ae500] text-4xl mb-4">
                eco
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Zero Emissions
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Clean operation for indoor food, medical, and high-purity
                environments.
              </p>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-[#2ae500] text-4xl mb-4">
                build
              </span>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Lower Maintenance
              </h4>
              <p className="text-sm text-gray-500 dark:text-[#baccb0]">
                Fewer moving parts and regenerative braking for lower total
                operating cost.
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
