import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const solutionItems = [
  {
    label: "Insulated Panels",
    photo:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=480&q=75&fm=webp",
    description:
      "End-to-end temperature-controlled solutions for perishables, pharma, and food logistics.",
    products: [
      {
        name: "Structural Insulated Panels",
        photo:
          "https://versiclad.com.au/wp-content/uploads/2022/11/Untitled-design-44.png",
        desc: "Modular cold rooms from 5°C down to −30°C, rapid installation.",
      },
      {
        name: "Insulated Doors",
        photo:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGid2PGGZCuuMr4MQBQWN2HFoXOrxLp0UBA&s",
        desc: "High-density PIR insulated panels and cam-lock doors.",
      },
      {
        name: "Panel and Door Accessories",
        photo:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&q=65&fm=webp",
        desc: "IoT-enabled real-time sensors with cloud dashboard alerts.",
      },
    ],
  },
  {
    label: "Industrial Storage",
    photo:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=480&q=75&fm=webp",
    description:
      "Scalable racking and shelving systems engineered for high-density warehouse environments.",
    products: [
      {
        name: "Selective Pallet Racking",
        photo:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=280&q=65&fm=webp",
        desc: "Single-deep access to every pallet, load up to 4,000 kg/level.",
      },
      {
        name: "Drive-In Racking",
        photo:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=280&q=65&fm=webp",
        desc: "LIFO deep-lane storage maximising floor space utilisation.",
      },
      {
        name: "Cantilever Racking",
        photo:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=280&q=65&fm=webp",
        desc: "Ideal for long, irregular loads like timber and pipes.",
      },
      {
        name: "Mezzanine Floors",
        photo:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=280&q=65&fm=webp",
        desc: "Structural steel platforms doubling usable floor area.",
      },
      {
        name: "Mobile Shelving Systems",
        photo:
          "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=280&q=65&fm=webp",
        desc: "Motorised carriages reducing aisle count by up to 50%.",
      },
      {
        name: "Push-Back Racking",
        photo:
          "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=280&q=65&fm=webp",
        desc: "2–6 pallet deep LIFO system with inclined rails.",
      },
    ],
  },
  {
    label: "Material Handling Equipment",
    photo:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=480&q=75&fm=webp",
    description:
      "Reliable electric and manual equipment for every stage of warehouse goods movement.",
    products: [
      {
        name: "Electric Forklifts",
        photo:
          "https://logisticsinside.eu/wp-content/uploads/2021/06/Linde-X20-X35-5-700x466.jpg",
        desc: "3–5 tonne capacity, zero-emission, ergonomic cab design.",
        link: "/solutions/mhe/electric-forklift",
      },
      {
        name: " Internal Combustion Counterbalance   Truck",
        photo:
          "https://www.linde-mh.com/media/Global-Content/Landingpage-Forklift-Truck/LMH_Range_Portfolio_02_002_Small_16x9w1920.jpg",
        desc: "Durable forklifts designed for outdoor and heavy-duty lifting operations.",
        link: "/solutions/mhe/ice-forklift",
      },
      {
        name: "Reach Trucks",
        photo:
          "https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/reach_truck-loading-retail-3959_4003_1x1w320.jpg",
        desc: "Lift heights up to 12 m for narrow-aisle operations.",
        link: "/solutions/mhe/reach-trucks",
      },
      {
        name: "Pallet Stackers",
        photo:
          "https://www.allmachines.com/_next/image?url=https%3A%2F%2Fassets.allmachines.com%2Fforklifts%2Fimages%2Flinde%2F4ec77dd0bfeddf1fd58b9880a5dbd2ea_1_Im1.jpg&w=3840&q=60",
        desc: "Pedestrian or rider stacker for light to medium loads.",
        link: "/solutions/mhe/pallet-stackers",
      },
      {
        name: "Hand Pallet Trucks",
        photo:
          "https://www.linde-mh.com/media/Global-Content/04-About-Linde/Press_Releases/2014/22_2014/pm_22-2014_4196_490_B_16x9w1920.jpg",
        desc: "Ergonomic hydraulic trucks, 2,500 kg standard capacity.",
        link: "/solutions/mhe/pallet-trucks",
      },
      {
        name: "Order Pickers",
        photo:
          "https://www.allmachines.com/_next/image?url=https%3A%2F%2Fassets.allmachines.com%2Fforklifts%2Fimages%2Flinde%2F4ec77dd0bfeddf1fd58b9880a5dbd2ea_1_Im1.jpg&w=3840&q=60",
        desc: "Platform lifts operators to pick face height for accuracy.",
        link: "/solutions/mhe/order-pickers",
      },
    ],
  },
  {
    label: "Plastic Pallets, Bins & Crates",
    photo:
      "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=480&q=75&fm=webp",
    description:
      "Hygienic, lightweight plastic storage solutions for food, pharma, and retail supply chains.",
    products: [
      {
        name: "Eco Pallets",
        photo:
          "https://www.msplastics.com.my/wp-content/uploads/2021/07/2-5.png",
        desc: "Space-saving nest ratio 5:1, dynamic load 1,000 kg.",
      },
      {
        name: "Warehouse Pallets",
        photo:
          "https://storage.keepital.com/public/company/my/m/a/mah-sing-plastics-industries-sdn-bhd/images/product/ms-warehouse-series-plastic-pallet-model-number-n4-1210/n4-1210-top.jpg",
        desc: "FDA-compliant, compatible with standard selective racking.",
      },
      {
        name: "Hygiene Pallets",
        photo:
          "https://www.msplastics.com.my/wp-content/uploads/2021/06/Pallet-Series_Hygiene.jpg",
        desc: "Open-top bins in 14 sizes, colour-coded for zoning.",
      },
      {
        name: "Metal Reinforced Pallets",
        photo:
          "https://www.msplastics.com.my/wp-content/uploads/2021/06/Feature_02-Steel.jpg",
        desc: "Fold flat for return logistics, 75% volume saving.",
      },
      {
        name: "Spill Containmentt Pallets",
        photo:
          "https://www.msplastics.com.my/wp-content/uploads/2021/07/RSPEN2-1313-250-Lazada-05.jpg",
        desc: "600×400 mm standard footprint, lids and dividers available.",
      },
    ],
  },
  {
    label: "Automation Solutions",
    photo:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=480&q=75&fm=webp",
    description:
      "Smart warehouse automation from robotics to fully integrated AS/RS systems.",
    products: [
      {
        name: "Automated Storage & Retrieval (AS/RS)",
        photo:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=280&q=65&fm=webp",
        desc: "Mini-load and unit-load cranes with sub-second cycle times.",
      },
      {
        name: "Conveyor Systems",
        photo:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=280&q=65&fm=webp",
        desc: "Belt, roller, and overhead conveyors for every throughput.",
      },
      {
        name: "Autonomous Mobile Robots (AMR)",
        photo:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=280&q=65&fm=webp",
        desc: "Fleet of self-navigating robots, no fixed infrastructure.",
      },
      {
        name: "Automated Guided Vehicles (AGV)",
        photo:
          "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=280&q=65&fm=webp",
        desc: "Laser-guided tuggers and unit-load carriers up to 2 t.",
      },
      {
        name: "Goods-to-Person Systems",
        photo:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&q=65&fm=webp",
        desc: "Ergonomic pick stations fed by shuttle or robot.",
      },
      {
        name: "Sortation Systems",
        photo:
          "https://images.unsplash.com/photo-1534361960057-19f4434a4d48?w=280&q=65&fm=webp",
        desc: "Cross-belt and sliding shoe sorters at 10,000+ items/hr.",
      },
    ],
  },
  {
    label: "Docks and Doors",
    photo:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=480&q=75&fm=webp",
    description:
      "Loading-bay solutions that maximise throughput while keeping energy and safety costs low.",
    products: [
      {
        name: "Dock Levelers",
        photo:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=280&q=65&fm=webp",
        desc: "Hydraulic lip levelers, 6-tonne capacity, ±300 mm range.",
      },
      {
        name: "Dock Shelters & Seals",
        photo:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=280&q=65&fm=webp",
        desc: "Inflatable seals eliminating 99% of energy gap loss.",
      },
      {
        name: "High-Speed Roll-Up Doors",
        photo:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=280&q=65&fm=webp",
        desc: "2 m/s open speed, radar-activated, ATEX-rated options.",
      },
      {
        name: "Sectional Overhead Doors",
        photo:
          "https://images.unsplash.com/photo-1534361960057-19f4434a4d48?w=280&q=65&fm=webp",
        desc: "Insulated steel panels, U-value 0.9 W/m²K.",
      },
      {
        name: "Dock Bumpers",
        photo:
          "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=280&q=65&fm=webp",
        desc: "Laminated rubber blocks absorbing 35 kJ impact energy.",
      },
      {
        name: "Vehicle Restraints",
        photo:
          "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=280&q=65&fm=webp",
        desc: "Automatic ICC-bar hooks preventing drive-away accidents.",
      },
    ],
  },
  {
    label: "Warehouse Management System",
    photo:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&q=75&fm=webp",
    description:
      "Cloud-native WMS platform with real-time visibility across your entire distribution network.",
    products: [
      {
        name: "WMS Core Platform",
        photo:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&q=65&fm=webp",
        desc: "Multi-site, multi-client SaaS WMS with API-first architecture.",
      },
      {
        name: "Inventory Management Module",
        photo:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=280&q=65&fm=webp",
        desc: "Lot, serial, and expiry tracking with cycle-count workflows.",
      },
      {
        name: "Order Management Module",
        photo:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=280&q=65&fm=webp",
        desc: "Wave, batch, and zone-pick strategies configurable per client.",
      },
      {
        name: "Labor Management Module",
        photo:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=280&q=65&fm=webp",
        desc: "Engineered standards and productivity dashboards per operator.",
      },
      {
        name: "Yard Management Module",
        photo:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=280&q=65&fm=webp",
        desc: "Gate check-in, slot booking, and trailer tracking.",
      },
      {
        name: "Analytics & Reporting Dashboard",
        photo:
          "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=280&q=65&fm=webp",
        desc: "Live KPI widgets, custom report builder, scheduled exports.",
      },
    ],
  },
  {
    label: "Industrial Batteries & Chargers",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHtkQBHD4mU2arT6lba0-YhZiCaEyGlKiMg&s",
    description:
      "High-performance traction batteries and intelligent chargers for zero-downtime operations.",
    products: [
      {
        name: "Lead-Acid Traction Batteries",
        photo:
          "https://images.unsplash.com/photo-1620714223084-8fcacc2dfd4d?w=280&q=65&fm=webp",
        desc: "48 V / 80 V flooded cells, 4–12 hour shift coverage.",
      },
      {
        name: "Lithium-Ion Forklift Batteries",
        photo:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=280&q=65&fm=webp",
        desc: "Drop-in Li-ion packs, 3,000+ cycles, built-in BMS.",
      },
      {
        name: "Opportunity Chargers",
        photo:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=280&q=65&fm=webp",
        desc: "HF chargers enabling partial top-up during breaks.",
      },
      {
        name: "Fast Chargers",
        photo:
          "https://images.unsplash.com/photo-1534361960057-19f4434a4d48?w=280&q=65&fm=webp",
        desc: "80% charge in 60 minutes for multi-shift operations.",
      },
      {
        name: "Battery Management Systems",
        photo:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&q=65&fm=webp",
        desc: "Fleet-level SoC tracking with charge scheduling software.",
      },
      {
        name: "Battery Watering Systems",
        photo:
          "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=280&q=65&fm=webp",
        desc: "Single-point watering gun eliminating cell overfill risk.",
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   STYLES — injected once at module level
───────────────────────────────────────────── */
if (typeof document !== "undefined" && !document.getElementById("hh-styles")) {
  const s = document.createElement("style");
  s.id = "hh-styles";
  s.textContent = `
    @keyframes hhFadeDown {
      from { opacity:0; transform:translate(-50%, -8px); }
      to   { opacity:1; transform:translate(-50%, 0); }
    }
    @keyframes hhSlideRight {
      from { opacity:0; transform:translateX(14px); }
      to   { opacity:1; transform:translateX(0); }
    }
    @keyframes hhSlideLeft {
      from { opacity:0; transform:translateX(-14px); }
      to   { opacity:1; transform:translateX(0); }
    }
    @keyframes hhTile {
      from { opacity:0; transform:translateY(8px); }
      to   { opacity:1; transform:translateY(0); }
    }

    .hh-mega       { animation: hhFadeDown   0.2s cubic-bezier(0.16,1,0.3,1) forwards; will-change:transform,opacity; }
    .hh-panel-cats { animation: hhSlideLeft  0.18s cubic-bezier(0.16,1,0.3,1) forwards; }
    .hh-panel-prod { animation: hhSlideRight 0.18s cubic-bezier(0.16,1,0.3,1) forwards; }

    .hh-tile { animation: hhTile 0.2s cubic-bezier(0.16,1,0.3,1) both; }
    .hh-tile:nth-child(1){animation-delay:0.02s}.hh-tile:nth-child(2){animation-delay:0.04s}
    .hh-tile:nth-child(3){animation-delay:0.06s}.hh-tile:nth-child(4){animation-delay:0.08s}
    .hh-tile:nth-child(5){animation-delay:0.10s}.hh-tile:nth-child(6){animation-delay:0.12s}
    .hh-tile:nth-child(7){animation-delay:0.14s}.hh-tile:nth-child(8){animation-delay:0.16s}

    .hh-img { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); will-change:transform; }
    .hh-tile:hover .hh-img { transform: scale(1.06); }

    .hh-grad {
      background: linear-gradient(to top, rgba(0,0,0,.82) 0%, rgba(0,0,0,.12) 55%, transparent 100%);
      transition: opacity 0.25s ease;
    }
    .hh-tile:hover .hh-grad { opacity: 0.92; }

    .hh-arrow { opacity:0; transform:translateX(-4px); transition: opacity 0.2s ease, transform 0.2s ease; }
    .hh-tile:hover .hh-arrow { opacity:1; transform:translateX(0); }

    .hh-scroll::-webkit-scrollbar       { width:3px; }
    .hh-scroll::-webkit-scrollbar-track { background:transparent; }
    .hh-scroll::-webkit-scrollbar-thumb { background:rgba(255,255,255,.15); border-radius:2px; }
  `;
  document.head.appendChild(s);
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
const CatTile = memo(({ item, onClick }) => (
  <button
    onClick={onClick}
    className="hh-tile relative rounded-xl overflow-hidden text-left focus:outline-none"
    style={{ aspectRatio: "4/3" }}
  >
    <img
      src={item.photo}
      alt={item.label}
      loading="lazy"
      decoding="async"
      className="hh-img absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40  "></div>
    <div className="hh-grad absolute inset-0" />
    <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 flex items-end justify-between">
      <span className="text-white text-[12.5px] font-medium leading-snug pr-1">
        {item.label}
      </span>
      <span className="hh-arrow text-white/70 flex-shrink-0">
        <ChevronRight size={13} />
      </span>
    </div>
  </button>
));

const ProdTile = memo(({ prod, categoryLabel, onClick }) => {
  const destination = prod.link ? prod.link : "/solutions";
  const linkState = prod.link
    ? undefined
    : { selectedTab: categoryLabel, selectedProduct: prod.name };

  return (
    <Link
      to={destination}
      state={linkState}
      onClick={onClick}
      className="hh-tile group relative rounded-xl overflow-hidden block focus:outline-none"
      style={{ aspectRatio: "3/2" }}
    >
      <img
        src={prod.photo}
        alt={prod.name}
        loading="lazy"
        decoding="async"
        className="hh-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="hh-grad absolute inset-0" />
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
        <div className="flex items-end justify-between gap-1">
          <div>
            <p className="text-white text-[11.5px] font-semibold leading-snug">
              {prod.name}
            </p>
          </div>
          <span className="hh-arrow text-white/60 flex-shrink-0 mb-0.5">
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
});

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
function HeaderHome({ dark, setDark }) {
  const { i18n } = useTranslation(); // gives access to the real i18next instance

  /* mobile */
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState("main");
  const [activeCategory, setActiveCategory] = useState(null);
  const menuRef = useRef(null);

  /* desktop mega: null | "categories" | "products" */
  const [megaView, setMegaView] = useState(null);
  const [megaActive, setMegaActive] = useState(null);
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

  /* outside-click — mobile */
  useEffect(() => {
    const h = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) closeAll();
    };
    if (menuOpen) document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [menuOpen]);

  /* outside-click — desktop mega */
  useEffect(() => {
    const h = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target))
        closeMega();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* outside-click — language dropdown */
  useEffect(() => {
    const h = (e) => {
      if (langRef.current && !langRef.current.contains(e.target))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  /* stable callbacks */
  const closeMega = useCallback(() => {
    setMegaView(null);
    setMegaActive(null);
  }, []);
  const openMega = useCallback(() => setMegaView("categories"), []);
  const drillInto = useCallback((item) => {
    setMegaActive(item);
    setMegaView("products");
  }, []);
  const drillBack = useCallback(() => {
    setMegaActive(null);
    setMegaView("categories");
  }, []);
  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setMobileView("main");
    setActiveCategory(null);
  }, []);
  const openMobileCat = useCallback((item) => {
    setActiveCategory(item);
    setMobileView("products");
  }, []);
  const toggleDark = useCallback(() => setDark((d) => !d), [setDark]);

  const changeLanguage = useCallback(
    (code) => {
      i18n.changeLanguage(code);
      localStorage.setItem("lang", code);
      setLangOpen(false);
    },
    [i18n],
  );

  const megaOpen = megaView !== null;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm py-4 px-6">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            src={dark ? "/logo1.png" : "/logoblack.png"}
            alt="Prime Sales Logo"
            className="h-12 w-24"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-sans text-sm font-light">
          <a
            href="/"
            className="hover:text-black hover:scale-105 transition-all duration-300 text-black dark:text-white dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="about"
            className="hover:text-white dark:text-white hover:scale-105 transition-all duration-300 text-black"
          >
            About Us
          </a>

          {/* Solutions */}
          <div className="relative" ref={solutionsRef}>
            <button
              onClick={() => (megaOpen ? closeMega() : openMega())}
              className="hover:text-black dark:text-white dark:hover:text-white transition-colors duration-200 flex items-center gap-1 text-black"
            >
              Solutions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
              />
            </button>

            {megaOpen && (
              <div
                className="hh-mega fixed left-1/2 w-[min(980px,94vw)] bg-[#050301] border border-white/[0.09] rounded- shadow-[0_20px_60px_rgba(0,0,0,0.7)] z-50 overflow-hidden"
                style={{ top: "72px", transform: "translateX(-50%)" }}
              >
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.08]">
                  <button
                    onClick={drillBack}
                    className={`flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-all duration-200 ${megaView === "products" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    style={{ minWidth: 72 }}
                  >
                    <ChevronLeft size={14} /> Back
                  </button>

                  <div className="flex items-center gap-2 text-xs text-white/40 tracking-wide flex-1">
                    <span
                      className={`transition-colors ${megaView === "products" ? "cursor-pointer hover:text-white/70" : "text-white/80 font-medium"}`}
                      onClick={megaView === "products" ? drillBack : undefined}
                    >
                      Solutions
                    </span>
                    {megaView === "products" && megaActive && (
                      <>
                        <ChevronRight size={11} className="text-white/25" />
                        <span className="text-white/80 font-medium">
                          {megaActive.label}
                        </span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={closeMega}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-white/50 hover:text-white transition-all duration-200 flex-shrink-0"
                  >
                    <X size={14} />
                  </button>
                </div>

                {megaView === "categories" && (
                  <div className="hh-panel-cats p-5">
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-4 px-1">
                      Browse by category
                    </p>
                    <div className="grid grid-cols-4 gap-3">
                      {solutionItems.map((item, i) => (
                        <CatTile
                          key={i}
                          item={item}
                          onClick={() => drillInto(item)}
                        />
                      ))}
                    </div>
                    <div className="mt-4 pt-3.5 border-t border-white/[0.07] flex justify-between items-center px-1">
                      <span className="text-[11px] text-white/25">
                        {solutionItems.length} categories
                      </span>
                      <Link
                        to="/solutions"
                        onClick={closeMega}
                        className="text-[11px] font-medium text-white/40 hover:text-white transition-colors flex items-center gap-1"
                      >
                        View all <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                )}

                {megaView === "products" && megaActive && (
                  <div
                    className="hh-panel-prod flex"
                    style={{ minHeight: 400 }}
                  >
                    <div className="relative w-52 flex-shrink-0 overflow-hidden">
                      <img
                        src={megaActive.photo}
                        alt={megaActive.label}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/70  "></div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-1">
                          Category
                        </p>
                        <h3 className="text-white text-base font-semibold leading-snug mb-2">
                          {megaActive.label}
                        </h3>
                        <p className="text-white/50 text-[11px] leading-relaxed">
                          {megaActive.description}
                        </p>

                        <Link
                          to="/solutions"
                          state={{ selectedTab: megaActive.label }}
                          onClick={closeMega}
                          className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-3 py-1 transition-all duration-200"
                        >
                          See all <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>

                    <div className="flex-1 p-5 hh-scroll overflow-y-auto">
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-4">
                        Products in this category
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {megaActive.products.map((prod, i) => (
                          <ProdTile
                            key={i}
                            prod={prod}
                            categoryLabel={megaActive.label}
                            onClick={closeMega}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <a
            href="/news"
            className="text-black hover:text-white hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            News
          </a>
          <a
            href="/gallery"
            className="text-black hover:text-white hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            Gallery
          </a>
          <a
            href="/contact"
            className="text-black hover:text-black hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            Contact Us
          </a>
          <a
            href="/careers"
            className="text-black hover:text-white hover:scale-105 transition-all duration-300 dark:text-white dark:hover:text-white"
          >
            Careers
          </a>

          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer text-black dark:text-white"
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
                <div className="flex items-center gap-3">
                  <button
                    onClick={closeAll}
                    className="text-white/70 hover:text-white"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col divide-y divide-white/10">
                <a
                  href="/"
                  onClick={closeAll}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  Home
                </a>
                <a
                  href="about"
                  onClick={closeAll}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  About Us
                </a>
                <button
                  onClick={() => setMobileView("solutions")}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors w-full text-left"
                >
                  Solutions <ChevronRight size={16} className="text-white/50" />
                </button>
                <a
                  href="/news"
                  onClick={closeAll}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  News
                </a>
                <a
                  href="/gallery"
                  onClick={closeAll}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="/contact"
                  onClick={closeAll}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/careers"
                  onClick={closeAll}
                  className="flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  Careers
                </a>
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
                {activeCategory.products.map((prod, i) => (
                  <Link
                    key={i}
                    to={prod.link || "/solutions"}
                    state={
                      prod.link
                        ? undefined
                        : {
                            selectedTab: activeCategory.label,
                            selectedProduct: prod.name,
                          }
                    }
                    onClick={closeAll}
                    className="flex items-center justify-between px-5 py-4 text-sm hover:bg-white/5 transition-colors"
                  >
                    {prod.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default HeaderHome;
