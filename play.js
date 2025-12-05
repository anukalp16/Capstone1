let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");
let qtyDisplay = document.getElementById("qty");
let playersDisplay = document.getElementById("total");

let playerCount = 1;

qtyDisplay.textContent = playerCount;
playersDisplay.textContent = playerCount;

plusBtn.addEventListener("click", function () {
    playerCount++;
    qtyDisplay.textContent = playerCount;
    playersDisplay.textContent = playerCount;
});

minusBtn.addEventListener("click", function () {
    if (playerCount > 1) playerCount--;
    qtyDisplay.textContent = playerCount;
    playersDisplay.textContent = playerCount;
});

function startGame() {
    alert("Players selected: " + playerCount);
}