/* ===== VANTA GLOBAL AUTH SYSTEM ===== */

const role = localStorage.getItem("vantaRole");
const plan = localStorage.getItem("vantaPlan");

/* Redirect if not logged in */
if (!role && !window.location.pathname.includes("login") && !window.location.pathname.includes("signup")) {
  window.location.href = "login.html";
}

/* OWNER = FULL ACCESS */
if (role === "owner") {
  localStorage.setItem("vantaPlan", "elite");
  localStorage.setItem("vantaAccess", "full");
}

/* DEMO BUYER */
if (role === "buyer" && plan === "demo") {
  localStorage.setItem("vantaAccess", "core");
}

/* Helpers */
window.isOwner = () => localStorage.getItem("vantaAccess") === "full";
window.isDemo = () => localStorage.getItem("vantaAccess") === "core";
