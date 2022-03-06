const themeToggler = document.querySelector("input");
const toggleSwitch = document.querySelector("#toggleSwitch");
const body = document.querySelector("body");

const toggleTheme = () => {
  if (themeToggler.checked) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
};

if (localStorage.getItem(themeToggler.id) === null) {
  localStorage.setItem(themeToggler.id, themeToggler.checked);
} else {
  let isDarkThemeOn;
  if (localStorage.getItem(themeToggler.id) === "false") {
    isDarkThemeOn = false;
  } else if (localStorage.getItem(themeToggler.id) === "true") {
    isDarkThemeOn = true;
  }
  themeToggler.checked = isDarkThemeOn;
  toggleTheme();
}

toggleSwitch.addEventListener("click", () => {
  if (themeToggler.checked) {
    themeToggler.checked = false;
  } else {
    themeToggler.checked = true;
  }
  toggleTheme();
  localStorage.setItem(themeToggler.id, themeToggler.checked);
});
