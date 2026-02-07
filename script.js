const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const sound = document.getElementById("sound");

function typeText(text) {
  question.innerText = "";
  let i = 0;
  const interval = setInterval(() => {
    question.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}

yesBtn.onclick = () => {
  sound.play();

  typeText("Woahhh congratulations you got yourself a handsome man heheheh 😎❤️");

  gif.src = "https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif";

  noBtn.style.display = "none";
};

noBtn.onclick = () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};
