import * as styled from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  children: React.ReactNode;
  $width?: string;
  $height?: string;
  $fontSize?: string;
}

const Button = ({ children, ...props }: ButtonProps ) => {
  return (
    <styled.Button {...props}>
      {children}
      <FontAwesomeIcon icon={faArrowRight} />
    </styled.Button>
  );
}

export default Button;
