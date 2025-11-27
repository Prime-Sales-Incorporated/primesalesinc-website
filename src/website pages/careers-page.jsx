import React, { useEffect, useState } from "react";
import HeaderHome from "../config/header copy";

const CareersPage = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });
  const [selectedDept, setSelectedDept] = useState("All");

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);
  const jobs = [
    {
      title: "Assistant Sales Manager",
      dept: "Automation",
      loc: "Paranaque City, Philippines",
    },
    {
      title: "Sales Executive",
      dept: "Material Handling Equipment Department",
      loc: "Paranaque City, Philippines",
    },
    {
      title: "Material Handling Equipment (MHE) Technician",
      dept: "Material Handling Equipment",
      loc: "Paranaque City, Philippines",
    },
    {
      title: "Robotics Operations Specialist",
      dept: "Operations",
      loc: "Berlin, Germany",
    },
  ];

  // Unique departments for dropdown (if you add dropdown later)
  const departments = ["All", ...new Set(jobs.map((j) => j.dept))];

  // Filtered list
  const filteredJobs =
    selectedDept === "All" ? jobs : jobs.filter((j) => j.dept === selectedDept);

  return (
    <main className="flex-grow bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <HeaderHome dark={dark} setDark={setDark} />
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center py-20 sm:py-32 px-4 ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,34,22,0.8), rgba(16,34,22,1)), url('/psi-cover.webp')",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Build Your Career With
          </h1>
          <img src="/logo1.png" className="h-24 w-48" />
          <p className="md:text-xl font-sans font-light leading-relaxed max-w-4xl mx-auto text-sm text-gray-300 opacity-0 animate-fadeInUp [animation-delay:0.3s]">
            Join a company that values hard work, professionalism, and growth.
            Be part of a team where your contributions truly matter.
          </p>
          <a
            href="#open-positions"
            className="flex items-center justify-center h-12 px-5 rounded-lg bg-green-500 text-background-dark text-base font-bold hover:bg-opacity-90 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="open-positions" className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Current Openings</h2>
            <p className=" mt-2 max-w-2xl mx-auto">
              Find your next opportunity in our list of roles. Use the filters
              to narrow your search.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="md:col-span-2">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex items-center w-full h-full rounded-lg ">
                  <span className="material-symbols-outlined  pl-4">
                    search
                  </span>
                  <input
                    className="flex-1 bg-transparent  border-none focus:ring-0 px-2 placeholder:text-white/50"
                    placeholder="Search by keyword"
                  />
                </div>
              </label>
            </div>

            <div className="md:col-span-3 flex flex-wrap gap-3">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="h-12 px-4 rounded-lg 
             bg-white/5 dark:bg-gray-800 
             text-black dark:text-white 
             border border-gray-300 dark:border-gray-600 
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="All">All Departments</option>
                <option value="Automation">Automation</option>
                <option value="Material Handling Equipment Department">
                  Material Handling Equipment Department
                </option>
                <option value="Material Handling Equipment">
                  Material Handling Equipment
                </option>
                <option value="Operations">Operations</option>
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {filteredJobs.map((job, i) => (
              <div
                key={i}
                className="bg-gray-200 dark:bg-white/5 p-6 rounded-lg border border-white/10 hover:border-primary transition-all"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <span>{job.dept}</span>
                      <span className="text-white/30">•</span>
                      <span>{job.loc}</span>
                    </div>
                  </div>
                  <a
                    className="px-4 py-2 rounded-lg bg-green-500 text-sm font-bold hover:bg-opacity-90 transition-colors"
                    href="#"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Perks */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 bg-black/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text- text-3xl sm:text-4xl font-bold">
              Our Culture & Perks
            </h2>
            <p className="text-w mt-2 max-w-2xl mx-auto">
              We invest in our people. Here's how we support your growth,
              well‑being, and success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: "model_training",
                title: "Professional Development",
                text: "Access to courses, conferences, and resources to help you level up your skills.",
              },
              {
                icon: "health_and_safety",
                title: "Health & Wellness",
                text: "Comprehensive health insurance and wellness programs.",
              },
              {
                icon: "schedule",
                title: "Flexible Hours",
                text: "Flexible schedules and remote options.",
              },
              {
                icon: "diversity_3",
                title: "Team Events",
                text: "Team‑building activities and social events.",
              },
              {
                icon: "rocket_launch",
                title: "Impactful Work",
                text: "Work on solutions shaping the logistics industry.",
              },
              {
                icon: "emoji_events",
                title: "Competitive Compensation",
                text: "Competitive salaries and performance bonuses.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    {b.icon}
                  </span>
                </div>
                <h3 className="text- text-lg font-bold">{b.title}</h3>
                <p className="text- mt-1 text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
