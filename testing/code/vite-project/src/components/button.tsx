import { useState } from "react";

export function MyButton() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div>
      {isClicked && <h1 data-testid="myHeading">Clicked!</h1>}
      <button
        data-testid="myButton"
        onClick={() => {
          setIsClicked(() => {
            return !isClicked;
          });
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
