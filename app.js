window.addEventListener('load', event => {
    startGame();
});

//DOM

//copy all cards to cards array

let card = document.getElementsByClassName("memory-card");
let cards = [...card];


//loop to add event listeners to each card

for (var i = 0; i < cards.length; i++){
  cards[i].addEventListener("click", flipCard);
};



// //Fisher–Yates shuffle   

// function shuffle() {
//     for (let i = cards.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [cards[i], cards[j]] = [cards[j], cards[i]];
//     }
// }

// const deckOfCards = document.querySelector("#main-section");


// function startGame(){
//     const shuffledCards = shuffle(cards);
//    for (let i= 0; i < shuffledCards.length; i++){
//       [].forEach(shuffledCards, function(item){
//         main-section.appendChild(item);
//       });
//    }
// }

// console.log(deckOfCards);

// checkIfPair (card1, card2) {
//     const pickedCards = [];
//     pickedCards.push(this);

//     if (pickedCards.length === 2){
//         moveCounter();
//         if (pickedCards[0].data-card-name === openedCards[1]..data-card-name){
//             prompt ("must be flipped");
//         } else {
//             prompt ("must remain");
//         }
//     }
// }

isFinished() {
    if (pickedCards = cards.length / 2) {
         console.log ("¡Enhorabuena!");
        }
};

const moves = document.querySelector("#moves");  

function moveCounter(){
    let moves = 0;
    moves ++;
    moves.innerHTML = 'Moves: ${moves}';
}

function displayCard() {
    prompt ("hey! i'm working :)");

    }
function flipCard() {
    this.classList.toggle('flip');