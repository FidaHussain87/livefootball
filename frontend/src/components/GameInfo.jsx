import React, { useState } from "react";

export default function GameInfo({ onStartGame }) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onStartGame(homeTeam, awayTeam);
    setHomeTeam("");
    setAwayTeam("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-game">
      <input
        type="text"
        placeholder="Home Team"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
      />
      <input
        type="text"
        placeholder="Away Team"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
      />
      <button type="submit">Start Game</button>
    </form>
  );
}
