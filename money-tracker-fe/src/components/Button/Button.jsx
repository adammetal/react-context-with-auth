import { useTheme } from "../../context/ThemeProvider";
import "./Button.css";

const Button = ({ type = "button", text, onClick }) => {
  const theme = useTheme();

  const cls = `button ${theme}`;

  return (
    <button type={type} className={cls} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
