import { useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
// import s from "./MyDrop.module.scss";

export function MyDrop({
  caption,
  children,
  on: initialOn = true,
  addClass = "",
  ...props
}) {
  // const classes = `${addClass} ${s.drop}`.trim();
  const { on, setOn } = useState(initialOn);

  function toggle() {
    setOn((on) => !on);
  }
  function close() {
    setOn(false);
  }

  const containerRef = useOnClickOutside(close);

  return (
    <div
      {...props}
      ref={containerRef}
      // className={classes}
    >
      <>{caption}</>
      <>{children}</>
    </div>
  );
}

export default MyDrop;
