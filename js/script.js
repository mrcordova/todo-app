const themeBtn = document.querySelector(".theme-btn");
const picEle = document.querySelector("picture");
const todoInput = document.getElementById("create-todo");
const todoList = document.querySelector(".todo-list");
const totalListItems = document.querySelector(".total-list-items");
const clearBtn = document.querySelector(".clear-btn");
const allBtns = document.querySelectorAll("#all, #desktop-all");
const activeBtns = document.querySelectorAll("#active, #desktop-active");
const completedBtns = document.querySelectorAll(
  "#completed, #desktop-completed"
);
const checkInputs = document.querySelectorAll('input[name="checkmark"]');

function removeTodoItem(e) {
  e.currentTarget.parentElement.remove();
  totalListItems.textContent = todoList.children.length;
}

function showAll() {
  for (const liEle of todoList.children) {
    liEle.classList.toggle("hide", false);
  }
}

function showActive() {
  for (const liEle of todoList.children) {
    liEle.classList.toggle(
      "hide",
      liEle.firstElementChild.firstElementChild.checked
    );
  }
}
function showCompleted() {
  for (const liEle of todoList.children) {
    liEle.classList.toggle(
      "hide",
      !liEle.firstElementChild.firstElementChild.checked
    );
  }
}
function updateFilters(e) {
  let allTab = false;
  for (const allBtn of allBtns) {
    if (allBtn.checked) {
      allTab = true;
    }
  }

  if (e.currentTarget.checked && !allTab) {
    showActive();
  } else if (!e.currentTarget.checked && !allTab) {
    showCompleted();
  }
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
    todoList.lastElementChild.lastElementChild.addEventListener(
      "click",
      removeTodoItem
    );
    todoList.lastElementChild.firstElementChild.firstElementChild.addEventListener(
      "click",
      updateFilters
    );
    e.currentTarget.value = "";
    totalListItems.textContent = todoList.children.length;
  }
});

clearBtn.addEventListener("click", () => {
  let i = parseInt(totalListItems.textContent);
  while (i--) {
    if (todoList.children[i].firstElementChild.firstElementChild.checked) {
      todoList.children[i].remove();
    }
  }
  totalListItems.textContent = todoList.children.length;
});

for (const allBtn of allBtns) {
  allBtn.addEventListener("click", showAll);
}

for (const activeBtn of activeBtns) {
  activeBtn.addEventListener("click", showActive);
}

for (const completedBtn of completedBtns) {
  completedBtn.addEventListener("click", showCompleted);
}

for (const checkInput of checkInputs) {
  checkInput.addEventListener("click", updateFilters);
}
