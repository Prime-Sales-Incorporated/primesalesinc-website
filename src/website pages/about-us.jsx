import React, { useEffect, useState } from "react";
import HeaderHome from "../config/header copy";
import Footer from "../config/footer";
import Timeline from "../sections/timeline";
import PartnersCarousel from "../sections/partners";
import WhyChooseUs from "../sections/whyChoouseUs";
import BranchesMap from "../sections/map-branches";

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
              <div className="absolute inset-0 bg-gray-800/80 "></div>

              {/* Text on Top */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white z-10">
                  About <span className="text-green-500">Us</span>
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

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Our Story",
                    desc: "Prime Sales Inc. (PSI) founded in 1976, is a leading supplier ofintelligent intralogistics solutions for dry and cold chainapplications. With over 40 years of proven reputation, PSI workswith global partners to offer strong and efficient supply chain systems in the Philippines.",
                  },
                  {
                    title: "Our Mission & Vision",
                    desc: "Prime Sales Inc. is your dynamic business partner committed to provide cost-effective solutions to ensure customer.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark"
                  >
                    <h3 className="text-xl font-semibold text-green-500 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 mt-12 dark:text-white">
                Why Choose <span className="text-green-500"> Prime</span>
              </h2>
              <WhyChooseUs />
              <Timeline dark={dark} />

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
