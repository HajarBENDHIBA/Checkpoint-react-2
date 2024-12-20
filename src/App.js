import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Football Players</h1>
      </header>
      <PlayersList />
    </div>
  );
}

export default App;
