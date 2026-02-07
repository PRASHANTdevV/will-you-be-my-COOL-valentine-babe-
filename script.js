const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const sound = document.getElementById("sound");

let noCount = 0;

const messages = [
  "Are you sure ? 🥺",
  "Are you actually sure ? 😭",
  "Please be my Valentine ... 💔",
  "I’m warning you please be my Valentine 😤",
  "Okay this is getting serious now 😡",
  "Last chance human 😠💢",
  "You can’t escape destiny 😈"
];

const gifs = [
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/l378giAZgxPw3eO52/giphy.gif",
  "https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif",
  "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
  "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
  "https://media.giphy.com/media/fxsqOYnIMEefC/giphy.gif",
  "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
];

function typeText(text) {
  question.innerText = "";
  let i = 0;
  const interval = setInterval(() => {
    question.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
}

yesBtn.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play().catch(() => {});

  typeText("Yaaay !!! You chose wisely 😌💖");

  gif.src = "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif";

  noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  typeText(messages[noCount % messages.length]);
  gif.src = gifs[noCount % gifs.length];

  noCount++;
});
