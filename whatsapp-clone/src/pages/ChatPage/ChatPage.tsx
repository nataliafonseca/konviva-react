import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { ChatBody } from "../../components/ChatBody";
import { ChatHeader } from "../../components/ChatHeader";
import { ChatInput } from "../../components/ChatInput";
import { getByContactId } from "../../services/chatApiService";
import style from "./ChatPage.module.scss";

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

export function ChatPage() {
  const [query] = useSearchParams();
  const [contato, setContato] = useState({} as Contato);
  const [carregando, setCarregando] = useState(true);

  async function fetchMensagens() {
    const response = await getByContactId(Number(query.get("id")));

    setContato(response);
    setCarregando(false);
  }

  useEffect(() => {
    fetchMensagens();
  }, [query]);

  return (
    <div className={style.container}>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <>
          <ChatHeader contato={contato} />
          <ChatBody contato={contato} />
          <ChatInput />
        </>
      )}
    </div>
  );
}
