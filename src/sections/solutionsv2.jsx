import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Non-translatable data: images, videos, and routing slugs (tab) stay fixed.
// title/desc are now looked up via translation keys solutions_<i>_title / solutions_<i>_desc
const solutions = [
  {
    img: "/cold-chain.jpg",
    video: "/cold.mp4",
    tab: "Cold Chain",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNW_nVSRhCGbRNUmfJjMf_qqbetLTR1MfkYTjlbN1bxowIFGpPc_pqjlkz57tkrqzGzTxPq8PwzE9ipVXNDdZIAcKiVL5N4Mz3E6P2z-We6QhbdIFbA831k-Xr4BLA58iwOx551cKoYW8PmuSg3HT7CMPJIcIoL7cn-HQRpWWzfpZg00nFAVOORvBeAQvR4Qd0YnaiVZIF0cIvTnm6Dvi1xXQ9nfy5pWpChb4G6UiUZD4aVnHtb8QUacEPEQZG-H8IW_1JI0spUF4",
    video: "/iss.mp4",
    tab: "Industrial Storage",
  },
  {
    img: "/forklift.jpg",
    video: "/mhe.mp4",
    tab: "MHE",
  },
  {
    img: "/pallets.png",
    video: "/pallets.mp4",
    tab: "Plastic Pallets, Bins and Crates",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGGSThrlguVhMZyhxolbW6gvgAG3wmWFGtc-9atK_OJxP1UDmqJ167tUmqymcGpawV6khJuXBqqm9z19CBdWX9qHLT972AGYuHwNTR6YHK8GZoEAGlPjAgGeQYO5H59j7r1VslSNDMpmSCvHS85actfkRSPlfLliBCDDb57G1jWrpS_5s4Ew5OlPa0D_q2gqZrMCk0EX2TZLCoCCigcLqHyOuJvU8WWfLIloxFoIIQCB71aAIE8tqdUZmBxdBVzj0kxoLqz-yNXWA",
    video: "/automationvid.mp4",
    tab: "Automation Solutions",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZi1mz4AVCxzDP_KgpTcu9rfEVAkWAMxLWw&s",
    video: "/hormann.mp4",
    tab: "Docks and Doors",
  },
  {
    img: "https://images3.welcomesoftware.com/Zz05ZTBlZTI3MDBhYmExMWVlYWE4NzY2YjhiM2IzOTMzYQ==?w=1400&h=1120&format=webp",
    video: "/wms.mp4",
    tab: "Warehouse Management System",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C561BAQHaY1KfM2dfGQ/company-background_10000/company-background_10000/0/1630636203551/batteryasiasingapore_cover?e=2147483647&v=beta&t=Gq3eJS9DGVbtHLFoJHaK5uSoEOTEBjin7UJirmHNB4s",
    video: "/batteries.mp4",
    tab: "Industrial Batteries and Chargers",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2ohA0l7JjkFtGBBUZNnuYBCFf0GbvKi78Q&s",
    video: "/brunzyeel.mp4",
    tab: "Commercial Solutions",
  },
];

const tabSlug = (str) => str.trim().toLowerCase().replace(/\s+/g, "-");

const OurSolutions = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef(null);

  const current = solutions[active];

  const handleSelect = (i) => {
    setActive(i);
    setHovering(false);
    const vid = videoRef.current;
    if (vid) vid.pause();
  };

  const handleBoxEnter = () => {
    setHovering(true);
    const vid = videoRef.current;
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
  };

  const handleBoxLeave = () => {
    setHovering(false);
    const vid = videoRef.current;
    if (vid) vid.pause();
  };

  return (
    <div className="bg-background-light px-2 md:px-16 dark:bg-background-dark text-gray-900 dark:text-white font-display relative">
      {/* Hidden links for SEO / prerendering */}
      <div style={{ display: "none" }}>
        {solutions.map((s, i) => (
          <a key={i} href={`/solutions/${tabSlug(s.tab)}`}>
            {t(`solutions_${i}_title`)}
          </a>
        ))}
      </div>

      <main className="container mx-auto px-2 xl:px-2 2xl:px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark">
            {t("solutions_heading_pre")}{" "}
            <span className="text-[#75C043]">
              {t("solutions_heading_accent")}
            </span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            {t("solutions_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8">
          {/* Solution list */}
          <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {solutions.map((solution, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelect(i)}
                className={`group relative flex items-center gap-3 rounded-lg px-3 py-3 shrink-0 whitespace-nowrap md:whitespace-normal transition-colors duration-200 text-left
                  ${
                    i === active
                      ? "bg-green-500/10 dark:bg-green-500/10"
                      : "hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
              >
                <span
                  className={`absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-green-500 transition-opacity duration-200 hidden md:block
                    ${i === active ? "opacity-100" : "opacity-0"}`}
                />
                <span
                  className={`h-9 w-9 rounded-md overflow-hidden shrink-0 border transition-colors duration-200
                    ${
                      i === active
                        ? "border-green-500"
                        : "border-gray-200 dark:border-white/10"
                    }`}
                >
                  <img
                    src={solution.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
                <span
                  className={`text-sm transition-colors duration-200
                    ${
                      i === active
                        ? "text-gray-900 dark:text-white font-semibold"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                >
                  {t(`solutions_${i}_title`)}
                </span>
              </button>
            ))}
          </div>

          {/* Preview panel */}
          <div>
            <div
              className="relative h-64 md:h-[26rem] w-full rounded-lg overflow-hidden shadow-lg shadow-gray-300 dark:shadow-gray-900"
              onMouseEnter={handleBoxEnter}
              onMouseLeave={handleBoxLeave}
            >
              <img
                src={current.img}
                alt={`${t(`solutions_${active}_title`)} solutions in the Philippines | Prime Sales Inc.`}
                className={`h-full w-full object-cover absolute inset-0 transition-opacity duration-300 ${
                  hovering ? "opacity-0" : "opacity-100"
                }`}
              />
              {current.video && (
                <video
                  ref={videoRef}
                  src={current.video}
                  muted
                  loop
                  playsInline
                  className={`h-full w-full object-cover absolute inset-0 transition-opacity duration-300 ${
                    hovering ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>

            <div key={active} className="mt-5 animate-[fadein_0.3s_ease]">
              <h3 className="text-xl md:text-2xl font-bold text-text-light dark:text-text-dark">
                {t(`solutions_${active}_title`)}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
                {t(`solutions_${active}_desc`)}
              </p>
              <Link
                to={`/solutions/${tabSlug(current.tab)}`}
                className="inline-flex items-center gap-2 mt-5 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 transition-colors duration-200"
              >
                {t("solutions_view_more")}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OurSolutions;
