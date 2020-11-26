//declare variables

let pickedCards = [];
let pickedDivCard = [];
let matchedCards = 0;
let interval;
let second = 0;
let minute = 0;
const timer = document.querySelector("#timer");

//on load

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

//copy all shuffled cards to the board

const deckOfCards = document.querySelector("#main-section");
//const shuffledCards = shuffle(cards);
const shuffledCards = cards; //test set

function startGame() {
  for (let i = 0; i < shuffledCards.length; i++) {
    shuffledCards.forEach(function (item) {
      deckOfCards.appendChild(item);
    });
  }
}

function isFinished() {
  matchedCards++;
  if (matchedCards === 10) {
    setTimeout(() => {
      alert("Great job! You found all matches! Do you want to try again?");
    }, 350);
    stopTimer();
    moves = 0;
    moves.textContent = `Moves: ${finalMove}`;
    startGame();
  }
}

const moves = document.querySelector("#moves");

let move = 0;
let finalMove = 0;

function moveCounter() {
  move++;
  if (move % 2 == 0) {
    finalMove = move / 2;
  }

  if ((move + 1) % 2 == 0 && move > 2) {
    let divCard3 = pickedDivCard[pickedDivCard.length - 3];
    let divCard2 = pickedDivCard[pickedDivCard.length - 2];
    //let divCard1 = pickedDivCard[pickedDivCard.length - 1];

    setTimeout(() => {
      divCard3.classList.remove("flip");
      divCard2.classList.remove("flip");
    }, 250);
  }

  moves.textContent = `Moves: ${finalMove}`;
}

function handleClick(evt) {
  this.classList.toggle("flip");

  let card = evt.target.parentNode;
  pickedCards.push(card.getAttribute("data-card-name"));
  pickedDivCard.push(card);

  let card1 = pickedCards[pickedCards.length - 1];
  let card2 = pickedCards[pickedCards.length - 2];

  if (pickedCards.length % 2 === 0);
  {
    moveCounter();

    if (card1 === card2) {
      setTimeout(() => {
        alert("Congratulations! You found a match!");
      }, 300);

      console.log(pickedCards);
      console.log(card1);
      console.log(card2);


      isFinished();

      console.log(matchedCards);
    }
  }
}

function startTimer() {
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

function stopTimer() {
  clearInterval(interval);
}
