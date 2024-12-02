// Save Data Toggle Light/Dark Mode
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (savedTheme === "dark") {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  }
});

// Toggle Light/Dark Mode
document.getElementById("theme-toggle").addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (newTheme === "dark") {
    sunIcon.style.display = "inline";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline";
  }
});

// Toggle Navigation Menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// Change Tab Title on Visibility Change
const originalTitle = document.title;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "Diayra | Come Back Please";
  } else {
    document.title = originalTitle;
  }
});

// Color Font Text
const textElement = document.querySelector(".intro h1 span");
if (textElement) { // Pastikan elemen ada
    const colors = ["#a580ca", "#4a1985", "#260656", "#120239"];
    let colorIndex = 0;

    function changeTextColor() {
        colorIndex = (colorIndex + 1) % colors.length;
        textElement.style.color = colors[colorIndex];
    }

    setInterval(changeTextColor, 2000);
} else {
    console.error("Element not found!");
}