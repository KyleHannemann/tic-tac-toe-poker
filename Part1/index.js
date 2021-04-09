let playerXsquares = [];
let playerOsquares = [];
let winningSquares = [[0,1,2],[0,8,4],[0,6,3],[3,4,5],[6,7,8],[1,7,4], [8,5,2], [6,4,2]]
function play(id){
    let playerX = document.getElementById("player2").value;
    let playerO = document.getElementById("player1").value;
    let text = Array.from(document.querySelectorAll("#text > span"));
    console.log(text);
    if ((!playerX) || (!playerO)){
        alert("Enter Player Names to Begin")
        return;
    }
    let playerName = document.getElementById("playerName");
    console.log(playerX)
    let squareClicked = document.getElementById(id);
    let turn = document.getElementById("player");
    if (squareClicked.dataset.played == "true"){
        return;
    }
    if (turn.innerHTML == "X"){
    squareClicked.innerHTML = "X";
    squareClicked.style.color = "red";
    squareClicked.dataset.played = "true";
    playerXsquares.push(id);
    turn.innerHTML = "O";
    playerName.innerHTML = playerO;
    for (var i = 0; i < text.length; i++){
        text[i].style.color = "blue"
    }
    
    
    }
    else{
        squareClicked.innerHTML = "O";
        squareClicked.style.color = "blue"
        squareClicked.dataset.played = "true";
        playerOsquares.push(id);
        turn.innerHTML = "X";
        playerName.innerHTML = playerX;
        for (var i = 0; i < text.length; i++){
            text[i].style.color = "red"
        }
    
    }
    setTimeout(checkForWin, 200);
    
    
}
document.getElementById("newGame").addEventListener("click", function(){
    let boxes = document.querySelectorAll("td");
    for (var i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].dataset.played = "false";
    }
    playerXsquares = [];
    playerOsquares = [];
    console.log(boxes);
});

function checkForWin(){

    for (var i = 0; i < winningSquares.length; i++){
        let win = 0;
        for (var j = 0; j < winningSquares[i].length; j++){
            console.log(winningSquares[i][j]);
            if (playerXsquares.includes(winningSquares[i][j]) == true){
                win++;
                console.log
            }
            if (win >= 3){
                gameWon("X");
           
        }
    }
}
    for (var i = 0; i < winningSquares.length; i++){
        let win = 0;
        for (var j = 0; j < winningSquares[i].length; j++){
            console.log(winningSquares[i][j]);
            if (playerOsquares.includes(winningSquares[i][j]) == true){
                win++;
                console.log
            }
            if (win >= 3){
                gameWon("O");
           
        }
    }
}

}

function gameWon(player){
    let playerX = document.getElementById("player2").value;
    let playerO = document.getElementById("player1").value;
    let winner;
    if (player === "O"){
        winner = playerO;
    }
    else{winner = playerX}
    alert(winner +"won the game")
    let boxes = document.querySelectorAll("td");
    for (var i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].dataset.played = "true";
    }
    playerXsquares = [];
    playerOsquares = [];
}