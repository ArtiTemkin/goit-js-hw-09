

const buttonStartEl = document.querySelector('[data-start]');
const buttonCloseEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body')

buttonStartEl.addEventListener('click', changeBgColor)
buttonCloseEl.addEventListener('click', stopChangingBgColor)

let interval = null

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
    interval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000)
    buttonStartEl.disabled = true
}

function stopChangingBgColor() {
    clearInterval(interval)
    buttonStartEl.disabled = false
}

