import { useState } from "react";

import { Casa } from "./components/Casa";

export function App() {
  // const [resultado, setResultado] = useState("");
  const [player, setPlayer] = useState("X");

  function togglePlayer() {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }

  return (
    <div className="App">
      <div class="title">JOGO DA VELHA</div>
      {/* <div class="result">{resultado}</div> */}

      <main class="game">
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
        <Casa player={player} togglePlayer={togglePlayer} />
      </main>

      <button class="restart">Reiniciar Jogo</button>
    </div>
  );
}
