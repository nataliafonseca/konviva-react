import { useEffect, useState } from "react";

import { getAll } from "../../../services/chatApiService";
import { ChatItem } from "../ChatItem";
import style from "./ChatList.module.scss";

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

export function ChatList() {
  const [contatos, setContatos] = useState([] as Contato[]);
  const [carregando, setCarregando] = useState(true);

  async function fetchContatos() {
    const contatos = await getAll();
    setContatos(contatos);

    setCarregando(false);
  }

  useEffect(() => {
    fetchContatos();
  }, []);

  return (
    <div className={style.chatList}>
      {carregando ? (
        <p>Carregando</p>
      ) : (
        <>
          {contatos.map((contato, index) => (
            <ChatItem key={index} contato={contato} />
          ))}
        </>
      )}
    </div>
  );
}
