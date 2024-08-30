import { FC } from "react";
type ColorType = "primary" | "secondary";
type ButtonType = "submit" | "reset" | "button" | undefined
type Props = {
  type: ButtonType
  text: string;
  color: ColorType;
  onClick?: () => void
};
const Button: FC<Props> = ({ text, color, type, onClick}) => {
  const buttonColor =
    color === "primary" ? "bg-onSurface" : color === "secondary" ? "bg-white" : "";
  const textColor = color === "primary" ? "text-white" : color === "secondary" ? "text-onSurface" : "";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[330px] h-[40px] ${buttonColor}  ${textColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
