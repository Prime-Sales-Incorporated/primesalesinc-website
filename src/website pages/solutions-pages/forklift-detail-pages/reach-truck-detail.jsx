import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../../config/footer";
import HeaderHome from "../../../config/header copy";

const products = [
  {
    slug: "double-deep-reach-truck-1-35t",
    name: "Double-deep Reach Truck 1.35T",
    model: "R14 DD",
    category: "Double-Deep Reach Truck",
    img: "/linde/reachtrucks/1.png",
    gallery: [
      "/linde/reachtrucks/1.png",
      "/linde/reachtrucks/1.png",
      "/linde/reachtrucks/1.png",
    ],
    capacity: "1362 kg",
    height: "6052 mm",
    tagline: "Double the Storage Density, Same Aisle Width",
    description:
      "The R14 DD Double-Deep Reach Truck is engineered to maximize storage density in high-bay warehouses by reaching two pallet positions deep into racking. At 1362 kg capacity and a lift height of 6052 mm, it dramatically increases storage utilization without requiring additional floor space or wider aisles.",
    features: [
      "Double-deep reach capability doubles racking utilization per aisle",
      "1362 kg rated capacity for standard warehouse pallet loads",
      "Lift height of 6052 mm for full multi-level high-bay access",
      "Pantograph reach mechanism for precise two-deep positioning",
    ],
    specs: [
      { label: "Load Capacity", value: "1362 kg" },
      { label: "Lift Height", value: "6052 mm" },
      { label: "Reach Type", value: "Double-Deep" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Aisle Width", value: "From 2700 mm" },
      { label: "Travel Speed (laden)", value: "10 km/h" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "reach-truck-1-2t-1-5t",
    name: "Reach Truck 1.2 - 1.5 T",
    model: "R12 / R15",
    category: "Electric Reach Truck",
    img: "/linde/reachtrucks/2.png",
    gallery: [
      "/linde/reachtrucks/2.png",
      "/linde/reachtrucks/2.png",
      "/linde/reachtrucks/2.png",
    ],
    capacity: "1200 - 1500 kg",
    height: "2700 - 4500 mm",
    tagline: "Compact Reach for Low-to-Mid Bay Operations",
    description:
      "The R12/R15 Reach Truck is an efficient, compact solution for warehouses with lift requirements from 2700 to 4500 mm. Its 1200–1500 kg capacity handles standard pallet operations in narrow aisles with a small, agile chassis designed for high-frequency picking cycles.",
    features: [
      "1200–1500 kg capacity for standard narrow-aisle use",
      "Lift range 2700–4500 mm covers low-to-mid bay racking",
      "Compact chassis for operation in tighter aisle widths",
      "AC traction and lift motors for low-energy consumption",
    ],
    specs: [
      { label: "Load Capacity", value: "1200 - 1500 kg" },
      { label: "Lift Height", value: "2700 - 4500 mm" },
      { label: "Reach Type", value: "Single-Deep" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Aisle Width", value: "From 2500 mm" },
      { label: "Travel Speed (laden)", value: "10 km/h" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "electric-reach-truck-1t-1-4t",
    name: "Electric Reach Truck 1.0 - 1.4 T",
    model: "R10 / R14",
    category: "Electric Reach Truck",
    img: "/linde/reachtrucks/3.png",
    gallery: [
      "/linde/reachtrucks/3.png",
      "/linde/reachtrucks/3.png",
      "/linde/reachtrucks/3.png",
    ],
    capacity: "1000 - 1400 kg",
    height: "3650 - 6220 mm",
    tagline: "Light-Capacity High-Reach Precision",
    description:
      "The R10/R14 Electric Reach Truck delivers precise high-reach performance at lighter capacities, handling 1000–1400 kg with lift heights up to 6220 mm. Ideal for pharmaceuticals, electronics, and food distribution where precise placement at height is critical.",
    features: [
      "Lift heights up to 6220 mm for full high-bay access",
      "1000–1400 kg range for lighter, high-value loads",
      "Precision reach control for accurate pallet placement",
      "Integrated height pre-selection for fast level targeting",
    ],
    specs: [
      { label: "Load Capacity", value: "1000 - 1400 kg" },
      { label: "Lift Height", value: "3650 - 6220 mm" },
      { label: "Reach Type", value: "Single-Deep" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Aisle Width", value: "From 2500 mm" },
      { label: "Travel Speed (laden)", value: "10 km/h" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "electric-reach-truck-1-4t-1-8t",
    name: "Electric Reach Truck 1.4 - 1.8 T",
    model: "R14 / R18",
    category: "Electric Reach Truck",
    img: "/linde/reachtrucks/4.png",
    gallery: [
      "/linde/reachtrucks/4.png",
      "/linde/reachtrucks/4.png",
      "/linde/reachtrucks/4.png",
    ],
    capacity: "1400 - 1800 kg",
    height: "3250 - 6220 mm",
    tagline: "Mid-Capacity Reach for Demanding Warehouses",
    description:
      "The R14/R18 Electric Reach Truck covers the mid-capacity range from 1400 to 1800 kg with lift heights up to 6220 mm. Built for busy distribution centers handling diverse pallet weights and multi-level storage tasks, it delivers consistent high-bay performance across full operating shifts.",
    features: [
      "1400–1800 kg capacity for mixed-weight pallet environments",
      "Lift heights up to 6220 mm for high-bay racking",
      "Responsive reach carriage for precise load positioning",
      "Full-shift battery with optional fast-charge capability",
    ],
    specs: [
      { label: "Load Capacity", value: "1400 - 1800 kg" },
      { label: "Lift Height", value: "3250 - 6220 mm" },
      { label: "Reach Type", value: "Single-Deep" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Aisle Width", value: "From 2600 mm" },
      { label: "Travel Speed (laden)", value: "11 km/h" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "electric-reach-truck-1-4t-2t-a",
    name: "Electric Reach Truck 1.4 - 2.0 T",
    model: "R20 Series A",
    category: "High-Reach Electric Reach Truck",
    img: "/linde/reachtrucks/5.png",
    gallery: [
      "/linde/reachtrucks/5.png",
      "/linde/reachtrucks/5.png",
      "/linde/reachtrucks/5.png",
    ],
    capacity: "1400 - 2000 kg",
    height: "4355 - 11455 mm",
    tagline: "The Summit of High-Bay Performance",
    description:
      "The R20 Series A is the flagship high-reach truck, achieving lift heights of up to 11,455 mm — the tallest in the range. At 2-tonne capacity, it handles the full spectrum of standard warehouse pallets at extreme elevations, delivering the precision and stability needed in super-high-bay operations.",
    features: [
      "Lift heights to 11,455 mm — reaching the very top of super-high-bay racks",
      "2-tonne capacity for the full range of standard pallet loads",
      "Advanced mast stability system for precise load placement at height",
      "Integrated height and reach pre-selection for maximum throughput",
    ],
    specs: [
      { label: "Load Capacity", value: "1400 - 2000 kg" },
      { label: "Lift Height", value: "4355 - 11455 mm" },
      { label: "Reach Type", value: "Single-Deep" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Aisle Width", value: "From 2700 mm" },
      { label: "Travel Speed (laden)", value: "11 km/h" },
      { label: "Battery Voltage", value: "48V / 80V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "electric-reach-truck-1-4t-2t-b",
    name: "Electric Reach Truck 1.4 - 2.0 T",
    model: "R20 Series B",
    category: "High-Reach Electric Reach Truck",
    img: "/linde/reachtrucks/6.png",
    gallery: [
      "/linde/reachtrucks/6.png",
      "/linde/reachtrucks/6.png",
      "/linde/reachtrucks/6.png",
    ],
    capacity: "1400 - 2000 kg",
    height: "4355 - 11455 mm",
    tagline: "High-Bay Reach, Enhanced Operator Comfort",
    description:
      "The R20 Series B shares the flagship lift height of 11,455 mm and 2-tonne capacity with an enhanced operator cabin designed for reduced fatigue in high-frequency, high-elevation picking operations. Premium ergonomics and advanced visibility make it the preferred choice for multi-shift high-bay workflows.",
    features: [
      "Enhanced cabin ergonomics for high-frequency high-bay picking",
      "Lift heights to 11,455 mm matching the full Series A specification",
      "Improved overhead visibility for accurate placement at extreme heights",
      "Premium suspension seat and low-vibration mast for operator comfort",
    ],
    specs: [
      { label: "Load Capacity", value: "1400 - 2000 kg" },
      { label: "Lift Height", value: "4355 - 11455 mm" },
      { label: "Reach Type", value: "Single-Deep" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Aisle Width", value: "From 2700 mm" },
      { label: "Travel Speed (laden)", value: "11 km/h" },
      { label: "Battery Voltage", value: "48V / 80V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
];

export default function ReachTrucksDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];

  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("font-display");
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="pt-0">
        {/* ── BREADCRUMB ── */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 pt-8 pb-4">
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-slate-500">
            <Link to="/" className="hover:text-[#ef4444] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/solutions/mhe/"
              className="hover:text-[#ef4444] transition-colors"
            >
              Reach Trucks
            </Link>
            <span>/</span>
            <span className="text-gray-700 dark:text-gray-300">
              {product.model}
            </span>
          </nav>
        </div>

        {/* ── MAIN PRODUCT SECTION ── */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT — Image Gallery */}
            <div className="flex flex-col gap-4">
              <div
                className="relative bg-gray-50 dark:bg-white border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "radial-gradient(#051424 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <img
                  src={product.gallery[activeImg]}
                  alt={product.name}
                  className="relative z-10 w-full h-full object-contain p-10 transition-all duration-300"
                />
              </div>

              <div className="flex gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="border bg-white dark:bg-white flex items-center justify-center overflow-hidden transition-all duration-200 flex-1"
                    style={{
                      aspectRatio: "1",
                      borderColor:
                        activeImg === i ? "#ef4444" : "rgb(203 213 225)",
                      boxShadow: activeImg === i ? "0 0 0 1px #ef4444" : "none",
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-contain p-3"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Product Info */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold text-[#ef4444]">
                  {product.category}
                </span>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white uppercase tracking-tight">
                  {product.tagline}
                </h1>
              </div>

              <div className="flex flex-wrap gap-6 pt-2 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-mono text-gray-400 dark:text-slate-500 mb-0.5">
                    Models
                  </span>
                  <span className="font-bold font-mono text-gray-800 dark:text-gray-100">
                    {product.model}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-mono text-gray-400 dark:text-slate-500 mb-0.5">
                    Capacity
                  </span>
                  <span className="font-bold font-mono text-gray-800 dark:text-gray-100">
                    {product.capacity}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-mono text-gray-400 dark:text-slate-500 mb-0.5">
                    Max Lift
                  </span>
                  <span className="font-bold font-mono text-gray-800 dark:text-gray-100">
                    {product.height}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-500 dark:text-[#baccb0] leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-[#ef4444] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  className="bg-[#ef4444] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#dc2626] transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Request a Quote
                </Link>
                <a
                  href="tel:+00000000000"
                  className="border border-slate-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#ef4444] hover:text-[#ef4444] transition-all duration-200 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    call
                  </span>
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECS TABLE ── */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono font-semibold text-[#ef4444] mb-6">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 dark:border-slate-700">
            {product.specs.map((s, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700
                  ${i % 2 === 0 ? "md:border-r" : ""}
                  bg-white dark:bg-[#0b0f10] hover:bg-gray-50 dark:hover:bg-[#111518] transition-colors`}
              >
                <span className="text-xs uppercase tracking-widest font-mono text-gray-400 dark:text-slate-500">
                  {s.label}
                </span>
                <span className="text-sm font-bold font-mono text-gray-800 dark:text-gray-100">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE CARDS ── */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-12 pb-32">
          <div className="border border-slate-200 dark:border-slate-700 bg-gray-50 dark:bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
            {[
              {
                icon: "expand",
                title: "Ultra-High Reach",
                body: "Lift heights up to 11,455 mm for maximum utilization of high-bay warehouse storage.",
              },
              {
                icon: "view_column",
                title: "Narrow Aisle",
                body: "Compact mast and chassis design for efficient operation in tight racking aisles.",
              },
              {
                icon: "stability",
                title: "Stable at Height",
                body: "Advanced mast and load-sensing systems ensure precise, stable handling at maximum elevation.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#ef4444] text-4xl mb-4">
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

        {/* ── BACK LINK ── */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 pb-16">
          <Link
            to="/solutions/mhe/reach-trucks"
            className="inline-flex items-center gap-2 text-[#ef4444] hover:gap-3 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="uppercase text-xs font-bold tracking-widest">
              Back to Reach Trucks
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
