import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initDarkMode } from "./utils/darkMode";

// ✅ Only set default darkMode if not already set
if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "true"); // Default mode only on first load
}

initDarkMode();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 🧹 Unregister any existing service workers
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((reg) => reg.unregister());
    console.log("🧹 All service workers unregistered for this app");
  });
}
