import { ButtonHTMLAttributes } from "react";
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  bgColor: string;
}
