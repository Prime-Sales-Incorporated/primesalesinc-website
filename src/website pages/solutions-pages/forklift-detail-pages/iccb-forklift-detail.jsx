import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../../config/footer";
import HeaderHome from "../../../config/header copy";

const products = [
  {
    slug: "diesel-forklift-8t-10t",
    name: "Diesel Forklift Trucks 8.0 - 10.0T",
    model: "H80-100D",
    category: "Heavy-Duty Diesel Counterbalanced",
    img: "/linde/iccb/1.png",
    gallery: ["/linde/iccb/1.png", "/linde/iccb/1.png", "/linde/iccb/1.png"],
    capacity: "8000 - 10000 kg",
    height: "3000 mm",
    fuelType: "Diesel",
    tagline: "Unstoppable Force for Extreme Loads",
    description:
      "The H80-100D is engineered for the toughest heavy-lift applications in ports, steel yards, and large manufacturing facilities. With a rated capacity up to 10,000 kg and a purpose-built diesel drivetrain, it handles the workloads that other forklifts simply cannot.",
    features: [
      "Up to 10,000 kg capacity for extreme industrial loads",
      "High-displacement diesel engine with maximum torque at low RPM",
      "Reinforced heavy-steel chassis for long-term durability",
      "Full ROPS/FOPS overhead guard for operator safety",
    ],
    specs: [
      { label: "Load Capacity", value: "8000 - 10000 kg" },
      { label: "Lift Height", value: "3000 mm" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Drive Type", value: "Internal Combustion" },
      { label: "Turning Radius", value: "3800 mm" },
      { label: "Travel Speed (laden)", value: "22 km/h" },
      { label: "Tyre Type", value: "Pneumatic" },
    ],
  },
  {
    slug: "diesel-lpg-forklift-2-5t-3-5t-a",
    name: "Diesel/LPG Forklift Trucks 2.5 - 3.5T",
    model: "H25-35T",
    category: "4-Wheel IC Counterbalanced",
    img: "/linde/iccb/2.png",
    gallery: ["/linde/iccb/2.png", "/linde/iccb/2.png", "/linde/iccb/2.png"],
    capacity: "2500 - 3500 kg",
    height: "2750 - 6275 mm",
    fuelType: "Diesel / LPG",
    tagline: "Versatile Power, Proven Performance",
    description:
      "The H25-35T delivers reliable power in both diesel and LPG configurations, making it the go-to choice for mixed indoor/outdoor operations. Lift heights reaching 6275 mm give it the flexibility to handle high-bay racking as well as ground-level logistics.",
    features: [
      "Available in diesel and LPG for fuel flexibility",
      "Lift heights up to 6275 mm for high-bay use",
      "Ergonomic operator cabin with low-vibration seat",
      "Hydrostatic transmission for smooth, precise control",
    ],
    specs: [
      { label: "Load Capacity", value: "2500 - 3500 kg" },
      { label: "Lift Height", value: "2750 - 6275 mm" },
      { label: "Fuel Type", value: "Diesel / LPG" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Drive Type", value: "Internal Combustion" },
      { label: "Turning Radius", value: "2450 mm" },
      { label: "Travel Speed (laden)", value: "20 km/h" },
      { label: "Tyre Type", value: "Pneumatic / Cushion" },
    ],
  },
  {
    slug: "diesel-lpg-forklift-2-5t-3-5t-b",
    name: "Diesel/LPG Forklift Trucks 2.5 - 3.5T",
    model: "H25-35X",
    category: "4-Wheel IC Counterbalanced",
    img: "/linde/iccb/3.png",
    gallery: ["/linde/iccb/3.png", "/linde/iccb/3.png", "/linde/iccb/3.png"],
    capacity: "2500 - 3500 kg",
    height: "2850 - 6605 mm",
    fuelType: "Diesel / LPG",
    tagline: "Extended Reach, Rugged Reliability",
    description:
      "The H25-35X offers an extended lift height range up to 6605 mm in both diesel and LPG variants. Purpose-built for operations demanding high vertical reach alongside heavy-duty outdoor performance, it combines power and precision in a single platform.",
    features: [
      "Extended lift up to 6605 mm for super-high racking",
      "Dual fuel option — diesel or LPG — for operational flexibility",
      "Heavy-duty mast with integrated stabilization at height",
      "Advanced load weight indicator for safe lifting",
    ],
    specs: [
      { label: "Load Capacity", value: "2500 - 3500 kg" },
      { label: "Lift Height", value: "2850 - 6605 mm" },
      { label: "Fuel Type", value: "Diesel / LPG" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Drive Type", value: "Internal Combustion" },
      { label: "Turning Radius", value: "2470 mm" },
      { label: "Travel Speed (laden)", value: "20 km/h" },
      { label: "Tyre Type", value: "Pneumatic / Cushion" },
    ],
  },
  {
    slug: "diesel-forklift-4t-5t",
    name: "Diesel Forklift Trucks 4.0 - 5.0T",
    model: "H40-50D",
    category: "4-Wheel IC Counterbalanced",
    img: "/linde/iccb/4.png",
    gallery: ["/linde/iccb/4.png", "/linde/iccb/4.png", "/linde/iccb/4.png"],
    capacity: "4000 - 5000 kg",
    height: "3150 - 6325 mm",
    fuelType: "Diesel",
    tagline: "Heavy Lifting, Built for the Long Haul",
    description:
      "The H40-50D is the workhorse of mid-heavy logistics. Handling loads from 4 to 5 tonnes with lift heights up to 6325 mm, it's built for continuous-duty outdoor and indoor applications in manufacturing, distribution, and container yards.",
    features: [
      "5-tonne capacity for demanding mid-heavy logistics",
      "Lift heights up to 6325 mm for elevated racking",
      "Robust diesel engine optimized for continuous-duty cycles",
      "Low-maintenance drivetrain for minimal downtime",
    ],
    specs: [
      { label: "Load Capacity", value: "4000 - 5000 kg" },
      { label: "Lift Height", value: "3150 - 6325 mm" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Drive Type", value: "Internal Combustion" },
      { label: "Turning Radius", value: "2750 mm" },
      { label: "Travel Speed (laden)", value: "21 km/h" },
      { label: "Tyre Type", value: "Pneumatic" },
    ],
  },
  {
    slug: "diesel-lpg-forklift-4t-5t",
    name: "Diesel/LPG Forklift Trucks 4.0 - 5.0T",
    model: "H40-50T",
    category: "4-Wheel IC Counterbalanced",
    img: "/linde/iccb/5.png",
    gallery: ["/linde/iccb/5.png", "/linde/iccb/5.png", "/linde/iccb/5.png"],
    capacity: "4000 - 5000 kg",
    height: "3000 - 5865 mm",
    fuelType: "Diesel / LPG",
    tagline: "Dual-Fuel Strength at Every Level",
    description:
      "The H40-50T gives operators the choice of diesel or LPG in a proven heavy-duty platform. With a 5-tonne capacity and lift heights to 5865 mm, it's equally at home in enclosed warehouses on LPG and open yards on diesel.",
    features: [
      "Diesel/LPG choice for indoor and outdoor versatility",
      "5-tonne capacity for mid-heavy continuous operations",
      "Low-emission LPG mode for enclosed environments",
      "Ergonomic cab design for reduced operator fatigue",
    ],
    specs: [
      { label: "Load Capacity", value: "4000 - 5000 kg" },
      { label: "Lift Height", value: "3000 - 5865 mm" },
      { label: "Fuel Type", value: "Diesel / LPG" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Drive Type", value: "Internal Combustion" },
      { label: "Turning Radius", value: "2750 mm" },
      { label: "Travel Speed (laden)", value: "21 km/h" },
      { label: "Tyre Type", value: "Pneumatic / Cushion" },
    ],
  },
  {
    slug: "diesel-lpg-forklift-6t-8t",
    name: "Diesel/LPG Forklift Trucks 6.0 - 8.0T",
    model: "H60-80T",
    category: "Heavy-Duty IC Counterbalanced",
    img: "/linde/iccb/6.png",
    gallery: ["/linde/iccb/6.png", "/linde/iccb/6.png", "/linde/iccb/6.png"],
    capacity: "6000 - 8000 kg",
    height: "2750 - 3150 mm",
    fuelType: "Diesel / LPG",
    tagline: "Raw Power, Dual-Fuel Flexibility",
    description:
      "The H60-80T handles loads from 6 to 8 tonnes in both diesel and LPG configurations. Designed for heavy manufacturing, shipyards, and large distribution operations, its powerful drivetrain ensures consistent performance across demanding multi-shift schedules.",
    features: [
      "Up to 8-tonne capacity in diesel or LPG variants",
      "Heavy-duty axle and frame for sustained heavy use",
      "High-visibility mast design for improved operator sightlines",
      "Optional cab enclosure for all-weather operation",
    ],
    specs: [
      { label: "Load Capacity", value: "6000 - 8000 kg" },
      { label: "Lift Height", value: "2750 - 3150 mm" },
      { label: "Fuel Type", value: "Diesel / LPG" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Drive Type", value: "Internal Combustion" },
      { label: "Turning Radius", value: "3200 mm" },
      { label: "Travel Speed (laden)", value: "22 km/h" },
      { label: "Tyre Type", value: "Pneumatic" },
    ],
  },
  {
    slug: "diesel-forklift-6t-8t",
    name: "Diesel Forklift Trucks 6.0 - 8.0T",
    model: "H60-80D",
    category: "Heavy-Duty Diesel Counterbalanced",
    img: "/linde/iccb/7.png",
    gallery: ["/linde/iccb/7.png", "/linde/iccb/7.png", "/linde/iccb/7.png"],
    capacity: "6000 - 8000 kg",
    height: "2750 - 3150 mm",
    fuelType: "Diesel",
    tagline: "Diesel Dominance for Heavy Industry",
    description:
      "The H60-80D is a dedicated diesel platform for operators who demand maximum power and reliability without compromise. Handling 6 to 8 tonnes in ports, steel processing, and heavy logistics, it sets the benchmark for heavy IC forklift performance.",
    features: [
      "Dedicated diesel platform for maximum raw power",
      "8-tonne capacity for the heaviest industrial workflows",
      "High-torque engine tuned for outdoor and rough terrain use",
      "Heavy-gauge overhead guard and reinforced load backrest",
    ],
    specs: [
      { label: "Load Capacity", value: "6000 - 8000 kg" },
      { label: "Lift Height", value: "2750 - 3150 mm" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Transmission", value: "Hydrostatic" },
      { label: "Drive Type", value: "Internal Combustion" },
      { label: "Turning Radius", value: "3200 mm" },
      { label: "Travel Speed (laden)", value: "23 km/h" },
      { label: "Tyre Type", value: "Pneumatic" },
    ],
  },
];

export default function ICCBTrucksDetail() {
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
            <Link to="/" className="hover:text-[#f97316] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/solutions/mhe/"
              className="hover:text-[#f97316] transition-colors"
            >
              ICCB Trucks
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
                        activeImg === i ? "#f97316" : "rgb(203 213 225)",
                      boxShadow: activeImg === i ? "0 0 0 1px #f97316" : "none",
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
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold text-[#f97316]">
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
                    Fuel Type
                  </span>
                  <span className="font-bold font-mono text-gray-800 dark:text-gray-100">
                    {product.fuelType}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-gray-500 dark:text-[#baccb0] leading-relaxed">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-[#f97316] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  className="bg-[#f97316] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#ea6c0a] transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Request a Quote
                </Link>
                <a
                  href="tel:+00000000000"
                  className="border border-slate-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#f97316] hover:text-[#f97316] transition-all duration-200 flex items-center gap-2"
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
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono font-semibold text-[#f97316] mb-6">
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
                icon: "local_fire_department",
                title: "High Torque Power",
                body: "Diesel and LPG engines deliver exceptional torque for heavy industrial loads.",
              },
              {
                icon: "terrain",
                title: "All-Terrain Ready",
                body: "Built for outdoor and rugged environments where performance cannot be compromised.",
              },
              {
                icon: "build",
                title: "Robust Engineering",
                body: "Heavy-duty frames and components designed for maximum uptime and longevity.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#f97316] text-4xl mb-4">
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
            to="/solutions/mhe/ice-forklift"
            className="inline-flex items-center gap-2 text-[#f97316] hover:gap-3 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="uppercase text-xs font-bold tracking-widest">
              Back to ICCB Trucks
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
