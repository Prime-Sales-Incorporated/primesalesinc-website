import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Showroom – full-screen product carousel (centre product large, neighbours dimmed at the edges).
 *
 * Usage:
 *   import Showroom from "./Showroom";
 *   <Showroom />
 *
 * Each item can have an optional `navLabel` – a shorter name used in the top menu
 * (the full `title` is still shown as the big heading).
 */

const DEFAULT_ITEMS = [
  {
    id: "pallet-trucks",
    title: "Pallet Trucks",
    image: "/linde/pallettrucks/2.png",
    range: "/pallet-trucks",
    enquire: "/contact",
  },
  {
    id: "order-pickers",
    title: "Order Pickers",
    image: "/linde/orderpickers/2.png",
    range: "/order-pickers",
    enquire: "/contact",
  },
  {
    id: "stackers",
    title: "Pallet Stackers",
    image: "/linde/palletstackers/2.png",
    range: "/stackers",
    enquire: "/contact",
  },
  {
    id: "forklifts",
    title: "Electric Forklifts",
    image: "/linde/forklift/2.png",
    range: "/forklifts",
    enquire: "/contact",
  },
  {
    id: "iccb",
    title: "Internal Combustion Counterbalance Truck",
    navLabel: "IC Counterbalance",
    image: "/linde/iccb/2.png",
    range: "/forklifts",
    enquire: "/contact",
  },
  {
    id: "reach-trucks",
    title: "Reach Trucks",
    image: "/linde/reachtrucks/2.png",
    range: "/reach-trucks",
    enquire: "/contact",
  },
  {
    id: "vna",
    title: "VNA",
    image: "/linde/vna/2.png",
    range: "/vna",
    enquire: "/contact",
  },
];

const css = `
.sr { --sr-red:#d6231e; position:relative; height:100vh; min-height:620px; overflow:hidden; color:#fff;
  font-family:"Helvetica Neue",Arial,sans-serif; background:#161616; }
.sr-bg { position:absolute; inset:0; background-size:cover; background-position:center;
  background-image:var(--sr-bg); }
.sr-bg::after { content:""; position:absolute; inset:0;
  background:linear-gradient(rgba(0,0,0,.45), transparent 30%); }

/* nav = logo | links | burger, side by side so nothing overlaps */
.sr-nav { position:absolute; top:0; left:0; right:0; z-index:5; display:flex; align-items:center;
  gap:24px; padding:12px 24px; }
.sr-logo { flex:none; height:56px; width:auto; display:block; }
.sr-links { flex:1; min-width:0; display:flex; align-items:center; justify-content:center;
  gap:clamp(12px,1.8vw,36px); }
.sr-links button { background:none; border:0; color:#fff; font:inherit; font-size:clamp(13px,1.05vw,17px);
  white-space:nowrap; cursor:pointer; padding:6px 2px; border-bottom:2px solid transparent; }
.sr-links button[aria-current="true"] { border-color:var(--sr-red); }
.sr-links button:hover { opacity:.8; }
.sr-burger { flex:none; width:30px; height:24px; background:none; border:0; margin-left:auto;
  cursor:pointer; display:flex; flex-direction:column; justify-content:space-between; padding:0; }
.sr-burger span { height:4px; background:#fff; border-radius:2px; }

.sr-head { position:absolute; top:110px; left:0; right:0; z-index:4; text-align:center; padding:0 16px; }
.sr-head h2 { margin:0 0 28px; font-size:clamp(28px,4vw,52px); font-weight:800; }
.sr-cta { display:inline-flex; }
.sr-cta a { display:block; width:225px; padding:12px 0; font-size:16px; font-weight:600; color:#fff;
  text-decoration:none; border:2px solid #fff; }
.sr-cta a:first-child { background:#000; border-color:#000; }
.sr-cta a:hover { background:var(--sr-red); border-color:var(--sr-red); }

.sr-stage { position:absolute; inset:0; z-index:2; }
.sr-slide { position:absolute; left:50%; top:62%; width:min(46vw,640px); height:min(42vh,420px);
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  transition:transform .7s cubic-bezier(.2,.7,.2,1), opacity .7s, filter .7s; will-change:transform; }
.sr-slide img { max-width:100%; max-height:100%; object-fit:contain; user-select:none; -webkit-user-drag:none;
  filter:drop-shadow(0 30px 25px rgba(0,0,0,.6)); }
.sr-slide .sr-fallback { font-size:22px; opacity:.6; }
.sr-slide[data-pos="0"]  { transform:translate(-50%,-50%) scale(1); opacity:1; z-index:3; cursor:default; }
.sr-slide[data-pos="1"]  { transform:translate(calc(-50% + 98%),-50%) scale(.85); opacity:.75; filter:brightness(.55) blur(1px); }
.sr-slide[data-pos="-1"] { transform:translate(calc(-50% - 98%),-50%) scale(.85); opacity:.75; filter:brightness(.55) blur(1px); }
.sr-slide[data-pos="far"] { transform:translate(-50%,-50%) scale(.6); opacity:0; pointer-events:none; }

.sr-arrow { position:absolute; top:62%; z-index:6; width:64px; height:64px; border-radius:50%; border:0;
  background:rgba(230,230,230,.85); cursor:pointer; display:grid; place-items:center; transform:translateY(-50%); }
.sr-arrow:hover { background:#fff; }
.sr-arrow svg { width:30px; height:30px; stroke:#222; fill:none; stroke-width:5; stroke-linecap:round; stroke-linejoin:round; }
.sr-prev { left:calc(50% - min(23vw,320px) - 90px); }
.sr-next { right:calc(50% - min(23vw,320px) - 90px); }

.sr-dots { position:absolute; bottom:9%; left:0; right:0; z-index:6; display:flex; justify-content:center; gap:8px; }
.sr-dots button { width:32px; height:8px; border:0; padding:0; background:#e8e8e8; cursor:pointer; }
.sr-dots button[aria-current="true"] { width:36px; background:var(--sr-red); }

.sr button:focus-visible, .sr a:focus-visible { outline:3px solid #fff; outline-offset:3px; }

/* too narrow for 7 links: hide them, the burger stays */
@media (max-width:1000px) {
  .sr-links { display:none; }
}
@media (max-width:760px) {
  .sr-nav { padding:10px 16px; }
  .sr-logo { height:44px; }
  .sr-slide { width:80vw; }
  .sr-slide[data-pos="1"]  { transform:translate(calc(-50% + 85%),-50%) scale(.7); }
  .sr-slide[data-pos="-1"] { transform:translate(calc(-50% - 85%),-50%) scale(.7); }
  .sr-arrow { width:48px; height:48px; }
  .sr-prev { left:10px; } .sr-next { right:10px; }
  .sr-cta a { width:150px; }
}
@media (prefers-reduced-motion:reduce) { .sr-slide { transition:none; } }
`;

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={dir === "left" ? "M15 4 7 12l8 8" : "m9 4 8 8-8 8"} />
  </svg>
);

