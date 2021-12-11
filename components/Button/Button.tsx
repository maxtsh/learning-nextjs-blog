import StyledButton from "./styles";
import type { StyledProps } from "./types";

const Button: React.FC<StyledProps> = ({
  color,
  bgColor,
  children,
  ...props
}) => {
  return (
    <StyledButton color={color} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
