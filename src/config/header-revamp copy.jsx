import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ArrowRight,
  Snowflake,
  Boxes,
  Truck,
  Package,
  Bot,
  DoorOpen,
  Monitor,
  BatteryCharging,
  LayoutGrid,
  Store,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GREEN = "#75C043";

/* ─────────────────────────────────────────────
   DATA  (category photo + description are used by the poster;
   product name/link are used by the list + mobile menu;
   an optional product `photo` replaces the poster image on hover)
───────────────────────────────────────────── */
const solutionItems = [
  {
    label: "Insulated Panels",
    photo:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=75&fm=webp",
    description:
      "End-to-end temperature-controlled solutions for perishables, pharma, and food logistics.",
    products: [
      { name: "Structural Insulated Panels" },
      { name: "Insulated Doors" },
      { name: "Panel and Door Accessories" },
    ],
  },
  {
    label: "Industrial Storage",
    photo:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=75&fm=webp",
    description:
      "Scalable racking and shelving systems engineered for high-density warehouse environments.",
    products: [
      { name: "Selective Pallet Racking" },
      { name: "Drive-In Racking" },
      { name: "Cantilever Racking" },
      { name: "Mezzanine Floors" },
      { name: "Mobile Shelving Systems" },
      { name: "Push-Back Racking" },
    ],
  },
  {
    label: "Material Handling Equipment",
    photo: "/linde/cover1.png",
    description:
      "Reliable electric and manual equipment for every stage of warehouse goods movement.",
    products: [
      {
        name: "Electric Forklifts",
        link: "/solutions/mhe/electric-forklift",
        photo: "/linde/forklift/1.png", // ← replace with your image
      },
      {
        name: "Internal Combustion Counterbalance Truck",
        link: "/solutions/mhe/ice-forklift",
        photo: "/linde/iccb/1.png", // ← replace with your image
      },
      {
        name: "Reach Trucks",
        link: "/solutions/mhe/reach-trucks",
        // photo: "/linde/reachtrucks/5.png", // ← replace with your image
        // photo: "https://www.tiqe-kh.com/upload/product/651493631493.JPG", // ← replace with your image
        photo: "/linde/reachtrucks/10.jpg", // ← replace with your image
      },
      {
        name: "Pallet Stackers",
        link: "/solutions/mhe/pallet-stackers",
        photo: "/linde/palletstackers/3.png", // ← replace with your image
      },
      {
        name: "Hand Pallet Trucks",
        link: "/solutions/mhe/pallet-trucks",
        photo: "/linde/pallettrucks/3.png", // ← replace with your image
      },
      {
        name: "Order Pickers",
        link: "/solutions/mhe/order-pickers",
        photo: "/linde/orderpickers/4.png", // ← replace with your image
      },
      {
        name: "VNA Trucks",
        link: "/solutions/mhe/order-pickers", // check: same link as Order Pickers
        photo: "/linde/VNA/2.png", // ← replace with your image
      },
    ],
  },
  {
    label: "Plastic Pallets, Bins & Crates",
    photo:
      "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=800&q=75&fm=webp",
    description:
      "Hygienic, lightweight plastic storage solutions for food, pharma, and retail supply chains.",
    products: [
      { name: "Eco Pallets" },
      { name: "Warehouse Pallets" },
      { name: "Hygiene Pallets" },
      { name: "Metal Reinforced Pallets" },
      { name: "Spill Containment Pallets" },
    ],
  },
  {
    label: "Automation Solutions",
    photo:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=75&fm=webp",
    description:
      "Smart warehouse automation from robotics to fully integrated AS/RS systems.",
    products: [
      { name: "Automated Storage & Retrieval (AS/RS)" },
      { name: "Conveyor Systems" },
      { name: "Autonomous Mobile Robots (AMR)" },
      { name: "Automated Guided Vehicles (AGV)" },
      { name: "Goods-to-Person Systems" },
      { name: "Sortation Systems" },
    ],
  },
  {
    label: "Docks and Doors",
    photo:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=75&fm=webp",
    description:
      "Loading-bay solutions that maximise throughput while keeping energy and safety costs low.",
    products: [
      { name: "Dock Levelers" },
      { name: "Dock Shelters & Seals" },
      { name: "High-Speed Roll-Up Doors" },
      { name: "Sectional Overhead Doors" },
      { name: "Dock Bumpers" },
      { name: "Vehicle Restraints" },
    ],
  },
  {
    label: "Warehouse Management System",
    photo:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75&fm=webp",
    description:
      "Cloud-native WMS platform with real-time visibility across your entire distribution network.",
    products: [
      { name: "WMS Core Platform" },
      { name: "Inventory Management Module" },
      { name: "Order Management Module" },
      { name: "Labor Management Module" },
      { name: "Yard Management Module" },
      { name: "Analytics & Reporting Dashboard" },
    ],
  },
  {
    label: "Industrial Batteries & Chargers",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHtkQBHD4mU2arT6lba0-YhZiCaEyGlKiMg&s",
    description:
      "High-performance traction batteries and intelligent chargers for zero-downtime operations.",
    products: [
      { name: "Lead-Acid Traction Batteries" },
      { name: "Lithium-Ion Forklift Batteries" },
      { name: "Opportunity Chargers" },
      { name: "Fast Chargers" },
      { name: "Battery Management Systems" },
      { name: "Battery Watering Systems" },
    ],
  },
  {
    label: "Commercial Solutions",
    photo:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=75&fm=webp",
    description:
      "Shelving, refrigeration, and equipment for supermarkets, retail stores, and food service.",
    products: [
      { name: "Supermarket Shelving" },
      { name: "Display Gondolas" },
      { name: "Checkout Counters" },
      { name: "Shopping Carts & Baskets" },
      { name: "Commercial Refrigeration" },
      { name: "Kitchen & Food Service Equipment" },
    ],
  },
];

