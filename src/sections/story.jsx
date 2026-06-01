import React from "react";

const OurStoryHome = () => {
  return (
    <section className="py-12 md:py-12 mb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-[#75C043] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Our Story
              </span>
            </div>

            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Pioneering{" "}
              <span className="text-[#75C043] italic">Intralogistics</span>{" "}
              since 1976.
            </h1>

            <p className="md:text-base text-slate-600 dark:text-gray-300 max-w-xl text-sm leading-relaxed">
              Prime Sales Inc. (PSI) is a premier Philippine provider of
              intelligent intralogistics solutions. We bridge the gap between
              global innovation and local industrial excellence.
            </p>

            <div className="space-y-4 text-slate-600 dark:text-gray-300 leading-relaxed text-sm max-w-2xl">
              <p>
                With over 40 years of industry experience, PSI has built a
                strong reputation for delivering efficient solutions for both
                dry and cold chain applications. We partner with world-renowned
                manufacturers to ensure our clients receive best-in-class
                storage and material handling systems.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold text-[#75C043]">50</div>
                <div className="text-xs uppercase tracking-wider font-semibold opacity-60">
                  Years Experience
                </div>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-800"></div>
              <div>
                <div className="text-3xl font-bold text-[#75C043]">500+</div>
                <div className="text-xs uppercase tracking-wider font-semibold opacity-60">
                  Completed Projects
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-[320px] md:h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxrKQ_CoiyVplqMXZHK1A44x8W7MPi0jAKvof12U1mI731Mu09n6-l1YlVUvtL1frXafRVnwkbIYvAVJGayKShT7tUWSCltvYcYFYn1aJwO0PVlx4UcUTRVE8p9E9Zv-t6o_Nh_J46lYWIlgv7f1JLCW8Gd0N0N2IMHZfI8FlaWUb1trFct3ab-BtoJ6dhC0tdq9RFUTHlB_bCFNEG3F3EAcdBuWDJsbS2PoTCHnjD4hhZoZHXHWRADfxm7lSIX3ZtUWq5Nuuwj8dt"
                alt="Modern high-tech warehouse facility with organized racking"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-medium">
                    Excellence in every square foot.
                  </p>
                  <p className="text-sm opacity-80 italic">
                    Manila Logistics Hub Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStoryHome;
