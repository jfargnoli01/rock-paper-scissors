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
var game;
var chooseHeading = document.querySelector('#chooseHeading');
var userScore = document.querySelector('#userScore');
var computerScore = document.querySelector('#computerScore')

main.addEventListener('click', gamePlay);

function gamePlay(event) {
  if (!game) {
    game = new Game();
    selectGameType(event);
  } else {
    var selectedFighter = event.target.id
    game.user.takeTurn(selectedFighter);
    
    var randomFighter = game.generateRandomFighter();
    game.computer.takeTurn(randomFighter);
    
    var isDraw = game.checkIfDraw();

    if(isDraw) {
      showDraw(event.target)
    } else {
      game.checkWin();
    }

    showToken(event.target);
    
    hideInactiveFighters(selectedFighter, randomFighter);
  }
};

function selectGameType(event) {
  game.checkGameType(event.target);
};

function hideInactiveFighters(selectedFighter, randomFighter) {
  var fighters = document.querySelectorAll('.fighter-icon');
  for (var i = 0; i < fighters.length; i++) {
    if (fighters[i].id !== selectedFighter && fighters[i].id !== randomFighter) {
      fighters[i].classList.add('hidden');
    } 
  }
};

function showToken(fighterElement) {
  var userToken = fighterElement.nextElementSibling;
  userToken.classList.remove('make-transparent');
}

function displayClassicVersion() {
  classicVersion.classList.add('hidden');
  difficultVersion.classList.add('hidden');
  fighterIconsClassic.classList.remove('hidden');
};

function displayDifficultVersion() {
  classicVersion.classList.add('hidden');
  difficultVersion.classList.add('hidden');
  fighterIconsClassic.classList.remove('hidden');
  fighterIconsDifficult.classList.remove('hidden');
};

function showDraw(fighterElement) {
  chooseHeading.innerText = '😞 It\'s a draw! 😞'
  var newFighterElement = fighterElement.cloneNode()
  fighterElement.parentNode.parentNode.append(newFighterElement);
};

function showUserWin() {
  chooseHeading.innerText = '🥳 User won this round! 🥳';
  userScore.innerText = `Wins: ${game.user.wins}`;
};

function showComputerWin() {
  chooseHeading.innerText = '🖥 Computer won this round! 🖥';
  computerScore.innerText = `Wins: ${game.computer.wins}`;
};