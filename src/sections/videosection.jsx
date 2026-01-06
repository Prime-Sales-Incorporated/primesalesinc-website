// src/sections/VideoSection.jsx
import React, { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section className="relative py-16 px-4 bg-background-light dark:bg-background-dark">
      <div className="mt-0 mb-8 text-center">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
          From Challenges to Smarter Operations
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          A real-world story showing how the right systems transform warehouse
          operations.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full rounded-xl shadow-lg"
          controls={isPlaying}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Green Play Button Overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <div className="w-20 h-20 rounded-full bg-green-500 hover:bg-green-700 flex items-center justify-center shadow-xl transition">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
