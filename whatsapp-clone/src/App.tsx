import "./App.scss";

import { MainContainer } from "./components/MainContainer/MainContainer";
import { ContatosProvider } from "./hooks/useContatos";

function App() {
  return (
    <ContatosProvider>
      <MainContainer />
    </ContatosProvider>
  );
}

export default App;
