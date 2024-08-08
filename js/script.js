const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", (e) => {
  const imgEle = e.currentTarget.children[0];

  if (imgEle.getAttribute("alt") == "sun") {
    imgEle.setAttribute("src", "images/icon-moon.svg");
    imgEle.setAttribute("alt", "moon");
  } else {
    imgEle.setAttribute("src", "images/icon-sun.svg");
    imgEle.setAttribute("alt", "sun");
  }
  document.documentElement.classList.toggle("dark-mode");
});
