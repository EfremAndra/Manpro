const feedPetButton = document.querySelector("#feedPetBtn");
const petGifOverlay = document.querySelector("#petGifOverlay");
const petGif = document.querySelector("#petGif");
const closePetGifButton = document.querySelector("#closePetGif");
const surpriseButton = document.querySelector("#surpriseBtn");
const petGifSource = petGif.getAttribute("src");

const confettiColors = ["#526653", "#d08a58", "#d4aa4f", "#7185a1", "#b87979"];

function launchConfetti() {
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < 90; index += 1) {
        const piece = document.createElement("span");
        const width = 5 + Math.random() * 5;

        piece.className = "confetti-piece";
        piece.setAttribute("aria-hidden", "true");
        piece.style.setProperty("--start-x", `${Math.random() * 100}vw`);
        piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
        piece.style.setProperty("--rotation", `${Math.random() * 900 - 450}deg`);
        piece.style.setProperty("--duration", `${2.4 + Math.random() * 1.8}s`);
        piece.style.setProperty("--delay", `${Math.random() * 0.45}s`);
        piece.style.setProperty("--piece-width", `${width}px`);
        piece.style.setProperty("--piece-height", `${width * (0.65 + Math.random())}px`);
        piece.style.backgroundColor = confettiColors[index % confettiColors.length];
        piece.style.borderRadius = Math.random() > 0.75 ? "50%" : "1px";
        piece.addEventListener("animationend", () => piece.remove(), { once: true });

        fragment.appendChild(piece);
    }

    document.body.appendChild(fragment);
}

function showPetGif() {
    // Muat ulang sumber gambar agar animasi dimulai lagi dari awal.
    petGif.removeAttribute("src");
    void petGif.offsetWidth;
    petGif.src = petGifSource;

    petGifOverlay.classList.add("active");
    petGifOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("overlay-open");
    closePetGifButton.focus();
}

function hidePetGif() {
    petGifOverlay.classList.remove("active");
    petGifOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overlay-open");
    feedPetButton.focus();
}

feedPetButton.addEventListener("click", showPetGif);
closePetGifButton.addEventListener("click", hidePetGif);
surpriseButton.addEventListener("click", launchConfetti);

petGifOverlay.addEventListener("click", (event) => {
    if (event.target === petGifOverlay) {
        hidePetGif();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && petGifOverlay.classList.contains("active")) {
        hidePetGif();
    }
});
