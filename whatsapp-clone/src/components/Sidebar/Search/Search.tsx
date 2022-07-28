import SearchIcon from "@mui/icons-material/Search";

import style from "./Search.module.scss";

export function Search() {
  return (
    <div className={style.search}>
      <div className={style.input}>
        <label htmlFor="search">
          <SearchIcon sx={{ color: "#787878" }} />
        </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search or start new chat"
        />
      </div>
    </div>
  );
}
