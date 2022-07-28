import Image from "../../assets/whatsappweb.png";
import style from "./HomePage.module.scss";

export function HomePage() {
  return (
    <div className={style.container}>
      <img src={Image} alt="WhatsApp Web" />
    </div>
  );
}
