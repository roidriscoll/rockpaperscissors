PAIRS = {
  "rock":     { "beats": "scissors" },
  "paper":    { "beats": "rock" },
  "scissors": { "beats": "paper" },
  "lizard":   { "beats": "spock"},
  "spock":    { "beats": "scissors"}

};

// defining Game class which initializes with two instace variables
function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

// defines Game method winner
Game.prototype.winner = function() {

  if(this.player1.pick === this.player2.pick) {
    return null;
  }
  else if(PAIRS[this.player1.pick]["beats"] === this.player2.pick) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};