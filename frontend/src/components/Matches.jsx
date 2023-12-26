import React from "react";
import Match from "./Match";

export default function Matches({ games, onUpdateScore, onFinishGame,goalTime }) {
  const reversedGames = [...games].reverse();
  return (
    <div className="games">
      {reversedGames.map((game, index) => (
        <Match
          key={index}
          game={game}
          onUpdateScore={onUpdateScore}
          onFinishGame={onFinishGame}
          goalTime={goalTime}
        />
      ))}
    </div>
  );
}
