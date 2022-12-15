import * as buttonStyles from "./button.css";

export interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => (
  <button className={buttonStyles.button}>{label}</button>
);

Button.displayName = "Button";
