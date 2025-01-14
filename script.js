const infoText = document.getElementById(`turnInfo`);
const player1Img = "imgs/icons8-circle-100.png";
const player2Img = "imgs/icons8-x-100.png";
const resetImg = "imgs/icons8-flower-100.png";
let playerImgs = [player1Img, player2Img];
let playerTurnImg;
let players = ["O", "X"];
let pos = 0;
let player;
let buttonArray = ["", "", "", "", "", "", "", "", ""];
let winner = "";
let draw = false;


//*plays the game*//
function playGame(i_dImg, i_dButton) {
  const butn = document.getElementById(i_dButton);
  butn.disabled = true;
  updateInfoText(i_dImg,i_dButton);
  if(winner != ""){
    pauseGame();
  }
}

// *updates the text to show whose turn it is or to show the winner*//
function updateInfoText(imgId, buttonId){
  const img = document.getElementById(imgId);
  img.setAttribute("src", playerImgs[pos]);
  updateList(buttonId, players[pos]);
  checkResult();
  pos = pos + 1;
  if(pos >= 2){
    pos = 0;
  }
  if(pos == 0){
    player = `O`;
  }
  else if (pos == 1){
    player = `X`;
  }
  if(draw){
    infoText.textContent = `Game is a draw!`;
  }
  else if(winner == ""){
    infoText.textContent = `${player}'s turn`;
  }
  else{
    infoText.textContent = `${winner} is the winner!`;
  }
  
}

// *helper function that updates the list for buttons*//
function updateList(buttonId, player){
  buttonArray[parseInt(buttonId) - 1] = player;
}

 function checkResult(){
   if(((buttonArray[0] != "" && buttonArray [1] != "" && buttonArray[2] != "") && (buttonArray[0] == buttonArray[1] && buttonArray[1] == buttonArray[2])) ||
   ((buttonArray[0] != "" && buttonArray [3] != "" && buttonArray[6] != "") &&(buttonArray[0] == buttonArray[3] && buttonArray[3] == buttonArray[6])) ||
   ((buttonArray[0] != "" && buttonArray [4] != "" && buttonArray[8] != "") &&  (buttonArray[0] == buttonArray[4] && buttonArray[4] == buttonArray[8])) ||

   ((buttonArray[1] != "" && buttonArray [4] != "" && buttonArray[7] != "") && (buttonArray[1] == buttonArray[4] && buttonArray[4] == buttonArray[7])) ||
   
   ((buttonArray[2] != "" && buttonArray [5] != "" && buttonArray[8] != "") && (buttonArray[2] == buttonArray[5] && buttonArray[5] == buttonArray[8])) ||
   ((buttonArray[2] != "" && buttonArray [4] != "" && buttonArray[6] != "") && (buttonArray[2] == buttonArray[4] && buttonArray[4] == buttonArray[6])) ||
   
   ((buttonArray[3] != "" && buttonArray [4] != "" && buttonArray[5] != "") && (buttonArray[3] == buttonArray[4] && buttonArray[4] == buttonArray[5])) ||
   ((buttonArray[6] != "" && buttonArray [7] != "" && buttonArray[8] != "") && (buttonArray[6] == buttonArray[7] && buttonArray[7] == buttonArray[8]))){
    winner = players[pos];
   }
   else if(buttonArray[0] != "" && buttonArray[1] != "" && buttonArray[2] != "" &&
           buttonArray[3] != "" && buttonArray[4] != "" && buttonArray[5] != "" &&
           buttonArray[6] != "" && buttonArray[7] != "" && buttonArray[8] != ""){
    draw = true;
   }
 }


// *resets the game*//
 function resetGame(){
  buttonArray = ["", "", "", "", "", "", "", "", ""];
  winner = "";
  draw = false;
  infoText.textContent = "";
  document.getElementById("1").disabled = false;
  document.getElementById("2").disabled = false;
  document.getElementById("3").disabled = false;
  document.getElementById("4").disabled = false;
  document.getElementById("5").disabled = false;
  document.getElementById("6").disabled = false;
  document.getElementById("7").disabled = false;
  document.getElementById("8").disabled = false;
  document.getElementById("9").disabled = false;
  document.getElementById("img1").setAttribute("src", resetImg);
  document.getElementById("img2").setAttribute("src", resetImg);
  document.getElementById("img3").setAttribute("src", resetImg);
  document.getElementById("img4").setAttribute("src", resetImg);
  document.getElementById("img5").setAttribute("src", resetImg);
  document.getElementById("img6").setAttribute("src", resetImg);
  document.getElementById("img7").setAttribute("src", resetImg);
  document.getElementById("img8").setAttribute("src", resetImg);
  document.getElementById("img9").setAttribute("src", resetImg);  
 }
 

// *pauses the game*//
 function pauseGame(){
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
  document.getElementById("5").disabled = true;
  document.getElementById("6").disabled = true;
  document.getElementById("7").disabled = true;
  document.getElementById("8").disabled = true;
  document.getElementById("9").disabled = true;
 }
