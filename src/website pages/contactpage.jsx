import React, { useState } from "react";
import Header from "../config/header";
import Footer from "../config/footer";
import { Link } from "react-router-dom";
import HeaderHome from "../config/header copy";

export default function ContactPage() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  const handleSubmit = (e) => {
    const checkedSolutions = Array.from(
      e.target.querySelectorAll('input[name="solutions[]"]:checked'),
    ).map((el) => el.value);

    const existing = e.target.querySelector('input[name="_subject"]');
    if (existing) existing.remove();

    const subjectInput = document.createElement("input");
    subjectInput.type = "hidden";
    subjectInput.name = "_subject";
    subjectInput.value = checkedSolutions.length
      ? `Inquiry: ${checkedSolutions.join(", ")}`
      : "Inquiry: General Inquiry";

    e.target.appendChild(subjectInput);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <main className="bg-white dark:bg-background-dark text-gray-900 dark:text-white font-sans antialiased ">
        <HeaderHome dark={dark} setDark={setDark} />

        {/* Hero */}
        <div className="relative bg-grid border-b border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-background-dark pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <p className="text-sm font-semibold text-slate-900 dark:text-green-500 mb-3">
              Contact us
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Contact our team
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              Got any questions about the product or scaling on our platform?
              We&apos;re here to help.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-7">
              <form
                action="https://formspree.io/f/xeejjkpg"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First name
                    </label>
                    <input
                      required
                      name="First Name"
                      type="text"
                      placeholder="First name"
                      className="block w-full rounded-lg p-2 border border-gray-300 dark:border-slate-600 dark:bg-[#0A0C0A] py-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last name
                    </label>
                    <input
                      required
                      name="Last Name"
                      type="text"
                      placeholder="Last name"
                      className="block w-full p-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-[#0A0C0A]  py-2.5"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    required
                    name="Email"
                    type="email"
                    placeholder="you@company.com"
                    className="block w-full rounded-lg border border-gray-300 p-2 dark:border-slate-600 dark:bg-[#0A0C0A] py-2.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone number
                  </label>
                  <div className="relative">
                    <select className="absolute left-0 top-0 h-full rounded-l-lg bg-transparent px-3 text-gray-500">
                      <option>PH</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <input
                      name="Phone Number"
                      type="text"
                      placeholder="091758473291"
                      className="block w-full rounded-lg border border-gray-300 pl-20 dark:border-slate-600 dark:bg-[#0A0C0A]  py-2.5"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    name="Message"
                    rows={4}
                    placeholder="Leave us a message..."
                    className="block w-full rounded-lg p-2 border border-gray-300 dark:border-slate-600 dark:bg-[#0A0C0A] py-2.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Please check the solutions you are interested in:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Racking Solutions",
                      "Forklift Trucks",
                      "Insulated Panels",
                      "Automation Solutions",
                      "Commercial Solutions",
                      "Plastic Pallets, Bins & Crates",
                      "Docks & Doors",
                      "Industrial Batteries & Chargers",
                      "Warehouse Management System",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 text-sm"
                      >
                        <input
                          type="checkbox"
                          name="Inquiries"
                          value={item}
                          className="h-4 w-4"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-black  dark:bg-white dark:text-slate-900"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:pl-8">
              <div>
                <ul className="mt-4 space-y-3 text-sm font-semibold">
                  <li>
                    <div>
                      <h3 className="text-lg font-semibold">Chat with us</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        For inquiries, you can use our chatbot.
                      </p>
                      <ul className="mt-4 space-y-3 text-sm font-semibold">
                        <li>Start a live chat</li>
                        <li className="flex gap-2 items-center">
                          Shoot us an email{" "}
                          <img
                            src="/gmail.png"
                            alt="Facebook"
                            className="w-4 h-4"
                          />
                        </li>
                        <li className="flex items-center gap-2">
                          Message us on
                          <a
                            href="https://www.facebook.com/primesalesofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="/fb.png"
                              alt="Facebook"
                              className="w-4 h-4"
                            />
                          </a>
                          or
                          <a
                            href="https://www.instagram.com/primesalesincorporated/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="/ig.png"
                              alt="Facebook"
                              className="w-4 h-4"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Call us</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Mon–Fri from 8am to 5pm
                </p>
                <p className="mt-4 text-sm font-semibold">(02) 8839 0106</p>
                <p className="mt-4 text-sm font-semibold">+63917-634-1185</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Visit us</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Parañaque
                </p>
                <p className="mt-4 text-sm font-semibold">
                  3F Prime Corporate Center, Km. 15 East Service Rd., San Martin
                  De Porres, Parañaque City, Philippines 1700
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
