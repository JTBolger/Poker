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
    turn += 1
    if (bet > currentBet) {
        currentBet = bet
    }
    executeTurn1(turn)
}

window.addEventListener('load', function() {
    let CPU1number = Math.floor(Math.random() * 11) + 1;
    document.getElementById("player-icon-1").innerHTML = changePFP(CPU1number)
    let CPU2number = Math.floor(Math.random() * 11) + 1;
    document.getElementById("player-icon-2").innerHTML = changePFP(CPU2number)
    let CPU3number = Math.floor(Math.random() * 11) + 1;
    document.getElementById("player-icon-3").innerHTML = changePFP(CPU3number)
    let CPU4number = Math.floor(Math.random() * 11) + 1;
    document.getElementById("player-icon-4").innerHTML = changePFP(CPU4number)

});
function changePFP(CPUnumber) {
    if (CPUnumber == 1) {
        return "<img src=\"player-icons/player-icon-1.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 2) {
        return "<img src=\"player-icons/player-icon-2.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 3) {
        return "<img src=\"player-icons/player-icon-3.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 4) {
        return "<img src=\"player-icons/player-icon-4.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 5) {
        return "<img src=\"player-icons/player-icon-5.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 6) {
        return "<img src=\"player-icons/player-icon-6.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 7) {
        return "<img src=\"player-icons/player-icon-7.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 8) {
        return "<img src=\"player-icons/player-icon-8.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 9) {
        return "<img src=\"player-icons/player-icon-9.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 10) {
        return "<img src=\"player-icons/player-icon-10.png\" style=\"width: 100%; height: 150%;\">"
    }
    else if (CPUnumber == 11) {
        return "<img src=\"player-icons/player-icon-11.png\" style=\"width: 100%; height: 150%;\">"
    }
}

const deck = [
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC',
    '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD',
    '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH',
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'
];

