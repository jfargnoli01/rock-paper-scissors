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

  checkIfUserWin() {
    var user = this.user.fighter;
    var computer = this.computer.fighter;
    
    if (user === 'rock' && computer === 'scissors') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'rock' && computer === 'iguana') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'paper' && computer === 'rock') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'paper' && computer === 'ufo') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'scissors' && computer === 'paper') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'scissors' && computer === 'iguana') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'iguana' && computer === 'paper') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'iguana' && computer === 'ufo') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'ufo' && computer === 'scissors') {
      this.user.wins += 1;
      return true;
    }
    if (user === 'ufo' && computer === 'rock') {
      this.user.wins += 1;
      return true;
    }
    return false;
  };

  checkIfComputerWin() {
    var user = this.user.fighter;
    var computer = this.computer.fighter;
    
    if (computer === 'rock' && user === 'scissors') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'rock' && user === 'iguana') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'paper' && user === 'rock') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'paper' && user === 'ufo') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'scissors' && user === 'paper') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'scissors' && user === 'iguana') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'iguana' && user === 'paper') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'iguana' && user === 'ufo') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'ufo' && user === 'scissors') {
      this.computer.wins += 1;
      return true;
    }
    if (computer === 'ufo' && user === 'rock') {
      this.computer.wins += 1;
      return true;
    }
    return false;
  };

  checkWin() {
    // this.keepGameScore()
    // player.saveWinsToStorage()
    
    if (this.checkIfUserWin()) {
      showUserWin();
    } else {
      this.checkIfComputerWin();
      showComputerWin();
    }
  };

  resetGameBoard() {

  };
};