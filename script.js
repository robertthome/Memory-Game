//fetched buttons/links from landing page
const freePlayBtn = document.getElementById('free-play-btn')
const timedGameBtn = document.getElementById('timed-game-btn')
const instructionBtn = document.getElementById('instructions-btn')
//fetched elements from gameboard
const cards = document.querySelector('#gameGrid')
const gameResetBtn = document.getElementById('game-reset-btn')

let points = 0
let cardsActive = []
let gameBoard = []
let cardFliped = false
let gameActive = true

let cardList = [
  {
    id: 0,
    name: 'controller',
    img: '001-game-controller.png'
  },
  {
    id: 1,
    name: 'tv',
    img: '002-smart-tv.png'
  },
  {
    id: 2,
    name: 'headphones',
    img: '003-headphones.png'
  },
  {
    id: 3,
    name: 'mic',
    img: '004-microphone.png'
  },
  {
    id: 4,
    name: 'speaker',
    img: '005-speaker.png'
  },
  {
    id: 5,
    name: 'controller',
    img: '001-game-controller.png'
  },
  {
    id: 6,
    name: 'tv',
    img: '002-smart-tv.png'
  },
  {
    id: 7,
    name: 'headphones',
    img: '003-headphones.png'
  },
  {
    id: 8,
    name: 'mic',
    img: '004-microphone.png'
  },
  {
    id: 9,
    name: 'speaker',
    img: '005-speaker.png'
  }
]
