import style from "./ChatBody.module.scss";

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

interface ChatBodyProps {
  contato: Contato;
}

export function ChatBody({ contato }: ChatBodyProps) {
  return (
    <div className={style.body}>
      {contato.mensagem.map((mensagem) => (
        <div
          key={mensagem.id}
          className={
            mensagem.enviadoPeloContato
              ? `${style.message}`
              : `${style.message} ${style.mine}`
          }
        >
          <div className={style.messageContent}>
            <p>{mensagem.conteudo}</p>
          </div>
          <time>
            {new Date(mensagem.datahora).toLocaleTimeString("pt-br", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>
      ))}
    </div>
  );
}
