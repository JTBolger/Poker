var betScreen = document.getElementById("bet-screen")
var betBox = document.getElementById("bet-box")
var playerChips = document.getElementById("player-chips")
var playerBetNumber = document.getElementById("player-bet-number")
var betButton = document.getElementById("bet-button")
var foldButton = document.getElementById("fold-button")
var checkButton = document.getElementById("check-button")

var bet = 0
var playerTot = 100
function openBet() {
    betScreen.style.display = "flex"
}
function confirmBet() {
    hidePlayerButtons()
    var tempBet = betBox.value
    tempBet = parseInt(tempBet)
    if (tempBet > 0 && tempBet <= 100) {
        betScreen.style.display = "none"
        bet = tempBet
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
    playerBet = bet
    playerBetNumber.innerHTML = "$"+bet
    // turn += 1
    if (playerBet > currentBet) {
        currentBet = bet
        console.log("Player Bet is greater than currentBet. current Bet is now : "+currentBet)
        rot = 0
    }
    pot += bet
    document.getElementById("pot").innerHTML = "$"+pot
    CPUTurn(currentTurn)
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        betScreen.style.display = "none"
    }
});

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


var CPU1Balance = 100
var CPU2Balance = 100
var CPU3Balance = 100
var CPU4Balance = 100
var PlayerBalance = 100
var pot = 0
var currentTurn = 1
var currentBet = 0
var CPU1Bet = 0
var CPU2Bet = 0
var CPU3Bet = 0
var CPU4Bet = 0
var playerBet = 0
var dealerTurn = 1

function beginGame() {
    dealCards();
    currentTurn = dealerTurn
    CPU1Balance -= 2
    CPU2Balance -= 2
    CPU2Bet = 2
    CPU1Bet = 2
    currentBet = 2
    pot += 4
    rot = 0
    document.getElementById("pot").innerHTML = "$"+pot
    document.getElementById("check-button").innerHTML = "CALL"
    document.getElementById("begin-game").style.display = "none"
    announce("Game Has Begun")
    CPUTurn(1)
}
function callBet() {
    hidePlayerButtons()
    if (currentBet == NaN) {
        currentBet = 0
    }
    PlayerBalance -= currentBet
    playerBet = currentBet
    console.log("Player Bet : "+playerBet)
    pot += playerBet
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
    console.log("currentturn = "+currentTurn)
    console.log("Player turn completed. Current pot : "+pot)
    CPUTurn(currentTurn)
}

function rotatePlayer() {
    if (currentTurn >= 5) {
        currentTurn = 1
    }
    else {
        currentTurn += 1
    }
    console.log("turn rotated : "+currentTurn)
}

