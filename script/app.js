var toggleSwitch = document.querySelector(".toggle-button");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    localStorage.setItem("theme", "dark"); // Save to local storage
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light"); // Save to local storage
  }
}

// Add event listener
toggleSwitch.addEventListener("change", switchTheme, false);

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    toggleSwitch.checked = true; // Update the toggle switch state
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    toggleSwitch.checked = false; // Update the toggle switch state
  }
}
