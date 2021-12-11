import StyledButton from "./styles";
import type { Props } from "./types";

const Button: React.FC<Props> = ({ color, bgColor, children }) => {
  return (
    <StyledButton color={color} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
