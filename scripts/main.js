var betScreen = document.getElementById("bet-screen")
var betBox = document.getElementById("bet-box")
var playerChips = document.getElementById("player-chips")
var playerBetNumber = document.getElementById("player-bet-number")

var bet = 0
var playerTot = 100
function openBet() {
    betScreen.style.display = "flex"
}
function confirmBet() {
    var tempBet = betBox.value
    tempBet = parseInt(tempBet)
    if (tempBet > 0 && tempBet <= 100) {
        betScreen.style.display = "none"
        bet += tempBet
        console.log("Bet = "+bet)
    }
    else {
        console.error("Invalid bet amount")
    }
    if (bet >= 1 && bet <= 25) {
        playerChips.innerHTML = "<img src=\"Chips/chip-red-1.png\" style=\"height: 6rem; bottom: 0;\">"
    }
    else if (bet > 25 && bet <= 50) {
        playerChips.innerHTML = "<img src=\"Chips/chip-red-2.png\" style=\"height: 6rem; bottom: 0;\">"
    }
    else if (bet > 50 && bet <= 100) {
        playerChips.innerHTML = "<img src=\"Chips/chip-red-3.png\" style=\"height: 6rem; bottom: 0;\">"
    }
    playerBetNumber.innerHTML = "$"+bet
}

window.addEventListener('load', function() {
    
});
  