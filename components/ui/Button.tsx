import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  primary?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;


const Button = ({ text, primary = true, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`${primary ? "bg-primary text-primary-foreground" : "bg-surface text-foreground"} h-12 rounded-(--radius) text-md font-bold w-full hover:cursor-pointer hover:opacity-80 transition-all`}>
      {text}
    </button>
  )
}

export default Button