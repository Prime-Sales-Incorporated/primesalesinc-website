import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../../config/footer";
import HeaderHome from "../../../config/header copy";

const products = [
  {
    slug: "battery-order-picker-1-36t",
    name: "Battery Order Picking Truck 1.36 t",
    model: "V12 / V14",
    category: "High-Level Battery Order Picker",
    img: "/linde/orderpickers/1.png",
    gallery: [
      "/linde/orderpickers/1.png",
      "/linde/orderpickers/1.png",
      "/linde/orderpickers/1.png",
    ],
    capacity: "1360 kg",
    height: "6030 - 9130 mm",
    tagline: "High-Reach Precision at Every Pick",
    description:
      "The V12/V14 Battery Order Picking Truck is built for high-bay warehouses where speed and accuracy at elevation are critical. Reaching heights from 6030 to 9130 mm, it gives operators full man-up access for accurate picking at every racking level while maintaining a compact footprint.",
    features: [
      "Man-up platform reaches up to 9130 mm for high-bay picking",
      "1360 kg rated capacity for mixed-weight order fulfillment",
      "Full battery-electric operation for clean indoor use",
      "Integrated safety sensors and soft-stop mast control",
    ],
    specs: [
      { label: "Load Capacity", value: "1360 kg" },
      { label: "Lift Height", value: "6030 - 9130 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Man-Up" },
      { label: "Aisle Width", value: "From 2700 mm" },
      { label: "Travel Speed (laden)", value: "10 km/h" },
      { label: "Lift Speed (laden)", value: "0.25 m/s" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "low-level-order-picker-2t",
    name: "Low Level Order Pickers 2.0 t",
    model: "L12 / L14",
    category: "Low-Level Order Picker",
    img: "/linde/orderpickers/2.png",
    gallery: [
      "/linde/orderpickers/2.png",
      "/linde/orderpickers/2.png",
      "/linde/orderpickers/2.png",
    ],
    capacity: "2000 kg",
    height: "120 mm",
    tagline: "Ground-Level Speed, Maximum Throughput",
    description:
      "The L12/L14 Low Level Order Picker is designed for high-throughput floor-level picking in distribution centers and logistics hubs. With a 2-tonne capacity and low platform height of 120 mm, operators can quickly load and move pallets across large warehouse floors.",
    features: [
      "2-tonne capacity for heavy pallet floor picking",
      "120 mm platform height for easy operator mounting",
      "High travel speed for fast cross-floor logistics",
      "Ergonomic tiller arm with fingertip controls",
    ],
    specs: [
      { label: "Load Capacity", value: "2000 kg" },
      { label: "Platform Height", value: "120 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Ride-On" },
      { label: "Turning Radius", value: "1600 mm" },
      { label: "Travel Speed (laden)", value: "12 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "low-level-man-up-order-picker-0-7t-1t",
    name: "Low Level Man-up Order Pickers 0.7 - 1.0 t",
    model: "T16 / T20",
    category: "Low-Level Man-Up Order Picker",
    img: "/linde/orderpickers/3.png",
    gallery: [
      "/linde/orderpickers/3.png",
      "/linde/orderpickers/3.png",
      "/linde/orderpickers/3.png",
    ],
    capacity: "700 - 1000 kg",
    height: "86 - 1065 mm",
    tagline: "Floor to Mid-Level, Fast and Accurate",
    description:
      "The T16/T20 Low Level Man-Up Order Picker bridges the gap between ground-level and mid-level picking. With a platform height range of 86 to 1065 mm, it handles picking tasks across multiple rack levels without the complexity of high-lift systems.",
    features: [
      "Platform adjusts from 86 to 1065 mm for multi-level access",
      "Up to 1-tonne capacity for mixed product lines",
      "Man-up design puts operators at the pick face",
      "Compact build for operation in tight aisle configurations",
    ],
    specs: [
      { label: "Load Capacity", value: "700 - 1000 kg" },
      { label: "Platform Height", value: "86 - 1065 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Man-Up" },
      { label: "Aisle Width", value: "From 2300 mm" },
      { label: "Travel Speed (laden)", value: "9 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "electric-medium-level-order-picker-1t",
    name: "Electric Medium-Level Order Picker 1.0 t",
    model: "M10 / M12",
    category: "Medium-Level Order Picker",
    img: "/linde/orderpickers/4.png",
    gallery: [
      "/linde/orderpickers/4.png",
      "/linde/orderpickers/4.png",
      "/linde/orderpickers/4.png",
    ],
    capacity: "1000 kg",
    height: "1000 - 5415 mm",
    tagline: "Mid-Rack Picking, Zero Compromise",
    description:
      "The M10/M12 Electric Medium-Level Order Picker covers the critical mid-range racking zone from 1000 to 5415 mm. It delivers precise, man-up picking at heights that are too high for low-level units but don't require a full high-reach system.",
    features: [
      "Lift range 1000–5415 mm covers mid-level racking zones",
      "1-tonne capacity for standard pick-and-place operations",
      "Electric man-up platform for accurate at-level picking",
      "Low-noise AC motor for indoor distribution environments",
    ],
    specs: [
      { label: "Load Capacity", value: "1000 kg" },
      { label: "Lift Height", value: "1000 - 5415 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Man-Up" },
      { label: "Aisle Width", value: "From 2500 mm" },
      { label: "Travel Speed (laden)", value: "10 km/h" },
      { label: "Battery Voltage", value: "24V / 48V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "modular-high-level-order-picker-0-8t-1-2t",
    name: "Modular High Level Man-Up Order Picker Stacker 0.8 - 1.2 t",
    model: "V08 / V12 Stacker",
    category: "High-Level Man-Up Order Picker Stacker",
    img: "/linde/orderpickers/5.png",
    gallery: [
      "/linde/orderpickers/5.png",
      "/linde/orderpickers/5.png",
      "/linde/orderpickers/5.png",
    ],
    capacity: "800 - 1200 kg",
    height: "2825 - 10965 mm",
    tagline: "The Summit of Warehouse Picking Performance",
    description:
      "The V08/V12 Modular High Level Man-Up Order Picker Stacker is the flagship of high-bay operations. With lift heights reaching nearly 11 metres and a modular design adaptable to different warehouse configurations, it sets the standard for high-level combined picking and stacking.",
    features: [
      "Lift heights up to 10,965 mm for the tallest high-bay racks",
      "Modular system adaptable to aisle width and rack configuration",
      "Combined picking and stacking functions in one unit",
      "Advanced height pre-selection for fast level targeting",
    ],
    specs: [
      { label: "Load Capacity", value: "800 - 1200 kg" },
      { label: "Lift Height", value: "2825 - 10965 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Man-Up" },
      { label: "Aisle Width", value: "From 2700 mm" },
      { label: "Travel Speed (laden)", value: "10 km/h" },
      { label: "Lift Speed (laden)", value: "0.3 m/s" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
];

export default function OrderPickersDetail() {
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
            <Link to="/" className="hover:text-[#38bdf8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/solutions/mhe/"
              className="hover:text-[#38bdf8] transition-colors"
            >
              Order Pickers
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
                        activeImg === i ? "#38bdf8" : "rgb(203 213 225)",
                      boxShadow: activeImg === i ? "0 0 0 1px #38bdf8" : "none",
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
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold text-[#38bdf8]">
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
              </div>

              <p className="text-sm md:text-base text-gray-500 dark:text-[#baccb0] leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-[#38bdf8] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  className="bg-[#38bdf8] text-[#00112b] px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#0ea5e9] transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Request a Quote
                </Link>
                <a
                  href="tel:+00000000000"
                  className="border border-slate-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all duration-200 flex items-center gap-2"
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
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono font-semibold text-[#38bdf8] mb-6">
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

        {/* ── BACK LINK ── */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 pb-16">
          <Link
            to="/solutions/mhe/order-pickers"
            className="inline-flex items-center gap-2 text-[#38bdf8] hover:gap-3 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="uppercase text-xs font-bold tracking-widest">
              Back to Order Pickers
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
