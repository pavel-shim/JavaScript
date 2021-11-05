const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['linear-gradient(90deg, red 0%, red 47%, red 0%)', 'linear-gradient(90deg, blue 0%, blue 47%, blue 0%)', 'linear-gradient(90deg, green 0%, green 47%, green 0%)', 'linear-gradient(90deg, black 0%, black 47%, black 0%)', 'linear-gradient(90deg, white 0%, white 47%, white 0%)', 'linear-gradient(90deg, salmon 0%, salmon 47%, salmon 0%)']
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
  
})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    startGame()
    screens[1].classList.add('up')
  }
})

board.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
    setColor()
  }
})



function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${time}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  // timeEl.parentNode.remove()
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span> </h1>`
}

function createRandomCircle() {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)

  circle.classList.add('circle')
  circle.style.background = getRandomColor()
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`


  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max-min) + min)
}


function getRandomColor() {
  const index = Math.floor(Math.random()*colors.length)
  return colors[index]
}

