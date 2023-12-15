import React, { useState } from "react";
import GameInfo from "./GameInfo";
import Matches from "./Matches";
import Summary from "./Summary";
import FootballScoreBoard from "../utils/FootballScoreBoard";

export default function Scoreboard() {
  const [scoreBoard] = useState(new FootballScoreBoard());
  const [games, setGames] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleStartGame = (homeTeam, awayTeam) => {
    if (scoreBoard.findGame(homeTeam, awayTeam) || homeTeam === awayTeam) {
      alert("Game already in progress!");
      return;
    }
    scoreBoard.startGame(homeTeam, awayTeam);
    setGames([...scoreBoard.games]);
  };

  const handleUpdateScore = (homeTeam, awayTeam, homeScore, awayScore) => {
    scoreBoard.updateScore(homeTeam, awayTeam, homeScore, awayScore);
    setGames([...scoreBoard.games]);
  };

  const handleFinishGame = (homeTeam, awayTeam) => {
    scoreBoard.finishGame(homeTeam, awayTeam);
    setGames([...scoreBoard.games]);
  };

  const handleGetSummary = () => {
    setShowSummary(!showSummary);
  };

  return (
    <div className="scoreboard">
      <header className="header">
        <h1>Live Football World Cup Scoreboard</h1>
      </header>
      <GameInfo onStartGame={handleStartGame} />
      <Matches
        games={games}
        onUpdateScore={handleUpdateScore}
        onFinishGame={handleFinishGame}
      />
      <button onClick={handleGetSummary} className="summary-btn">
        {showSummary ? "Hide" : "Get"} Summary
      </button>
      {showSummary && <Summary games={scoreBoard.getSummary()} />}
    </div>
  );
}
