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

  };

  retrieveWinsFromStorage() {

  };
};