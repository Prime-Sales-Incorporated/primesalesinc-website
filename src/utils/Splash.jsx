import React, { useEffect, useState } from "react";

/**
 * Full-screen loading splash shown until the page (images, video, fonts)
 * has actually finished loading. Sits above everything else in App.js.
 *
 * Usage (in App.js):
 *   import SplashScreen from "./components/SplashScreen";
 *   ...
 *   <HelmetProvider>
 *     <SplashScreen />
 *     <Router>...</Router>
 *   </HelmetProvider>
 */
const MIN_DISPLAY_MS = 1400; // splash stays visible at least this long, avoids a flash
const FADE_MS = 600; // must match the duration-[600ms] class below

const SplashScreen = () => {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setMounted(false), FADE_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-background-dark transition-opacity duration-[600ms] ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 md:w-28 md:h-28 animate-splash-pulse">
          <img
            src="/logo1.png"
            alt="Prime Sales Inc."
            className="w-full h-full object-contain"
          />
        </div>

        <div className="mt-8 w-40 md:w-48 h-[3px] rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-[#75C043] animate-splash-bar" />
        </div>

        <div className="mt-4 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500">
          Loading
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
