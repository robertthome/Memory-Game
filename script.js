//fetched buttons/links from landing page
const freePlayBtn = document.getElementById('free-play-btn')
const timedGameBtn = document.getElementById('timed-game-btn')
const instructionBtn = document.getElementById('instructions-btn')
//fetched elements from gameboard

const gameResetBtn = document.getElementById('game-reset-btn')

let points = 0
let cardFliped = false
let gameActive = true

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
  }
]

//shuffles the imageis of the array
cardList.sort(() => 0.5 - Math.random())
const grid = document.querySelector('#gameGrid')
console.log(cardList)
// creates an img element for each image and appends it to the page
cardList.forEach((eachImg) => {
  let img = document.createElement('img')
  img.src = eachImg.img
  console.log(img)
  console.log(eachImg)
})
