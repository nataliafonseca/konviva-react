import React, { useState } from "react";

import ListaTarefasPage from "./components/ListaTarefasPage";
import ListaTarefasContext from "./services/ListaTarefas/ListaTarefasContext";
import { listaTarefasContextBuilder } from "./services/ListaTarefas/ListaTarefasServices";

function App() {
  // inicializa o objeto que vamos compartilhar
  const controleDeTarefas = listaTarefasContextBuilder(useState([]));

  return (
    <div className="App">
      <ListaTarefasContext.Provider value={controleDeTarefas}>
        <ListaTarefasPage></ListaTarefasPage>
      </ListaTarefasContext.Provider>
    </div>
  );
}

export default App;
