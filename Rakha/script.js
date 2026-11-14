window.onload = function () {
  const bars = document.getElementsByClassName("skill-level");
  for (let index = 0; index < bars.length; index++) {
    bars[index].style.width = bars[index].getAttribute("data-target");
  }
};

function showSurprise() {
  const colors = ["#e3f2fd", "#e8f5e9", "#fff3e0", "#f3e5f5", "#f4f4f4"];
  const randomColor = Math.floor(Math.random() * colors.length);

  document.body.style.backgroundColor = colors[randomColor];

  openGif("jumpscare.gif");
}

function openGif(gifUrl) {
  document.getElementById("modal-gif-img").src = gifUrl;
  document.getElementById("gif-modal").style.display = "flex";
}

function closeGif() {
  document.getElementById("gif-modal").style.display = "none";
  document.getElementById("modal-gif-img").src = "";
}
