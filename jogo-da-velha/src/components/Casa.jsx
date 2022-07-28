import { useState } from "react";

export function Casa({ player, togglePlayer }) {
  const [value, setValue] = useState("");

  function play() {
    if (!value) {
      setValue(player);
      togglePlayer();
    }
  }

  return (
    <>
      <button onClick={play}>{value}</button>
    </>
  );
}
