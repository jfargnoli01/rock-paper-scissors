var main = document.querySelector('main');
var classicVersion = document.querySelector('#classicVersion');
var difficultVersion = document.querySelector('#difficultVersion');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var iguana = document.querySelector('#iguana');
var ufo = document.querySelector('#ufo');
var fighterIconsClassic = document.querySelector('#fighterIconsClassic');
var fighterIconsDifficult = document.querySelector('#fighterIconsDifficult');
var game = new Game();
var chooseHeading = document.querySelector('#chooseHeading');
var userScore = document.querySelector('#userScore');
var computerScore = document.querySelector('#computerScore');
var changeGameButton = document.querySelector ('#changeGame');


main.addEventListener('click', gamePlay);
changeGameButton.addEventListener('click', changeGame);
window.addEventListener('load', loadScore);

function gamePlay(event) {
  if (!game.gameType) {
    selectGameType(event);
  } else {
    //user selects fighter
    var selectedFighter = event.target.id
    game.user.takeTurn(selectedFighter);
    //show token under user fighter
    showToken(event.target);
    //generate random computer fighter
    var randomFighter = game.generateRandomFighter();
    game.computer.takeTurn(randomFighter);
    //applying set timeout of 3 sec to our reset round once both players picked
    setTimeout(resetRound, 3000);
    //hide all players that are not in play
    hideInactiveFighters(selectedFighter, randomFighter);
    //check if the computer and user selected same fighter
    var isDraw = game.checkIfDraw();
    //if the fighters match, show draw
    if (isDraw) {
      showDraw(event.target)
    } else {
      //if not draw, check to see who won!
      game.checkWin();
    }

  }
};

function selectGameType(event) {
  game.checkGameType(event.target);
};

function hideInactiveFighters(selectedFighter, randomFighter) {
  var fighters = document.querySelectorAll('.fighter-icon');
  for (var i = 0; i < fighters.length; i++) {
    if (fighters[i].id !== selectedFighter && fighters[i].id !== randomFighter) {
      hide(fighters[i]);
    } 
  }
};

function showToken(fighterElement) {
  var userToken = fighterElement.nextElementSibling;
  userToken.classList.remove('make-transparent');
}

function displayClassicVersion() {
  hide(classicVersion);
  hide(difficultVersion);
  show(fighterIconsClassic);
};

function displayDifficultVersion() {
  hide(classicVersion);
  hide(difficultVersion);
  show(fighterIconsClassic);
  show(fighterIconsDifficult);
};

function showDraw(fighterElement) {
  chooseHeading.innerText = '😐 It\'s a draw! 😐';
  var newFighterElement = fighterElement.cloneNode();
  newFighterElement.id = 'clone';
  show(newFighterElement);
  fighterElement.parentNode.parentNode.append(newFighterElement);
};

function showUserWin() {
  chooseHeading.innerText = '🍦😁🍦 User won this round! 🍦😁🍦';
  userScore.innerText = `Wins: ${game.user.wins}`;
};

function showComputerWin() {
  chooseHeading.innerText = '🤖 Computer won this round! 🤖';
  computerScore.innerText = `Wins: ${game.computer.wins}`;
};

function resetRound() {
  var clone = document.querySelector('#clone');
  if (clone) {
    clone.remove();
  }

  showAllFighters();

  hideAllTokens();

  chooseHeading.innerText = 'Choose your fighter!';
  show(changeGameButton);
};

function changeGame() {
  game.resetGameBoard();

  show(classicVersion);
  show(difficultVersion);
 
  hide(fighterIconsClassic);
  hide(fighterIconsDifficult);
  
  resetRound();

  hide(changeGameButton);
  chooseHeading.innerText = 'Choose your game!'
};

function showAllFighters() {
  var fighters = document.querySelectorAll('.fighter-icon');
  for (var i = 0; i < fighters.length; i++) {
    show(fighters[i]);
  }
};

function hideAllTokens() {
  var tokens = document.querySelectorAll('.user-token');
  for (var i = 0; i < tokens.length; i++) {
    tokens[i].classList.add('make-transparent');
  }
};

function loadScore() {
  game.user.retrieveWinsFromStorage();
  userScore.innerText = `Wins: ${game.user.wins}`;
  game.computer.retrieveWinsFromStorage();
  computerScore.innerText = `Wins: ${game.computer.wins}`;
};

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};