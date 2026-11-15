const button = document.getElementById("interactionButton");
const gifScreen = document.getElementById("gifScreen");
const backButton = document.getElementById("backButton");

//show GIF when Click Me is pressed
button.addEventListener("click", function() {
    gifScreen.classList.add("active");
});

//go back to the main screen
backButton.addEventListener("click", function() {
    gifScreen.classList.remove("active");
});