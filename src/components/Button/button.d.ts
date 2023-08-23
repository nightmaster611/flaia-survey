import { CSSProperties } from "react";

export type ButtonProps = {
  color?: string;
  bgColor?: string;
  style?: CSSProperties;
  className?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>