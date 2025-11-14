import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Header from "../config/header";
import Footer from "../config/footer";
import MHESolutions from "../website pages/solutions-pages/mhe";
import ColdChain from "../website pages/solutions-pages/coldchain";
import DocksDoors from "../website pages/solutions-pages/docksdoors";
import PlasticPallets from "../website pages/solutions-pages/plasticpallets";
import AutomationSolutions from "../website pages/solutions-pages/automationsolutions";
import IndustrialStorage from "../website pages/solutions-pages/industrialstorage";
import BatteriesChargers from "../website pages/solutions-pages/batterieschargers";
import CommercialSolutions from "../website pages/solutions-pages/commercialsolutions";

const solutionsMap = {
  mhe: {
    component: <MHESolutions />,
    title: "Forklift Philippines | Material Handling Equipment | Prime Sales",
    description:
      "Discover electric forklifts, pallet stackers, and reach trucks in the Philippines.",
    canonical: "https://primegroup.com.ph/solutions/mhe",
    image: "https://example.com/images/mhe.jpg",
  },
  "cold-chain": {
    component: <ColdChain />,
    title: "Cold Chain Solutions Philippines | Prime Sales",
    description:
      "High-quality cold storage and refrigeration systems in the Philippines.",
    canonical: "https://primegroup.com.ph/solutions/cold-chain",
    image: "https://example.com/images/cold-chain.jpg",
  },
  "docks-and-doors": {
    component: <DocksDoors />,
    title: "Dock & Door Systems Philippines | Prime Sales",
    description:
      "Reliable dock levelers, shelters, and industrial doors for warehouses.",
    canonical: "https://primegroup.com.ph/solutions/docks-and-doors",
    image: "https://example.com/images/docks-doors.jpg",
  },
  "plastic-pallets,-bins-and-crates": {
    component: <PlasticPallets />,
    title: "Plastic Pallets, Bins & Crates Philippines | Prime Sales",
    description:
      "Durable and hygienic plastic pallets, bins, and crates for logistics.",
    canonical:
      "https://primegroup.com.ph/solutions/plastic-pallets-bins-and-crates",
    image: "https://example.com/images/plastic-pallets.jpg",
  },
  "automation-solutions": {
    component: <AutomationSolutions />,
    title: "Automation Solutions Philippines | Prime Sales",
    description:
      "Boost your warehouse efficiency with automated conveyors, storage, and retrieval systems.",
    canonical: "https://primegroup.com.ph/solutions/automation-solutions",
    image: "https://example.com/images/automation-solutions.jpg",
  },
  "industrial-storage": {
    component: <IndustrialStorage />,
    title: "Industrial Storage Solutions Philippines | Prime Sales",
    description:
      "Optimize your warehouse space with racking systems, drive-in racks, and mobile storage.",
    canonical: "https://primegroup.com.ph/solutions/industrial-storage",
    image: "https://example.com/images/industrial-storage.jpg",
  },
  "industrial-batteries-and-chargers": {
    component: <BatteriesChargers />,
    title: "Forklift Batteries and Chargers Philippines | Prime Sales",
    description:
      "High-performance forklift batteries, chargers, and battery management systems.",
    canonical:
      "https://primegroup.com.ph/solutions/industrial-batteries-and-chargers",
    image: "https://example.com/images/batteries-chargers.jpg",
  },
  "commercial-solutions": {
    component: <CommercialSolutions />,
    title: "Commercial Solutions Philippines | Prime Sales",
    description:
      "Retail shelving, barriers, and rolling shutters for commercial applications.",
    canonical: "https://primegroup.com.ph/solutions/commercial-solutions",
    image: "https://example.com/images/commercial-solutions.jpg",
  },
};

const SolutionsWrapper = () => {
  const { solutionSlug } = useParams();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const solutionData = solutionsMap[solutionSlug];

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (typeof document !== "undefined") {
      if (dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  if (!solutionData) return <div>Solution not found</div>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: solutionData.title,
    description: solutionData.description,
    image: solutionData.image,
    url: solutionData.canonical,
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen px-8 py-20 md:p-24 flex flex-col font-display text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>{solutionData.title}</title>
        <meta name="description" content={solutionData.description} />
        <link rel="canonical" href={solutionData.canonical} />
        <link rel="icon" href="/psi.ico" type="image/x-icon" />

        {/* Open Graph */}
        <meta property="og:title" content={solutionData.title} />
        <meta property="og:description" content={solutionData.description} />
        <meta property="og:url" content={solutionData.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={solutionData.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={solutionData.title} />
        <meta name="twitter:description" content={solutionData.description} />
        <meta name="twitter:image" content={solutionData.image} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header dark={dark} setDark={setDark} />
      <main className="flex-1">{solutionData.component}</main>
      <Footer />
    </div>
  );
};

export default SolutionsWrapper;
