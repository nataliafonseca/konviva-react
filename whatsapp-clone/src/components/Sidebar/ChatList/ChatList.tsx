import { useEffect, useState } from "react";

import { useContatos } from "../../../hooks/useContatos";
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
