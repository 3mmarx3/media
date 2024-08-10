// Get the current day of the week (0-6) where 0 is Sunday and 6 is Saturday
const currentDay = new Date().getDay();

// Array of day IDs
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

// Highlight the current day
document.getElementById(days[currentDay]).classList.add("highlight");

//
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set it to 12
  hours = hours.toString().padStart(2, "0");
  return `${hours}:${minutes} ${ampm}`;
}

const timeElement = document.querySelector(".info-text-upper");
timeElement.textContent = getCurrentTime();

setInterval(() => {
  timeElement.textContent = getCurrentTime();
}, 1000);

//

function getCurrentDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // January is 0!
  return `${day}/${month}`;
}

const dateElement = document.querySelector(".date");
dateElement.textContent = getCurrentDate();
