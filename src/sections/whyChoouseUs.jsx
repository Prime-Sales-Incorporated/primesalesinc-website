import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-background-light dark:bg-background-dark mb-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center ">
          {/* Image Section */}
          {/* Image Section */}
          <div className="lg:w-1/2 h-[10em] md:h-[24em] flex">
            {/* Light mode image */}
            <img
              src="/logo2.png"
              alt="Light mode warehouse"
              className="rounded-lg w-full h-auto object-cover dark:hidden animate-float"
            />

            {/* Dark mode image */}
            <img
              src="/logo1.png"
              alt="Dark mode warehouse"
              className="rounded-lg h-[8em] md:h-[18em] object-cover hidden dark:block animate-float"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2">
            {/* <h2 className="text-lg md:text-xl font-semibold uppercase text-gray-900 dark:text-white  tracking-wider mb-2">
              Why Choose <span className="text-green-500">Us</span>
            </h2> */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Unlocking Efficiency in Your Supply Chain
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We are dedicated to providing innovative and reliable
              intralogistics solutions. Our commitment to excellence ensures
              that we deliver tailored systems that meet your specific needs,
              enhancing productivity and driving growth.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {/* Experience */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                    <span className="material-icons text-primary text-2xl">
                      star_outline
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    40+ Years of{" "}
                    <span className="text-green-500">Experience</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Leveraging decades of industry expertise to deliver proven
                    and reliable solutions.
                  </p>
                </div>
              </div>
              {/* Proven Track Record */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                    <span className="material-icons text-primary text-2xl">
                      support_agent
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    After Sales <span className="text-green-500">Service</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    We build long-term relationships through consistent,
                    high-quality after-sales service and dedicated customer
                    care.
                  </p>
                </div>
              </div>

              {/* Trusted Partners */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                    <span className="material-icons text-primary text-2xl">
                      verified_user
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Trusted{" "}
                    <span className="text-green-500">Global Partners</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Collaborating with world-renowned partners to bring you
                    cutting-edge technology.
                  </p>
                </div>
              </div>

              {/* Custom Solutions */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                    <span className="material-icons text-primary text-2xl">
                      engineering
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Customized <span className="text-green-500">Solutions</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Designing and implementing tailored intralogistics systems
                    to fit your unique operational needs.
                  </p>
                </div>
              </div>
              {/* End to End Support */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                    <span className="material-icons text-primary text-2xl">
                      settings
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    End-to-End <span className="text-green-500">Support</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    From consultation and design to installation and
                    maintenance, we provide complete lifecycle support to ensure
                    long-term performance.
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

export default WhyChooseUs;
