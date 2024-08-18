const currentDay = new Date().getDay();

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

document.getElementById(days[currentDay]).classList.add("highlight");

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, "0");
  return `${hours}:${minutes} ${ampm}`;
}

const timeElement = document.querySelector(".info-text-upper");
timeElement.textContent = getCurrentTime();

setInterval(() => {
  timeElement.textContent = getCurrentTime();
}, 1000);

function getCurrentDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  return `${day}/${month}`;
}

const dateElement = document.querySelector(".date");
dateElement.textContent = getCurrentDate();

//

var toggleSwitch = document.querySelector(".toggle-button");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    /*If required*/
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    /*If required*/
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
