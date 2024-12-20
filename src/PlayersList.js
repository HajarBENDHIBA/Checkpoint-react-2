import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div className="bg-gray-100 py-8 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4 m-8">
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
