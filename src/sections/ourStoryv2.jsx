import React, { useState, useEffect } from "react";
import {
  Package,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Truck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const GREEN = "#75C043";

// year stays as data (used for sorting/labels); title/text are looked up via
// translation keys journey_story_<i>_year / journey_story_<i>_title / journey_story_<i>_text
const STORY_COUNT = 5;

const keyframes = `
  @keyframes rollerSpin { from { background-position: 0 0; } to { background-position: -40px 0; } }
  @keyframes beamPulse { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
  @keyframes dashMove { to { stroke-dashoffset: -24; } }
  @keyframes laserSweep { 0% { left: 0%; } 50% { left: 100%; } 100% { left: 0%; } }
  @keyframes gridDrift { from { background-position: 0 0; } to { background-position: 32px 32px; } }
`;

const rgba = (hex, a) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
};

/* ---------------- Theme ---------------- */
const getTheme = (dark) => ({
  bg: dark ? "#0A0C0A" : "#F6F7F4",
  panel: dark ? "#0f120f" : "#FFFFFF",
  panelAlt: dark ? "#111311" : "#FFFFFF",
  tabBar: dark ? "#0d0e10" : "#FFFFFF",
  text: dark ? "#ffffff" : "#12140F",
  border: dark ? "rgba(255,255,255,0.1)" : "rgba(18,20,15,0.12)",
  borderStrong: dark ? "rgba(255,255,255,0.15)" : "rgba(18,20,15,0.2)",
  dashedBorder: dark ? "rgba(255,255,255,0.25)" : "rgba(18,20,15,0.25)",
  muted25: dark ? "rgba(255,255,255,0.25)" : "rgba(18,20,15,0.3)",
  muted1: dark ? "rgba(255,255,255,0.3)" : "rgba(18,20,15,0.35)",
  muted35: dark ? "rgba(255,255,255,0.35)" : "rgba(18,20,15,0.4)",
  muted2: dark ? "rgba(255,255,255,0.4)" : "rgba(18,20,15,0.45)",
  muted3: dark ? "rgba(255,255,255,0.5)" : "rgba(18,20,15,0.5)",
  muted6: dark ? "rgba(255,255,255,0.6)" : "rgba(18,20,15,0.65)",
  subtleBg: dark ? "rgba(255,255,255,0.02)" : "rgba(18,20,15,0.03)",
  subtleBg2: dark ? "rgba(255,255,255,0.03)" : "rgba(18,20,15,0.04)",
  subtleBg1: dark ? "rgba(255,255,255,0.05)" : "rgba(18,20,15,0.06)",
  stripe: dark ? "rgba(255,255,255,0.06)" : "rgba(18,20,15,0.08)",
  stripe2: dark ? "rgba(255,255,255,0.08)" : "rgba(18,20,15,0.1)",
  trackBg: dark ? "#1a1d1a" : "#E7E9E5",
  dotInactive: dark ? "#4b524b" : "#C7CBC1",
  barcodeBars: dark ? "rgba(255,255,255,0.8)" : "rgba(18,20,15,0.85)",
});

