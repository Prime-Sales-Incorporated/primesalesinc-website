import React from "react";

const styles = `
  .rg-section {
    --rg-bg: #f6f7f8;
    --rg-bg-soft: rgba(117,192,67,0.06);
    --rg-border: rgba(117,192,67,0.3);
    --rg-heading: #14171A;
    --rg-body: #55605A;
    --rg-muted: #7C867A;
    --rg-accent: #4E9A26;
    --rg-caption-bg-1: rgba(255,255,255,0.05);
    --rg-caption-bg-2: rgba(255,255,255,0.85);
    --rg-caption-title: #14171A;
    --rg-caption-sub: rgba(20,23,26,0.65);

    background: var(--rg-bg);
    padding: 100px 60px;
    font-family: Inter, sans-serif;
  }

  .dark .rg-section {
    --rg-bg: #0A0C0A;
    --rg-bg-soft: rgba(117,192,67,0.08);
    --rg-border: rgba(117,192,67,0.25);
    --rg-heading: #F2F3EF;
    --rg-body: #9CA69A;
    --rg-muted: #7C867A;
    --rg-accent: #75C043;
    --rg-caption-bg-1: rgba(10,12,10,0.1);
    --rg-caption-bg-2: rgba(10,12,10,0.75);
    --rg-caption-title: #ffffff;
    --rg-caption-sub: rgba(255,255,255,0.65);
  }

  .rg-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
  .rg-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 5px 12px; border-radius: 99px; background: var(--rg-bg-soft); border: 1px solid var(--rg-border); margin-bottom: 26px; }
  .rg-eyebrow span:last-child { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--rg-accent); }
  .rg-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--rg-accent); box-shadow: 0 0 8px 2px rgba(117,192,67,.6); }
  .rg-h1 { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 42px; line-height: 1.18; color: var(--rg-heading); margin-bottom: 20px; }
  .rg-h1 .accent { color: var(--rg-accent); }
  .rg-p { color: var(--rg-body); font-size: 15px; line-height: 1.75; max-width: 460px; margin-bottom: 40px; }
  .rg-rail { position: relative; padding-left: 30px; }
  .rg-rail::before { content: ''; position: absolute; left: 5px; top: 4px; bottom: 4px; width: 2px; background: linear-gradient(180deg, var(--rg-accent), rgba(117,192,67,0.05)); box-shadow: 0 0 12px 1px rgba(117,192,67,0.5); }
  .rg-point { position: relative; padding-bottom: 26px; }
  .rg-point:last-child { padding-bottom: 0; }
  .rg-point::before { content: ''; position: absolute; left: -30px; top: 3px; width: 10px; height: 10px; border-radius: 50%; background: var(--rg-bg); border: 2px solid var(--rg-accent); box-shadow: 0 0 10px 2px rgba(117,192,67,.5); }
  .rg-point .y { font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 700; color: var(--rg-accent); }
  .rg-point .n { font-family: 'Sora', sans-serif; font-size: 30px; font-weight: 800; color: var(--rg-heading); line-height: 1.2; }
  .rg-point .d { font-size: 13px; color: var(--rg-muted); margin-top: 2px; }
  .rg-figure { position: relative; border-radius: 16px; overflow: hidden; }
  .rg-figure::after { content: ''; position: absolute; inset: 0; background:  pointer-events: none; }
  .rg-caption { position: absolute; bottom: 22px; left: 26px; right: 26px; z-index: 2; }
  .rg-caption p:first-child { color: var(--rg-caption-title); font-family: 'Sora', sans-serif; font-weight: 600; font-size: 15px; }
  .rg-caption p:last-child { color: var(--rg-caption-sub); font-size: 12.5px; margin-top: 2px; }
  .rg-glow { position: absolute; width: 260px; height: 260px; background: radial-gradient(circle, rgba(117,192,67,0.18), transparent 70%); border-radius: 50%; z-index: 0; top: -60px; right: -60px; }

  @media (max-width: 900px) {
    .rg-section { padding: 60px 24px; }
    .rg-inner { grid-template-columns: 1fr; gap: 40px; }
    .rg-h1 { font-size: 32px; }
  }
`;

const OurStoryHome = () => {
  return (
    <section className=" md:py-0 mb-0 overflow-hidden">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
      />
      <style>{styles}</style>
      <div className="panel" id="panel-b">
        <section className="rg-section">
          <div className="rg-inner">
            <div>
              <div className="rg-eyebrow">
                <span className="rg-dot"></span>
                <span>Our story</span>
              </div>
              <h1 className="rg-h1">
                Pioneering <span className="accent">intralogistics</span> since
                1976.
              </h1>
              <p className="rg-p">
                Prime Sales Inc. (PSI) is a premier Philippine provider of
                intelligent intralogistics solutions, bridging global innovation
                and local industrial excellence in every warehouse we touch.
              </p>
              <div className="rg-rail">
                <div className="rg-point">
                  <div className="y">1976</div>
                  <div className="n">The beginning</div>
                  <div className="d">
                    A small team, a bold idea to reshape supply chains.
                  </div>
                </div>
                <div className="rg-point">
                  <div className="y">Today</div>
                  <div className="n">50 years, 500+ projects</div>
                  <div className="d">
                    Trusted across dry and cold chain facilities nationwide.
                  </div>
                </div>
              </div>
            </div>
            <div className="rg-figure">
              <div className="rg-glow"></div>
              <img
                className="w-full h-[320px] md:h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxrKQ_CoiyVplqMXZHK1A44x8W7MPi0jAKvof12U1mI731Mu09n6-l1YlVUvtL1frXafRVnwkbIYvAVJGayKShT7tUWSCltvYcYFYn1aJwO0PVlx4UcUTRVE8p9E9Zv-t6o_Nh_J46lYWIlgv7f1JLCW8Gd0N0N2IMHZfI8FlaWUb1trFct3ab-BtoJ6dhC0tdq9RFUTHlB_bCFNEG3F3EAcdBuWDJsbS2PoTCHnjD4hhZoZHXHWRADfxm7lSIX3ZtUWq5Nuuwj8dt"
                alt="Modern high-tech warehouse facility with organized racking"
              />
              <div className="rg-caption">
                <p>Excellence in every square foot.</p>
                <p>Manila logistics hub project</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurStoryHome;
