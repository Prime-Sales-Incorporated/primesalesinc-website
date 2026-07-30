import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// icon stays fixed (Material Icons name); everything else is looked up via
// translation keys why_<i>_title / why_<i>_highlight / why_<i>_stat / why_<i>_unit / why_<i>_body
const FEATURES = [
  { icon: "star_outline" },
  { icon: "support_agent" },
  { icon: "verified_user" },
  { icon: "engineering" },
  { icon: "settings" },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const currentIcon = FEATURES[active].icon;

  return (
    <section className="py-16 px-4 lg:px-16 bg-background-light dark:bg-background-dark mb-0">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
          {t("why_heading_pre")}{" "}
          <span className="text-[#75C043]">{t("why_heading_accent")}</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Image Section */}
          <div className="lg:w-1/2 h-[10em] md:h-[24em] flex">
            <img
              src="/logo2.png"
              alt="Light mode warehouse"
              className="rounded-lg w-full h-auto object-cover dark:hidden animate-float"
            />
            <img
              src="/logo1.png"
              alt="Dark mode warehouse"
              className="rounded-lg h-[8em] md:h-[14em] object-cover hidden dark:block animate-float"
            />
          </div>

          {/* Text + Stepper Section */}
          <div className="lg:w-1/2 w-full">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t("why_intro_title")}
            </h3>
            <p className="text-gray-600 text-sm md:text-base dark:text-gray-300 mb-8">
              {t("why_intro_desc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Step list */}
              <div className="sm:w-[46%] flex sm:flex-col gap-1 overflow-x-auto sm:overflow-visible">
                {FEATURES.map((f, i) => (
                  <React.Fragment key={i}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`group flex items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-200 shrink-0
                        ${
                          i === active
                            ? "bg-gray-100 dark:bg-white/5"
                            : "hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                        }`}
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs shrink-0 transition-all duration-200
                          ${
                            i === active
                              ? "bg-[#75C043] border-[#75C043] text-white font-semibold"
                              : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
                          }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-sm transition-colors duration-200 whitespace-nowrap sm:whitespace-normal
                          ${
                            i === active
                              ? "text-gray-900 dark:text-white font-semibold"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                      >
                        {t(`why_${i}_title`)} {t(`why_${i}_highlight`)}
                      </span>
                    </button>
                    {i < FEATURES.length - 1 && (
                      <div className="hidden sm:block h-3 w-px bg-gray-200 dark:bg-white/10 ml-[26px]" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Detail panel */}
              <div className="sm:w-[54%] rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5">
                <div
                  key={active}
                  className="animate-[fadein_0.3s_ease] flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-[#75C043] text-2xl">
                        {currentIcon}
                      </span>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                        {t(`why_${active}_title`)}{" "}
                        <span className="text-[#75C043]">
                          {t(`why_${active}_highlight`)}
                        </span>
                      </h4>
                    </div>
                    <div className="text-right shrink-0 pl-3">
                      <p className="text-lg font-bold text-[#75C043] leading-none">
                        {t(`why_${active}_stat`)}
                      </p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                        {t(`why_${active}_unit`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(`why_${active}_body`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default WhyChooseUs;
