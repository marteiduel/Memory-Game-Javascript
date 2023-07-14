document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "cat1",
      img: "images/cat1.jpg",
    },
    {
      name: "cat2",
      img: "images/cat2.jpg",
    },
    {
      name: "cat3",
      img: "images/cat3.jpg",
    },
    {
      name: "cat4",
      img: "images/cat4.jpg",
    },
    {
      name: "cat5",
      img: "images/cat5.jpg",
    },
    {
      name: "cat6",
      img: "images/cat6.jpg",
    },
    {
      name: "dog",
      img: "images/dog.jpg",
    },
    {
      name: "dog2",
      img: "images/dog2.jpg",
    },
    {
      name: "dog3",
      img: "images/dog3.jpg",
    },
    {
      name: "dog4",
      img: "images/dog4.jpg",
    },
    {
      name: "dog5",
      img: "images/dog5.jpg",
    },
    {
      name: "dog6",
      img: "images/dog6.jpg",
    },
    {
      name: "cat1",
      img: "images/cat1.jpg",
    },
    {
      name: "cat2",
      img: "images/cat2.jpg",
    },
    {
      name: "cat3",
      img: "images/cat3.jpg",
    },
    {
      name: "cat4",
      img: "images/cat4.jpg",
    },
    {
      name: "cat5",
      img: "images/cat5.jpg",
    },
    {
      name: "cat6",
      img: "images/cat6.jpg",
    },
    {
      name: "dog",
      img: "images/dog.jpg",
    },
    {
      name: "dog2",
      img: "images/dog2.jpg",
    },
    {
      name: "dog3",
      img: "images/dog3.jpg",
    },
    {
      name: "dog4",
      img: "images/dog4.jpg",
    },
    {
      name: "dog5",
      img: "images/dog5.jpg",
    },
    {
      name: "dog6",
      img: "images/dog6.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/front.jpg");
      card.classList.add("card-images");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/front.jpg");
      cards[optionTwoId].setAttribute("src", "images/front.jpg");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/found.webp");
      cards[optionTwoId].setAttribute("src", "images/found.webp");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/front.jpg");
      cards[optionTwoId].setAttribute("src", "images/front.jpg");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
