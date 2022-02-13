var dice1 = Math.floor(Math.random() * 6 + 1);
var dice2 = Math.floor(Math.random() * 6 + 1);

var source1 = "";
var source2 = "";

source1 = "images/dice" + dice1 + ".png";
source2 = "images/dice" + dice2 + ".png";

document.querySelector(".img1").setAttribute("src", source1);
document.querySelector(".img2").setAttribute("src", source2);

var heading = document.querySelector("h1");
if (source1 > source2) {
  heading.textContent = "🇮🇳 Player 1 wins";
} else if (source2 > source1) {
  heading.textContent = "Player 2 wins 🇮🇳";
} else {
  heading.textContent = "Refresh Me";
}
