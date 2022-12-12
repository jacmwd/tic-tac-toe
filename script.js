let board;
let turn = "X"
let win;

const div = document.getElementById('grid')
const squares = Array.from(document.querySelectorAll('#grid div'))
const gameMessage = document.getElementById('textbox')
const replayBtn = document.getElementById("replay-btn")

function render() {
    board.forEach(function(mark, index){
        squares[index].textContent = mark;
    })
}

function init() {
    gameMessage.textContent = "";
    turn = "X";
    board =
    ["", "", "",
    "", "", "",
    "", "", ""];

    render();
}

init();

function checkWinCombo() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        //check if there was a mark
        //doesn't matter if we write board[combo[0]]
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
            winner = board[combo[0]];
            console.log(board[combo[0]]);
            console.log(board[combo[1]]);
            console.log(board[combo[2]]);
        }
    })
    if (winner) {
        return winner;
    } else if (winner === null) {
        return null;
    } else {
        return "T"
    }
};

const winningCombos = [
    //horizontal
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertical
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [6,4,2]
]

function placeMove(e) {
    let index = squares.findIndex(function(square) {
        return square === event.target;
    })
    //can only place a move on an empty spot
    if (board[index] === "") {
        board[index] = turn;
    } else {
        return;
    }

    if (turn === "X") {
        turn = "O"
    } else {
        turn = "X"
    }

    win = checkWinCombo();
    if (win === "T") {
        gameMessage.textContent = "It's a tie!"
    } else if (win === null) {
        gameMessage.textContent = `It's ${turn}'s turn!`
    } else if (win) {
        gameMessage.textContent = `${turn} is the winner!`
    }

    render();
}

div.addEventListener("click", placeMove);
replayBtn.addEventListener("click", init);