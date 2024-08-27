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

//

let loding = document.getElementById("loding");
let _main = document.getElementById("_main");

window.onload = function () {
  loding.style.display = "none";

  _main.style.display = "block";
};

function showDiv(id) {
  document.querySelectorAll(".content").forEach((div) => {
    div.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

function searchTable() {
  var input, filter, table, tr, td, i, j, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j]) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        }
      }
    }
  }
}

function toggleAudio(audioId, playIconId, pauseIconId) {
  var audioPlayer = document.getElementById(audioId);
  var playIcon = document.getElementById(playIconId);
  var pauseIcon = document.getElementById(pauseIconId);
  var audioIcon = document.getElementById("audioIcon");

  // إيقاف أي ملف صوتي آخر قيد التشغيل
  var allAudioPlayers = document.querySelectorAll("audio");
  allAudioPlayers.forEach(function (player) {
    if (player.id !== audioId && !player.paused) {
      player.pause();
      player.currentTime = 0; // إعادة تشغيل الملف الصوتي من البداية
      var playIconOther = document.getElementById(
        "playIcon" + player.id.slice(-1)
      );
      var pauseIconOther = document.getElementById(
        "pauseIcon" + player.id.slice(-1)
      );
      playIconOther.style.display = "inline";
      pauseIconOther.style.display = "none";
    }
  });

  if (audioPlayer.paused) {
    audioPlayer.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
    audioIcon.classList.add("playing");
  } else {
    audioPlayer.pause();
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
    audioIcon.classList.remove("playing");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("a.external-link");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var url = link.getAttribute("href");
      window.open(url, "_blank");
    });
  });
});

// left_ptn

let left_ptn = document.getElementById("left_ptn");
let left_pt = document.getElementById("left_pt");

let left_S = document.getElementById("left_S");

left_ptn.addEventListener("click", function () {
  left_S.style.left = "0";
});

left_pt.addEventListener("click", function () {
  left_S.style.left = "100vh";
});
