import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import style from './Header.module.scss';

export function Header() {
  return (
    <div className={style.header}>
      <img src="https://github.com/nataliafonseca.png" alt="Foto de perfil" />
      <div className={style.headerIcons}>
        <ChatIcon sx={{ color: '#787878' }} />
        <MoreVertIcon sx={{ color: '#787878' }} />
      </div>
    </div>
  );
}
