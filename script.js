const showRGB = document.querySelector('.rgb-number')

function generateRandomNum() {
  return Math.trunc(Math.random() * 255)
}

document.querySelector('.check').addEventListener('click', function () {
  const r = generateRandomNum()
  const g = generateRandomNum()
  const b = generateRandomNum()

  const randomColor = `RGB(${r},${g},${b})`
  console.log(randomColor)
  document.querySelector('body').style.backgroundColor = `${randomColor}`

  showRGB.textContent = `${randomColor}`
  showRGB.style.fontSize = '3rem'
  showRGB.style.width = '55rem'
})
