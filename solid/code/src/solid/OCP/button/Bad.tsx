import {
  faExclamationTriangle,
  faQuestionCircle,
  faSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "default" | "danger" | "unknown";
  children: ReactNode;
}

export function Bad({ type, children }: ButtonProps) {
  return (
    <button className="bg-emerald-500 hover:bg-emerald-700 transition-all duration-300 rounded-md px-2 flex gap-2 items-center">
      {type === "danger" && <FontAwesomeIcon icon={faExclamationTriangle} />}
      {type === "default" && <FontAwesomeIcon icon={faSmileWink} />}
      {type === "unknown" && <FontAwesomeIcon icon={faQuestionCircle} />}
      {children}
    </button>
  );
}
