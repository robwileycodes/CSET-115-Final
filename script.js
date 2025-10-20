let currentPlayer = "X";
let p1Score = 0;
let p2Score = 0;
let tieScore = 0;
let gamesPlayed = 0;
let p1Win = document.getElementById("p1Win")
let p2Win = document.getElementById("p2Win")
let tieAlert = document.getElementById("tie")
let body = document.getElementById("body")
let sun = document.getElementById("sun")
let moon = document.getElementById("moon")
let scoreBtn1 = document.getElementById("scoreBtn1")
let scoreBtn2 = document.getElementById("scoreBtn2")
let scoreBtn3 = document.getElementById("scoreBtn3")
let cell1 = document.getElementById("cell1")
let board = document.getElementById("board")
let cells = Array.from(document.querySelectorAll(".cell"));
let restartBtn = document.getElementById("restart");


const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
const gamesPlayedEl = document.getElementById("gamesPlayed")
const tieEl = document.getElementById("ties");


function score() {
    score1El.textContent = p1Score;
    score2El.textContent = p2Score;
    tieEl.textContent = tieScore;
    gamesPlayedEl.textContent = gamesPlayed;
}
score();


function click(cell) {
    p1Win.style.display = "none"
    p2Win.style.display = "none"
    tieAlert.style.display = "none"
    if (cell.textContent !== "") return;

    cell.textContent = currentPlayer;
    cell.style.fontSize = "40px";
    cell.style.textAlign = "center";
    if (checkWin()) {
        if (currentPlayer === "X") {
            p1Score++;
            gamesPlayed++;
            p1Win.style.display = "block"
        } else {
            p2Score++;
            gamesPlayed++;
            p2Win.style.display = "block"
        }
        score();
        reset();
        return;
    }
    else if (cells.every(c => c.textContent !== "")) {
        tieAlert.style.display = "block"
        tieScore++;
        gamesPlayed++;
        score();
        reset();
        return;
    }


  currentPlayer = currentPlayer === "X" ? "O" : "X";
}


cells.forEach(cell => {
  cell.addEventListener("click", () => click(cell));
});


function checkWin() {
  board = cells.map(c => c.textContent);
  const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]          
  ];

  return wins.some(([a,b,c]) => 
    board[a] && board[a] === board[b] && board[a] === board[c]
  );
}


function reset() {
  cells.forEach(cell => {
    cell.textContent = "";
  });
  currentPlayer = "X";

}
restartBtn.addEventListener("click", reset);


// border: 2px solid white; border-collapse: collapse;
function lightToDark() {
    body.style.color = "white"
    body.style.backgroundColor = "#000"
    moon.style.display = "none"
    sun.style.display = "block"
    body.style.transitionDuration = "0.5s"
    restartBtn.style.backgroundColor = "#000"
    restartBtn.style.color = "white"
    restartBtn.style.border = "1px solid white"
    cell1.style.backgroundColor = "#000"
    cell1.style.color = "white"
    cell1.style.border = "2px solid white"
    cell1.style.borderCollapse = "collapse"
    cell2.style.backgroundColor = "#000"
    cell2.style.color = "white"
    cell2.style.border = "2px solid white"
    cell2.style.borderCollapse = "collapse"
    cell3.style.backgroundColor = "#000"
    cell3.style.color = "white"
    cell3.style.border = "2px solid white"
    cell3.style.borderCollapse = "collapse"
    cell4.style.backgroundColor = "#000"
    cell4.style.color = "white"
    cell4.style.border = "2px solid white"
    cell4.style.borderCollapse = "collapse"
    cell5.style.backgroundColor = "#000"
    cell5.style.color = "white"
    cell5.style.border = "2px solid white"
    cell5.style.borderCollapse = "collapse"
    cell6.style.backgroundColor = "#000"
    cell6.style.color = "white"
    cell6.style.border = "2px solid white"
    cell6.style.borderCollapse = "collapse"
    cell7.style.backgroundColor = "#000"
    cell7.style.color = "white"
    cell7.style.border = "2px solid white"
    cell7.style.borderCollapse = "collapse"
    cell8.style.backgroundColor = "#000"
    cell8.style.color = "white"
    cell8.style.border = "2px solid white"
    cell8.style.borderCollapse = "collapse"
    cell9.style.backgroundColor = "#000"
    cell9.style.color = "white"
    cell9.style.border = "2px solid white"
    cell9.style.borderCollapse = "collapse"
    scoreBtn1.style.border = "1px solid white"
    scoreBtn2.style.border = "1px solid white"
    scoreBtn3.style.border = "1px solid white"
}


function darkToLight() {
    body.style.color = "#000"
    body.style.backgroundColor = "white"
    moon.style.display = "block"
    sun.style.display = "none"
    body.style.transitionDuration = "0.5s"
    restartBtn.style.backgroundColor = "white"
    restartBtn.style.color = "#000"
    restartBtn.style.border = "1px solid #000"
    cell1.style.backgroundColor = "white"
    cell1.style.color = "#000"
    cell1.style.border = "2px solid black"
    cell1.style.border = "collapse"
    cell2.style.backgroundColor = "white"
    cell2.style.color = "#000"
    cell2.style.border = "2px solid black"
    cell2.style.border = "collapse"
    cell3.style.backgroundColor = "white"
    cell3.style.color = "#000"
    cell3.style.border = "2px solid black"
    cell3.style.border = "collapse"
    cell4.style.backgroundColor = "white"
    cell4.style.color = "#000"
    cell4.style.border = "2px solid black"
    cell4.style.border = "collapse"
    cell5.style.backgroundColor = "white"
    cell5.style.color = "#000"
    cell5.style.border = "2px solid black"
    cell5.style.border = "collapse"
    cell6.style.backgroundColor = "white"
    cell6.style.color = "#000"
    cell6.style.border = "2px solid black"
    cell6.style.border = "collapse"
    cell7.style.backgroundColor = "white"
    cell7.style.color = "#000"
    cell7.style.border = "2px solid black"
    cell7.style.border = "collapse"
    cell8.style.backgroundColor = "white"
    cell8.style.color = "#000"
    cell8.style.border = "2px solid black"
    cell8.style.border = "collapse"
    cell9.style.backgroundColor = "white"
    cell9.style.color = "#000"
    cell9.style.border = "2px solid black"
    cell9.style.border = "collapse"
    scoreBtn1.style.border = "1px solid #000"
    scoreBtn2.style.border = "1px solid #000"
    scoreBtn3.style.border = "1px solid #000"
}
