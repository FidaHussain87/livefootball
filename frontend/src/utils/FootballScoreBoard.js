class FootballScoreBoard {
  constructor() {
    this.games = [];
  }

  startGame(homeTeam, awayTeam) {
    if (this.findGame(homeTeam, awayTeam)) {
      return;
    }
    const newGame = {
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
      startTime: new Date(),
    };
    this.games.push(newGame);
  }

  findGame(homeTeam, awayTeam) {
    return this.games.find(
      (game) =>
        game.homeTeam.toLowerCase() === homeTeam.toLowerCase() ||
        game.awayTeam.toLowerCase() === awayTeam.toLowerCase() ||
        game.homeTeam.toLowerCase() === awayTeam.toLowerCase() ||
        game.awayTeam.toLowerCase() === homeTeam.toLowerCase()
    );
  }

  updateScore(homeTeam, awayTeam, homeScore, awayScore) {
    const game = this.findGame(homeTeam, awayTeam);
    if (game) {
      game.homeScore = homeScore;
      game.awayScore = awayScore;
    }
  }

  finishGame(homeTeam, awayTeam) {
    homeTeam = homeTeam.toLowerCase();
    awayTeam = awayTeam.toLowerCase();
    this.games = this.games.filter(
      (game) => game.homeTeam.toLowerCase() !== homeTeam || game.awayTeam.toLowerCase() !== awayTeam
    );
  }

  getSummary() {
    return this.games.slice().sort((a, b) => {
      const totalScoreA = a.homeScore + a.awayScore;
      const totalScoreB = b.homeScore + b.awayScore;
      if (totalScoreA === totalScoreB) {
        return b.startTime - a.startTime;
      }
      return totalScoreB - totalScoreA;
    });
  }
}

module.exports = FootballScoreBoard;
