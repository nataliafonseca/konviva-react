import { ChatBody } from "./ChatBody";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import style from "./ChatView.module.scss";

interface Mensagem {
  id: number;
  contatoId: number;
  enviadoPeloContato: boolean;
  conteudo: string;
  datahora: string;
}

interface Contato {
  id: number;
  imagemUrl: string;
  nome: string;
  muted: boolean;
  mensagem: Mensagem[];
}

interface ChatViewProps {
  contato: Contato;
}

export function ChatView({ contato }: ChatViewProps) {
  return (
    <div className={style.container}>
      <ChatHeader contato={contato} />
      <ChatBody contato={contato} />
      <ChatInput />
    </div>
  );
}
