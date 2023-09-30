let cookieClicker = document.getElementsByClassName('cookie_clicker')[0]
let cookieCounter = document.getElementsByClassName('cookie_counter')[0]
let clicks = 0

cookieClicker.addEventListener('click', function () {
    clicks += 1
    cookieCounter.textContent = clicks
})