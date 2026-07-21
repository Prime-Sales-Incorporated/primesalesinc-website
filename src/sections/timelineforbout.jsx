"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

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
const TIER_LIFT = [0, 14, 28]; // px, indexed by item's shelf tier (i % 3)

function code(i) {
  return "R-" + String(i + 1).padStart(2, "0");
}

// ─── Rack Bay Card ─────────────────────────────────────────────────────────
const RackBay = ({ data, index, isActive, dark, onClick }) => {
  const tier = index % 3;
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 flex flex-col items-center cursor-pointer group focus:outline-none"
      style={{ width: CARD_W }}
      aria-label={`${data.year}: ${data.short}`}
    >
      <div
        className="w-40 rounded-xl border p-3 mb-3 text-left"
        style={{
          background: isActive
            ? dark
              ? "#1f2a20"
              : "#eaf6df"
            : dark
              ? "#1c1f22"
              : "#ffffff",
          borderColor: isActive ? "#75C043" : dark ? "#2d3136" : "#e0e2e5",
          transition: "background-color .25s ease, border-color .25s ease",
        }}
      >
        <span
          className="inline-block text-[10px] px-1.5 py-0.5 rounded mb-1.5 font-medium tracking-wide"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: dark ? "#f2c230" : "#a3790a",
            background: dark ? "#2a2400" : "#fff6d8",
            border: `1px solid ${dark ? "#4d4110" : "#e8d68a"}`,
          }}
        >
          {code(index)}
        </span>
        <p
          className="text-lg font-semibold leading-none mb-1"
          style={{ color: isActive ? "#4a8a24" : dark ? "#e2e4e6" : "#1f2327" }}
        >
          {data.year}
        </p>
        <span
          className="inline-block text-[10px] px-2 py-0.5 rounded-full mb-2 font-medium"
          style={{
            background: isActive
              ? dark
                ? "rgba(117,192,67,.18)"
                : "#dcedcb"
              : dark
                ? "#2c2f33"
                : "#f1f2f3",
            color: isActive ? "#4a8a24" : dark ? "#8b929a" : "#6b7178",
          }}
        >
          {data.tag}
        </span>

        {/* mini 3-tier shelf, pallet block sits at this item's tier */}
        <div
          className="flex flex-col-reverse gap-[5px] mb-2"
          style={{ height: 40 }}
        >
          {[0, 1, 2].map((t) => (
            <div
              key={t}
              className="relative"
              style={{
                height: 11,
                borderTop: `2px solid ${dark ? "#33373c" : "#e3e5e7"}`,
              }}
            >
              {t === tier && (
                <div
                  className="absolute rounded-sm"
                  style={{
                    bottom: 1,
                    left: 5,
                    width: 18,
                    height: 8,
                    background: isActive
                      ? "#75C043"
                      : dark
                        ? "#4a5157"
                        : "#c7ccd0",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <p
          className="text-[11px] leading-snug"
          style={{ color: dark ? "#8b929a" : "#6b7178" }}
        >
          {data.short}
        </p>
      </div>
      <div
        className="w-px h-5"
        style={{
          background: isActive ? "#75C043" : dark ? "#3a3e43" : "#d1d4d7",
        }}
      />
      <div
        className="w-4 h-4 rounded-full border-2"
        style={{
          background: isActive ? "#75C043" : dark ? "#1c1f22" : "#ffffff",
          borderColor: isActive ? "#3f7a1d" : dark ? "#4a4f56" : "#c1c5c9",
          transform: isActive ? "scale(1.25)" : "scale(1)",
          transition:
            "transform .25s ease, background-color .25s ease, border-color .25s ease",
        }}
      />
    </button>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const TimelineforAbout = ({ dark, onEndReached }) => {
  const [active, setActive] = useState(0);
  const [prevActive, setPrev] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [playing, setPlaying] = useState(false);

  const scrollerRef = useRef(null);
  const viewportRef = useRef(null);
  const wrapperRef = useRef(null);
  const touchStartX = useRef(null);
  const [shift, setShift] = useState(0);

  const applyScroll = (idx, vw) => {
    const totalW = timelineData.length * CARD_W;
    const maxShift = 0;
    const minShift = Math.min(0, vw - totalW);
    const raw = -(idx * CARD_W);
    const s = Math.max(minShift, Math.min(maxShift, raw));

    if (scrollerRef.current) {
      scrollerRef.current.style.paddingLeft = "0px";
      scrollerRef.current.style.paddingRight = "0px";
      scrollerRef.current.style.transform = `translateX(${Math.round(s)}px)`;
    }
    setShift(Math.round(s));
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

  // keep a ref in sync with the latest active index so intervals/closures
  // never act on a stale value (this was the source of the freezing)
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // single timeout handle — cleared before a new one is set so rapid
  // navigation (fast clicks, autoplay + manual nav) never stacks timers
  const moveTimeoutRef = useRef(null);
  useEffect(() => {
    return () => {
      if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    };
  }, []);

  const goTo = (next) => {
    const clamped = Math.max(0, Math.min(timelineData.length - 1, next));
    if (clamped === activeRef.current) return;
    setPrev(activeRef.current);
    setActive(clamped);
    setIsMoving(true);
    if (moveTimeoutRef.current) clearTimeout(moveTimeoutRef.current);
    moveTimeoutRef.current = setTimeout(() => setIsMoving(false), 520);
  };

  // keyboard nav — reads activeRef so the listener doesn't need to be
  // torn down and rebuilt on every step
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goTo(activeRef.current + 1);
      if (e.key === "ArrowLeft") goTo(activeRef.current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // autoplay — always reads the current index via activeRef and goes
  // through the same goTo path as everything else, no duplicated logic
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      const next =
        activeRef.current + 1 >= timelineData.length
          ? 0
          : activeRef.current + 1;
      goTo(next);
    }, 2400);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

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
  const tierLift = TIER_LIFT[active % 3];

  const forkX = shift + active * CARD_W + CARD_W / 2 - FORK_W / 2;

  const bgMain = dark ? "#0A0C0A" : "#f6f7f8";
  const ink = dark ? "#eceef0" : "#1f2327";
  const muted = dark ? "#8b929a" : "#6b7178";
  const panelBg = dark ? "#1c1f22" : "#ffffff";
  const panelBorder = dark ? "#2d3136" : "#d8e6cc";

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
        className="relative w-full py-12 mb-8 overflow-hidden"
        style={{ background: bgMain, color: ink }}
      >
        <div className="flex items-center justify-center gap-4 mb-2 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our <span className="text-[#75C043]">Timeline</span>
          </h2>
        </div>
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause autoplay" : "Play autoplay"}
            className="flex items-center gap-2 rounded-md text-xs font-medium px-3 py-1.5 transition-colors"
            style={{
              background: playing ? "#75C043" : panelBg,
              border: `1px solid ${playing ? "#75C043" : panelBorder}`,
              color: playing ? "#0e0f11" : ink,
            }}
          >
            {playing ? <Pause size={12} /> : <Play size={12} />}
            {playing ? "Pause" : "Auto-play"}
          </button>
        </div>

        {/* ── Shared wrapper: viewport + rails in one stacking context ── */}
        <div ref={wrapperRef} className="relative w-full">
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
                <RackBay
                  key={i}
                  data={item}
                  index={i}
                  isActive={i === active}
                  dark={dark}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>

          {/* Hazard-tape rail (replaces plain green rail) */}
          <div className="relative mx-0 mt-0">
            <div
              className="h-2.5 rounded-sm mb-[5px]"
              style={{
                background:
                  "repeating-linear-gradient(135deg, #232527 0 9px, #f2c230 9px 18px)",
                opacity: dark ? 0.9 : 0.8,
              }}
            />
            <div
              className="h-1 rounded-full"
              style={{ background: dark ? "#2d3136" : "#dfe2e4" }}
            />
          </div>

          {/* ── FORKLIFT (user's own image asset) ──
              Positioned once at (0,0) and moved purely with `transform`.
              Animating left/bottom forces layout on every frame; translate()
              is compositor-only, which is what keeps this at 60fps. */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: 0,
              bottom: 8,
              width: FORK_W,
              height: FORK_H,
              transform: `translate3d(${forkX}px, ${-tierLift}px, 0)`,
              transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
              willChange: "transform",
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
                filter: "drop-shadow(0 4px 10px rgba(0,0,0,.3))",
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
        <div
          className="mx-0 mt-3 h-[3px] rounded-full overflow-hidden"
          style={{ background: dark ? "#232527" : "#e4e6e8" }}
        >
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Detail panel — compact row: icon, year/tag/description, inline prev/next */}
        <div
          key={active}
          className="detail-anim mx-4 md:mx-16 mt-6 border rounded-xl p-5 flex items-center gap-4"
          style={{
            borderColor: dark ? "#2d4a1e" : "#bfe3a3",
            background: panelBg,
            borderLeftWidth: 4,
            borderLeftColor: "#75C043",
          }}
        >
          <div
            className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center"
            style={{
              background: "#ffffff",
              border: dark ? "1px solid #2d3136" : "1px solid #e5e7e8",
            }}
          >
            <img
              src={d.image}
              alt={d.year}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm md:text-base font-semibold">
              <span style={{ color: ink }}>{d.year}</span>
              <span style={{ color: muted }}> · </span>
              <span style={{ color: "#75C043" }}>{d.tag}</span>
            </p>
            <p
              className="text-sm leading-relaxed mt-1"
              style={{ color: dark ? "#c3c7cb" : "#41454b" }}
            >
              {d.text}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="Previous"
              className="w-8 h-8 rounded-md border flex items-center justify-center transition-colors disabled:opacity-30"
              style={{ borderColor: dark ? "#2d3136" : "#d1d5d8", color: ink }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() =>
                goTo(Math.min(timelineData.length - 1, active + 1))
              }
              disabled={active === timelineData.length - 1}
              aria-label="Next"
              className="w-8 h-8 rounded-md border flex items-center justify-center transition-colors disabled:opacity-30"
              style={{ borderColor: dark ? "#2d3136" : "#d1d5d8", color: ink }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* mobile-only prev/next (panel arrows are hidden below sm) */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-4">
          <button
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="flex items-center gap-1 px-4 py-1.5 text-sm border rounded-lg transition-colors disabled:opacity-30"
            style={{ borderColor: dark ? "#2d3136" : "#d1d5d8", color: muted }}
          >
            ← Prev
          </button>
          <button
            onClick={() => goTo(Math.min(timelineData.length - 1, active + 1))}
            disabled={active === timelineData.length - 1}
            className="flex items-center gap-1 px-4 py-1.5 text-sm border rounded-lg transition-colors disabled:opacity-30"
            style={{ borderColor: dark ? "#2d3136" : "#d1d5d8", color: muted }}
          >
            Next →
          </button>
        </div>

        {/* progress ticks */}
        <div className="flex items-center justify-center gap-1.5 mt-5 px-4 flex-wrap">
          {timelineData.map((item, i) => (
            <button
              key={item.year}
              onClick={() => goTo(i)}
              aria-label={`Jump to ${item.year}`}
              className="rounded-full focus:outline-none transition-all duration-300"
              style={{
                width: i === active ? 18 : 6,
                height: 6,
                background:
                  i === active ? "#75C043" : dark ? "#2d3136" : "#dfe2e4",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineforAbout;
