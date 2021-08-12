//fetched buttons/links from landing page
const freePlayBtn = document.getElementById('free-play-btn')
const timedGameBtn = document.getElementById('timed-game-btn')
const instructionBtn = document.getElementById('instructions-btn')
//fetched elements from gameboard

const gameResetBtn = document.getElementById('game-reset-btn')

let points = 0
let chosenCards = []

let cardList = [
  {
    name: 'controller',
    img: '001-game-controller.png'
  },
  {
    name: 'tv',
    img: '002-smart-tv.png'
  },
  {
    name: 'headphones',
    img: '003-headphones.png'
  },
  {
    name: 'mic',
    img: '004-microphone.png'
  },
  {
    name: 'speaker',
    img: '005-speaker.png'
  },
  {
    name: 'controller',
    img: '001-game-controller.png'
  },
  {
    name: 'tv',
    img: '002-smart-tv.png'
  },
  {
    name: 'headphones',
    img: '003-headphones.png'
  },
  {
    name: 'mic',
    img: '004-microphone.png'
  },
  {
    name: 'speaker',
    img: '005-speaker.png'
  },
  {
    name: 'cdPlayer',
    img: '006-cd-player.png'
  },
  {
    name: 'cdPlayer',
    img: '006-cd-player.png'
  }
]

//shuffles the images of the array
cardList.sort(() => 0.5 - Math.random())
// creates an img element, applies img path to src, and appends images to page
cardList.forEach((eachImg, idNum) => {
  let img = document.createElement('img')
  //img of the front of the card and adds id #
  img.src = '019-front-masks.png'
  img.setAttribute('id', idNum)
  //append images to div
  const grid = document.querySelector('#gameGrid')
  grid.appendChild(img)
  //each image needs a new attribute added to it when clicked
  img.addEventListener('click', flipImg)
})

function flipImg() {
  this.classList.add('selected')
  id = this.id
  cardList[id].name
  imgSource = cardList[id].img
  this.src = imgSource
  chosenCards.push(id)
  if (chosenCards.length === 2) {
    checkMatch()
  }
}

const cards = document.querySelectorAll('img')

matchedCards = []

let checkMatch = () => {
  selectedImg1 = cardList[chosenCards[0]].name
  selectedImg2 = cardList[chosenCards[1]].name

  if (chosenCards[0] === chosenCards[1]) {
    cards[chosenCards[0]].src = '019-front-masks.png'
    chosenCards = []
  } else if (selectedImg1 != selectedImg2) {
    cards[chosenCards[0]].src = '019-front-masks.png'
    cards[chosenCards[1]].src = '019-front-masks.png'
    chosenCards = []
  } else if (selectedImg1 === selectedImg2) {
    cards[chosenCards[0]].src = 'check-mark.png'
    cards[chosenCards[1]].src = 'check-mark.png'
    cards[chosenCards[0]].removeEventListener('click', flipImg)
    cards[chosenCards[1]].removeEventListener('click', flipImg)
    chosenCards = []
    matchedCards.push(chosenCards[0], chosenCards[1])
    addPoints()
    if (points === 12) {
      alert('You won!!!')
    }
  }
}

let addPoints = () => {
  let scoreCounter = document.querySelector('.score-counter')
  points += 2
  scoreCounter.innerHTML = points
}
