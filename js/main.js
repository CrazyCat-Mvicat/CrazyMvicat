let cookieClicker = document.getElementsByClassName('cookie_clicker')[0]
let cookieCounter = document.getElementsByClassName('cookie_counter')[0]
let clicks = 0

cookieClicker.addEventListener('click', function (e) {
    clicks += 1
    cookieCounter.textContent = (clicks + ' Cookies')
})

// -------------------------------------------------------------- //

let home = document.getElementsByTagName('button')[0]

home.addEventListener('click', function () {
    location.href = 'index.html'
})

// --------------------------------------------------------------- //

let td = document.getElementsByTagName("td");
let result = document.getElementsByClassName("result")[0];
let isX = true;
let endGame = false;
let playAgain = document.getElementsByClassName("play_again")[0];
let combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

function winCheck() {
  for (let i = 0; i < combinations.length; i++) {
    if (
      td[combinations[i][0]].textContent != "" &&
      td[combinations[i][0]].textContent ==
        td[combinations[i][1]].textContent &&
      td[combinations[i][1]].textContent &&
      td[combinations[i][2]].textContent
    ) {
      // alert("win " + td[combinations[i][0]].textContent);
      result.textContent = td[combinations[i][0]].textContent + " Wins!";
      endGame = true;
    }
  }
}

for (let i = 0; i < 9; i++) {
  td[i].addEventListener("click", function () {
    if (td[i].textContent == "" && endGame == false) {
      if (isX) {
        td[i].textContent = "X";
        isX = false;
      } else {
        td[i].textContent = "O";
        isX = true;
      }
      winCheck();
    }
  });
}

playAgain.addEventListener("click", function () {
  location.reload();
});

