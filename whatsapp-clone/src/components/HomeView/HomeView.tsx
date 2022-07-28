import Image from "../../assets/whatsappweb.png";
import style from "./HomeView.module.scss";

export function HomeView() {
  return (
    <div className={style.container}>
      <img src={Image} alt="WhatsApp Web" />
    </div>
  );
}
