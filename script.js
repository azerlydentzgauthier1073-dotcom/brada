// ===== LIENS DES CARTES =====
// Collez ici le lien de chaque carte (https://...). Une carte sans lien reste non cliquable
// (pour les catégories, elle renvoie vers la section « Produits »).
const LINKS = {
  // Catégories
  "gaming": "https://store.steampowered.com/",
  "mode": "https://www.shein.com/",
  "business": "https://www.shopify.com/",
  "maison": "https://www.temu.com/",
  // Services
  "recharge-mobile": "https://wa.me/50942426882?text=Bonjour%20BRADA.%20Je%20souhaite%20des%20informations%20sur%20%3A%20Recharge%20mobile.",
  "achats-en-ligne": "https://www.amazon.com/",
  "recharge-visa": "https://wa.me/50942426882?text=Bonjour%20BRADA.%20Je%20souhaite%20des%20informations%20sur%20%3A%20Recharge%20Visa.",
  "marketing-digital": "https://wa.me/50942426882?text=Bonjour%20BRADA.%20Je%20souhaite%20des%20informations%20sur%20%3A%20Marketing%20digital.",
  "services-crypto": "https://wa.me/50942426882?text=Bonjour%20BRADA.%20Je%20souhaite%20des%20informations%20sur%20%3A%20Services%20crypto."
};

document.querySelectorAll("[data-link]").forEach(card => {
  const url = (LINKS[card.dataset.link] || "").trim();
  if (!/^https?:\/\//i.test(url)) return;
  card.href = url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
});

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = localStorage.getItem("brada-language") || "fr";

function changeLanguage() {
  document.querySelectorAll("[data-fr]").forEach(element => {
    const translation = element.getAttribute(
      `data-${currentLanguage}`
    );

    if (translation) {
      element.textContent = translation;
    }
  });

  document.documentElement.lang = currentLanguage;
  languageBtn.textContent =
    currentLanguage === "fr" ? "EN" : "FR";

  localStorage.setItem("brada-language", currentLanguage);
}

languageBtn.addEventListener("click", () => {
  currentLanguage = currentLanguage === "fr" ? "en" : "fr";
  changeLanguage();
});

changeLanguage();