/* Same order as solutionItems */
const CATEGORY_ICONS = [
  Snowflake,
  Boxes,
  Truck,
  Package,
  Bot,
  DoorOpen,
  Monitor,
  BatteryCharging,
  Store,
];

const productLink = (prod, categoryLabel) => ({
  to: prod.link || "/solutions",
  state: prod.link
    ? undefined
    : { selectedTab: categoryLabel, selectedProduct: prod.name },
});

/* ─────────────────────────────────────────────
   STYLES — injected once
───────────────────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("hh2-styles")) {
  const s = document.createElement("style");
  s.id = "hh2-styles";
  s.textContent = `
    @keyframes hhFadeDown { from{opacity:0;transform:translate(-50%,-8px)} to{opacity:1;transform:translate(-50%,0)} }
    @keyframes hhSlideRight { from{opacity:0;transform:translateX(14px)} to{opacity:1;transform:translateX(0)} }
    @keyframes hhFadeIn { from{opacity:0} to{opacity:1} }
    .hh-mega { animation: hhFadeDown .2s cubic-bezier(.16,1,.3,1) forwards; will-change:transform,opacity; }
    .hh-panel-prod { animation: hhSlideRight .18s cubic-bezier(.16,1,.3,1) forwards; }
    .hh-fade { animation: hhFadeIn .25s ease forwards; }
  `;
  document.head.appendChild(s);
}

/* ─────────────────────────────────────────────
   SOLUTIONS MEGA MENU
───────────────────────────────────────────── */
function SolutionsMegaMenu({ items, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const active = items[activeIndex] || items[0];

  /* Preload product photos so the first hover doesn't flash */
  useEffect(() => {
    items.forEach((cat) =>
      cat.products.forEach((p) => {
        if (p.photo) new Image().src = p.photo;
      }),
    );
  }, [items]);

  if (!active) return null;

  const selectCategory = (i) => {
    setActiveIndex(i);
    setHoveredProduct(null);
  };

  /* Hovered product photo, falling back to the category photo */
  const posterPhoto = hoveredProduct?.photo || active.photo;

  return (
    <div
      className="hh-mega fixed left-1/2 w-[min(80em,96vw)] bg-[#030a0e] border border-white/[0.09] rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] z-50 overflow-hidden"
      style={{ top: "72px", transform: "translateX(-50%)" }}
    >
      <div className="flex items-start justify-between px-8 pt-6 pb-4">
        <div>
          <p
            className="text-[11px] font-semibold tracking-[0.15em] uppercase"
            style={{ color: GREEN }}
          >
            Explore our
          </p>
          <h2 className="text-white text-2xl font-semibold">Product Lines</h2>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-white/60 hover:text-white transition-all duration-200"
        >
          <X size={16} />
        </button>
      </div>

      <div className="grid grid-cols-[300px_1fr_400px] px-8 pb-8">
        {/* Categories */}
        <div className="flex flex-col justify-between border-r border-white/[0.08]">
          <ul className="-ml-2">
            {items.map((item, i) => {
              const Icon = CATEGORY_ICONS[i % CATEGORY_ICONS.length];
              const isActive = i === activeIndex;
              return (
                <li key={item.label}>
                  <button
                    onMouseEnter={() => selectCategory(i)}
                    onFocus={() => selectCategory(i)}
                    onClick={() => selectCategory(i)}
                    className={`w-full flex items-center gap-3.5 pl-4 pr-4 py-3 text-left text-[14px] border-l-[3px] transition-colors duration-150 focus:outline-none ${
                      isActive
                        ? "bg-[#75C043]/15 text-white"
                        : "border-transparent text-white/80 hover:bg-white/[0.04]"
                    }`}
                    style={isActive ? { borderLeftColor: GREEN } : undefined}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      style={{ color: GREEN }}
                      className="flex-shrink-0"
                    />
                    <span className="flex-1 leading-snug">{item.label}</span>
                    <ChevronRight size={15} className="text-white/60" />
                  </button>
                </li>
              );
            })}
          </ul>

          <Link
            to="/solutions"
            onClick={onClose}
            className="group mt-5 mr-6 pt-5 border-t border-white/[0.08] flex gap-3.5 items-start"
          >
            <LayoutGrid
              size={24}
              strokeWidth={1.5}
              style={{ color: GREEN }}
              className="flex-shrink-0 mt-0.5"
            />
            <span>
              <span className="flex items-center gap-2 text-white text-[14px] font-medium group-hover:text-[#75C043] transition-colors">
                View All Solutions{" "}
                <ArrowRight size={16} style={{ color: GREEN }} />
              </span>
              <span className="block text-white/50 text-[12px] leading-snug mt-1">
                Explore our complete range of industrial solutions.
              </span>
            </span>
          </Link>
        </div>

        {/* Products */}
        <div key={active.label} className="hh-panel-prod px-8">
          <p
            className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1"
            style={{ color: GREEN }}
          >
            Products
          </p>
          <h3 className="text-white text-2xl font-semibold leading-snug mb-2">
            {active.label}
          </h3>
          <p className="text-white/50 text-[13px] leading-relaxed max-w-[380px] mb-5">
            {active.description}
          </p>
          <ul
            className="border-t border-white/[0.08]"
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {active.products.map((prod, i) => {
              const { to, state } = productLink(prod, active.label);
              return (
                <li
                  key={i}
                  className="border-b border-white/[0.08]"
                  onMouseEnter={() => setHoveredProduct(prod)}
                >
                  <Link
                    to={to}
                    state={state}
                    onClick={onClose}
                    onFocus={() => setHoveredProduct(prod)}
                    onBlur={() => setHoveredProduct(null)}
                    className="group flex items-center justify-between py-3 text-[14px] text-white/85 hover:text-[#75C043] transition-colors"
                  >
                    {prod.name.trim()}
                    <ArrowRight
                      size={16}
                      className="text-white/50 group-hover:text-[#75C043] group-hover:translate-x-0.5 transition-all"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Poster */}
        {(() => {
          const isProduct = !!hoveredProduct?.photo;
          return (
            <article
              key={"poster-" + active.label}
              className="hh-panel-prod relative rounded-xl overflow-hidden border border-white/10 min-h-[440px] flex flex-col bg-black/40"
              style={
                isProduct
                  ? {
                      backgroundImage:
                        "radial-gradient(circle at 50% 35%, rgba(117,192,67,0.14), transparent 65%)",
                    }
                  : undefined
              }
            >
              {isProduct ? (
                /* Product photo: contained, padded, fully visible */
                <div className="flex-1 flex items-center justify-center px-8 pt-8 min-h-0">
                  <img
                    key={posterPhoto}
                    src={posterPhoto}
                    alt={hoveredProduct.name}
                    decoding="async"
                    className="hh-fade w-full max-h-[250px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
                  />
                </div>
              ) : (
                /* Category photo: full-bleed cover, as before */
                <img
                  key={posterPhoto}
                  src={posterPhoto}
                  alt={active.label}
                  decoding="async"
                  className="hh-fade absolute inset-0 w-full h-full object-cover"
                />
              )}

              <div
                className={`relative m-6 pl-4 border-l-2 ${isProduct ? "" : "mt-auto"}`}
                style={{ borderColor: GREEN }}
              >
                <p
                  className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-1.5"
                  style={{ color: GREEN }}
                >
                  {hoveredProduct ? active.label : "Featured solution"}
                </p>
                <h3 className="text-white text-2xl font-semibold leading-tight mb-2">
                  {hoveredProduct?.name || active.label}
                </h3>
                <p className="text-white/60 text-[13px] leading-relaxed mb-4 max-w-[300px]">
                  {active.description}
                </p>
                <Link
                  to="/solutions"
                  state={{ selectedTab: active.label }}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#75C043] transition-colors"
                >
                  Explore {active.label}
                  <ArrowRight size={16} style={{ color: GREEN }} />
                </Link>
              </div>
            </article>
          );
        })()}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HEADER
───────────────────────────────────────────── */
function HeaderHomeV3({ dark, setDark }) {
  const { i18n } = useTranslation();

  /* mobile */
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState("main");
  const [activeCategory, setActiveCategory] = useState(null);
  const menuRef = useRef(null);

  /* desktop mega */
  const [megaOpen, setMegaOpen] = useState(false);
  const solutionsRef = useRef(null);

  /* language dropdown */
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const languages = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
  ];

  /* dark mode */
  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const closeMega = useCallback(() => setMegaOpen(false), []);
  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setMobileView("main");
    setActiveCategory(null);
  }, []);
  const openMobileCat = useCallback((item) => {
    setActiveCategory(item);
    setMobileView("products");
  }, []);

  /* outside-click — mobile */
  useEffect(() => {
    const h = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeAll();
    };
    if (menuOpen) document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [menuOpen, closeAll]);

  /* outside-click — desktop mega */
  useEffect(() => {
    const h = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target))
        closeMega();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [closeMega]);

  /* outside-click — language dropdown */
  useEffect(() => {
    const h = (e) => {
      if (langRef.current && !langRef.current.contains(e.target))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const changeLanguage = useCallback(
    (code) => {
      i18n.changeLanguage(code);
      localStorage.setItem("lang", code);
      setLangOpen(false);
    },
    [i18n],
  );

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            src={dark ? "/logo1.png" : "/logo1.png"}
            alt="Prime Sales Logo"
            className="h-12 w-24"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-sans text-sm font-light">
          <a
            href="/"
            className="hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="about"
            className="hover:text-white dark:text-white hover:scale-105 transition-all duration-300"
          >
            About Us
          </a>

          {/* Solutions */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => setMegaOpen((o) => !o)}
              className="hover:text-white dark:text-white dark:hover:text-white transition-colors duration-200 flex items-center gap-1"
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {megaOpen && (
              <SolutionsMegaMenu items={solutionItems} onClose={closeMega} />
            )}
          </div>

          <a
            href="/news"
            className="hover:text-white hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            News
          </a>
          <a
            href="/gallery"
            className="hover:text-white hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="hover:text-white hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            Contact Us
          </a>
          <a
            href="/careers"
            className="hover:text-white hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            Careers
          </a>

          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer dark:text-white"
            >
              {i18n.language.toUpperCase()}{" "}
              <ChevronDown
                size={14}
                className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div className="absolute top-full mt-2 right-0 bg-[#050301] border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[140px] z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => changeLanguage(l.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                      i18n.language === l.code
                        ? "text-[#75C043] font-medium"
                        : "text-white/80"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden relative z-50">
          <button
            onClick={() => {
              setMenuOpen((o) => !o);
              setMobileView("main");
              setActiveCategory(null);
            }}
            className="text-white transition-transform duration-300 hover:scale-110"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ══ MOBILE MENU ══ */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-3 right-3 bg-zinc-900 text-white rounded-xl shadow-2xl overflow-hidden border border-white/10 z-50"
        >
          {mobileView === "main" && (
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <Link to="/" onClick={closeAll}>
                  <img
                    src={dark ? "/logo1.png" : "logoblack.png"}
                    alt="Logo"
                    className="h-8 w-16 object-contain"
                  />
                </Link>
                <button
                  onClick={closeAll}
                  className="text-white/70 hover:text-white"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col divide-y divide-white/10">
                {[
                  ["Home", "/"],
                  ["About Us", "about"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closeAll}
                    className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                  >
                    {label}
                  </a>
                ))}
                <button
                  onClick={() => setMobileView("solutions")}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors w-full text-left"
                >
                  Solutions <ChevronRight size={16} className="text-white/50" />
                </button>
                {[
                  ["News", "/news"],
                  ["Gallery", "/gallery"],
                  ["Contact Us", "/contact"],
                  ["Careers", "/careers"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={closeAll}
                    className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                  >
                    {label}
                  </a>
                ))}
                <div className="px-5 py-4">
                  <p className="text-[11px] uppercase tracking-wider text-white/40 mb-2">
                    Language
                  </p>
                  <div className="flex gap-2">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => changeLanguage(l.code)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          i18n.language === l.code
                            ? "border-[#75C043] text-[#75C043]"
                            : "border-white/20 text-white/70"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {mobileView === "solutions" && (
            <div className="flex flex-col">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <button
                  onClick={() => setMobileView("main")}
                  className="text-white/70 hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Solutions
                </span>
                <button
                  onClick={closeAll}
                  className="ml-auto text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col divide-y divide-white/10">
                {solutionItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => openMobileCat(item)}
                    className="flex items-center justify-between px-5 py-4 text-sm hover:bg-white/5 transition-colors w-full text-left"
                  >
                    {item.label}{" "}
                    <ChevronRight
                      size={14}
                      className="text-white/40 flex-shrink-0"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {mobileView === "products" && activeCategory && (
            <div className="flex flex-col">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <button
                  onClick={() => setMobileView("solutions")}
                  className="text-white/70 hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm font-semibold tracking-wide uppercase truncate">
                  {activeCategory.label}
                </span>
                <button
                  onClick={closeAll}
                  className="ml-auto text-white/70 hover:text-white flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col divide-y divide-white/10">
                {activeCategory.products.map((prod, i) => {
                  const { to, state } = productLink(prod, activeCategory.label);
                  return (
                    <Link
                      key={i}
                      to={to}
                      state={state}
                      onClick={closeAll}
                      className="flex items-center justify-between px-5 py-4 text-sm hover:bg-white/5 transition-colors"
                    >
                      {prod.name.trim()}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default HeaderHomeV3;
