var changeGameButton = document.querySelector ('#changeGame');
var chooseHeading = document.querySelector('#chooseHeading');
var classicVersion = document.querySelector('#classicVersion');
var computerScore = document.querySelector('#computerScore');
var difficultVersion = document.querySelector('#difficultVersion');
var fighterIconsClassic = document.querySelector('#fighterIconsClassic');
var fighterIconsDifficult = document.querySelector('#fighterIconsDifficult');
var game = new Game();
var iguana = document.querySelector('#iguana');
var main = document.querySelector('main');
var paper = document.querySelector('#paper');
var rock = document.querySelector('#rock');
var scissors = document.querySelector('#scissors');
var ufo = document.querySelector('#ufo');
var userScore = document.querySelector('#userScore');

main.addEventListener('click', gamePlay);
changeGameButton.addEventListener('click', changeGame);
window.addEventListener('load', loadScore);

function gamePlay(event) {
  if (!game.gameType) {
    selectGameType(event);
  } else {
    selectFighter(event);
  }
};

function selectFighter(event) {
  var selectedFighter = event.target.id
  var randomFighter = game.generateRandomFighter();
  
  game.user.takeTurn(selectedFighter);
  showToken(event.target);
  game.computer.takeTurn(randomFighter);
  setTimeout(resetRound, 3000);
  hideInactiveFighters(selectedFighter, randomFighter); 
  revealOutcome(event);
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
};

function revealOutcome(event) {
  var isDraw = game.checkIfDraw();

  if (isDraw) {
    showDraw(event.target)
  } else {
    game.checkWin();
  }
};

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
  var newFighterElement = fighterElement.cloneNode();

  newFighterElement.id = 'clone';
  show(newFighterElement);

  chooseHeading.innerText = '😐 It\'s a draw! 😐';
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
  chooseHeading.innerText = 'Choose your game!';
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