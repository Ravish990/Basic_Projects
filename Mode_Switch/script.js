const input = document.querySelector(".input");
const body = document.querySelector("body");
const mode = document.querySelector("h1");
input.checked = JSON.parse(localStorage.getItem("mode"));
updateTheme();

function updateTheme() {
  
  if (input.checked) {
        body.style.background = "black"
        mode.innerText = "Switch to Light Mode";
        mode.style.color = "white";
  } else {
    body.style.background =
     "white";
  
  mode.innerText = "Switch to Dark Mode";
  mode.style.color = "black"
  }
}
input.addEventListener("input",() => {
  updateTheme();
  localStorageUpdate();
})

function localStorageUpdate() {
  localStorage.setItem("mode",
    JSON.stringify(input.checked)
  );
}