class Game {
  constructor() {
    this.user = new Player('User');
    this.computer = new Player('Computer');
    this.gameType = null;
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
    
    if (user === 'rock' && computer === 'scissors') {
      return true;
    }
    if (user === 'rock' && computer === 'iguana') {
      return true;
    }
    if (user === 'paper' && computer === 'rock') {
      return true;
    }
    if (user === 'paper' && computer === 'ufo') {
      return true;
    }
    if (user === 'scissors' && computer === 'paper') {
      return true;
    }
    if (user === 'scissors' && computer === 'iguana') {
      return true;
    }
    if (user === 'iguana' && computer === 'paper') {
      return true;
    }
    if (user === 'iguana' && computer === 'ufo') {
      return true;
    }
    if (user === 'ufo' && computer === 'scissors') {
      return true;
    }
    if (user === 'ufo' && computer === 'rock') {
      return true;
    }
    return false;
  };

  checkIfComputerWin() {
    var user = this.user.fighter;
    var computer = this.computer.fighter;
    
    if (computer === 'rock' && user === 'scissors') {
      return true;
    }
    if (computer === 'rock' && user === 'iguana') {
      return true;
    }
    if (computer === 'paper' && user === 'rock') {
      return true;
    }
    if (computer === 'paper' && user === 'ufo') {
      return true;
    }
    if (computer === 'scissors' && user === 'paper') {
      return true;
    }
    if (computer === 'scissors' && user === 'iguana') {
      return true;
    }
    if (computer === 'iguana' && user === 'paper') {
      return true;
    }
    if (computer === 'iguana' && user === 'ufo') {
      return true;
    }
    if (computer === 'ufo' && user === 'scissors') {
      return true;
    }
    if (computer === 'ufo' && user === 'rock') {
      return true;
    }
    return false;
  };

  checkWin() {
    if (this.checkIfUserWin()) {
      this.user.wins += 1;
      this.user.saveWinsToStoarge()
      showUserWin();
    } else {
      this.checkIfComputerWin();
      this.computer.wins += 1;
      this.computer.saveWinsToStoarge()
      showComputerWin();
    }
  };

  resetGameBoard() {
    this.gameType = null;
    this.user.fighter = null;
    this.computer.fighter = null;
  };
};