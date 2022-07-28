import { useContatos } from "../../hooks/useContatos";
import { ChatView } from "../ChatView";
import { HomeView } from "../HomeView";
import { Sidebar } from "../Sidebar";

export function MainContainer() {
  const { contatoAtual } = useContatos();

  return (
    <main>
      <Sidebar />
      {contatoAtual ? <ChatView contato={contatoAtual} /> : <HomeView />}
    </main>
  );
}
