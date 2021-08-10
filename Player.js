class Player {
  constructor(name) {
    this.name = name;
    this.token = name === 'Computer' ? '🖥' : '🤓';
    this.wins = 0;
    this.fighter = null; 
  };

  takeTurn(fighter) {
    this.fighter = fighter;
  };

  saveWinsToStoarge() {
    var gameScore = {
      score: this.wins
    };

    localStorage.setItem(`${this.name}`, JSON.stringify(gameScore));
  };

  retrieveWinsFromStorage() {
    var gameScore = JSON.parse(localStorage.getItem(`${this.name}`));
    if (gameScore) {
      this.wins = gameScore.score;
    }
  };
};