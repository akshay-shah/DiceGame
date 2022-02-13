var dice1 = Math.floor(Math.random() * 6 + 1);
var dice2 = Math.floor(Math.random() * 6 + 1);

var source1 = ""
var source2 = ""


if (dice1 === 1) {
    source1 = "images/dice1.png";
} else if (dice1 === 2) {
    source1 = "images/dice2.png";
} else if (dice1 === 3) {
    source1 = "images/dice3.png";
} else if (dice1 === 4) {
    source1 = "images/dice4.png";
} else if (dice1 === 5) {
    source1 = "images/dice5.png";
} else if (dice1 === 6) {
    source1 = "images/dice6.png";
}

document.querySelector(".img1").setAttribute("src",source1);

if (dice2 === 1) {
    source2 = "images/dice1.png";
} else if (dice2 === 2) {
    source2 = "images/dice2.png";
} else if (dice2 === 3) {
    source2 = "images/dice3.png";
} else if (dice2 === 4) {
    source2 = "images/dice4.png";
} else if (dice2 === 5) {
    source2 = "images/dice5.png";
} else if (dice2 === 6) {
    source2 = "images/dice6.png";
}

document.querySelector(".img2").setAttribute("src",source2);

if(source1 > source2){
    document.querySelector("h1").textContent = "🇮🇳 Player 1 wins";
}else if(source2 > source1){
    document.querySelector("h1").textContent = "Player 2 wins 🇮🇳";
}else {
    document.querySelector("h1").textContent = "Refresh Me";
}
