import React from "react";

const BranchesMaps = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-8 flex items-center justify-center gap-2">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Our <span className="text-green-500">Branches</span>
        </p>
      </h2>

      <div className="grid gap-8 md:gap-8 md:grid-cols-2">
        {/* Branch 1 Map */}
        <div className="w-full h-72 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.82922599029!2d121.03973507487059!3d14.494490985979358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ced7d8ccb009%3A0x1ddc76a4d0c7f01d!2sPrime%20Sales%20Inc.!5e0!3m2!1sen!2sph!4v1763951554245!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-center mt-2 dark:text-white">Parañaque City</p>
        </div>

        {/* Branch 2 Map */}
        <div className="w-full h-72 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.5683759990118!2d123.94682448558972!3d10.330939354772305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9984ca885cf11%3A0x3fc95dbf57a81384!2sPrime%20Sales%20Inc.%20-Cebu%20branch!5e0!3m2!1sen!2sph!4v1763952198328!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-center mt-2 dark:text-white">Mandaue City</p>
        </div>
      </div>
    </section>
  );
};

export default BranchesMaps;
