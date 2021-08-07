const Player = require('./Player.js');

class Game {
  constructor(name) {
    this.user = new Player(name);
    this.computer = new Player('Computer');
  };

  keepGameScore() {

  };

  checkGameType() {
    // isClassicSelected = 
//rules change depending on game type
//need to make id for each fighter?

//if classic selection clicked
//hide rules
//show classic icons

//if difficult selection clicked,
//hide rules
//show classic and diffuclt icons
  };

  checkWinConditions() {
  //if rock selected, will beat scissors and lizard
  //rock
  //if paper selected, will beat rock and alien
  //if scissors, will beat paper and lizard
  //alien, will beat scissors and rock 
  };

  checkIfDraw() {
    
  };

  resetGameBoard() {

  };
};