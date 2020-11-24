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

//console.log(deckOfCards);

// function checkIfPair(c1, c2) {
//   moveCounter();
//   if (
//     pickedCards[0].getAttribute("data-card-name") ===
//     pickedCards[1].getAttribute("data-card-name")
//   );
//   {
  
//   }
// }



function isFinished() {
  if ((pickedCards = cards.length / 2)) {
    console.log("¡Enhorabuena!");
  }
}

const moves = document.querySelector("#moves");

function moveCounter() {
  let move = "";
  move += 1;
  moves.textContent = `Moves: ${move}`;
}

let pickedCards = [];

function handleClick(evt) {
  let card = evt.target.parentNode;
  pickedCards.push(card.getAttribute("data-card-name"));
   
   if (pickedCards.length % 2 == 0); {
     moveCounter();
    }
    if (
      pickedCards[pickedCards.length-1] === pickedCards[pickedCards.length-2]) {
        console.log ("it´s a match");
     } else {
       console.log ("it´s not a match");
     }
     console.log(pickedCards);
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
