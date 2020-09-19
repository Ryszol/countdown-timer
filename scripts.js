const eventTime = new Date('Sep 25 2020 22:35:00');

let count = 0

const body = document.querySelector('body')
const counter = document.querySelectorAll('.counter')
const countdown = () => {
  const currentTime = new Date()
  const monthLeft = new Date(eventTime - currentTime)

  if (monthLeft <= 0) return 0

  const days = Math.floor((monthLeft / 1000 / 60 / 60 / 24))
  const hours = Math.floor((monthLeft / 1000 / 60 / 60) % 24)
  const minutes = Math.floor((monthLeft / 1000 / 60) % 60)
  const seconds = Math.floor((monthLeft / 1000) % 60)

  if (count === 0) {
    console.log(count)
    count++
    body.removeAttribute('class')
  }

  counter[0].children[0].innerHTML = (days == "0") ? "00" : days
  counter[1].children[0].innerHTML = (hours == "0") ? "00" : hours
  counter[2].children[0].innerHTML = (minutes == "0") ? "00" : minutes
  counter[3].children[0].innerHTML = (seconds == "0") ? "00" : seconds
}

setInterval(countdown, 1000)
