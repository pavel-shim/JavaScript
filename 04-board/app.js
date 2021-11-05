const board = document.querySelector('#board')
const colors = ['rgb(79, 124, 37)', 'rgb(37, 124, 109)', 'rgb(209, 221, 40)', 'rgb(243, 183, 44)', 'rgb(116, 228, 238', 'rgb(240, 56, 24)']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  // element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = 'linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)'
  // element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random()*colors.length)
  return colors[index]
}