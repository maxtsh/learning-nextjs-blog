import styled from "styled-components";
import type { Props } from "./types";

const StyledButton = styled.button<Props>`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 110%;
  font-size: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${(p) => p.color};
  background-color: ${(p) => p.bgColor};
`;

export default StyledButton;
