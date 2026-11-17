
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
