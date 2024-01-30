import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[75%] text-center">
      <div>{children}</div>
      <Link
        className="absolute bottom-8 left-8 text-gray-400 transition-all duration-300 hover:text-gray-600"
        to={"/"}
      >
        Home
      </Link>
    </div>
  );
};