export default function Showroom({
  items = DEFAULT_ITEMS,
  background = "/showroom.png", // warehouse photo
  logoSrc = "/logo1.png", // logo image shown in the top-left corner
  startIndex = 3,
  autoPlayMs = 0, // e.g. 6000 to auto-advance
}) {
  const n = items.length;
  const [active, setActive] = useState(Math.min(startIndex, n - 1));
  const [missing, setMissing] = useState({});
  const touchX = useRef(null);

  const go = useCallback((i) => setActive(((i % n) + n) % n), [n]);
  const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);
  const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    if (!autoPlayMs) return;
    const t = setInterval(next, autoPlayMs);
    return () => clearInterval(t);
  }, [autoPlayMs, next]);

  // shortest circular distance from the active slide
  const posOf = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return Math.abs(d) > 1 ? "far" : String(d);
  };

  const current = items[active];

  return (
    <section
      className="sr"
      aria-roledescription="carousel"
      aria-label="Product showroom"
      style={{ "--sr-bg": `url(${background})` }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <style>{css}</style>
      <div className="sr-bg" />

      <nav className="sr-nav" aria-label="Product categories">
        <img className="sr-logo" src={logoSrc} alt="Company logo" />
        <div className="sr-links">
          {items.map((it, i) => (
            <button
              key={it.id}
              aria-current={i === active}
              onClick={() => go(i)}
            >
              {it.navLabel || it.title}
            </button>
          ))}
        </div>
        <button className="sr-burger" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className="sr-head">
        <h2 aria-live="polite">{current.title}</h2>
        <div className="sr-cta">
          <a href={current.range}>View Range</a>
          <a href={current.enquire}>Enquire</a>
        </div>
      </div>

      <div className="sr-stage">
        {items.map((it, i) => {
          const pos = posOf(i);
          return (
            <div
              key={it.id}
              className="sr-slide"
              data-pos={pos}
              aria-hidden={pos !== "0"}
              onClick={() => pos !== "0" && go(i)}
            >
              {missing[it.id] ? (
                <span className="sr-fallback">{it.title}</span>
              ) : (
                <img
                  src={it.image}
                  alt={it.title}
                  draggable="false"
                  onError={() => setMissing((m) => ({ ...m, [it.id]: true }))}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        className="sr-arrow sr-prev"
        onClick={prev}
        aria-label="Previous product"
      >
        <Chevron dir="left" />
      </button>
      <button
        className="sr-arrow sr-next"
        onClick={next}
        aria-label="Next product"
      >
        <Chevron dir="right" />
      </button>

      <div className="sr-dots">
        {items.map((it, i) => (
          <button
            key={it.id}
            aria-label={`Show ${it.title}`}
            aria-current={i === active}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
