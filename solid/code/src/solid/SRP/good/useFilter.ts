import { useState } from "react";

export function useFilter(s: string = ""): [string, (s: string) => void] {
  const [filter, setFilter] = useState(s);

  function handleFilter(newString: string) {
    setFilter(newString.toLowerCase());
  }

  return [filter, handleFilter];
}
