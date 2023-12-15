import React, { useState } from "react";

export default function Match({ game, onUpdateScore, onFinishGame }) {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const handleUpdate = () => {
    onUpdateScore(game.homeTeam, game.awayTeam, homeScore, awayScore);
    setHomeScore(0);
    setAwayScore(0);
  };

  return (
    <div className="game-control">
      <div>
        {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
      </div>
      <input
        type="number"
        value={homeScore}
        onChange={(e) => setHomeScore(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={awayScore}
        onChange={(e) => setAwayScore(parseInt(e.target.value))}
      />
      <button onClick={handleUpdate}>Update Score</button>
      <button onClick={() => onFinishGame(game.homeTeam, game.awayTeam)}>
        Finish Game
      </button>
    </div>
  );
}
