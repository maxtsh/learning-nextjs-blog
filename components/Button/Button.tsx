import StyledButton from "./styles";
import type { Props } from "./types";

const Button: React.FC<Props> = ({ onClick, color, bgColor, children }) => {
  return (
    <StyledButton onClick={onClick} color={color} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
