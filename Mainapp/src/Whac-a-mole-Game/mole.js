const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeleft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole();

function countDown() {
    currentTime--
    timeleft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)