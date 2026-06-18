"use client";
import React, { useState, useEffect, useRef } from "react";

const timelineData = [
  {
    year: "1976",
    tag: "Origins",
    short: "Foil insulation",
    text: "Prime Sales Inc. was founded using aluminium foil insulation products — the very first stop on a five-decade journey.",
    image: "/timeline/1.png",
  },
  {
    year: "1978",
    tag: "Products",
    short: "Sandwich panels",
    text: "Transitioned to insulated sandwich panels, opening doors into cold storage and industrial construction across the Philippines.",
    image: "/timeline/2.png",
  },
  {
    year: "1986",
    tag: "Storage",
    short: "Racking systems",
    text: 'Introduced the "Racking System" as a dedicated warehouse storage solution — a major step into logistics infrastructure.',
    image: "/timeline/3.png",
  },
  {
    year: "1988",
    tag: "Handling",
    short: "Battery lift trucks",
    text: "Added Battery Operated Lift Truck to the portfolio, marking PSI's entry into full-service materials handling.",
    image: "/timeline/4.png",
  },
  {
    year: "2008",
    tag: "Loading",
    short: "Loading tech & doors",
    text: "Strengthened the product portfolio with loading technology and doors for various industrial applications.",
    image: "/timeline/5.png",
  },
  {
    year: "2009",
    tag: "Handling",
    short: "IC engine forklifts",
    text: "Completed the materials handling line by adding Internal Combustion Engine Forklifts — a full fleet for any warehouse scale.",
    image: "/timeline/6.png",
  },
  {
    year: "2013",
    tag: "Automation",
    short: "Automation distributor",
    text: "PSI ventured as an exclusive distributor of warehouse automation technology in the country.",
    image: "/timeline/7.png",
  },
  {
    year: "2015",
    tag: "Software",
    short: "Warehouse mgmt. software",
    text: "Launched Warehouse Management Software for better supply chain visibility and performance.",
    image: "/timeline/8.png",
  },
  {
    year: "2017",
    tag: "Milestone",
    short: "New HQ, Parañaque",
    text: "Moved to our new headquarters at Prime Corporate Center, East Service Road, Parañaque.",
    image: "/timeline/9.png",
  },
  {
    year: "2019",
    tag: "Expansion",
    short: "Optichain Solutions Inc.",
    text: "Prime Sales Inc. established its sister company, Optichain Solutions Inc., to offer material handling and industrial storage solutions to the booming midrange market.",
    image: "/6.png",
  },
  {
    year: "2022",
    tag: "Scanning",
    short: "Printers, barcode scanners",
    text: "Comprehensive solutions for printers and barcode scanners to support operational accuracy.",
    image: "/timeline/10.png",
  },
  {
    year: "2025",
    tag: "AutoStorage",
    short: "VLM & carousel systems",
    text: "Automated storage solutions featuring Vertical Lift Modules (VLM) and Carousel Systems.",
    image: "/timeline/11.png",
  },
  {
    year: "2026",
    tag: "Services",
    short: "Rental solutions",
    text: "Business Solutions offering rental services for pallets, racking, and MHE.",
    image: "/timeline/12.png",
  },
];

const CARD_W = 176;
const FORK_W = 100;
const FORK_H = 82;

