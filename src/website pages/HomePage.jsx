import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhyChooseUs from "../sections/whyChoouseUs";
import Header from "../config/header";
import useInView from "../hooks/useInView";
import Footer from "../config/footer";
import PartnersCarousel from "../sections/partners";
import OurSolutions from "./solutions";
import Timeline from "../sections/timeline";
import StoryScroll from "../sections/ourStory";
import ShowcaseCarousel from "../sections/medias";
import ThreeDScene from "../sections/3d";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import HeaderHome from "../config/header copy";

const WebsiteMain = () => {
  const [storyRef, storyVisible] = useInView();
  const [featuresRef, featuresVisible] = useInView();
  const [missionRef, missionVisible] = useInView();
  const [whyRef, whyVisible] = useInView();
  const [partnersRef, partnersVisible] = useInView();
  const [solutionRef, solutionVisible] = useInView();
  const [timelineRef, timelineVisible] = useInView();

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
        {/* Hero Section */}
        <div className="relative flex min-h-[50vh] md:min-h-[70vh] items-center justify-center text-center overflow-hidden ">
          {/* Shared Background Video */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/iss.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay Shader */}
            <div className="absolute inset-0 bg-black/70  "></div>
            <div
              className={`absolute bottom-0 left-0 right-0 h-[50%] transition-all duration-700 ${
                dark
                  ? "bg-gradient-to-t from-[#101922] via-[#101922]/60 to-transparent"
                  : "bg-gradient-to-t from-[#f6f7f8] via-[#f6f7f8]/30 to-transparent"
              }`}
            ></div>
          </div>

          {/* Hero Text */}
          <div className="relative z-10 mx-auto justi max-w-4xl px-4 py-20 text-white">
            {/* <h1
              className="font-serif text-white  text-4xl lg:text-6xl font-light tracking-tight mb-4 opacity-0 animate-fadeInUp"
              style={{ fontFamily: "Sufrimeda, sans-serif" }}
            >
              PRIME <span className="text-green-500">SALES Inc.</span>
            </h1> */}
            <div className="justify-center flex ">
              <img
                src="/logo1.png"
                alt="Prime Sales Inc. Logo"
                className="justify-center flex h-24 md:h-36 md:w-72 mb-8  opacity-0 animate-fadeInUp"
              />
            </div>

            <p className="   md:text-xl font-sans font-light leading-relaxed max-w-4xl mx-auto text-sm text-gray-300 opacity-0 animate-fadeInUp [animation-delay:0.3s]">
              Prime Sales Inc. (PSI), founded in 1976, is a Philippine company
              providing intralogistics solutions for both the dry and cold chain
              industries. Partnering with global manufacturers, PSI offers
              services such as warehouse design, storage systems, and
              after-sales support. With over 40 years of industry experience,
              PSI has built a strong reputation and collaborates with proven
              global partners to deliver efficient intralogistics and supply
              chain solutions in the Philippines.
            </p>
          </div>
        </div>

        {/* OUR STORY */}
        <div className="px-4 py-0 sm:px-6 sm:py-0 lg:px-8 transition-all duration-700 ease-out ">
          <section className="text-center py-12">
            {/* <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About <span className="text-green-500">PSI</span>
            </h2> */}
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
          </section>

          {/* Features */}
          <section className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              PSI at a <span className="text-green-500"> Glance</span>
            </h2>

            <p className="mt-4 max-w-4xl mx-auto text-gray-600 dark:text-gray-300">
              Prime Sales Inc. (PSI) is a trusted name in intralogistics
              solutions, evolving since 1976 to deliver high-quality racking
              systems, storage designs, and innovative supply chain services
              that meet the growing demands of businesses across the
              Philippines.
            </p>

            <div
              ref={featuresRef}
              className={`mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 transform transition-all duration-700 ease-out ${
                featuresVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {[
                {
                  title: "Founding Evolution",
                  desc: "Established in 1976, the company has evolved from basic supply operations to premium racking systems and intralogistics services.",
                },
                {
                  title: "Key Services",
                  desc: "PSI provides intelligent intralogistics solutions, including design and implementation of advanced storage systems.",
                },
                {
                  title: "Business Model",
                  desc: "The company collaborates with global partners to ensure reliable supply chain performance across the Philippines.",
                },
                {
                  title: "Company Philosophy",
                  desc: "PSI embraces change and innovation, continuously improving strategies and developing a competent salesforce.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 rounded-lg border border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark p-6 shadow-sm"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-xl font-bold">#{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div
            ref={solutionRef}
            className={`transition-all duration-700 ease-out ${
              solutionVisible
                ? "opacity-100 translate-y-0 animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <OurSolutions />
          </div>
          <div
            ref={whyRef}
            className={`transition-all duration-700 ease-out ${
              whyVisible
                ? "opacity-100 translate-y-0 animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 dark:text-white">
              Why Choose <span className="text-green-500"> Prime</span>
            </h2>
            <WhyChooseUs />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16 md:mb-20 dark:text-white">
            The Prime <span className="text-green-500"> Journey</span>
          </h2>
          {/* Add 3D Scene Section */}
          <StoryScroll />

          <div
            ref={timelineRef}
            className={`transition-all duration-700 ease-out mt-8 md:mt-0 ${
              timelineVisible
                ? "opacity-100 translate-y-0 animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Timeline dark={dark} />
          </div>

          <div
            ref={partnersRef}
            className={`transition-all duration-700 ease-out ${
              partnersVisible
                ? "opacity-100 translate-y-0 animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <ShowcaseCarousel />
            <PartnersCarousel />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebsiteMain;
