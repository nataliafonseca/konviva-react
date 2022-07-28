import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Link, useSearchParams } from "react-router-dom";

import style from "./ChatItem.module.scss";

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

interface ChatItemProps {
  contato: Contato;
}

export function ChatItem({ contato }: ChatItemProps) {
  const [query] = useSearchParams();
  const id = Number(query.get("id"));
  const ultimaMensagem = contato.mensagem[contato.mensagem.length - 1];

  return (
    <Link to={`/chat?id=${contato.id}`}>
      <div
        className={
          id === contato.id ? `${style.item} ${style.active}` : `${style.item}`
        }
      >
        <img src={contato.imagemUrl} alt="Foto de perfil" />
        <div className={style.text}>
          <div className={style.contact}>
            <h2 className={style.title}>{contato.nome}</h2>
            <p className={style.subtitle}>
              {ultimaMensagem.enviadoPeloContato || <span>Você: </span>}
              {ultimaMensagem.conteudo}
            </p>
          </div>
          <div className={style.timeStatus}>
            <time className={style.time}>
              {new Date(ultimaMensagem.datahora).toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>
            {contato.muted && (
              <VolumeOffIcon sx={{ color: "#667781" }} fontSize="small" />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
