import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhyChooseUs from "../sections/whyChoouseUs";
import Header from "../config/header";
import useInView from "../hooks/useInView";
import Footer from "../config/footer";
import PartnersCarousel from "../sections/partners";
import OurSolutions from "../sections/solutions";
import Timeline from "../sections/timeline";
import StoryScroll from "../sections/ourStory";
import ShowcaseCarousel from "../sections/medias";
import ThreeDScene from "../sections/3d";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";
import HeaderHome from "../config/header copy";
import StatsCounter from "../sections/statsCounter";
import { Helmet } from "react-helmet-async";
import HolidayGreetingBanner from "../sections/banner";
import VideoSection from "../sections/videosection";
import OurStoryHome from "../sections/story";
import HeroCarousel from "../sections/hercarousel";
import TimelineforAbout from "../sections/timelineforbout";
import JourneyConcepts from "../sections/ourStoryv2";
import OurSolutionsv2 from "../sections/solutionsv2";

const WebsiteMain = () => {
  const [storyRef, storyVisible] = useInView();
  const [featuresRef, featuresVisible] = useInView();
  const [missionRef, missionVisible] = useInView();
  const [whyRef, whyVisible] = useInView();
  const [partnersRef, partnersVisible] = useInView();
  const [solutionRef, solutionVisible] = useInView();
  const [timelineRef, timelineVisible] = useInView();
  const [statsRef, statsVisible] = useInView();
  // Add this hook at the top of your component (inside WebsiteMain, before return):
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add these carousel images (replace with your real images):
  const heroSlides = [
    {
      src: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/305844029_447582417394066_7425055348128986817_n.png?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=qqqVrQ7cblAQ7kNvwFLZh9N&_nc_oc=AdpSa1dqQQzg6K3FHFS3IUQ86i102m8WdAybkqJnP-JN3-uZ5BsCjQs5WpFWBuyRlhSwMVhhB27I2gU9yT-JrJ27&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=KIRMTq-gF5hy3LNK7Gtu4w&_nc_ss=7b289&oh=00_Af5ZKPQY5O6RzKJOwKxkEhFj6kQct_2y5PnKykrDbsba8w&oe=6A11B618",
      alt: "Prime Sales Warehouse",
    },
    {
      src: "https://www.elementlogic.net/content/uploads/sites/8/2024/10/for-4-main-functions-of-warehouse-1200x649-1.jpg", // replace with your real image
      alt: "Cold Chain Solutions",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFRpChdkfgm2TPi1WwvhoeKPIgYSPnU8TfA&s", // replace with your real image
      alt: "Forklift Operations",
    },
  ];

  // Add auto-advance effect (place with your other useEffects):
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
    <div className="bg-background-light  dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <HeaderHome dark={dark} setDark={setDark} />
      <Helmet>
        <title>
          Prime Sales Inc. | Forklifts, Racking, Storage, Cold Chain &
          Automation Solutions Philippines
        </title>
        <meta
          name="description"
          content="Prime Sales Inc. is a leading Philippine supplier of industrial storage systems, pallet racking, forklifts, and cold chain solutions. Trusted since 1976 for efficient intralogistics solutions for dry and cold chain applications."
        />
        <meta
          name="keywords"
          content="racking system Philippines, industrial storage solutions, pallet racks, warehouse shelves, forklifts Philippines, cold chain systems, Prime Sales Inc, Prime Group"
        />
        <link rel="canonical" href="https://www.primegroup.com.ph/" />
      </Helmet>
      <main className="flex-1 ">
        {/* Hero Section */}
        {/* Hero Carousel Section */}
        <HeroCarousel dark={dark} />

        {/* OUR STORY */}
        <div className="px-4 py-0 sm:px-6 sm:py-0 lg:px-8 transition-all duration-700 ease-out ">
          <section className="text-center py-0">
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
            {/* <OurStoryHome /> */}
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
          </section>
          <OurStoryHome />
          {/* Features */}
          <section className="mt-8 text-center xl:px-4  2xl:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Who We <span className="text-[#75C043]"> Are</span>
            </h2>

            <p className="mt-4 text-sm md:text-base max-w-4xl mx-auto text-gray-600 dark:text-gray-300">
              Prime Sales Inc. (PSI) is a trusted intralogistics provider in the
              Philippines. Since 1976, we’ve helped companies improve their
              operations with reliable racking systems, smart storage solutions,
              and advanced supply chain services.
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
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div
            ref={solutionRef}
            className={`transition-all duration-700 ease-out mt-8 ${
              solutionVisible
                ? "opacity-100 translate-y-0 animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <OurSolutionsv2 />
          </div>
          <div
            ref={whyRef}
            className={`transition-all duration-700 ease-out ${
              whyVisible
                ? "opacity-100 translate-y-0 animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <WhyChooseUs />
          </div>
          {/* Add 3D Scene Section */}
          <JourneyConcepts dark={dark} />

          <div
            ref={timelineRef}
            className={`transition-all duration-700 ease-out mt-8 md:mt-8 ${
              timelineVisible
                ? "opacity-100 translate-y-0 animate-fadeInUp"
                : "opacity-0 translate-y-10"
            }`}
          >
            <TimelineforAbout dark={dark} />
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
            <div ref={statsRef}>
              <StatsCounter visible={statsVisible} />
            </div>
            <PartnersCarousel />
          </div>
        </div>

        {/* <HolidayGreetingBanner /> */}

        <VideoSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebsiteMain;
