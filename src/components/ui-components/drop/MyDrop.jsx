import { useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import s from "./MyDrop.module.scss";

export default function MyDrop({ content, children }) {
  const [open, setOpen] = useState(false);
  const containerRef = useOnClickOutside(() => setOpen(false));

  function toggle(e) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <div ref={containerRef}>
      <button className={s["drop-button"]} onClick={toggle}>
        {content}
      </button>
      {open && <div className={s.dropdown}>{children}</div>}
    </div>
  );
}
