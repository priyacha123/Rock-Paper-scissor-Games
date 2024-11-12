
let score =JSON.parse(localStorage.getItem('score')) || {
   wins : 0,
   losses : 0,
   ties : 0
 };
 
updateScore();

function playGame1(move) {
 const computerMove = pickComputerMove();
 let result = '';

 if (move === 'Rock') {
   if (computerMove === 'Rock') {
     result = 'Tie match';
   }
   else if (computerMove === 'Paper') {
     result = 'You lose';
   }
   else if (computerMove === 'Scissor') {
     result = 'You win';
   }
 }
 else if (move === 'Paper') {
   if (computerMove === 'Rock') {
     result = 'You win';
   }
   else if (computerMove === 'Paper') {
     result = 'Tie match';
   }
   else if (computerMove === 'Scissor') {
     result = 'You lose';
   }
 }
 else if (move === 'Scissor') {
   if (computerMove === 'Rock') {
     result = 'You lose';
   }
   else if (computerMove === 'Paper') {
     result = 'You win';
   }
   else if (computerMove === 'Scissor') {
     result = 'Tie match';
   }
 }


 if (result === 'You win')
 {
   score.wins += 1;
 }
 else if (result === 'Tie match')
 {
   score.ties += 1;
 }
 else if (result === 'You lose')
 {
   score.losses += 1;
 }

 localStorage.setItem('score', JSON.stringify(score));

 updateScore();

 document.querySelector('.js-result')
 .innerHTML = result ; 
 

 document.querySelector('.js-moves')
 .innerHTML = `You choose <img src="images/${move}.jpg" class="move-icon"> - Computer choose  <img src="images/${computerMove}.jpg" class="move-icon"> `;

 // alert(`Yoy picked ${move}. Computer picked ${computerMove}. ${result}
 //  Wins : ${score.wins},Losses : ${score.losses},Ties : ${score.ties}`);

}

function updateScore() {
   document.querySelector('.js-score')
 .innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`
 }


 

function pickComputerMove() {
 const randomNumber = Math.random();
 computerMove = '';
 if (randomNumber >= 0 && randomNumber <= 1 / 3) {
   computerMove = 'Rock';
 }
 if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
   computerMove = 'Paper';
 }
 if (randomNumber >= 2 / 3 && randomNumber <= 1) {
   computerMove = 'Scissor';
 }
 return computerMove;
}

