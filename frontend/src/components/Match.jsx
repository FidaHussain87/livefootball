import React, { useState } from "react";

export default function Match({ game, onUpdateScore, onFinishGame }) {
  const [homeScore, setHomeScore] = useState(game.homeScore);
  const [awayScore, setAwayScore] = useState(game.awayScore);

  const handleUpdate = () => {
    onUpdateScore(game.homeTeam, game.awayTeam, homeScore, awayScore);
  };

  return (
    <div className="game-control">
      <div>
        {game.homeTeam} {homeScore} - {game.awayTeam} {awayScore}
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
