import React, { useEffect, useState } from "react";
import HeaderHome from "../config/header copy";
import Footer from "../config/footer";
import Timeline from "../sections/timeline";
import PartnersCarousel from "../sections/partners";
import WhyChooseUs from "../sections/whyChoouseUs";
import BranchesMap from "../sections/map-branches";
import TimelineforAbout from "../sections/timelineforbout";

const About = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <HeaderHome dark={dark} setDark={setDark} />

      <main className="flex-1">
        <div className="  transition-all duration-700 ease-out">
          <section className="text-center py-0">
            <div className="relative w-full md:w-screen h-[12em] md:h-[32em] overflow-hidden  lg:px-0 py-">
              {/* Background Image */}
              <img
                src="/panorama.png"
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-white/30 dark:bg-black/70  "></div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-[50%] transition-all duration-700 ${
                  dark
                    ? "bg-gradient-to-t from-[#000000] via-[#101922]/60 to-transparent"
                    : "bg-gradient-to-t from-[#f6f7f8] via-[#f6f7f8]/70 to-transparent"
                }`}
              ></div>
              <div
                className={`absolute bottom-0 top-20 left-0 right-0 h-[150%] transition-all duration-700 ${
                  dark
                    ? "bg-gradient-to-t from-[#000000] via-[#101922]/60 to-transparent"
                    : "bg-gradient-to-t from-[#f6f7f8] via-[#f6f7f8]/70 to-transparent"
                }`}
              ></div>

              {/* Text on Top */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white z-10">
                  About <span className="text-[#75C043]">Us</span>
                </h2>
              </div>
            </div>

            <div className="px-4 py-8 sm:px-6 sm:py-16 lg:px-8 transition-all duration-700 ease-out">
              {/* <p className="mt-4 max-w-4xl mx-auto text-gray-600 dark:text-gray-300">
              Prime Sales Inc. (PSI) founded in 1976, is a leading supplier of
              intelligent intralogistics solution for dry and cold chain
              applications in the Philippines. Exemplifying remarkable
              reputation for more than 40 years in the industry, PSI works in
              synergy with proven global partners to offer strong and efficient
              supply chain solutions in the country.
            </p> */}

              <div className="mt-0  md:mt-8 grid gap-6 sm:grid-cols-2 xl:px-4  2xl:px-16">
                {[
                  // {
                  //   title: "Our Commitment",
                  //   desc: "At Prime Sales Inc., your long-term operational success is our foremost priority. We back our intralogistics systems with comprehensive technical support and preventive maintenance services designed to maximize uptime and efficiency. We combine quality equipment with expert support to keep your operations seamless and productive.",
                  // },
                  {
                    title: "Our Mission",
                    desc: "At Prime Sales, Inc. we are dedicated to delivering innovative and cost-effective solutions while building lasting partnerships through exceptional customer satisfaction.",
                  },
                  {
                    title: "Our Vision ",
                    desc: "As a forward-thinking industry leader, Prime Sales, Inc. is committed to navigating emerging supply chain challenges and shaping sustainable solutions for the future.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark"
                  >
                    <h3 className="text-xl font-semibold text-green-500 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base flex-col flex text-gray-600 dark:text-gray-300">
                      {item.desc}

                      <span>{item.subdesc}</span>
                    </p>
                  </div>
                ))}
              </div>

              <WhyChooseUs />
              <TimelineforAbout dark={dark} />

              <BranchesMap />
              <PartnersCarousel />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
