const gif = document.getElementById("gif-surprise");
const tombol = document.getElementById("btn-surprise");
const overlay = document.getElementById("overlay");

function bukaPopup() {
    gif.src = "surprise.gif?t";
    overlay.style.display = "block";
    gif.style.display = "block";
}

function tutupPopup() {
    overlay.style.display = "none";
    gif.style.display = "none";
}

tombol.addEventListener("click", bukaPopup);
gif.addEventListener("click", tutupPopup);
overlay.addEventListener("click", tutupPopup);

