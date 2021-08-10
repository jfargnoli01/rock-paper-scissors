class Game {
  constructor() {
    this.user = new Player('User');
    this.computer = new Player('Computer');
    this.gameType = null;
    this.winConditions = {
      rock: ['scissors', 'iguana'],
      paper: ['rock', 'ufo'],
      scissors: ['paper', 'iguana'],
      iguana: ['paper', 'ufo'],
      ufo: ['scissors', 'rock']
    };
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

  checkIfUserWin() {
    var user = this.user.fighter;
    var computer = this.computer.fighter;
    var doesUserWin = this.winConditions[user].includes(computer);

    return doesUserWin;
  };

  checkWin() {
    if (this.checkIfUserWin()) {
      this.user.wins += 1;
      this.user.saveWinsToStoarge();
      showUserWin();
    } else {
      this.computer.wins += 1;
      this.computer.saveWinsToStoarge();
      showComputerWin();
    }
  };

  resetGameBoard() {
    this.gameType = null;
    this.user.fighter = null;
    this.computer.fighter = null;
  };
};