import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../../config/footer";
import HeaderHome from "../../../config/header copy";

const products = [
  {
    slug: "electric-pallet-truck-1-5t-2t",
    name: "Electric Pallet Truck 1.5 - 2.0 T",
    model: "T16 / T20",
    category: "Electric Pedestrian Pallet Truck",
    img: "/linde/pallettrucks/1.png",
    gallery: [
      "/linde/pallettrucks/1.png",
      "/linde/pallettrucks/1.png",
      "/linde/pallettrucks/1.png",
    ],
    capacity: "1500 - 2000 kg",
    height: "115 mm",
    tagline: "Effortless Pallet Movement, Every Shift",
    description:
      "The T16/T20 Electric Pallet Truck delivers smooth, responsive pallet transport at 1500–2000 kg capacity with a low 115 mm fork height for easy pallet entry. Designed for fast-paced distribution and warehouse operations, its electric drivetrain keeps goods moving quietly and efficiently all day.",
    features: [
      "1500–2000 kg capacity for standard and heavy pallets",
      "115 mm fork height for easy loading of standard pallets",
      "AC electric motor for quiet, emission-free operation",
      "Ergonomic tiller with fingertip speed and lift controls",
    ],
    specs: [
      { label: "Load Capacity", value: "1500 - 2000 kg" },
      { label: "Fork Height (lowered)", value: "115 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Turning Radius", value: "1450 mm" },
      { label: "Travel Speed (laden)", value: "6 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "pedestrian-pallet-truck-1-6t-2t",
    name: "Pedestrian Pallet Trucks 1.6 - 2.0 t",
    model: "L16 / L20",
    category: "Pedestrian Electric Pallet Truck",
    img: "/linde/pallettrucks/2.png",
    gallery: [
      "/linde/pallettrucks/2.png",
      "/linde/pallettrucks/2.png",
      "/linde/pallettrucks/2.png",
    ],
    capacity: "1600 - 2000 kg",
    height: "125 mm",
    tagline: "Reliable Workhorse for Daily Logistics",
    description:
      "The L16/L20 Pedestrian Pallet Truck is purpose-built for the daily demands of distribution, retail back-of-house, and manufacturing logistics. With a 1600–2000 kg capacity and 125 mm fork height, it handles standard pallet operations with ease and minimal operator fatigue.",
    features: [
      "1600–2000 kg capacity for versatile daily pallet handling",
      "125 mm fork height compatible with standard pallet formats",
      "Long-life 24V battery for continuous multi-hour operation",
      "Simple controls for quick operator training and onboarding",
    ],
    specs: [
      { label: "Load Capacity", value: "1600 - 2000 kg" },
      { label: "Fork Height (lowered)", value: "125 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Turning Radius", value: "1480 mm" },
      { label: "Travel Speed (laden)", value: "6 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "stand-on-pallet-truck-2t-a",
    name: "Stand-on Electric Pallet Trucks 2.0T",
    model: "P20 Series A",
    category: "Stand-On Electric Pallet Truck",
    img: "/linde/pallettrucks/3.png",
    gallery: [
      "/linde/pallettrucks/3.png",
      "/linde/pallettrucks/3.png",
      "/linde/pallettrucks/3.png",
    ],
    capacity: "2000 kg",
    height: "120 mm",
    tagline: "Ride Fast, Handle More",
    description:
      "The P20 Series A Stand-On Electric Pallet Truck gives operators a ride-on platform for high-speed pallet transport across large warehouse floors. At 2000 kg capacity and a 120 mm fork height, it bridges the gap between walk-behind efficiency and full ride-on speed.",
    features: [
      "Stand-on platform for fast travel between pick and drop zones",
      "2-tonne capacity handles the full range of standard pallets",
      "120 mm fork height for easy pallet entry",
      "Foldable platform converts to pedestrian mode in tight areas",
    ],
    specs: [
      { label: "Load Capacity", value: "2000 kg" },
      { label: "Fork Height (lowered)", value: "120 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Stand-On / Pedestrian" },
      { label: "Turning Radius", value: "1580 mm" },
      { label: "Travel Speed (laden)", value: "12 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "stand-on-pallet-truck-2t-b",
    name: "Stand-on Electric Pallet Trucks 2.0T",
    model: "P20 Series B",
    category: "Stand-On Electric Pallet Truck",
    img: "/linde/pallettrucks/4.png",
    gallery: [
      "/linde/pallettrucks/4.png",
      "/linde/pallettrucks/4.png",
      "/linde/pallettrucks/4.png",
    ],
    capacity: "2000 kg",
    height: "120 mm",
    tagline: "Performance Engineered for Long Runs",
    description:
      "The P20 Series B offers an enhanced stand-on configuration optimized for longer travel distances and higher throughput environments. Its 2-tonne capacity and refined ergonomics make it a go-to choice for large-scale distribution centers and cross-dock operations.",
    features: [
      "Enhanced stand-on platform with anti-fatigue deck cushioning",
      "Optimized for long-distance travel in large facilities",
      "2-tonne capacity for the full range of logistics tasks",
      "Regenerative braking for extended battery range",
    ],
    specs: [
      { label: "Load Capacity", value: "2000 kg" },
      { label: "Fork Height (lowered)", value: "120 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Stand-On / Pedestrian" },
      { label: "Turning Radius", value: "1580 mm" },
      { label: "Travel Speed (laden)", value: "13 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "stand-on-pallet-truck-2t-c",
    name: "Stand-on Electric Pallet Trucks 2.0T",
    model: "P20 Series C",
    category: "Stand-On Electric Pallet Truck",
    img: "/linde/pallettrucks/5.png",
    gallery: [
      "/linde/pallettrucks/5.png",
      "/linde/pallettrucks/5.png",
      "/linde/pallettrucks/5.png",
    ],
    capacity: "2000 kg",
    height: "125 mm",
    tagline: "Compact Ride-On Built for Tight Spaces",
    description:
      "The P20 Series C is a compact stand-on pallet truck optimized for operations where space is at a premium. With a 125 mm fork height and a tighter turning radius, it delivers the speed benefits of a ride-on platform even in narrower warehouse layouts.",
    features: [
      "Compact stand-on design for narrow and congested layouts",
      "125 mm fork height for standard pallet compatibility",
      "Tighter turning radius than standard stand-on models",
      "Full-shift battery for uninterrupted operations",
    ],
    specs: [
      { label: "Load Capacity", value: "2000 kg" },
      { label: "Fork Height (lowered)", value: "125 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Stand-On / Pedestrian" },
      { label: "Turning Radius", value: "1520 mm" },
      { label: "Travel Speed (laden)", value: "12 km/h" },
      { label: "Battery Voltage", value: "24V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
  {
    slug: "pedestrian-pallet-truck-3t",
    name: "Pedestrian Pallet Trucks 3.0 t",
    model: "L30",
    category: "Heavy-Duty Pedestrian Pallet Truck",
    img: "/linde/pallettrucks/6.png",
    gallery: [
      "/linde/pallettrucks/6.png",
      "/linde/pallettrucks/6.png",
      "/linde/pallettrucks/6.png",
    ],
    capacity: "3000 kg",
    height: "125 mm",
    tagline: "Heavy-Duty Transport, Precise Control",
    description:
      "The L30 Heavy-Duty Pedestrian Pallet Truck handles the most demanding floor-level transport tasks at a 3-tonne capacity. Built for manufacturing, logistics hubs, and large distribution operations, it delivers heavy pallet handling with the simplicity and low footprint of a pedestrian design.",
    features: [
      "3-tonne capacity — the heaviest in the pedestrian pallet truck range",
      "125 mm fork height for standard and heavy-duty pallets",
      "Reinforced chassis and forks for continuous heavy use",
      "High-torque electric drive for smooth loaded travel",
    ],
    specs: [
      { label: "Load Capacity", value: "3000 kg" },
      { label: "Fork Height (lowered)", value: "125 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Pedestrian" },
      { label: "Turning Radius", value: "1650 mm" },
      { label: "Travel Speed (laden)", value: "6 km/h" },
      { label: "Battery Voltage", value: "24V / 36V" },
      { label: "Drive Type", value: "AC Electric" },
    ],
  },
];

export default function ElectricPalletTrucksDetail() {
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
            <Link to="/" className="hover:text-[#14b8a6] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/solutions/mhe/"
              className="hover:text-[#14b8a6] transition-colors"
            >
              Pallet Trucks
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
                        activeImg === i ? "#14b8a6" : "rgb(203 213 225)",
                      boxShadow: activeImg === i ? "0 0 0 1px #14b8a6" : "none",
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
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold text-[#14b8a6]">
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
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-[#14b8a6] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  className="bg-[#14b8a6] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#0d9488] transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Request a Quote
                </Link>
                <a
                  href="tel:+00000000000"
                  className="border border-slate-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#14b8a6] hover:text-[#14b8a6] transition-all duration-200 flex items-center gap-2"
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
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono font-semibold text-[#14b8a6] mb-6">
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
                icon: "directions_run",
                title: "High Maneuverability",
                body: "Tight turning radius and responsive steering for smooth navigation in congested areas.",
              },
              {
                icon: "bolt",
                title: "Electric Efficiency",
                body: "Low energy consumption with regenerative braking for extended battery life per shift.",
              },
              {
                icon: "group",
                title: "Pedestrian & Ride-On",
                body: "Available in walk-behind and stand-on variants to match your workflow and throughput needs.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#14b8a6] text-4xl mb-4">
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
            to="/solutions/mhe/pallet-trucks"
            className="inline-flex items-center gap-2 text-[#14b8a6] hover:gap-3 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="uppercase text-xs font-bold tracking-widest">
              Back to Pallet Trucks
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
