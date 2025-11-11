import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./website pages/Home";
import OurSolutions from "./website pages/solutions";
import WebsiteMain from "./website pages/HomePage";
import { MessageCircle, ArrowUp } from "lucide-react";
import Timeline from "./sections/timeline";
import SolutionsPage from "./website pages/solutionsPage";
import ScrollToTop from "./hooks/scrolltoTop";
// import ThreeDScene from "./sections/3d";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import UnderConstruction from "./website pages/UnderConstruction";
import { HelmetProvider } from "react-helmet-async";
import MHESolutions from "./website pages/solutions-pages/mhe";
import SolutionsWrapper from "./config/solutionswrapper";

// 🌟 Floating Chat Button
function FloatingChatButton() {
  const handleClick = () => {
    window.open(
      "https://psi-chat-bot-main.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="fixed bottom-6 right-2 md:bottom-8 md:right-2
                 z-[9999] flex items-center justify-end animate-float"
    >
      <button
        onClick={handleClick}
        aria-label="Chat with us"
        className="group flex items-center bg-green-500 hover:bg-green-600 
                   text-white rounded-full shadow-xl 
                   transition-all duration-500 ease-in-out 
                   pl-4 pr-4 py-3 hover:pl-6 hover:pr-6 
                   overflow-hidden"
      >
        <MessageCircle
          size={26}
          className="text-white flex-shrink-0 transition-transform duration-100 group-hover:scale-110"
        />
        <span
          className="max-w-0 opacity-0 group-hover:ml-2 group-hover:max-w-[120px] 
                     group-hover:opacity-100 transition-all duration-500 
                     whitespace-nowrap font-semibold"
        >
          Chat with us
        </span>
      </button>
    </div>
  );
}

// ⬆️ Scroll To Top Button
function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-4 md:bottom-28 md:right-4
                  bg-red-500 hover:bg-red-600 text-white 
                  p-3 rounded-full shadow-lg transition-all duration-300 
                  ease-in-out z-[9999] 
                  ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10 pointer-events-none"
                  }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={22} className="text-white" />
    </button>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Toaster position="top-right" />
        <ScrollToTop />

        <Routes>
          {/* <Route path="/3d" element={<ThreeDScene />} /> */}
          <Route path="/" element={<WebsiteMain />} />
          <Route
            path="/solutions/:solutionSlug"
            element={<SolutionsWrapper />}
          />

          <Route path="/sa" element={<Timeline />} />
        </Routes>

        {/* Floating Buttons */}
        <FloatingChatButton />
        <ScrollUpButton />

        <Analytics />
        <SpeedInsights />
      </Router>
    </HelmetProvider>
  );
}

export default App;
