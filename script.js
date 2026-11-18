// ===== LIENS DES CARTES =====
// Collez ici le lien de chaque carte (https://...). Une carte sans lien reste non cliquable
// (pour les catégories, elle renvoie vers la section « Produits »).
const LINKS = {
  // Catégories
  "gaming": "",
  "mode": "",
  "business": "",
  "maison": "",
  // Services
  "recharge-mobile": "",
  "achats-en-ligne": "",
  "recharge-visa": "",
  "marketing-digital": "",
  "services-crypto": ""
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