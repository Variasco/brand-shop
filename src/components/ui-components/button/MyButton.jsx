import s from "./MyButton.module.scss";

const MyButton = ({ children, addClass = "", ...props }) => {
  const classes = `${addClass} ${s.button}`.trim();
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default MyButton;
