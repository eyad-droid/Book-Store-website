const btn = document.getElementById("darkModeBtn");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  updateButton(true);
}

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    updateButton(true);
  } else {
    localStorage.setItem("theme", "light");
    updateButton(false);
  }
});

function updateButton(isDark) {
  if (isDark) {
    btn.innerHTML = "☀️";
    btn.style.backgroundColor = "#ffcc00";
    btn.style.color = "#000";
  } else {
    btn.innerHTML = "🌙";
    btn.style.backgroundColor = "#a20909";
    btn.style.color = "#fff";
  }
}
