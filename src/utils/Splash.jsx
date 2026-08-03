import React, { useEffect, useState } from "react";

/**
 * Full-screen loading splash. Stays up until the actual hero video asset
 * has loaded (not just until window.load fires, which doesn't reliably
 * track assets that React mounts after the initial script runs).
 */
const MIN_DISPLAY_MS = 1400; // splash stays up at least this long
const FADE_MS = 600; // must match duration-[600ms] below
const MAX_WAIT_MS = 8000; // hard ceiling — never block forever on a slow/broken asset
const HERO_VIDEO_SRC = "/bg9.mp4"; // the actual asset WebsiteMain renders

const SplashScreen = () => {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setMounted(false), FADE_MS);
      }, remaining);
    };

    // 1. Preload the ACTUAL hero video the page will render.
    //    Browsers cache this, so when WebsiteMain's <video> mounts it
    //    plays instantly instead of restarting the download.
    const preloadVideo = document.createElement("video");
    preloadVideo.src = HERO_VIDEO_SRC;
    preloadVideo.preload = "auto";
    preloadVideo.muted = true;

    let videoReady = false;
    let pageLoaded = document.readyState === "complete";

    const maybeFinish = () => {
      if (videoReady && pageLoaded) finish();
    };

    const onVideoReady = () => {
      videoReady = true;
      maybeFinish();
    };
    // canplaythrough = enough buffered to play without stalling
    preloadVideo.addEventListener("canplaythrough", onVideoReady);
    preloadVideo.addEventListener("error", onVideoReady); // don't block forever if it 404s

    // 2. Still track window.load too (fonts, css, other static assets)
    const onWindowLoad = () => {
      pageLoaded = true;
      maybeFinish();
    };
    if (pageLoaded) {
      maybeFinish();
    } else {
      window.addEventListener("load", onWindowLoad);
    }

    // 3. Hard safety net — never leave the user staring at a splash forever
    const safetyTimer = setTimeout(finish, MAX_WAIT_MS);

    return () => {
      preloadVideo.removeEventListener("canplaythrough", onVideoReady);
      preloadVideo.removeEventListener("error", onVideoReady);
      window.removeEventListener("load", onWindowLoad);
      clearTimeout(safetyTimer);
    };
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
        <img
          src="/logo1.png"
          alt="Prime Sales Inc."
          className="h-9 md:h-11 w-auto object-contain"
        />
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
        <p className="mt-8 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400 dark:text-gray-500">
          Loading in progress
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
