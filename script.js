
function checkLogin() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const date = document.getElementById("date").value.trim();
  const error = document.getElementById("error");

  if (name === "safwa" && date === "5/6/2001") {

    error.innerText = "💖 Opening surprise...";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1200);

  } else {
    error.innerText = "❌ Wrong name or date 💔";
  }
}

/* typing effect */
function showLove() {
  const text = "💖 I love you endlessly Safwa 💖";
  const box = document.getElementById("love");

  let i = 0;
  box.innerHTML = "";

  function type() {
    if (i < text.length) {
      box.innerHTML += text[i];
      i++;
      setTimeout(type, 70);
    }
  }

  type();
}

/* music */
window.addEventListener("click", () => {
  const song = document.getElementById("song");
  if (song) song.play();
}, { once: true });