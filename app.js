let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice() {
   const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber];
}
function convertToWord(letter) {
   if (letter === "r") return "Rock";
   if (letter === "p") return "Paper";
   return "Scissors";
}

function win(user, computer) {
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   const smallUserWord = "user".fontsize(3).sub();
   const smallCompWord = "comp".fontsize(3).sub();
   result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} .you win....... ! `;
}

function lose(user, computer) {
   computerScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   const smallUserWord = "user".fontsize(3).sub();
   const smallCompWord = "comp".fontsize(3).sub();
   result_div.innerHTML = `${convertToWord(user)}${smallUserWord} loses ${convertToWord(computer)}${smallCompWord} .you lost..... ! `;

}

function draw(user, computer) {
   const smallUserWord = "user".fontsize(3).sub();
   const smallCompWord = "comp".fontsize(3).sub();
   result_div.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord} .it's a Draw... `;
}

console.log(getcomputerChoice());

function game(userChoice) {
   const computerChoice = getcomputerChoice();
   switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
         win(userChoice, computerChoice);
         break;
      case "rp":
      case "ps":
      case "sr":
         lose(userChoice, computerChoice);
         break;
      case "rr":
      case "pp":
      case "ss":
         draw(userChoice, computerChoice);
         break;
   }
}

function main() {
   rock_div.addEventListener('click', function () {
      game("r");
   })

   paper_div.addEventListener('click', function () {
      game("p");
   })

   scissors_div.addEventListener('click', function () {
      game("s");
   })
}
main();
