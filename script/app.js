let titles = document.querySelectorAll(".chat-list-header");

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener("click", function () {
    let result = this.nextElementSibling;
    let isActive = result.classList.contains("active");
    this.classList.toggle("active");
    result.classList.toggle("active");

    let totalHeight = 0;
    if (!isActive) {
      for (let j = 0; j < result.children.length; j++) {
        totalHeight += result.children[j].scrollHeight + 40;
      }
    }
    result.style.maxHeight = totalHeight + "px";
  });
}

const themeColors = document.querySelectorAll(".theme-color");

themeColors.forEach((themeColor) => {
  themeColor.addEventListener("click", () => {
    themeColors.forEach((c) => c.classList.remove("active"));
    const theme = themeColor.getAttribute("data-color");
    document.body.setAttribute("data-theme", theme);
    themeColor.classList.add("active");
  });
});
