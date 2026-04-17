const toggles = document.querySelectorAll("#toggleLD, #toggleLDmobile");

function setTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  setTheme(!isDark);
}

// kliknięcia
toggles.forEach((btn) => {
  if (btn) btn.addEventListener("click", toggleTheme);
});

// start strony
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");

  if (saved) {
    setTheme(saved === "dark");
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark);
  }
});
