import React from "react";

export default function Summary({ games }) {
  return (
    <div className="summary">
      <h2>Summary</h2>
      {games.map((game, index) => (
        <div key={index}>
          {game.homeTeam} {game.homeScore} - {game.awayTeam} {game.awayScore}
        </div>
      ))}
    </div>
  );
}
