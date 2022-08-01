import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import style from './ChatHeader.module.scss';

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

interface ChatHeaderProps {
  contato: Contato;
}

export function ChatHeader({ contato }: ChatHeaderProps) {
  return (
    <div className={style.header}>
      <div className={style.headerInfo}>
        <img src={contato.imagemUrl} alt="Foto de perfil" />
        <div>
          <h2 className={style.headerTitle}>{contato.nome}</h2>
          <p className={style.headerSubtitle}>{contato.id}</p>
        </div>
      </div>
      <div className={style.headerIcons}>
        <SearchIcon sx={{ color: '#787878' }} />
        <MoreVertIcon sx={{ color: '#787878' }} />
      </div>
    </div>
  );
}
