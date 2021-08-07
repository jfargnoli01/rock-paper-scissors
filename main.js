var main = document.querySelector('main');
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var iguana = document.querySelector('#iguana');
var ufo = document.querySelector('#ufo');

main.addEventListener('click', selectGameType);

function selectGameType(event) {
  console.log(event.target);
};


// displayClassicVersion() {
// //will update function when moving to DOM display
// };

// displayDifficultVersion() {
// //will update function when moving to DOM display
// };