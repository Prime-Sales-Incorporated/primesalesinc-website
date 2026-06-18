import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../../config/footer";
import HeaderHome from "../../../config/header copy";

const products = [
  {
    slug: "vna-man-up-0-5t-1-5t",
    name: "Very Narrow Aisle Man-Up Trucks 0.5 - 1.5 t",
    model: "K Series Man-Up",
    category: "Very Narrow Aisle Man-Up Truck",
    img: "/linde/VNA/1.png",
    gallery: ["/linde/VNA/1.png", "/linde/VNA/1.png", "/linde/VNA/1.png"],
    capacity: "500 - 1500 kg",
    height: "4460 - 17000 mm",
    tagline: "Reach the Summit of Your Storage",
    description:
      "The K Series Man-Up VNA Truck is engineered for extreme high-bay operations, lifting both forks and operator to heights up to 17,000 mm within aisles as narrow as 1.5 metres. By raising the operator to the pick face, it enables precise, accurate load handling at every rack level — maximising both safety and throughput in high-density storage environments.",
    features: [
      "Man-up cabin rises with forks to heights up to 17,000 mm",
      "500–1500 kg capacity across all working heights",
      "Operates in aisles as narrow as 1.5 metres",
      "Guided aisle system for safe, automated aisle navigation",
    ],
    specs: [
      { label: "Load Capacity", value: "500 - 1500 kg" },
      { label: "Lift Height", value: "4460 - 17000 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Man-Up" },
      { label: "Min. Aisle Width", value: "From 1500 mm" },
      { label: "Travel Speed (laden)", value: "10 km/h" },
      { label: "Lift Speed (laden)", value: "0.4 m/s" },
      { label: "Guidance System", value: "Rail / Wire Guided" },
    ],
  },
  {
    slug: "vna-man-down-0-5t-1-5t",
    name: "Very Narrow Aisle Man-Down Trucks 0.5 - 1.5 t",
    model: "K Series Man-Down",
    category: "Very Narrow Aisle Man-Down Truck",
    img: "/linde/VNA/2.png",
    gallery: ["/linde/VNA/2.png", "/linde/VNA/2.png", "/linde/VNA/2.png"],
    capacity: "7450 - 12850 kg",
    height: "120 mm",
    tagline: "Maximum Density, Ground-Level Command",
    description:
      "The K Series Man-Down VNA Truck keeps the operator at ground level while the forks extend to full working height, delivering exceptional throughput in high-bay environments where speed takes priority over elevated picking. Its guided aisle system ensures precise, repeatable positioning at every rack location.",
    features: [
      "Operator stays at ground level for fast, uninterrupted cycles",
      "High throughput for pure storage and retrieval operations",
      "Guided aisle system for accurate automatic positioning",
      "Suitable for fully automated system integration",
    ],
    specs: [
      { label: "Load Capacity", value: "7450 - 12850 kg" },
      { label: "Fork Height (lowered)", value: "120 mm" },
      { label: "Power Type", value: "Battery Electric" },
      { label: "Operation", value: "Man-Down" },
      { label: "Min. Aisle Width", value: "From 1500 mm" },
      { label: "Travel Speed (laden)", value: "12 km/h" },
      { label: "Lift Speed (laden)", value: "0.5 m/s" },
      { label: "Guidance System", value: "Rail / Wire Guided" },
    ],
  },
];

export default function VNADetail() {
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
            <Link to="/" className="hover:text-[#eab308] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              to="/solutions/mhe/"
              className="hover:text-[#eab308] transition-colors"
            >
              VNA Trucks
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
                        activeImg === i ? "#eab308" : "rgb(203 213 225)",
                      boxShadow: activeImg === i ? "0 0 0 1px #eab308" : "none",
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
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-semibold text-[#eab308]">
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
                    <span className="mt-[3px] w-2 h-2 rounded-full bg-[#eab308] shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Link
                  to="/contact"
                  className="bg-[#eab308] text-[#1a0f00] px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-[#ca8a04] transition-all duration-200 active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    mail
                  </span>
                  Request a Quote
                </Link>
                <a
                  href="tel:+00000000000"
                  className="border border-slate-300 dark:border-slate-600 text-gray-700 dark:text-gray-200 px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:border-[#eab308] hover:text-[#eab308] transition-all duration-200 flex items-center gap-2"
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
          <h2 className="text-xs uppercase tracking-[0.3em] font-mono font-semibold text-[#eab308] mb-6">
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
                icon: "width_normal",
                title: "Aisle-Width Optimized",
                body: "Designed to operate in aisles as narrow as 1.5 m, dramatically increasing storage capacity.",
              },
              {
                icon: "expand",
                title: "Extreme Lift Heights",
                body: "Reach heights up to 17,000 mm for full utilization of high-bay storage systems.",
              },
              {
                icon: "person",
                title: "Man-Up & Man-Down",
                body: "Operator cabin rises with the forks for precise, safe picking at any rack level.",
              },
              {
                icon: "support_agent",
                title: "24/7 Service",
                body: "Global support network and readily available spare parts.",
              },
            ].map((f, i) => (
              <div key={i} className="p-8">
                <span className="material-symbols-outlined text-[#eab308] text-4xl mb-4">
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
            to="/solutions/mhe/vna"
            className="inline-flex items-center gap-2 text-[#eab308] hover:gap-3 transition-all duration-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="uppercase text-xs font-bold tracking-widest">
              Back to VNA Trucks
            </span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
