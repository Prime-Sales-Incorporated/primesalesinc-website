import React, { useEffect, useState } from "react";

/**
 * Full-screen loading splash shown until the page (hero video, images, fonts)
 * has actually finished loading. Sits above everything else in App.js.
 *
 * Usage (in App.js):
 *   import SplashScreen from "./components/SplashScreen";
 *   ...
 *   <HelmetProvider>
 *     <SplashScreen />
 *     <Router>...</Router>
 *   </HelmetProvider>
 *
 * Drop your generated clip in /public as splash2.mp4. Keep it short (3-6s),
 * it loops. A poster frame (splash-poster.jpg) shows instantly while the
 * video itself is still downloading, so there's never a blank flash.
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
      <div className="flex flex-col items-center px-4">
        {/* Wordmark first — establishes the brand before anything else */}
        <img
          src="/logo1.png"
          alt="Prime Sales Inc."
          className="h-9 md:h-11 w-auto object-contain"
        />

        {/* Illustration card — tied to brand green so it doesn't feel dropped-in */}
        <div className="mt-10 w-72 md:w-[420px] aspect-video rounded-xl overflow-hidden ">
          <video
            src="/splash2.mp4"
            poster="/splash-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* The racking build carries the visual metaphor — this caption just
            gives it in words too, for anyone who wants the plain-text version. */}
        <p className="mt-8 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500">
          Loading in progress
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
