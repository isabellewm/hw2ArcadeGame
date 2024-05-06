document.addEventListener('DOMContentLoaded', () => {

    //card option   
    const cardArray = [{
            name: 'P1',
            img: 'images/snoopy1.jpg'
        },
        {
            name: 'P1',
            img: 'images/snoopy1.jpg'
        },
        {
            name: 'P2',
            img: 'images/snoopy2.jpg'
        },
        {
            name: 'P2',
            img: 'images/snoopy2.jpg'
        },
        {
            name: 'P3',
            img: 'images/snoopy3.jpg'
        },
        {
            name: 'P3',
            img: 'images/snoopy3.jpg'
        },
        {
            name: 'P4',
            img: 'images/snoopy4.jpg'
        },
        {
            name: 'P4',
            img: 'images/snoopy4.jpg'
        },
        {
            name: 'P5',
            img: 'images/snoopy5.jpg'
        },
        {
            name: 'P5',
            img: 'images/snoopy5.jpg'
        },
        {
            name: 'P6',
            img: 'images/snoopy6.jpg'
        },
        {
            name: 'P6',
            img: 'images/snoopy6.jpg'

        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    //chose different kind of shuffle function
    cardArray.sort(() => Math.floor(Math.random() * 12))


    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector('#result');
    const showMatching = document.querySelector('#matching');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blue.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        showMatching.textContent = "";
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert("You found a match")
            showMatching.textContent = "You found a match!";
            cards[optionOneId].setAttribute('src', 'images/snoopy7.jpg')
            cards[optionTwoId].setAttribute('src', 'images/snoopy7.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blue.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blue.jpg')
            // alert('Sorry, try again')
            showMatching.textContent = "Sorry, try again!"
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congrationlations! You found them all.'
            showMatching.textContent = "";
        }
    }


    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        showMatching.textContent = "";
        if (cardsChosenId.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})