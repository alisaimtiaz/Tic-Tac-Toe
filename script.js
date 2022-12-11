let restartBtn = document.getElementsByClassName('restart')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body). getPropertyValue('--winning-blocks')

const Omarker = "O"
const Xmarker = "X"
let currentPlayer = Xmarker
let spaces = Array(9).fill(null)
restart ()

const setTheme = theme => document.documentElement.className = theme;



var logo = document.querySelector('.container');
var menu = document.querySelector('.menu');

logo.addEventListener('click', function(){
    menu.classList.toggle('showmenu');
});




const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked (e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if (playerHasWon() !==false){
            playerText = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
        }

        currentPlayer = currentPlayer == Xmarker ? Omarker: Xmarker
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function playerHasWon(){
    for(const condition of winningCombos) {
        let [a,b,c] = condition

        if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){
            return[a,b,c]
        }
    }
    return false
}



function restart (){
    
    console.log("restart")
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText= ''
        box.style.backgroundColor=''
    })
    currentPlayer = Xmarker

}


startGame()










