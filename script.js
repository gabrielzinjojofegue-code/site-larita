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
});