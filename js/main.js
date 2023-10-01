let cookieClicker = document.getElementsByClassName('cookie_clicker')[0]
let cookieCounter = document.getElementsByClassName('cookie_counter')[0]
let clicks = 0

cookieClicker.addEventListener('click', function (e) {
    clicks += 1
    cookieCounter.textContent = (clicks + ' Cookies')
    let h3 = document.createElement('h3')
    h3.textContent = '+ 1'
    h3.classList.add('plusone')
    h3.style.left = e.clientX + 'px'
    h3.style.top = e.clientY + 'px'
    document.body.append(h3)
    setTimeout(function () {
        h3.remove()
    }, 2000)
})

let home = document.getElementsByTagName('button')[0]

home.addEventListener('click', function () {
    location.href = 'index.html'
})