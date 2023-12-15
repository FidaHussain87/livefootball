import FootballScoreBoard from "./utils/FootballScoreBoard";

describe("FootballScoreBoard", () => {
  let scoreBoard;

  beforeEach(() => {
    scoreBoard = new FootballScoreBoard();
  });

  test("should start a game correctly", () => {
    scoreBoard.startGame("Team A", "Team B");
    expect(scoreBoard.games).toHaveLength(1);
    expect(scoreBoard.games[0].homeTeam).toBe("Team A");
    expect(scoreBoard.games[0].awayTeam).toBe("Team B");
  });

  test("should not allow starting a game with teams already playing", () => {
    scoreBoard.startGame("Team A", "Team B");
    scoreBoard.startGame("Team A", "Team B");
    expect(scoreBoard.games).toHaveLength(1);
  });

  test("should update the score of an existing game correctly", () => {
    scoreBoard.startGame("Team A", "Team B");
    scoreBoard.updateScore("Team A", "Team B", 1, 5);
    const game = scoreBoard.findGame("Team A", "Team B");
    expect(game.homeScore).toBe(1);
    expect(game.awayScore).toBe(5);
  });

  test("should finish (remove) a game in progress", () => {
    scoreBoard.startGame("Team A", "Team B");
    scoreBoard.finishGame("Team A", "Team B");
    expect(scoreBoard.games).toHaveLength(0);
  });

  test("should return games ordered by total score and start time for summary", () => {
    scoreBoard.startGame("Team A", "Team B");
    scoreBoard.startGame("Team C", "Team D");
    scoreBoard.updateScore("Team A", "Team B", 4, 5);
    scoreBoard.updateScore("Team C", "Team D", 6, 7);
    const summary = scoreBoard.getSummary();
    expect(summary[0].homeTeam).toBe("Team C");
    expect(summary[1].homeTeam).toBe("Team A");
  });

  test("should treat team names case-insensitively when starting a game", () => {
    scoreBoard.startGame("team a", "team b");
    scoreBoard.startGame("Team A", "Team B");
    expect(scoreBoard.games).toHaveLength(1);
  });
});
