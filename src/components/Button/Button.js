import { Element } from "./styled";

function Button({ children, onClick }) {
  return <Element onClick={onClick}>{children}</Element>;
}

export default Button;