function rotateDealer() {
    if (dealerTurn >= 5) {
        dealerTurn = 1
    }
    else {
        dealerTurn += 1
    }
    console.log("dealer turn rotated : "+dealerTurn)
}
var flopC = 0
var turnC = 0
var riverC = 0
var rot = 0
function CPUTurn(turn) {
    console.log("currentTurn in CPUTurn() : "+turn+"\ndealerTurn : "+dealerTurn)
    if (turn == 1) {
        document.getElementById("CPU-1").style.border = "0.35rem solid rgb(255 255 255)"
        document.getElementById("CPU-4").style.border = "none"
        if (currentBet == NaN) {
            currentBet = 0
        }
        else if (currentBet <= 3) { // call bet if 3 or less
            pot += (currentBet - CPU1Bet)
            CPU1Balance -= currentBet
            // CPU1Bet = currentBet
            document.getElementById("pot").innerHTML = "$" + pot;
            if (rot != 5) {
                rotatePlayer()
            }
        }
        if (rot == 5) {
        if (CPU1Bet == currentBet && flopC == 1 && turnC == 1 && riverC == 1) {
            dealFlopAnimation1();
        }
        else if (CPU1Bet == currentBet && flopC == 1 && turnC == 1) {
            dealRiverAnimation1();
            console.log("River Dealt.")
            riverC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU1Bet == currentBet && flopC == 1) {
            dealTurnAnimation1();
            console.log("Turn Dealt.")
            turnC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU1Bet == currentBet) {
            dealFlopAnimation();
            console.log("Flop Dealt.")
            flopC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else {
            setTimeout(CPUTurn2, 1000)
        }}
        else {
            setTimeout(CPUTurn2, 1000)
            rot += 1
        }
        console.log("CPU1 turn completed. \nCPU1 bet : "+CPU1Bet+"\nCurrent Pot : "+pot+"\nCPU1 Balance : "+CPU1Balance+"\nrot : "+rot)
    }
    else if (turn == 2) {
        document.getElementById("CPU-2").style.border = "0.35rem solid rgb(255 255 255)"
        document.getElementById("CPU-1").style.border = "none"
        if (currentBet == NaN) {
            CPU2Bet = 0
        }
        else if (currentBet <= 3) { // call bet if 3 or less
            pot += (currentBet - CPU2Bet)
            CPU2Balance -= currentBet
            // CPU2Bet = currentBet
            document.getElementById("pot").innerHTML = "$" + pot;
            if (rot != 5) {
                rotatePlayer()
            }
        }
        if (rot == 5) {
        if (CPU2Bet == currentBet && flopC == 1 && turnC == 1 && riverC == 1) {
            // dealFlopAnimation();
        }
        else if (CPU2Bet == currentBet && flopC == 1 && turnC == 1) {
            dealRiverAnimation1();
            console.log("River Dealt.")
            riverC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU2Bet == currentBet && flopC == 1) {
            dealTurnAnimation1();
            console.log("Turn Dealt.")
            turnC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU2Bet == currentBet) {
            dealFlopAnimation();
            console.log("Flop Dealt.")
            flopC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else {
            setTimeout(CPUTurn2, 1000)
        }}
        else {
            setTimeout(CPUTurn2, 1000)
            rot += 1
        }
        console.log("CPU2 turn completed. \nCPU2 bet : "+CPU2Bet+"\nCurrent Pot : "+pot+"\nCPU2 Balance : "+CPU2Balance+"\nrot : "+rot)
    }
    else if (turn == 4) {
        document.getElementById("CPU-3").style.border = "0.35rem solid rgb(255 255 255)"
        document.getElementById("player-area").style.border = "none"
        if (currentBet == NaN) {
            currentBet = 0
        }
        else if (currentBet <= 3) { // call bet if 3 or less
            pot += (currentBet - CPU3Bet)
            CPU3Balance -= currentBet
            // CPU3Bet = currentBet
            document.getElementById("pot").innerHTML = "$" + pot;
            if (rot != 5) {
                rotatePlayer()
            }
        }
        if (rot == 5) {
        if (CPU3Bet == currentBet && flopC == 1 && turnC == 1 && riverC == 1) {
            dealFlopAnimation();
        }
        else if (CPU3Bet == currentBet && flopC == 1 && turnC == 1) {
            dealRiverAnimation1();
            console.log("River Dealt.")
            riverC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU3Bet == currentBet && flopC == 1) {
            dealTurnAnimation1();
            console.log("Turn Dealt.")
            turnC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU3Bet == currentBet) {
            dealFlopAnimation();
            console.log("Flop Dealt.")
            flopC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else {
            setTimeout(CPUTurn2, 1000)
        }}
        else {
            setTimeout(CPUTurn2, 1000)
            rot += 1
        }
        console.log("CPU3 turn completed. \nCPU3 bet : "+CPU3Bet+"\nCurrent Pot : "+pot+"\nCPU3 Balance : "+CPU3Balance+"\nrot : "+rot)
    }
    else if (turn == 5) {
        document.getElementById("CPU-4").style.border = "0.35rem solid rgb(255 255 255)"
        document.getElementById("CPU-3").style.border = "none"
        if (currentBet == NaN) {
            currentBet = 0
        }
        else if (currentBet <= 3) { // call bet if 3 or less
            pot += (currentBet - CPU4Bet)
            CPU4Balance -= currentBet
            // CPU4Bet = currentBet
            document.getElementById("pot").innerHTML = "$" + pot;
            if (rot != 5) {
                rotatePlayer()
            }
        }
        if (rot == 5) {
        if (CPU4Bet == currentBet && flopC == 1 && turnC == 1 && riverC == 1) {
            dealFlopAnimation();
        }
        else if (CPU4Bet == currentBet && flopC == 1 && turnC == 1) {
            dealRiverAnimation1();
            console.log("River Dealt.")
            riverC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU4Bet == currentBet && flopC == 1) {
            dealTurnAnimation1();
            console.log("Turn Dealt.")
            turnC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else if (CPU4Bet == currentBet) {
            dealFlopAnimation();
            console.log("Flop Dealt.")
            flopC = 1
            resetBets()
            setTimeout(CPUTurn2, 2000)
        }
        else {
            setTimeout(CPUTurn2, 1000)
        }}else {
            setTimeout(CPUTurn2, 1000)
            rot += 1
        }
        console.log("CPU4 turn completed. \nCPU4 bet : "+CPU4Bet+"\nCurrent Pot : "+pot+"\nCPU4 Balance : "+CPU4Balance+"\nrot : "+rot)
    }
    else if (turn == 3) {
        document.getElementById("player-area").style.border = "0.35rem solid rgb(255 255 255)"
        document.getElementById("CPU-2").style.border = "none"
        currentTurn = 4
        playerTurn()
    }
    document.getElementById("pot").innerHTML = "$" + pot;
}

function CPUTurn2() {
    CPUTurn(currentTurn)
}

function resetBets() {
    playerBet = 1000
    currentBet = 0
    CPU1Bet = 0
    CPU2Bet = 0
    CPU3Bet = 0
    CPU4Bet = 0
    rot = 0
    currentTurn = dealerTurn
    document.getElementById("CPU-1").style.border = "none"
    document.getElementById("CPU-2").style.border = "none"
    document.getElementById("CPU-3").style.border = "none"
    document.getElementById("CPU-4").style.border = "none"
    document.getElementById("player-area").style.border = "none"
    console.log("Bets have reset.\ncurrentTurn : "+currentTurn)
    if (rot == 5) {
        rotatePlayer()
    }
}

function playerTurn() {
    if (rot != 5) {rot += 1}
    if (playerBet == currentBet && flopC == 1 && turnC == 1 && riverC == 1) {
        dealFlopAnimation1();
    }
    else if (playerBet == currentBet && flopC == 1 && turnC == 1) {
        dealRiverAnimation1();
        console.log("River Dealt.")
        riverC = 1
        resetBets()
        setTimeout(CPUTurn2, 2000)
    }
    else if (playerBet == currentBet && flopC == 1) {
        dealTurnAnimation1();
        console.log("Turn Dealt.")
        turnC = 1
        resetBets()
        setTimeout(CPUTurn2, 2000)
    }
    else if (playerBet == currentBet) {
        dealFlopAnimation();
        console.log("Flop Dealt.")
        flopC = 1
        resetBets()
        setTimeout(CPUTurn2, 2000)
    }
    else {
        showPlayerButtons()
        announce("Current Bet")
    }
}

function showPlayerButtons() {
    if (currentBet == 0) {
        checkButton.innerHTML = "CHECK"
    }
    else {
        checkButton.innerHTML = "CALL"
    }
    betButton.style.display = "flex"
    foldButton.style.display = "flex"
    checkButton.style.display = "flex"
}
function hidePlayerButtons() {
    betButton.style.display = "none"
    foldButton.style.display = "none"
    checkButton.style.display = "none"
}

var announ = document.getElementById("announcement")
function announce(announcement) {
    announ.style.opacity = 1
    if (announcement == "Current Bet") {
        announ.innerHTML = "The Current Bet is : $"+currentBet
    }
    else {
        announ.innerHTML = announcement
    }
    setTimeout(function() {
        announ.style.opacity = 0;
    }, 5000)
}

function calcPTQ(player) {
    
}