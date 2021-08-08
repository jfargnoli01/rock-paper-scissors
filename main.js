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

main.addEventListener('click', gamePlay);

function gamePlay(event) {
  if (!game) {
    game = new Game();
    selectGameType(event);
  } else {
    var selectedFighter = event.target.id
    game.user.setFighter(selectedFighter);

    hideInactiveFighters(selectedFighter);
    
    showToken(event.target);
    var randomFighter = game.generateRandomFighter();
  }
};

function selectGameType(event) {
  game.checkGameType(event.target);
};

function hideInactiveFighters(selectedFighter) {
  var fighters = document.querySelectorAll('.fighter-icon');
  for (var i = 0; i < fighters.length; i++) {
    if (fighters[i].id !== selectedFighter) {
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