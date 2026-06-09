import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../../config/footer";
import HeaderHome from "../../../config/header copy";

const products = [
  {
    id: 1,
    slug: "electric-forklift-3t-3-5t",
    name: "Electric Forklift Truck 3.0–3.5T",
    model: "E30-35",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/1.png",
    gallery: [
      "/linde/forklift/1.png",
      "/linde/forklift/1.png",
      "/linde/forklift/1.png",
    ],
    capacity: "3000 – 3500 kg",
    height: "3000 mm",
    voltage: "80V / 600Ah",
    tagline: "Heavy-Duty Power, Zero Emissions",
    description:
      "The E30-35 is engineered for demanding warehouse and logistics environments requiring consistent heavy lifting. With an 80V drive system and 600Ah battery, it delivers sustained performance across long shifts without compromise. Designed for indoor and semi-outdoor operation, this model combines robust capacity with clean, emission-free running.",
    features: [
      "Ergonomically designed operator compartment for fatigue-free long shifts",
      "Regenerative braking system for extended battery life",
      "AC drive and lift motors for maximum efficiency",
      "Integrated diagnostics for predictive maintenance",
    ],
    specs: [
      { label: "Load Capacity", value: "3000 – 3500 kg" },
      { label: "Lift Height", value: "3000 mm" },
      { label: "Battery Voltage", value: "80V" },
      { label: "Battery Capacity", value: "600 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "2450 mm" },
      { label: "Travel Speed (laden)", value: "16 km/h" },
    ],
  },
  {
    id: 2,
    slug: "electric-forklift-1-5t-2t",
    name: "Electric Forklift Truck 1.5–2.0T",
    model: "E15-20",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/2.png",
    gallery: [
      "/linde/forklift/2.png",
      "/linde/forklift/2.png",
      "/linde/forklift/2.png",
    ],
    capacity: "1500 – 2000 kg",
    height: "3000 mm",
    voltage: "48V / 500Ah",
    tagline: "Compact Efficiency for Tight Spaces",
    description:
      "The E15-20 delivers nimble, precise performance in warehouses and distribution centers where aisle space is at a premium. Its compact footprint and 48V power system make it ideal for food, pharmaceutical, and general-purpose logistics environments where clean operation is essential.",
    features: [
      "Compact design optimized for narrow aisle environments",
      "48V power system for lower operating costs",
      "Full suspension seat for operator comfort",
      "Easy-access battery compartment for fast swaps",
    ],
    specs: [
      { label: "Load Capacity", value: "1500 – 2000 kg" },
      { label: "Lift Height", value: "3000 mm" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Battery Capacity", value: "500 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "1980 mm" },
      { label: "Travel Speed (laden)", value: "14 km/h" },
    ],
  },
  {
    id: 3,
    slug: "electric-forklift-2t-2-5t",
    name: "Electric Forklift Trucks 2.0–2.5T",
    model: "E20-25",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/3.png",
    gallery: [
      "/linde/forklift/3.png",
      "/linde/forklift/3.png",
      "/linde/forklift/3.png",
    ],
    capacity: "2000 – 2500 kg",
    height: "3600 – 6500 mm",
    voltage: "80V / 625Ah",
    tagline: "High-Reach Performance, Every Shift",
    description:
      "The E20-25 excels in high-bay racking environments, offering lift heights up to 6500 mm with stable, precise control. Its 80V system ensures consistent performance through full shifts, making it the go-to for multi-level warehouse operations.",
    features: [
      "Lift heights up to 6500 mm for high-bay racking",
      "Robust 80V drive for sustained multi-shift performance",
      "Integrated mast stabilization for high-reach precision",
      "Optional Li-ion battery for opportunity charging",
    ],
    specs: [
      { label: "Load Capacity", value: "2000 – 2500 kg" },
      { label: "Lift Height", value: "3600 – 6500 mm" },
      { label: "Battery Voltage", value: "80V" },
      { label: "Battery Capacity", value: "625 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "2100 mm" },
      { label: "Travel Speed (laden)", value: "15 km/h" },
    ],
  },
  {
    id: 4,
    slug: "electric-forklift-1-6t-2t",
    name: "Electric Forklift Trucks 1.6–2.0T",
    model: "E16-20S",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/4.png",
    gallery: [
      "/linde/forklift/4.png",
      "/linde/forklift/4.png",
      "/linde/forklift/4.png",
    ],
    capacity: "1600 – 2000 kg",
    height: "2770 – 6220 mm",
    voltage: "48V / 625Ah",
    tagline: "Versatile Reach, Proven Reliability",
    description:
      "The E16-20S bridges the gap between compact agility and extended lift capability. With lift heights from 2770 to 6220 mm, it handles both ground-level picking and elevated storage tasks with equal confidence.",
    features: [
      "Wide lift height range for multi-purpose use",
      "Enhanced 625Ah battery for extended run time",
      "Low step-in height for quick operator ingress/egress",
      "Advanced load management display",
    ],
    specs: [
      { label: "Load Capacity", value: "1600 – 2000 kg" },
      { label: "Lift Height", value: "2770 – 6220 mm" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Battery Capacity", value: "625 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "2020 mm" },
      { label: "Travel Speed (laden)", value: "14 km/h" },
    ],
  },
  {
    id: 5,
    slug: "electric-forklift-2-5t-3-5t",
    name: "Electric Forklift Trucks 2.5–3.5T",
    model: "E25-35X",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/5.png",
    gallery: [
      "/linde/forklift/5.png",
      "/linde/forklift/5.png",
      "/linde/forklift/5.png",
    ],
    capacity: "2500 – 3500 kg",
    height: "2850 – 6605 mm",
    voltage: "80V / 700Ah",
    tagline: "Industrial Strength, Clean Operation",
    description:
      "The E25-35X is purpose-built for heavy industrial logistics. Rated up to 3500 kg with lift heights reaching 6605 mm, this model handles the toughest tasks in distribution, manufacturing, and port operations — all with zero tailpipe emissions.",
    features: [
      "Heavy-duty chassis for demanding industrial use",
      "Extended 700Ah battery for full-shift autonomy",
      "Dual drive motors for precise load handling",
      "Reinforced forks with optional side shift",
    ],
    specs: [
      { label: "Load Capacity", value: "2500 – 3500 kg" },
      { label: "Lift Height", value: "2850 – 6605 mm" },
      { label: "Battery Voltage", value: "80V" },
      { label: "Battery Capacity", value: "700 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "2350 mm" },
      { label: "Travel Speed (laden)", value: "16 km/h" },
    ],
  },
  {
    id: 6,
    slug: "electric-forklift-3t-3-8t",
    name: "Electric Forklift Trucks 3.0–3.8T",
    model: "E30-38",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/6.png",
    gallery: [
      "/linde/forklift/6.png",
      "/linde/forklift/6.png",
      "/linde/forklift/6.png",
    ],
    capacity: "3000 – 3800 kg",
    height: "3000 mm",
    voltage: "80V / 750Ah",
    tagline: "Maximum Load, Minimal Footprint",
    description:
      "The E30-38 combines a high 3800 kg rated capacity with a 750Ah battery to keep operations running through double shifts. It's the ideal solution for heavy pallet handling in logistics hubs and manufacturing plants.",
    features: [
      "Up to 3800 kg capacity for oversized pallet loads",
      "750Ah high-capacity battery for double-shift use",
      "Hydrostatic steering for effortless maneuverability",
      "Heavy-duty overhead guard for operator protection",
    ],
    specs: [
      { label: "Load Capacity", value: "3000 – 3800 kg" },
      { label: "Lift Height", value: "3000 mm" },
      { label: "Battery Voltage", value: "80V" },
      { label: "Battery Capacity", value: "750 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "2500 mm" },
      { label: "Travel Speed (laden)", value: "16 km/h" },
    ],
  },
  {
    id: 7,
    slug: "electric-forklift-3-5t-5t",
    name: "Electric Forklift Trucks 3.5–5.0T",
    model: "E35-50",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/7.png",
    gallery: [
      "/linde/forklift/7.png",
      "/linde/forklift/7.png",
      "/linde/forklift/7.png",
    ],
    capacity: "3500 – 5000 kg",
    height: "3100 – 6015 mm",
    voltage: "80V / 840Ah",
    tagline: "High-Capacity Lifting, Redefined",
    description:
      "The E35-50 sets the benchmark for high-capacity electric forklifts. Handling loads from 3500 to 5000 kg with lift heights up to 6015 mm, it brings diesel-class performance to indoor and outdoor environments — without emissions or excessive noise.",
    features: [
      "5000 kg capacity for the heaviest industrial loads",
      "840Ah battery for extended continuous operation",
      "Reinforced mast rated for heights up to 6015 mm",
      "Advanced load stability system for elevated lifts",
    ],
    specs: [
      { label: "Load Capacity", value: "3500 – 5000 kg" },
      { label: "Lift Height", value: "3100 – 6015 mm" },
      { label: "Battery Voltage", value: "80V" },
      { label: "Battery Capacity", value: "840 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "2700 mm" },
      { label: "Travel Speed (laden)", value: "17 km/h" },
    ],
  },
  {
    id: 8,
    slug: "electric-forklift-6t-8t",
    name: "Electric Forklift Trucks 6.0–8.0T",
    model: "E60-80",
    category: "4-Wheel Electric Counterbalanced",
    img: "/linde/forklift/8.png",
    gallery: [
      "/linde/forklift/8.png",
      "/linde/forklift/8.png",
      "/linde/forklift/8.png",
    ],
    capacity: "6000 – 8000 kg",
    height: "3050 – 7255 mm",
    voltage: "96V / 1000Ah",
    tagline: "Engineered for the Extraordinary",
    description:
      "The E60-80 is our flagship heavy-lift electric forklift, delivering up to 8000 kg capacity and lift heights reaching 7255 mm. Operating on a 96V / 1000Ah system, it replaces diesel counterparts in port logistics, steel yards, and heavy manufacturing without sacrificing performance.",
    features: [
      "8000 kg capacity — flagship heavy electric forklift",
      "96V / 1000Ah system for all-day industrial operation",
      "Lift heights up to 7255 mm for super-high racking",
      "Heavy steel frame with full ROPS/FOPS overhead guard",
    ],
    specs: [
      { label: "Load Capacity", value: "6000 – 8000 kg" },
      { label: "Lift Height", value: "3050 – 7255 mm" },
      { label: "Battery Voltage", value: "96V" },
      { label: "Battery Capacity", value: "1000 Ah" },
      { label: "Drive Type", value: "AC Electric" },
      { label: "Emission", value: "Zero Emission" },
      { label: "Turning Radius", value: "3200 mm" },
      { label: "Travel Speed (laden)", value: "18 km/h" },
    ],
  },
];

export default function ElectricForkliftDetail() {
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
            <Link to="/" className="hover:text-[#2ae500] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/solutions/mhe/"
              className="hover:text-[#2ae500] transition-colors"
            >
              Electric Forklifts
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
              {/* Main image */}
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

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`border bg-white dark:bg-white flex items-center justify-center overflow-hidden transition-all duration-200 flex-1`}
                    style={{
                      aspectRatio: "1",
                      borderColor:
                        activeImg === i ? "#2ae500" : "rgb(203 213 225)",
                      boxShadow: activeImg === i ? "0 0 0 1px #2ae500" : "none",
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
              {/* Category badge */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold text-[#2ae500]">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white uppercase tracking-tight">
                  {product.tagline}
                </h1>
              </div>

              {/* Model + Capacity row */}
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

              {/* Description */}
              <p className="text-sm md:text-base text-gray-500 dark:text-[#baccb0] leading-relaxed">
                {product.description}
              </p>

              {/* Feature bullets */}
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-[#2ae500] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  className="bg-[#39ff14] text-[#022100] px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#2ae500] transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Request a Quote
                </Link>
                <a
                  href="tel:+00000000000"
                  className="border border-slate-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#2ae500] hover:text-[#2ae500] transition-all duration-200 flex items-center gap-2"
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
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono font-semibold text-[#2ae500] mb-6">
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
                icon: "precision_manufacturing",
                title: "Precision Control",
                body: "Advanced ergonomics for fatigue-free operation in long shifts.",
              },
              {
                icon: "eco",
                title: "Zero Emissions",
                body: "Clean operation for indoor food, medical, and high-purity environments.",
              },
              {
                icon: "build",
                title: "Lower Maintenance",
                body: "Fewer moving parts and regenerative braking for lower total operating cost.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#2ae500] text-4xl mb-4">
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
            to="/solutions/mhe/electric-forklift"
            className="inline-flex items-center gap-2 text-[#2ae500] hover:gap-3 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="uppercase text-xs font-bold tracking-widest">
              Back to Electric Forklifts
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
