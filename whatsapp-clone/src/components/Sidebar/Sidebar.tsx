import { ChatList } from "./ChatList";
import { Header } from "./Header";
import { Search } from "./Search";
import style from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Header />
      <Search />
      <ChatList />
    </div>
  );
}
