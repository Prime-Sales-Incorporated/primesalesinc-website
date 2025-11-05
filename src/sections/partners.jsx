import React from "react";

const PartnersCarousel = () => {
  const partners = [
    {
      name: "Linde",
      logo: "https://static.wixstatic.com/media/f0d37b_4edce7944ead417f916822b8616d8c15~mv2.png/v1/fill/w_382,h_234,al_c,lg_1,q_85,enc_avif,quality_auto/f0d37b_4edce7944ead417f916822b8616d8c15~mv2.png",
    },
    {
      name: "Constructor",
      logo: "https://static.wixstatic.com/media/f0d37b_4191ca8a1c994cf493e9cfa67ffe76ce~mv2.png/v1/fill/w_528,h_234,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0d37b_4191ca8a1c994cf493e9cfa67ffe76ce~mv2.png",
    },
    {
      name: "Manhattan",
      logo: "https://static.wixstatic.com/media/f0d37b_34317869e1f843d6b030ce30881c7fe2~mv2.png/v1/fill/w_608,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/manh_logo_darkblue_rgb-1.png",
    },

    // {
    //   name: "Toyota",
    //   logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    // },

    {
      name: "Bruynzeel",
      logo: "https://static.wixstatic.com/media/f0d37b_cbc2c67fd4e14728a3f0eb1ed12abcc5~mv2.png/v1/fill/w_428,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bruynzyeel.png",
    },
    {
      name: "Kardex",
      logo: "https://static.wixstatic.com/media/f0d37b_a3b9ca0025684b4899dd098aae171aa0~mv2.png/v1/fill/w_708,h_78,al_c,lg_1,q_85,enc_avif,quality_auto/f0d37b_a3b9ca0025684b4899dd098aae171aa0~mv2.png",
    },
    {
      name: "CycleWorld",
      logo: "https://static.wixstatic.com/media/f0d37b_853f1532e8eb4438a70a87375fa3fcf6~mv2.png/v1/fill/w_314,h_168,al_c,lg_1,q_85,enc_avif,quality_auto/f0d37b_853f1532e8eb4438a70a87375fa3fcf6~mv2.png",
    },

    {
      name: "Dematic",
      logo: "https://static.wixstatic.com/media/f0d37b_9476fc8e56354536a8f2e7ffb480d1c5~mv2.png/v1/fill/w_504,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0d37b_9476fc8e56354536a8f2e7ffb480d1c5~mv2.png",
    },
    {
      name: "Hormann",
      logo: "https://static.wixstatic.com/media/f0d37b_e82d90c19d1d4456bea6a803a762ff4b~mv2.png/v1/fill/w_608,h_248,al_c,lg_1,q_85,enc_avif,quality_auto/f0d37b_e82d90c19d1d4456bea6a803a762ff4b~mv2.png",
    },
    {
      name: "Honeywell",
      logo: "https://static.wixstatic.com/media/f0d37b_5fae650563d240a88a0be2bea9e90663~mv2.png/v1/fill/w_528,h_296,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0d37b_5fae650563d240a88a0be2bea9e90663~mv2.png",
    },

    {
      name: "Spectrum",
      logo: "https://static.wixstatic.com/media/f0d37b_1fb9acc77b56475ea7fd884e10d64d9e~mv2.png/v1/fill/w_314,h_271,al_c,lg_1,q_85,enc_avif,quality_auto/f0d37b_1fb9acc77b56475ea7fd884e10d64d9e~mv2.png",
    },
    {
      name: "MahSing",
      logo: "https://static.wixstatic.com/media/f0d37b_c476a53559a34ee08a69a8164917d717~mv2.png/v1/crop/x_140,y_48,w_958,h_444/fill/w_608,h_278,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0d37b_c476a53559a34ee08a69a8164917d717~mv2.png",
    },
    {
      name: "BAS",
      logo: "https://static.wixstatic.com/media/f0d37b_29b51c6d7e214da88862f5bdfe50b50a~mv2.jpg/v1/fill/w_280,h_280,al_c,lg_1,q_80,enc_avif,quality_auto/ambatubas.jpg",
    },
  ];

  // duplicate logos for seamless infinite loop
  const extended = [...partners, ...partners];

  return (
    <section className="py-8 bg-bg-light dark:bg-bg-dark overflow-hidden">
      <div className="w-full mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8 flex items-center justify-center gap-2">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our <span className="text-green-500">Partners</span>
          </p>
        </h2>

        {/* Moving Carousel */}
        <div className="relative overflow-hidden group">
          <div className="flex gap-10 animate-marquee group-hover:[animation-play-state:paused]">
            {extended.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px] rounded-2xl p-6"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
