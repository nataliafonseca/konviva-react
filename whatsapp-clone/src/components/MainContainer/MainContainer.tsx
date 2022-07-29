import { useContatos } from "../../hooks/useContatos";
import { ChatView } from "../ChatView";
import { HomeView } from "../HomeView";
import { Sidebar } from "../Sidebar";
import style from "./MainContainer.module.scss";

export function MainContainer() {
  const { contatoAtual } = useContatos();

  return (
    <main className={style.mainContainer}>
      <Sidebar />
      {contatoAtual ? <ChatView contato={contatoAtual} /> : <HomeView />}
    </main>
  );
}
