class Game {
  constructor() {
    this.user = new Player('User');
    this.computer = new Player('Computer');
    this.gameType = null;
    this.fighter = null;
  };

  keepGameScore() {

  };

  checkGameType(target) {
    var isClassicSelected = classicVersion.contains(target);
    var isDifficultSelected = difficultVersion.contains(target);

    if (isClassicSelected) {
      this.gameType = 'Classic';
      displayClassicVersion();
    } 
    if (isDifficultSelected) {
      this.gameType = 'Difficult';
      displayDifficultVersion();
    }
  };

  setFighter(fighter) {
    this.fighter = fighter;
  };

  checkWinConditions() {
  //if rock selected, will beat scissors and lizard
  //rock
  //if paper selected, will beat rock and alien
  //if scissors, will beat paper and lizard
  //alien, will beat scissors and rock 

  //update player.wins ++
  };

  checkIfDraw() {
    
  };

  resetGameBoard() {

  };
};