import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconDefinition;
  children: ReactNode;
}

export function Good({ icon, children, ...others }: ButtonProps) {
  return (
    <button
      {...others}
      className="bg-emerald-500 hover:bg-emerald-700 transition-all duration-300 rounded-md px-2 flex gap-2 items-center"
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
}
