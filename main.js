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

main.addEventListener('click', selectGameType);

function selectGameType(event) {
  var game = new Game();
  game.checkGameType(event.target);
};

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