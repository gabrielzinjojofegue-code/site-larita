const envelope = document.getElementById("envelope");
const musica = document.getElementById("musica");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  // toca música quando abrir
  if (envelope.classList.contains("open")) {
    musica.play();
  } else {
    musica.pause();
  }

  const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // coração emoji
  heart.innerText = "💖";

  // posição aleatória
  heart.style.left = Math.random() * 100 + "vw";

  // tamanho aleatório
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  // duração aleatória
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  // cores rosa e azul
  const colors = ["#ff4d6d", "#4da6ff"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  heartsContainer.appendChild(heart);

  // remove depois de cair
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// cria vários corações continuamente
setInterval(createHeart, 300);

});