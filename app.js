window.addEventListener("load", (event) => {
  startGame();
  startTimer();
});

//copy all cards to cards array

let card = document.querySelectorAll(".memory-card");
let cards = [...card];

//loop to add event listeners to each card

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", handleClick);
}

//console.log(card);

//Fisher–Yates shuffle

function shuffle(c) {
  for (let i = c.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [c[i], c[j]] = [c[j], c[i]];
  }
  let result = [...c];
  const arr = Array.from(result);
  return arr;
}

const deckOfCards = document.querySelector("#main-section");
const shuffledCards = shuffle(cards);

function startGame() {
  for (let i = 0; i < shuffledCards.length; i++) {
    shuffledCards.forEach(function (item) {
      deckOfCards.appendChild(item);
    });
  }

  // console.log( shuffledCards);
  // console.log( typeof shuffledCards);
}

function isFinished() {
  if ((pickedCards = cards.length / 2)) {
    console.log("¡Enhorabuena!");
  }
}

const moves = document.querySelector("#moves");

let move = "";
let finalMove = ""

function moveCounter() {
  move ++;
  if (move % 2 == 0){
    finalMove = move / 2;
  }
  moves.textContent = `Moves: ${finalMove}`;
}

let pickedCards = [];

function handleClick(evt) {

  this.classList.toggle("flip");

  let card = evt.target.parentNode;
  pickedCards.push(card.getAttribute("data-card-name"));
   
   if (pickedCards.length % 2 === 0); {
     moveCounter();

     if (
      pickedCards[pickedCards.length-1] === pickedCards[pickedCards.length-2]) {
        console.log ("it´s a match"); //insert toggle / add lock cards
     } else {
       console.log ("it´s not a match");// insert toggle / add timer to show back side
     }
    }
    
     console.log(pickedCards);
     console.log(pickedCards.length % 2 === 0);
  } 
  
function startTimer() {
  let second = 0;
  let minute = 0;
  const timer = document.querySelector("#timer");
  let interval;

  interval = setInterval(function () {
    timer.innerHTML = minute + " mins " + second + " secs";
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

// function flipCard() {
//     cards.classList.toggle("flip");
//   prompt("hey");
// }

// flipCard();