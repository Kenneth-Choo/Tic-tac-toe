
//onclick input x 
let input = document.getElementById('board');
const allSquares = document.getElementsByClassName("square")
let player1 ='X';
let player2 ='O';
let currentTurn = 1;
let gameOver = false;

//id declaration
let s1 = document.getElementById('1');
let s2 = document.getElementById('2');
let s3 = document.getElementById('3');
let s4 = document.getElementById('4');
let s5 = document.getElementById('5');
let s6 = document.getElementById('6');
let s7 = document.getElementById('7');
let s8 = document.getElementById('8');
let s9 = document.getElementById('9');


 //update score
let winCount = document.getElementById('win-count');
let loseCount = document.getElementById('lose-count');

//reset id
let clear = document.getElementById('button');
	

//start game
function startGame(){
	input.onclick = function(){
		let clickInput = event.target;
		if(clickInput.innerHTML == ""){
			if(gameState() == true){
				return;
			}else if(currentTurn == 2|| currentTurn == 4|| currentTurn == 6|| currentTurn == 8) {
				clickInput.innerHTML = player2;
				turnCount();
			} else if (currentTurn == 1|| currentTurn == 3|| currentTurn == 5|| currentTurn == 7|| currentTurn == 9){
				clickInput.innerHTML = player1;
				turnCount();
			}
		} else {
			alert("box is taken");
		}
		
	}
}
startGame();

//turn count
function turnCount(){
	if (currentTurn >= 9){
		alert('Draw!');
	} else {
	turn();
	}
}	

//game turn
function turn(){
	let nextTurn = currentTurn++;
	if (currentTurn == 'X'){
		nextTurn = 'O';
	} else {
		nextTurn = 'X';
	}
}

//check game state
function gameState(){
	if (winCheck() == true){
		return true;
	} else {
		return false;
	}
}


//check win condition
function winCheck(){
	if (rowWin() == true || columnWin() == true || diagonalWin() == true){
		winAlert();
		resetState();
		return true;
	} else if (rowLose() == true || columnLose() == true || diagonalLose() == true){
		loseAlert();
		resetState();
		return true;
	} 
}

//win alert
function winAlert(){
	winCount.innerHTML = parseInt(winCount.innerHTML) + 1;
	alert('Congratulations! You have won.');
	
}

//lose alert
function loseAlert(){
	loseCount.innerHTML = parseInt(loseCount.innerHTML) + 1;
	alert('You have lost!');
}


// //player 1 win row
function rowWin() {
	if (s1.innerHTML == player1 && s2.innerHTML == player1 && s3.innerHTML == player1 || s4.innerHTML == player1 && s5.innerHTML == player1 && s6.innerHTML == player1 || s7.innerHTML == player1 && s8.innerHTML == player1 && s9.innerHTML == player1){
		return true;
	} else {
		return false;
	}
}

// //player 1 win column
function columnWin(){
	if (s1.innerHTML == player1 && s4.innerHTML == player1 && s7.innerHTML == player1 || s2.innerHTML == player1 && s5.innerHTML == player1 && s8.innerHTML == player1 || s3.innerHTML == player1 && s6.innerHTML == player1 && s9.innerHTML == player1){
		return true;
	} else {
		return false;
	}
} 

//player 1 win diagonal
function diagonalWin(){
	if (s1.innerHTML == player1 && s5.innerHTML == player1 && s9.innerHTML == player1 || s3.innerHTML == player1 && s5.innerHTML == player1 && s7.innerHTML == player1){
		return true;
	} else {
		return false;
	}
}


//player 2 win row
function rowLose() {
	if (s1.innerHTML == player2 && s2.innerHTML == player2 && s3.innerHTML == player2 || s4.innerHTML == player2 && s5.innerHTML == player2 && s6.innerHTML == player2 || s7.innerHTML == player2 && s8.innerHTML == player2 && s9.innerHTML == player2){
		return true;
	} else {
		return false;
	}
}

//player 2 win column
function columnLose(){
	if (s1.innerHTML == player2 && s4.innerHTML == player2 && s7.innerHTML == player2 || s2.innerHTML == player2 && s5.innerHTML == player2 && s8.innerHTML == player2 || s3.innerHTML == player2 && s6.innerHTML == player2 && s9.innerHTML == player2){
		return true;
	} else {
		return false;
	}
} 

//player 2 win diagonal
function diagonalLose(){
	if (s1.innerHTML == player2 && s5.innerHTML == player2 && s9.innerHTML == player2 || s3.innerHTML == player2 && s5.innerHTML == player2 && s7.innerHTML == player2){
		return true;
	} else {
		return false;
	}
}

//reset
function reset(){
	clear.onclick = function(){
		currentTurn=1;
		s1.innerHTML = "";
		s2.innerHTML = "";
		s3.innerHTML = "";
		s4.innerHTML = "";
		s5.innerHTML = "";
		s6.innerHTML = "";
		s7.innerHTML = "";
		s8.innerHTML = "";
		s9.innerHTML = "";
	}
}
reset();

function resetState(){
	currentTurn=0;
		s1.innerHTML = "";
		s2.innerHTML = "";
		s3.innerHTML = "";
		s4.innerHTML = "";
		s5.innerHTML = "";
		s6.innerHTML = "";
		s7.innerHTML = "";
		s8.innerHTML = "";
		s9.innerHTML = "";
}

// function checkWin(){
// 	checkRowWin();
// 	checkColumnWin();
// 	checkDiagonalWin();
// }

// //check row win
// function checkRowWin(){
// 	let players = [player1, player2];
// 	for(let x=0; x < players.length; x++){
// 		let i  = 0;
// 		while(i < 7){
// 			if(allSquares[i].innerHTML == players[x] && allSquares[i+1].innerHTML == players[x] && allSquares[i+2].innerHTML == players[x]){
// 				gameOver = true;
// 			}
// 			i+=3;
// 		}
// 		if(gameOver){
// 			alert("player " + players[x] + " has won!")
// 			return;
// 		}
// 	}
// }

// //check column win
// function checkColumnWin(){
// 	let players = [player1, player2];
// 	for(let x=0; x < players.length; x++){
// 		let i  = 0;
// 		while(i < 7){
// 			if(allSquares[i].innerHTML == players[x] && allSquares[i+3].innerHTML == players[x] && allSquares[i+6].innerHTML == players[x]){
// 				gameOver = true;
// 			}
// 			i+=3;
// 		}
// 		if(gameOver){
// 			alert("player " + players[x] + " has won!")
// 			return;
// 		}
// 	}
// }

// // //check diagonal win
// function checkDiagonalWin(){
// 	let players = [player1, player2];
// 	for(let x=0; x < players.length; x++){
// 		let i  = 0;
// 		while(i < 7){
// 			if(allSquares[i].innerHTML == players[x] && allSquares[i+4].innerHTML == players[x] && allSquares[i+8].innerHTML == players[x]){
// 				gameOver = true;
// 			} else if (allSquares[i+2].innerHTML == players[x] && allSquares[i+4].innerHTML == players[x] && allSquares[i+6].innerHTML == players[x]) {
// 				gameOver = true;
// 			}
// 		}
// 		if(gameOver){
// 			alert("player " + players[x] + " has won!")
// 			return;
// 		}
// 	}
// }
