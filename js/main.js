let cookieClicker = document.getElementsByClassName('cookie_clicker')[0]
let cookieCounter = document.getElementsByClassName('cookie_counter')[0]
let clicks = 0

cookieClicker.addEventListener('click', function () {
    clicks += 1
    cookieCounter.textContent = clicks
})

let home = document.getElementsByTagName('button')[0]

home.addEventListener('click', function () {
    location.href = 'index.html'
})