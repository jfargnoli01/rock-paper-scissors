class Game {
  constructor() {
    this.user = new Player('User');
    this.computer = new Player('Computer');
    this.gameType = null;
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

  generateRandomFighter() {
    var fightersClassic = ['rock', 'paper', 'scissors'];
    var fightersDifficult = ['rock', 'paper', 'scissors', 'iguana', 'ufo'];

    var availableFighters = this.gameType === 'Classic' ? fightersClassic : fightersDifficult;

    var randomIndex = Math.floor(Math.random() * availableFighters.length);
    return availableFighters[randomIndex];
  };

  checkIfDraw() {
    if (this.user.fighter === this.computer.fighter) {
      return true;
    } 
    return false;
  };

  checkWinConditions() {
  //if rock selected, will beat scissors and lizard
  //rock
  //if paper selected, will beat rock and alien
  //if scissors, will beat paper and lizard
  //alien, will beat scissors and rock 

  //update player.wins ++
  };

  resetGameBoard() {

  };
};