/* ---------------- Concept 1: Rack Timeline ---------------- */
const RackConcept = ({ dark }) => {
  const { t } = useTranslation();
  const th = getTheme(dark);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % STORY_COUNT),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ background: th.bg, color: th.text }}
      className="px-6 md:px-16 py-16 md:py-20"
    >
      <style>{keyframes}</style>
      <div className="text-center mb-14">
        <p
          style={{ color: GREEN }}
          className="text-xs font-bold tracking-widest uppercase mb-3"
        >
          {t("journey_rack_eyebrow")}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          {t("journey_rack_title_pre")}{" "}
          <span style={{ color: GREEN }}>{t("journey_rack_title_accent")}</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {Array.from({ length: STORY_COUNT }).map((_, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-full text-left"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <div className="flex items-stretch gap-4 md:gap-8">
                <div className="flex flex-col items-center w-14 md:w-20 shrink-0">
                  <div
                    style={{
                      background: i <= active ? GREEN : th.border,
                      boxShadow: isActive
                        ? `0 0 16px 2px ${rgba(GREEN, 0.6)}`
                        : "none",
                      width: 8,
                      borderRadius: 9999,
                      flex: 1,
                    }}
                  />
                  <span
                    style={{
                      color: isActive ? GREEN : th.muted1,
                    }}
                    className="mt-2 text-xs font-mono tracking-wider"
                  >
                    L{`0${STORY_COUNT - i}`}
                  </span>
                </div>

                <div
                  style={{
                    flex: 1,
                    marginBottom: 16,
                    border: `1px solid ${isActive ? rgba(GREEN, 0.6) : th.border}`,
                    background: isActive ? rgba(GREEN, 0.06) : th.subtleBg,
                    opacity: isActive ? 1 : 0.5,
                    borderRadius: 8,
                    padding: "16px 20px",
                    transition: "all .3s",
                  }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <Package size={16} color={isActive ? GREEN : th.muted1} />
                    <span
                      style={{
                        color: isActive ? GREEN : th.muted2,
                      }}
                      className="font-mono text-xs tracking-wider"
                    >
                      {t(`journey_story_${i}_year`)}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-1">
                    {t(`journey_story_${i}_title`)}
                  </h3>
                  {isActive && (
                    <p
                      style={{ color: th.muted6 }}
                      className="text-sm md:text-base leading-relaxed max-w-2xl"
                    >
                      {t(`journey_story_${i}_text`)}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------- Concept 2: Conveyor Journey ---------------- */
const ConveyorConcept = ({ dark }) => {
  const { t } = useTranslation();
  const th = getTheme(dark);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % STORY_COUNT),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ background: th.bg, color: th.text }}
      className="px-6 md:px-16 py-16 md:py-20 overflow-hidden"
    >
      <style>{keyframes}</style>
      <div className="text-center mb-16">
        <p
          style={{ color: GREEN }}
          className="text-xs font-bold tracking-widest uppercase mb-3"
        >
          {t("journey_conveyor_eyebrow")}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          {t("journey_conveyor_title_pre")}{" "}
          <span style={{ color: GREEN }}>
            {t("journey_conveyor_title_accent")}
          </span>
        </h2>
      </div>

      <div
        className="relative max-w-xl mx-auto mb-16"
        style={{ minHeight: 150 }}
      >
        <div
          className="absolute inset-x-6"
          style={{
            top: -12,
            height: 24,
            borderRadius: 9999,
            background: rgba(GREEN, 0.25),
            filter: "blur(8px)",
            animation: "beamPulse 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            border: `1px solid ${rgba(GREEN, 0.5)}`,
            background: th.panel,
            borderRadius: 10,
          }}
          className="relative px-6 py-6 text-center"
        >
          <span
            style={{ color: GREEN }}
            className="font-mono text-xs tracking-wider"
          >
            {t(`journey_story_${active}_year`)}
          </span>
          <h3 className="text-xl md:text-2xl font-bold mt-1 mb-2">
            {t(`journey_story_${active}_title`)}
          </h3>
          <p style={{ color: th.muted6 }} className="text-sm leading-relaxed">
            {t(`journey_story_${active}_text`)}
          </p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div
          style={{
            height: 12,
            borderRadius: 9999,
            background: th.trackBg,
            border: `1px solid ${th.border}`,
            backgroundImage: `repeating-linear-gradient(90deg, ${th.stripe2} 0 2px, transparent 2px 20px)`,
            animation: "rollerSpin 1.2s linear infinite",
          }}
        />
        <div className="flex justify-between mt-4">
          {Array.from({ length: STORY_COUNT }).map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    border: `1px solid ${isActive ? GREEN : th.borderStrong}`,
                    background: isActive ? rgba(GREEN, 0.1) : th.subtleBg2,
                    transform: isActive ? "translateY(-4px)" : "none",
                    transition: "all .3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Package size={16} color={isActive ? GREEN : th.muted1} />
                </div>
                <span
                  style={{ color: isActive ? GREEN : th.muted1 }}
                  className="text-xs font-mono"
                >
                  {t(`journey_story_${i}_year`)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ---------------- Concept 3: Shipping Route ---------------- */
const RouteConcept = ({ dark }) => {
  const { t } = useTranslation();
  const th = getTheme(dark);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % STORY_COUNT),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  const n = STORY_COUNT;
  const pad = 8;

  return (
    <div
      style={{ background: th.bg, color: th.text }}
      className="px-6 md:px-16 py-16 md:py-20"
    >
      <style>{keyframes}</style>
      <div className="text-center mb-16">
        <p
          style={{ color: GREEN }}
          className="text-xs font-bold tracking-widest uppercase mb-3"
        >
          {t("journey_route_eyebrow")}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          {t("journey_route_title_pre")}{" "}
          <span style={{ color: GREEN }}>
            {t("journey_route_title_accent")}
          </span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <svg
          viewBox="0 0 100 20"
          className="w-full"
          style={{ height: 72, overflow: "visible" }}
        >
          <path
            d={`M ${pad} 12 Q 30 2, 50 12 T ${100 - pad} 12`}
            fill="none"
            stroke={rgba(GREEN, 0.35)}
            strokeWidth="0.4"
            strokeDasharray="2 2"
            style={{ animation: "dashMove 1.5s linear infinite" }}
          />
          {Array.from({ length: STORY_COUNT }).map((_, i) => {
            const x = pad + (i * (100 - pad * 2)) / (n - 1);
            const y = 12 + Math.sin((i / (n - 1)) * Math.PI) * -6;
            const isActive = i === active;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={isActive ? 2.4 : 1.4}
                fill={isActive ? GREEN : th.dotInactive}
                onClick={() => setActive(i)}
                style={{
                  cursor: "pointer",
                  filter: isActive ? `drop-shadow(0 0 3px ${GREEN})` : "none",
                }}
              />
            );
          })}
        </svg>

        <div className="flex justify-between px-1 mb-10">
          {Array.from({ length: STORY_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                color: i === active ? GREEN : th.muted1,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="font-mono text-xs tracking-wider"
            >
              {t(`journey_story_${i}_year`)}
            </button>
          ))}
        </div>

        <div
          style={{
            border: `1px solid ${th.border}`,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              borderBottom: `1px solid ${th.border}`,
              background: th.subtleBg,
            }}
            className="flex items-center justify-between px-5 py-2.5"
          >
            <span
              style={{ color: th.muted2 }}
              className="flex items-center gap-2 font-mono text-xs tracking-wider"
            >
              <MapPin size={12} color={GREEN} />
              {t("journey_route_waypoint")}{" "}
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(n).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setActive((active - 1 + n) % n)}
                style={{
                  color: th.muted2,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setActive((active + 1) % n)}
                style={{
                  color: th.muted2,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="px-6 py-6 md:px-8 md:py-7">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {t(`journey_story_${active}_title`)}
            </h3>
            <p
              style={{ color: th.muted6 }}
              className="text-sm md:text-base leading-relaxed max-w-2xl"
            >
              {t(`journey_story_${active}_text`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Concept 4: Loading Dock ---------------- */
const DockConcept = ({ dark }) => {
  const { t } = useTranslation();
  const th = getTheme(dark);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % STORY_COUNT),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ background: th.bg, color: th.text }}
      className="px-6 md:px-16 py-16 md:py-20"
    >
      <style>{keyframes}</style>
      <div className="text-center mb-14">
        <p
          style={{ color: GREEN }}
          className="text-xs font-bold tracking-widest uppercase mb-3"
        >
          {t("journey_dock_eyebrow")}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          {t("journey_dock_title_pre")}{" "}
          <span style={{ color: GREEN }}>{t("journey_dock_title_accent")}</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-5 gap-3 md:gap-4 mb-10">
        {Array.from({ length: STORY_COUNT }).map((_, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <div
                style={{
                  border: `1px solid ${isActive ? GREEN : th.borderStrong}`,
                  borderRadius: "6px 6px 2px 2px",
                  background: th.panelAlt,
                  overflow: "hidden",
                  position: "relative",
                  height: 110,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: isActive ? rgba(GREEN, 0.12) : th.trackBg,
                    backgroundImage: isActive
                      ? "none"
                      : `repeating-linear-gradient(0deg, ${th.stripe} 0 6px, transparent 6px 12px)`,
                    transform: isActive ? "translateY(-70%)" : "translateY(0%)",
                    transition: "transform .5s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: 8,
                  }}
                >
                  <Truck size={18} color={isActive ? GREEN : th.muted25} />
                </div>
              </div>
              <div
                style={{ color: isActive ? GREEN : th.muted35 }}
                className="mt-2 text-[10px] md:text-xs font-mono tracking-wider text-center"
              >
                {t("journey_dock_bay")} {String(i + 1).padStart(2, "0")}
              </div>
            </button>
          );
        })}
      </div>

      <div
        className="max-w-2xl mx-auto text-center"
        style={{
          border: `1px solid ${th.border}`,
          borderRadius: 10,
          padding: "24px 28px",
          background: th.subtleBg,
        }}
      >
        <span
          style={{ color: GREEN }}
          className="font-mono text-xs tracking-wider"
        >
          {t(`journey_story_${active}_year`)}
        </span>
        <h3 className="text-xl md:text-2xl font-bold mt-1 mb-2">
          {t(`journey_story_${active}_title`)}
        </h3>
        <p
          style={{ color: th.muted6 }}
          className="text-sm md:text-base leading-relaxed"
        >
          {t(`journey_story_${active}_text`)}
        </p>
      </div>
    </div>
  );
};

/* ---------------- Concept 6: Barcode Scan ---------------- */
const BarcodeConcept = ({ dark }) => {
  const { t } = useTranslation();
  const th = getTheme(dark);
  const [active, setActive] = useState(0);
  const widths = [3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1];

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % STORY_COUNT),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ background: th.bg, color: th.text }}
      className="px-6 md:px-16 py-16 md:py-20"
    >
      <style>{keyframes}</style>
      <div className="text-center mb-14">
        <p
          style={{ color: GREEN }}
          className="text-xs font-bold tracking-widest uppercase mb-3"
        >
          {t("journey_barcode_eyebrow")}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold">
          {t("journey_barcode_title_pre")}{" "}
          <span style={{ color: GREEN }}>
            {t("journey_barcode_title_accent")}
          </span>
        </h2>
      </div>

      <div
        className="max-w-3xl mx-auto relative mb-3"
        style={{
          background: th.panelAlt,
          border: `1px solid ${th.border}`,
          borderRadius: 8,
          padding: "20px 16px",
          overflow: "hidden",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "stretch", height: 56, gap: 2 }}
        >
          {widths.map((w, i) => (
            <div
              key={i}
              style={{
                width: w * 3,
                background: th.barcodeBars,
                borderRadius: 1,
              }}
            />
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 2,
            background: "#E5484D",
            boxShadow: "0 0 8px 2px rgba(229,72,77,0.7)",
            animation: "laserSweep 3.5s linear infinite",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto flex justify-between mb-10 px-1">
        {Array.from({ length: STORY_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: i === active ? GREEN : th.muted1,
            }}
            className="text-xs font-mono tracking-wider"
          >
            {t(`journey_story_${i}_year`)}
          </button>
        ))}
      </div>

      <div
        className="max-w-xl mx-auto"
        style={{
          border: `1px dashed ${th.dashedBorder}`,
          borderRadius: 6,
          padding: "20px 24px",
          fontFamily: "monospace",
          background: th.subtleBg,
        }}
      >
        <div
          style={{
            color: th.muted2,
            fontSize: 11,
            marginBottom: 8,
          }}
        >
          {t("journey_barcode_receipt_prefix")}{" "}
          {String(active + 1).padStart(3, "0")}{" "}
          {t("journey_barcode_receipt_suffix")}
        </div>
        <div style={{ color: GREEN, fontSize: 13, marginBottom: 4 }}>
          {t(`journey_story_${active}_year`)}
        </div>
        <h3
          className="text-lg md:text-xl font-bold mb-2"
          style={{ fontFamily: "sans-serif" }}
        >
          {t(`journey_story_${active}_title`)}
        </h3>
        <p style={{ color: th.muted6 }} className="text-sm leading-relaxed">
          {t(`journey_story_${active}_text`)}
        </p>
      </div>
    </div>
  );
};

/* ---------------- Picker ---------------- */
const concepts = [
  { id: "rack", labelKey: "journey_tab_rack", Comp: RackConcept },
  { id: "conveyor", labelKey: "journey_tab_conveyor", Comp: ConveyorConcept },
  { id: "route", labelKey: "journey_tab_route", Comp: RouteConcept },
  { id: "dock", labelKey: "journey_tab_dock", Comp: DockConcept },
  { id: "barcode", labelKey: "journey_tab_barcode", Comp: BarcodeConcept },
];

const JourneyConcepts = ({ dark = false }) => {
  const { t } = useTranslation();
  const th = getTheme(dark);
  const [tab, setTab] = useState("rack");
  const Active = concepts.find((c) => c.id === tab).Comp;

  return (
    <div style={{ minHeight: "100vh", background: th.bg }}>
      <div
        style={{
          background: th.tabBar,
          borderBottom: `1px solid ${th.border}`,
        }}
        className="sticky top-0 z-10 flex flex-wrap gap-2 p-3"
      >
        {concepts.map((c) => {
          const isActive = tab === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setTab(c.id)}
              style={{
                background: isActive ? GREEN : th.subtleBg1,
                color: isActive ? "#000" : th.muted3,
                border: "none",
                cursor: "pointer",
              }}
              className="flex-1 py-2.5 rounded-md text-xs md:text-sm font-semibold transition-colors"
            >
              {t(c.labelKey)}
            </button>
          );
        })}
      </div>
      <Active dark={dark} />
    </div>
  );
};

export default JourneyConcepts;
