import React from "react";
import Match from "./Match";

export default function Matches({ games, onUpdateScore, onFinishGame }) {
  return (
    <div className="games">
      {games.map((game, index) => (
        <Match
          key={index}
          game={game}
          onUpdateScore={onUpdateScore}
          onFinishGame={onFinishGame}
        />
      ))}
    </div>
  );
}
