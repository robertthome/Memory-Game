let points = 0

let cardList = [
  {
    name: 'controller',
    img: '001-game-controller.png'
  },
  {
    name: 'claw-machine',
    img: '022-claw-machine.png'
  },
  {
    name: 'radio',
    img: '007-radio.png'
  },
  {
    name: 'poker',
    img: '008-poker.png'
  },
  {
    name: 'game-console',
    img: '012-game-console.png'
  },
  {
    name: 'walkman',
    img: '014-walkman.png'
  },
  {
    name: 'turntable',
    img: '015-turntable.png'
  },
  {
    name: 'dices',
    img: '016-dices.png'
  },
  {
    name: 'piano',
    img: '020-piano-keyboard.png'
  },
  {
    name: 'controller',
    img: '001-game-controller.png'
  },
  {
    name: 'claw-machine',
    img: '022-claw-machine.png'
  },
  {
    name: 'radio',
    img: '007-radio.png'
  },
  {
    name: 'poker',
    img: '008-poker.png'
  },
  {
    name: 'game-console',
    img: '012-game-console.png'
  },
  {
    name: 'walkman',
    img: '014-walkman.png'
  },
  {
    name: 'turntable',
    img: '015-turntable.png'
  },
  {
    name: 'dices',
    img: '016-dices.png'
  },
  {
    name: 'piano',
    img: '020-piano-keyboard.png'
  }
]

function beginGame() {
  cardList.sort(() => 0.5 - Math.random())
  cardList.forEach((eachImg, idNum) => {
    let img = document.createElement('img')
    img.src = '019-front-masks.png'
    img.setAttribute('id', idNum)
    const grid = document.querySelector('#game-grid')
    grid.appendChild(img)
    img.addEventListener('click', flipImg)
  })
}

beginGame()

let chosenCards = []

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
    if (points === 18) {
      alert('You won!!!')
    }
  }
}

let addPoints = () => {
  let scoreCounter = document.querySelector('.score-counter')
  points += 2
  scoreCounter.innerHTML = points
}

//gets wet right here

const reset = document.querySelector('.reset-game')
const gameGrid = document.querySelector('#game-grid')

reset.addEventListener('click', function () {
  gameGrid.innerHTML = ''
  function beginGame() {
    cardList.sort(() => 0.5 - Math.random())
    cardList.forEach((eachImg, idNum) => {
      let img = document.createElement('img')
      img.src = '019-front-masks.png'
      img.setAttribute('id', idNum)
      const grid = document.querySelector('#game-grid')
      grid.appendChild(img)
      img.addEventListener('click', flipImg)
    })
  }

  beginGame()

  let chosenCards = []

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
      if (points === 18) {
        alert('You won!!!')
      }
    }
  }

  let addPoints = () => {
    let scoreCounter = document.querySelector('.score-counter')
    points += 2
    scoreCounter.innerHTML = points
  }
})
