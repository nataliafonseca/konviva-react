import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneIcon from '@mui/icons-material/MicNone';

import style from './ChatInput.module.scss';

export function ChatInput() {
  return (
    <div className={style.input}>
      <div className={style.icons}>
        <InsertEmoticonIcon sx={{ color: '#787878' }} />
        <AttachFileIcon sx={{ color: '#787878' }} />
      </div>
      <input type="text" id="mensagem" name="mensagem" placeholder="Mensagem" />
      <div className={style.icons}>
        <MicNoneIcon sx={{ color: '#787878' }} />
      </div>
    </div>
  );
}
