/*
 * Create a list that holds all of your cards
*/

const icons = ['fa fa-diamond', 'fa fa-diamond',
                'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
                    'fa fa-anchor', 'fa fa-anchor', 
                         'fa fa-bolt', 'fa fa-bolt',
                            'fa fa-cube', 'fa fa-cube',
                                'fa fa-leaf', 'fa fa-leaf',
                                    'fa fa-bicycle', 'fa fa-bicycle',
                                        'fa fa-bomb', 'fa fa-bomb'
];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
*/

let openCards = [];
let cardsMatch = [];


// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
*/



// Creating the list of CARDS
for (let i = 0; i < 16; i++) {
    const card = document.createElement('li');
        card.className = 'card'
            const deck = document.querySelector('.deck');
                    card.innerHTML = `<i class ='${icons[i]}'></i>`;
                        deck.appendChild(card);

                            // Click to OPEN a CARD                        
                            card.addEventListener('click', function() {
                                
                                const currentCard = this;
                                const previousCard = openCards[0];

                                // CARD is opened
                                if (openCards.length === 1) {

                                    card.classList.add('open', 'show');
                                    openCards.push(this);

                                // CARD is a match
                                if (this.innerHTML === openCards [0].innerHTML) {

                                    currentCard.classList.add('match');
                                    previousCard.classList.add('match');

                                    openCards = [];

                                // CARD is NOT a match
                                } else {
                                    currentCard.classList.remove('match');
                                    //previousCard.classList.remove('match');
                                    
                                    openCards = [];

                                } 

                                // CARD is closed
                                } else {
                                    card.classList.add('open', 'show');
                                    openCards.push(this);
                                    
                                }
    });
}


// Move Counter Function
function moveCounter(){    
    moves++;    
    counter.innerHTML = moves;
}


// Game-Over Function
function gameOver() {
    if (match.length === icons.length) {
        alert ('Game Over');
    }
}

