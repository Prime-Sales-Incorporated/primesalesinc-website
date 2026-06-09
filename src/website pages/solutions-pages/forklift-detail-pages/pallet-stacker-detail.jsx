import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../../config/footer";
import HeaderHome from "../../../config/header copy";

const products = [
  {
    slug: "pedestrian-pallet-stacker-1-4t-2t-a",
    name: "Pedestrian Pallet Stacker 1.4, 1.6, 2.0 t",
    model: "L14 / L16 / L20",
    category: "Pedestrian Pallet Stacker",
    img: "/linde/palletstackers/1.png",
    gallery: [
      "/linde/palletstackers/1.png",
      "/linde/palletstackers/1.png",
      "/linde/palletstackers/1.png",
    ],
    capacity: "1400 - 2000 kg",
    height: "1844 - 5316 mm",
    tagline: "Walk-Behind Precision for Every Aisle",
    description:
      "The L14/L16/L20 Pedestrian Pallet Stacker delivers reliable walk-behind stacking from 1400 to 2000 kg, with lift heights reaching 5316 mm. Its compact pedestrian design makes it ideal for medium-duty warehouse operations where maneuverability in tight spaces is essential.",
    features: [
      "Three capacity options — 1.4, 1.6, and 2.0 tonne",
      "Lift heights up to 5316 mm for multi-level racking",
      "Walk-behind design for maximum aisle flexibility",
      "Intuitive tiller arm controls for precise load handling",
    ],
    specs: [
      { label: "Load Capacity", value: "1400 - 2000 kg" },
      { label: "Lift Height", value: "1844 - 5316 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Aisle Width", value: "From 2200 mm" },
      { label: "Travel Speed (laden)", value: "6 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "stand-on-pallet-stacker-1-4t-2t",
    name: "Stand-On Pallet Stacker 1.4, 1.6, 2.0 t",
    model: "L14S / L16S / L20S",
    category: "Stand-On Pallet Stacker",
    img: "/linde/palletstackers/2.png",
    gallery: [
      "/linde/palletstackers/2.png",
      "/linde/palletstackers/2.png",
      "/linde/palletstackers/2.png",
    ],
    capacity: "1400 - 2000 kg",
    height: "1844 - 5316 mm",
    tagline: "Ride-On Efficiency, Compact Footprint",
    description:
      "The L14S/L16S/L20S Stand-On Pallet Stacker adds a ride-on platform to the proven pedestrian stacker design. Covering the same 1400–2000 kg capacity range and up to 5316 mm lift height, it dramatically increases travel speed and operator productivity across large warehouse floors.",
    features: [
      "Stand-on platform for faster cross-floor travel",
      "Same compact width as pedestrian variants",
      "Lift heights up to 5316 mm for high-bay use",
      "Foldable platform for pedestrian-mode operation",
    ],
    specs: [
      { label: "Load Capacity", value: "1400 - 2000 kg" },
      { label: "Lift Height", value: "1844 - 5316 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Stand-On / Pedestrian" },
      { label: "Aisle Width", value: "From 2200 mm" },
      { label: "Travel Speed (laden)", value: "9 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "electric-pallet-stacker-1-6t",
    name: "Electric Pallet Stacker 1.6 t",
    model: "E16",
    category: "Electric Pallet Stacker",
    img: "/linde/palletstackers/3.png",
    gallery: [
      "/linde/palletstackers/3.png",
      "/linde/palletstackers/3.png",
      "/linde/palletstackers/3.png",
    ],
    capacity: "1600 kg",
    height: "2650 - 4970 mm",
    tagline: "Powerful Stacking in a Slim Profile",
    description:
      "The E16 Electric Pallet Stacker provides a 1600 kg capacity with lift heights from 2650 to 4970 mm in a slim, maneuverable chassis. Its fully electric drive system makes it perfectly suited to clean indoor environments including food, pharma, and cold storage.",
    features: [
      "1600 kg capacity with reach up to 4970 mm",
      "Slim chassis for operation in narrow aisles",
      "Full AC electric drive for zero indoor emissions",
      "Soft-start/stop for smooth load handling",
    ],
    specs: [
      { label: "Load Capacity", value: "1600 kg" },
      { label: "Lift Height", value: "2650 - 4970 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Aisle Width", value: "From 2100 mm" },
      { label: "Travel Speed (laden)", value: "6 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "electric-pallet-stacker-1-5t",
    name: "Electric Pallet Stacker 1.5 t",
    model: "E15",
    category: "Electric Pallet Stacker",
    img: "/linde/palletstackers/4.png",
    gallery: [
      "/linde/palletstackers/4.png",
      "/linde/palletstackers/4.png",
      "/linde/palletstackers/4.png",
    ],
    capacity: "1500 kg",
    height: "2430 - 3230 mm",
    tagline: "Reliable Mid-Level Stacking, All Day Long",
    description:
      "The E15 Electric Pallet Stacker is a dependable mid-range unit for everyday stacking tasks. With a 1500 kg capacity and lift heights up to 3230 mm, it handles two- and three-level racking with ease — a workhorse for retail distribution and light manufacturing.",
    features: [
      "1500 kg capacity for standard pallet stacking",
      "Lift heights to 3230 mm covering up to 3-level racking",
      "Lightweight frame for easy maneuverability",
      "Long-life battery for full-shift operation",
    ],
    specs: [
      { label: "Load Capacity", value: "1500 kg" },
      { label: "Lift Height", value: "2430 - 3230 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Aisle Width", value: "From 2000 mm" },
      { label: "Travel Speed (laden)", value: "5 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "pedestrian-pallet-stacker-1t-1-2t",
    name: "Pedestrian Pallet Stacker 1.0 - 1.2 t",
    model: "L10 / L12",
    category: "Pedestrian Pallet Stacker",
    img: "/linde/palletstackers/5.png",
    gallery: [
      "/linde/palletstackers/5.png",
      "/linde/palletstackers/5.png",
      "/linde/palletstackers/5.png",
    ],
    capacity: "1000 - 1200 kg",
    height: "2427 - 3527 mm",
    tagline: "Light-Duty Stacking, Serious Reliability",
    description:
      "The L10/L12 Pedestrian Pallet Stacker is built for light-duty applications where compactness and low operating cost are priorities. Handling 1 to 1.2 tonnes with lift heights to 3527 mm, it's the ideal entry-level stacker for retail back-of-house and small distribution operations.",
    features: [
      "Entry-level 1.0–1.2 tonne capacity for lighter loads",
      "Lift heights up to 3527 mm for standard racking",
      "Ultra-compact design for the tightest spaces",
      "Simple, low-cost maintenance for high uptime",
    ],
    specs: [
      { label: "Load Capacity", value: "1000 - 1200 kg" },
      { label: "Lift Height", value: "2427 - 3527 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Aisle Width", value: "From 1900 mm" },
      { label: "Travel Speed (laden)", value: "5 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "pedestrian-pallet-stacker-1t-1-4t",
    name: "Pedestrian Pallet Stacker 1.0 - 1.4 t",
    model: "L10X / L14X",
    category: "Pedestrian Pallet Stacker",
    img: "/linde/palletstackers/6.png",
    gallery: [
      "/linde/palletstackers/6.png",
      "/linde/palletstackers/6.png",
      "/linde/palletstackers/6.png",
    ],
    capacity: "1000 - 1400 kg",
    height: "1924 - 4716 mm",
    tagline: "Extended Reach, Minimal Space Required",
    description:
      "The L10X/L14X extends the pedestrian stacker range with lift heights up to 4716 mm in a 1.0–1.4 tonne capacity bracket. Its extended mast capability handles mid-to-high racking while retaining the compact pedestrian footprint operators rely on.",
    features: [
      "Extended lift to 4716 mm for higher racking access",
      "1.0–1.4 tonne range for versatile load handling",
      "Compact pedestrian design for narrow aisle use",
      "Enhanced mast stability at extended heights",
    ],
    specs: [
      { label: "Load Capacity", value: "1000 - 1400 kg" },
      { label: "Lift Height", value: "1924 - 4716 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Aisle Width", value: "From 2000 mm" },
      { label: "Travel Speed (laden)", value: "6 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "stand-on-pallet-stacker-1-4t-1-6t",
    name: "Stand-On Pallet Stacker 1.4 - 1.6 t",
    model: "L14SR / L16SR",
    category: "Stand-On Pallet Stacker",
    img: "/linde/palletstackers/7.png",
    gallery: [
      "/linde/palletstackers/7.png",
      "/linde/palletstackers/7.png",
      "/linde/palletstackers/7.png",
    ],
    capacity: "1000 - 1400 kg",
    height: "1924 - 4266 mm",
    tagline: "Speed and Versatility in One Platform",
    description:
      "The L14SR/L16SR Stand-On Stacker combines ride-on speed with the reach of a 4266 mm mast in a 1.4–1.6 tonne platform. Suited to medium-duty distribution tasks, it gives operators the flexibility to ride or walk depending on layout and task requirements.",
    features: [
      "Stand-on ride mode for fast travel between pick locations",
      "1.4–1.6 tonne capacity for versatile daily operations",
      "Lift to 4266 mm for mid-to-high bay racking",
      "Foldable platform for walk-behind use in confined areas",
    ],
    specs: [
      { label: "Load Capacity", value: "1000 - 1400 kg" },
      { label: "Lift Height", value: "1924 - 4266 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Stand-On / Pedestrian" },
      { label: "Aisle Width", value: "From 2100 mm" },
      { label: "Travel Speed (laden)", value: "9 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "straddle-electric-pallet-stacker-1-4t-1-6t",
    name: "Straddle Electric Pallet Stacker 1.4 - 1.6 t",
    model: "S14 / S16",
    category: "Straddle Electric Pallet Stacker",
    img: "/linde/palletstackers/8.png",
    gallery: [
      "/linde/palletstackers/8.png",
      "/linde/palletstackers/8.png",
      "/linde/palletstackers/8.png",
    ],
    capacity: "1400 - 1600 kg",
    height: "1844 - 4644 mm",
    tagline: "Straddle Stability for Precise Placement",
    description:
      "The S14/S16 Straddle Electric Pallet Stacker uses an outrigger straddle design to maximise stability at lift heights up to 4644 mm. Ideal for non-standard pallet sizes and block-stacking environments, it provides a stable base for precise load placement across multi-level racking.",
    features: [
      "Straddle outrigger design for outstanding lift stability",
      "Handles non-standard and oversized pallet formats",
      "Lift heights up to 4644 mm with stable mast geometry",
      "1.4–1.6 tonne capacity for medium-duty stacking tasks",
    ],
    specs: [
      { label: "Load Capacity", value: "1400 - 1600 kg" },
      { label: "Lift Height", value: "1844 - 4644 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Straddle Width", value: "Adjustable" },
      { label: "Travel Speed (laden)", value: "6 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
];

export default function PalletStackersDetail() {
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
            <Link to="/" className="hover:text-[#a855f7] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/solutions/mhe/"
              className="hover:text-[#a855f7] transition-colors"
            >
              Pallet Stackers
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
                        activeImg === i ? "#a855f7" : "rgb(203 213 225)",
                      boxShadow: activeImg === i ? "0 0 0 1px #a855f7" : "none",
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
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold text-[#a855f7]">
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
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-[#a855f7] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  className="bg-[#a855f7] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#9333ea] transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Request a Quote
                </Link>
                <a
                  href="tel:+00000000000"
                  className="border border-slate-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#a855f7] hover:text-[#a855f7] transition-all duration-200 flex items-center gap-2"
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
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono font-semibold text-[#a855f7] mb-6">
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

        {/* ── BACK LINK ── */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 pb-16">
          <Link
            to="/solutions/mhe/pallet-stackers"
            className="inline-flex items-center gap-2 text-[#a855f7] hover:gap-3 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="uppercase text-xs font-bold tracking-widest">
              Back to Pallet Stackers
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