// ─── Station Card ─────────────────────────────────────────────────────────────
const StationCard = ({ data, isActive, onClick }) => (
  <button
    onClick={onClick}
    className="flex-shrink-0 flex flex-col items-center cursor-pointer group focus:outline-none"
    style={{ width: CARD_W }}
    aria-label={`${data.year}: ${data.short}`}
  >
    <div
      className={`w-40 rounded-xl border p-3 mb-3 text-left transition-all duration-300 ${
        isActive
          ? "border-green-500 bg-green-50 dark:bg-green-950/30"
          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 group-hover:border-green-300"
      }`}
    >
      <p
        className={`text-lg font-semibold leading-none mb-1 ${isActive ? "text-green-700 dark:text-green-400" : "text-gray-800 dark:text-gray-200"}`}
      >
        {data.year}
      </p>
      <span
        className={`inline-block text-[10px] px-2 py-0.5 rounded-full mb-2 font-medium ${
          isActive
            ? "bg-green-200 text-green-800 dark:bg-green-800/40 dark:text-green-300"
            : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
        }`}
      >
        {data.tag}
      </span>
      <p className="text-[11px] leading-snug text-gray-500 dark:text-gray-400">
        {data.short}
      </p>
    </div>
    <div
      className={`w-px h-5 ${isActive ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}`}
    />
    <div
      className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
        isActive
          ? "bg-green-500 border-green-700 scale-125"
          : "bg-white dark:bg-gray-900 border-gray-400 dark:border-gray-500 group-hover:border-green-400"
      }`}
    />
  </button>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const TimelineforAbout = ({ dark, onEndReached }) => {
  const [active, setActive] = useState(0);
  const [prevActive, setPrev] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const scrollerRef = useRef(null);
  const viewportRef = useRef(null);
  const wrapperRef = useRef(null);
  const touchStartX = useRef(null);
  const [vpWidth, setVpWidth] = useState(0);

  // How far the scroller has been shifted (used to position forklift correctly)
  const [shift, setShift] = useState(0);

  const applyScroll = (idx, vw) => {
    // No sidepad — track starts at left edge (x=0 for card 0).
    // We scroll just enough to keep the active card fully visible,
    // clamped so we never scroll past the last card.
    const totalW = timelineData.length * CARD_W;
    const maxShift = 0;
    const minShift = Math.min(0, vw - totalW); // negative: how far left we can go

    // Target: active card's left edge at x=0, but clamp so last card stays on screen
    const raw = -(idx * CARD_W);
    const s = Math.max(minShift, Math.min(maxShift, raw));

    if (scrollerRef.current) {
      // No padding at all — full width from the start
      scrollerRef.current.style.paddingLeft = "0px";
      scrollerRef.current.style.paddingRight = "0px";
      scrollerRef.current.style.transform = `translateX(${Math.round(s)}px)`;
    }
    setShift(Math.round(s));
    setVpWidth(vw);
  };

  useEffect(() => {
    const upd = () => {
      if (viewportRef.current)
        applyScroll(active, viewportRef.current.offsetWidth);
    };
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (viewportRef.current)
      applyScroll(active, viewportRef.current.offsetWidth);
    if (active === timelineData.length - 1 && onEndReached) onEndReached();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const goTo = (next) => {
    if (next === active) return;
    setPrev(active);
    setActive(next);
    setIsMoving(true);
    setTimeout(() => setIsMoving(false), 520);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) goTo(Math.min(timelineData.length - 1, active + 1));
    else if (dx > 40) goTo(Math.max(0, active - 1));
    touchStartX.current = null;
  };

  const progress = Math.round(((active + 1) / timelineData.length) * 100);
  const d = timelineData[active];
  const movingRight = active >= prevActive;

  // Forklift x in VIEWPORT space:
  // Card i starts at (shift + i * CARD_W) in viewport coords.
  // Card center = shift + i*CARD_W + CARD_W/2
  // Forklift left (in the shared wrapper, which is same as viewport) = center - FORK_W/2
  const forkX = shift + active * CARD_W + CARD_W / 2 - FORK_W / 2;

  return (
    <>
      <style>{`
        @keyframes puff {
          0%   { opacity:.8; transform:scale(.4); }
          100% { opacity:0;  transform:scale(3);  }
        }
        @keyframes bounce-in {
          0%   { opacity:0; transform:translateY(10px); }
          60%  { transform:translateY(-3px); }
          100% { opacity:1; transform:translateY(0); }
        }
        .detail-anim { animation:bounce-in .35s ease forwards; }
      `}</style>

      <div
        className={`relative w-full py-12 mb-8 overflow-hidden ${dark ? "bg-black text-white" : "bg-[#f6f7f8] text-gray-900"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Our <span className="text-[#75C043]">Timeline</span>
        </h2>

        {/* ── Shared wrapper: viewport + rails in one stacking context ── */}
        <div ref={wrapperRef} className="relative w-full">
          {/* Viewport: clips horizontal scroll */}
          <div
            ref={viewportRef}
            className="relative w-full"
            style={{ overflowX: "hidden", overflowY: "hidden" }}
          >
            <div
              ref={scrollerRef}
              className="relative flex flex-row items-end gap-0 transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]"
              style={{ willChange: "transform" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {timelineData.map((item, i) => (
                <StationCard
                  key={i}
                  data={item}
                  isActive={i === active}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>

          {/* Rails */}
          <div className="relative mx-0 mt-0">
            <div className="absolute inset-0 flex items-center gap-[18px] px-2 pointer-events-none">
              {Array.from({ length: 52 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-2.5 h-8 bg-green-100 dark:bg-green-950/40 rounded"
                />
              ))}
            </div>
            <div className="h-1 bg-green-300 dark:bg-green-700 rounded-full mb-[5px]" />
            <div className="h-1 bg-green-300 dark:bg-green-700 rounded-full" />
          </div>

          {/* ── FORKLIFT: absolutely positioned in wrapper coords ──
              forkX = shift + active*CARD_W + CARD_W/2 - FORK_W/2
              This puts it exactly over the active dot in viewport space.
              zIndex 30 > rails so it renders on top of the rail lines.
              transition on `left` makes it slide smoothly.
          */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: forkX,
              bottom: 8,
              width: FORK_W,
              height: FORK_H,
              transition: "left 0.5s cubic-bezier(.4,0,.2,1)",
              zIndex: 30,
            }}
          >
            <img
              src="/f5.png"
              alt="forklift"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "bottom center",
                transform: `scaleX(${movingRight ? 1 : -1}) rotate(${isMoving ? (movingRight ? 2 : -2) : 0}deg)`,
                transformOrigin: "bottom center",
                transition: "transform 0.4s ease",
                filter: isMoving
                  ? `drop-shadow(${movingRight ? "5px" : "-5px"} 0 6px rgba(34,197,94,.5))`
                  : "drop-shadow(0 4px 10px rgba(0,0,0,.35))",
              }}
            />
            {isMoving && (
              <div
                style={{
                  position: "absolute",
                  bottom: 4,
                  [movingRight ? "left" : "right"]: -6,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,rgba(187,247,208,.8) 0%,transparent 70%)",
                  animation: "puff .5s ease-out forwards",
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
        </div>
        {/* end shared wrapper */}

        {/* Progress */}
        <div className="mx-0 mt-3 h-[3px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Detail panel */}
        {/* Detail panel */}
        <div
          key={active}
          className={`detail-anim mx-4 md:mx-16 mt-6 border rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start ${
            dark ? "border-green-800 bg-gray-900" : "border-green-300 bg-white"
          }`}
        >
          {/* Top row on mobile: year + tag + image side by side */}
          <div className="flex flex-row sm:flex-col items-start justify-between w-full sm:w-auto gap-3 sm:gap-0">
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-green-700 dark:text-green-400 leading-none">
                {d.year}
              </p>
              <span
                className={`inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  dark
                    ? "bg-green-900/50 text-green-300"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {d.tag}
              </span>
            </div>
            {/* Image: inline with year on mobile, separate column on sm+ */}
            <div className="sm:hidden flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={d.image}
                alt={d.year}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Description text — full width on mobile */}
          <p className="flex-1 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mt-1">
            {d.text}
          </p>

          {/* Image: only shows on sm+ (hidden on mobile, shown inline above instead) */}
          <div className="hidden sm:block flex-shrink-0 w-24 h-20 md:w-28 md:h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div className="bg-gray-50 h-full">
              <img
                src={d.image}
                alt={d.year}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="flex items-center justify-center gap-3 mt-5">
          <button
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="flex items-center gap-1 px-5 py-2 text-sm border rounded-lg border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
          >
            ← Prev
          </button>
          <span className="text-xs text-gray-400 min-w-[52px] text-center">
            {active + 1} / {timelineData.length}
          </span>
          <button
            onClick={() => goTo(Math.min(timelineData.length - 1, active + 1))}
            disabled={active === timelineData.length - 1}
            className="flex items-center gap-1 px-5 py-2 text-sm border rounded-lg border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </>
  );
};

export default TimelineforAbout;
