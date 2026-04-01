/* =========================================================
   FICHIER : scripts.js 
   Projet : Naïalastar - Site web
   ========================================================= */

document.getElementById("year").textContent = new Date().getFullYear();

const header = document.getElementById("siteHeader");
function updateHeader() {
  if (!header) return;
  const atTop = window.scrollY < 10;
  header.classList.toggle("is-top", atTop);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
