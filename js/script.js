const themeBtn = document.querySelector(".theme-btn");
const picEle = document.querySelector("picture");
const todoInput = document.getElementById("create-todo");
const todoList = document.querySelector(".todo-list");

function removeTodo(e) {
  e.currentTarget.remove();
}
themeBtn.addEventListener("click", (e) => {
  const imgEle = e.currentTarget.children[0];
  const srcSet = picEle.children[0];
  const bgImgEle = picEle.children[1];

  if (imgEle.getAttribute("alt") == "sun") {
    imgEle.setAttribute("src", "images/icon-moon.svg");
    imgEle.setAttribute("alt", "moon");

    bgImgEle.setAttribute("src", "images/bg-mobile-light.jpg");
    bgImgEle.setAttribute("alt", "light");
    srcSet.setAttribute("srcset", "images/bg-desktop-light.jpg");
    srcSet.setAttribute("alt", "light");
  } else {
    imgEle.setAttribute("src", "images/icon-sun.svg");
    imgEle.setAttribute("alt", "sun");
    bgImgEle.setAttribute("src", "images/bg-mobile-dark.jpg");
    bgImgEle.setAttribute("alt", "dark");
    srcSet.setAttribute("srcset", "images/bg-desktop-dark.jpg");
    srcSet.setAttribute("alt", "dark");
  }
  document.documentElement.classList.toggle("dark-mode");
});

todoInput.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li>
            <label>
                <input type="checkbox" name="checkmark" class="checkbox" />
                ${e.currentTarget.value}
            </label>
            <button>
                <img src="./images/icon-cross.svg" alt="X" />
            </button>
        </li>`
    );
    todoList.lastChild.addEventListener("click", removeTodo);
    e.currentTarget.value = "";
    // console.log("enter pressed");
  }
});