function changePicture(cardPic) {
    if (cardPic == "AC") {
        return "<img src=\"Cards/2.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "2C") {
        return "<img src=\"Cards/3.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "3C") {
        return "<img src=\"Cards/4.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "4C") {
        return "<img src=\"Cards/5.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "5C") {
        return "<img src=\"Cards/6.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "6C") {
        return "<img src=\"Cards/7.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "7C") {
        return "<img src=\"Cards/8.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "8C") {
        return "<img src=\"Cards/9.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "9C") {
        return "<img src=\"Cards/10.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "10C") {
        return "<img src=\"Cards/11.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "JC") {
        return "<img src=\"Cards/12.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "QC") {
        return "<img src=\"Cards/13.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "KC") {
        return "<img src=\"Cards/14.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    // HEARTS //
    if (cardPic == "AH") {
        return "<img src=\"Cards/15.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "2H") {
        return "<img src=\"Cards/16.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "3H") {
        return "<img src=\"Cards/17.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "4H") {
        return "<img src=\"Cards/18.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "5H") {
        return "<img src=\"Cards/19.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "6H") {
        return "<img src=\"Cards/20.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "7H") {
        return "<img src=\"Cards/21.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "8H") {
        return "<img src=\"Cards/22.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "9H") {
        return "<img src=\"Cards/23.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "10H") {
        return "<img src=\"Cards/24.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "JH") {
        return "<img src=\"Cards/25.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "QH") {
        return "<img src=\"Cards/26.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "KH") {
        return "<img src=\"Cards/27.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    // DIAMONDS //
    if (cardPic == "AD") {
        return "<img src=\"Cards/28.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "2D") {
        return "<img src=\"Cards/29.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "3D") {
        return "<img src=\"Cards/30.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "4D") {
        return "<img src=\"Cards/31.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "5D") {
        return "<img src=\"Cards/32.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "6D") {
        return "<img src=\"Cards/33.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "7D") {
        return "<img src=\"Cards/34.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "8D") {
        return "<img src=\"Cards/35.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "9D") {
        return "<img src=\"Cards/36.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "10D") {
        return "<img src=\"Cards/37.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "JD") {
        return "<img src=\"Cards/38.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "QD") {
        return "<img src=\"Cards/39.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "KD") {
        return "<img src=\"Cards/40.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    // SPADES //
    if (cardPic == "AS") {
        return "<img src=\"Cards/41.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "2S") {
        return "<img src=\"Cards/42.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "3S") {
        return "<img src=\"Cards/43.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "4S") {
        return "<img src=\"Cards/44.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "5S") {
        return "<img src=\"Cards/45.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "6S") {
        return "<img src=\"Cards/46.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "7S") {
        return "<img src=\"Cards/47.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "8S") {
        return "<img src=\"Cards/48.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "9S") {
        return "<img src=\"Cards/49.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "10S") {
        return "<img src=\"Cards/50.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "JS") {
        return "<img src=\"Cards/51.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "QS") {
        return "<img src=\"Cards/52.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
    else if (cardPic == "KS") {
        return "<img src=\"Cards/53.png\" style=\"width: 100%; height: 100%; border-radius: 10px;\">"
    }
}

let CPU1Hand = [];
let CPU2Hand = [];
let CPU3Hand = [];
let CPU4Hand = [];
let PlayerHand = [];
let Board = [];
let dealtCards = [];

function drawCard() {
    if (deck.length > 0) {
      return deck[Math.floor(Math.random() * deck.length)];
    }
    else {
      console.log('No more cards in the deck!');
      return null;
    }
}
function getUniqueCard() {
    let card = drawCard();
    while (dealtCards.includes(card)) {
      card = drawCard();
    }
    dealtCards.push(card);
    return card;
}
function dealCardsAnimation() {
    setTimeout(dealCPU1Animation1, 200)
    setTimeout(dealCPU2Animation1, 400)
    setTimeout(dealPlayerAnimation1, 600)
    setTimeout(dealCPU3Animation1, 800)
    setTimeout(dealCPU4Animation1, 1000)
    setTimeout(dealCPU1Animation2, 1200)
    setTimeout(dealCPU2Animation2, 1400)
    setTimeout(dealPlayerAnimation2, 1600)
    setTimeout(dealCPU3Animation2, 1800)
    setTimeout(dealCPU4Animation2, 2000)
}
function dealFlopAnimation() {
    setTimeout(dealFlopAnimation1, 200)
    setTimeout(dealFlopAnimation2, 400)
    setTimeout(dealFlopAnimation3, 600)
}
function dealCPU1Animation1() {
    document.getElementById("CPU1-card-1").style.left = "92.5%"
    document.getElementById("CPU1-card-1").style.bottom = "50%"
    document.getElementById("CPU1-card-1").style.rotate = "350deg"
}
function dealCPU1Animation2() {
    document.getElementById("CPU1-card-2").style.left = "95%"
    document.getElementById("CPU1-card-2").style.bottom = "50%"
    document.getElementById("CPU1-card-2").style.rotate = "370deg"
}
function dealCPU2Animation1() {
    document.getElementById("CPU2-card-1").style.left = "80%"
    document.getElementById("CPU2-card-1").style.bottom = "0%"
    document.getElementById("CPU2-card-1").style.rotate = "350deg"
}
function dealCPU2Animation2() {
    document.getElementById("CPU2-card-2").style.left = "82.5%"
    document.getElementById("CPU2-card-2").style.bottom = "0%"
    document.getElementById("CPU2-card-2").style.rotate = "370deg"
}
function dealCPU3Animation1() {
    document.getElementById("CPU3-card-1").style.left = "20%"
    document.getElementById("CPU3-card-1").style.bottom = "0%"
    document.getElementById("CPU3-card-1").style.rotate = "350deg"
}
function dealCPU3Animation2() {
    document.getElementById("CPU3-card-2").style.left = "22.5%"
    document.getElementById("CPU3-card-2").style.bottom = "0%"
    document.getElementById("CPU3-card-2").style.rotate = "370deg"
}
function dealCPU4Animation1() {
    document.getElementById("CPU4-card-1").style.left = "1.5%"
    document.getElementById("CPU4-card-1").style.bottom = "50%"
    document.getElementById("CPU4-card-1").style.rotate = "350deg"
}
function dealCPU4Animation2() {
    document.getElementById("CPU4-card-2").style.left = "3%"
    document.getElementById("CPU4-card-2").style.bottom = "50%"
    document.getElementById("CPU4-card-2").style.rotate = "370deg"
}
function dealPlayerAnimation1() {
    var PlayerCard1 = PlayerHand[0]
    document.getElementById("player-card-1").style.left = "55%"
    document.getElementById("player-card-1").style.bottom = "10%"
    document.getElementById("player-card-1").style.rotate = "350deg"
    document.getElementById("player-card-1").innerHTML = changePicture(PlayerCard1)
}
function dealPlayerAnimation2() {
    var PlayerCard2 = PlayerHand[1]
    document.getElementById("player-card-2").style.left = "57.5%"
    document.getElementById("player-card-2").style.bottom = "10%"
    document.getElementById("player-card-2").style.rotate = "370deg"
    document.getElementById("player-card-2").innerHTML = changePicture(PlayerCard2)
}
function dealFlopAnimation1() {
    var FlopCard1 = Board[0]
    document.getElementById("flop-card-1").style.left = "0%"
    document.getElementById("flop-card-1").style.bottom = "0%"
    document.getElementById("flop-card-1").style.rotate = "360deg"
    document.getElementById("flop-card-1").innerHTML = changePicture(FlopCard1)
}
function dealFlopAnimation2() {
    var FlopCard2 = Board[1]
    document.getElementById("flop-card-2").style.left = "0%"
    document.getElementById("flop-card-2").style.bottom = "0%"
    document.getElementById("flop-card-2").style.rotate = "360deg"
    document.getElementById("flop-card-2").innerHTML = changePicture(FlopCard2)
}
function dealFlopAnimation3() {
    var FlopCard3 = Board[2]
    document.getElementById("flop-card-3").style.left = "0%"
    document.getElementById("flop-card-3").style.bottom = "0%"
    document.getElementById("flop-card-3").style.rotate = "360deg"
    document.getElementById("flop-card-3").innerHTML = changePicture(FlopCard3)
}
function dealTurnAnimation1() {
    var TurnCard1 = Board[3]
    document.getElementById("turn-card-1").style.left = "0%"
    document.getElementById("turn-card-1").style.bottom = "0%"
    document.getElementById("turn-card-1").style.rotate = "360deg"
    document.getElementById("turn-card-1").innerHTML = changePicture(TurnCard1)
}
function dealRiverAnimation1() {
    var RiverCard1 = Board[4]
    document.getElementById("river-card-1").style.left = "0%"
    document.getElementById("river-card-1").style.bottom = "0%"
    document.getElementById("river-card-1").style.rotate = "360deg"
    document.getElementById("river-card-1").innerHTML = changePicture(RiverCard1)
}
function dealCards() {
    for (let i = 0; i < 2; i++) {
      let card1 = getUniqueCard();
      let card2 = getUniqueCard();
      
      CPU1Hand.push(card1);
      CPU2Hand.push(card2);
      CPU3Hand.push(getUniqueCard());
      CPU4Hand.push(getUniqueCard());
      PlayerHand.push(getUniqueCard());
      

      dealCardsAnimation()
    }
    for (let i = 0; i < 5; i++) {
        Board.push(getUniqueCard());
    }
}



console.log('CPU1Hand:', CPU1Hand);
console.log('CPU2Hand:', CPU2Hand);
console.log('CPU3Hand:', CPU3Hand);
console.log('CPU4Hand:', CPU4Hand);
console.log('PlayerHand:', PlayerHand);
console.log('Board:', Board);
console.log('DealtCards:', dealtCards);


// function executeTurn(currentTurn) {
//     if (currentTurn > 5) {
//         currentTurn = 1
//         turn = 1
//         console.log("current turn = "+currentTurn)
//     }
//     // Reset all borders
//     resetBorders();

//     // Set border for the active player
//     document.getElementById(getPlayerId(currentTurn)).style.border = "0.35rem solid rgb(255 255 255)";

//     // Handle player actions
//     switch (currentTurn) {
//         case 1:
//             handlePlayerAction("CPU-1", CPU1Bet);
//             break;
//         case 2:
//             handlePlayerAction("CPU-2", CPU2Bet);
//             break;
//         case 3:
//             handlePlayerAction("player", playerBet);
//             break;
//         case 4:
//             handlePlayerAction("CPU-3", CPU3Bet);
//             break;
//         case 5:
//             handlePlayerAction("CPU-4", CPU4Bet);
//             break;
//     }
// }

// flopC = 0
// turnC = 0
// riverC = 0
// function handlePlayerAction(playerId, playerBet) {
//     if (currentBet <= 3) {
//         pot += (currentBet - playerBet)
//         console.log("pot = "+pot+", currentBet = "+currentBet+", playerBet = "+playerBet+", playerId = "+playerId)
//         document.getElementById("pot").innerHTML = "$" + pot;
//     } 
//     else {
//         fold(playerId);
//     }

    // if (playerBet == currentBet && flopC == 1 && turnC == 1 && riverC == 1) {
    //     dealFlopAnimation();
    // }
    // else if (playerBet == currentBet && flopC == 1 && turnC == 1) {
    //     dealRiverAnimation();
    //     riverC = 1
    // }
    // else if (playerBet == currentBet && flopC == 1) {
    //     dealTurnAnimation();
    //     turnC = 1
    // }
    // else if (playerBet == currentBet) {
    //     dealFlopAnimation();
    //     flopC = 1
    // }
//     playerBet = (currentBet - playerBet)
// }

// function getPlayerId(turn) {
//     // Map turn to corresponding player ID
//     const playerIds = ["", "CPU-1", "CPU-2", "player-area", "CPU-3", "CPU-4"];
//     return playerIds[turn];
// }

// function resetBorders() {
//     // Reset borders for all players
//     for (let i = 1; i <= 5; i++) {
//         document.getElementById(getPlayerId(i)).style.border = "none";
//     }
// }

// function executeTurn1(currentTurn) {
//     if (currentTurn == 1) {
//         document.getElementById("CPU-1").style.border = "0.35rem solid rgb(255 255 255)"
//         document.getElementById("CPU-4").style.border = "none"
//         if (currentBet <= 3) {
//             CPU1Bet = currentBet
//             pot += CPU1Bet
//             document.getElementById("pot").innerHTML = "$"+pot
//         }
//         else {fold(CPU1)}
//         if (CPU1Bet == currentBet) {dealFlopAnimation()}
//     }
//     else if (currentTurn == 2) {
//         document.getElementById("CPU-2").style.border = "0.35rem solid rgb(255 255 255)"
//         document.getElementById("CPU-1").style.border = "none"
//         if (currentBet <= 3) {
//             CPU2Bet = currentBet
//             pot += CPU2Bet
//             document.getElementById("pot").innerHTML = "$"+pot
//         }
//         else {fold(CPU2)}
//         if (CPU2Bet == currentBet) {dealFlopAnimation()}
//     }
//     else if (currentTurn == 3) {
//         document.getElementById("player-area").style.border = "0.35rem solid rgb(255 255 255)"
//         document.getElementById("CPU-2").style.border = "none"
//         if (playerBetNumber == currentBet) {dealFlopAnimation()}
//     }
//     else if (currentTurn == 4) {
//         document.getElementById("CPU-3").style.border = "0.35rem solid rgb(255 255 255)"
//         document.getElementById("player-area").style.border = "none"
//         if (CPU3Bet == currentBet) {dealFlopAnimation()}
//         if (currentBet <= 3) {
//             CPU3Bet = currentBet
//             pot += CPU3Bet
//             document.getElementById("pot").innerHTML = "$"+pot
//         }
//         else {fold(CPU3)}
//     }
//     else if (currentTurn == 5) {
//         document.getElementById("CPU-4").style.border = "0.35rem solid rgb(255 255 255)"
//         document.getElementById("CPU-3").style.border = "none"
//         turn = 0
//         if (CPU4Bet == currentBet) {dealFlopAnimation()}
//         if (currentBet <= 3) {
//             CPU4Bet = currentBet
//             pot += CPU4Bet
//             document.getElementById("pot").innerHTML = "$"+pot
//         }
//         else {fold(CPU4)}
//     }
// }

var CPU1Balance = 100
var CPU2Balance = 100
var CPU2Balance = 100
var CPU2Balance = 100
var PlayerBalance = 100
var pot = 0
var currentTurn = 1
var currentBet = 0
var CPU1Bet = 0
var CPU2Bet = 0
var CPU3Bet = 0
var CPU4Bet = 0
var playerBet = 0

function beginGame() {
    dealCards();
    currentTurn = 3
    CPU1Balance -= 1
    CPU2Balance -= 2
    CPU2Bet = 2
    CPU1Bet = 1
    currentBet = 2
    pot += 3
    document.getElementById("pot").innerHTML = "$"+pot
    document.getElementById("check-button").innerHTML = "CALL"
    document.getElementById("begin-game").style.display = "none"
    document.getElementById("player-area").style.border = "0.35rem solid rgb(255 255 255)"
    CPUTurn()
}
function callBet() {
    PlayerBalance -= currentBet
    PlayerBet = currentBet
    console.log("PlayerBalance = "+PlayerBalance)
    if (currentBet >= 1 && currentBet <= 25) {
        playerChips.innerHTML = "<img src=\"Chips/chip-red-1.png\" style=\"height: 6rem; bottom: 0;\">"
    }
    else if (currentBet > 25 && currentBet <= 50) {
        playerChips.innerHTML = "<img src=\"Chips/chip-red-2.png\" style=\"height: 6rem; bottom: 0;\">"
    }
    else if (currentBet > 50 && currentBet <= 100) {
        playerChips.innerHTML = "<img src=\"Chips/chip-red-3.png\" style=\"height: 6rem; bottom: 0;\">"
    }
    playerBetNumber.innerHTML = "$"+currentBet
    executeTurn(turn)
    turn += 1
    console.log("currentturn = "+turn)
}

function rotatePlayer() {
    if (currentTurn >= 6) {
        currentTurn = 1
    }
    else {
        currentTurn += 1
    }
}
var flopC = 0
var turnC = 0
var riverC = 0
function CPUTurn(turn) {
    if (turn == 1) {
        if (currentBet <= 3) {
            pot += (currentBet - playerBet)
            document.getElementById("pot").innerHTML = "$" + pot;
        }

        if (playerBet == currentBet && flopC == 1 && turnC == 1 && riverC == 1) {
            dealFlopAnimation();
        }
        else if (playerBet == currentBet && flopC == 1 && turnC == 1) {
            dealRiverAnimation();
            riverC = 1
        }
        else if (playerBet == currentBet && flopC == 1) {
            dealTurnAnimation();
            turnC = 1
        }
        else if (playerBet == currentBet) {
            dealFlopAnimation();
            flopC = 1
        }
    }
    else if (turn == 2) {}
    else if (turn == 4) {}
    else if (turn == 5) {}
    else if (turn == 3) {
        playerTurn()
    }
}
