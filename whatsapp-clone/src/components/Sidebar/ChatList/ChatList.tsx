import { useContatos } from "../../../hooks/useContatos";
import { ChatItem } from "../ChatItem";
import style from "./ChatList.module.scss";

export function ChatList() {
  const { contatos } = useContatos();

  return (
    <div className={style.chatList}>
      <>
        {contatos.map((contato, index) => (
          <ChatItem key={index} contato={contato} />
        ))}
      </>
    </div>
  );
}
