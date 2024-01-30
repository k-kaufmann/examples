import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (event: any) => void;
}

export function Bad({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-emerald-500 hover:bg-emerald-700 transition-all duration-300 rounded-md px-2 flex gap-2 items-center"
    >
      {children}
    </button>
  );
}
