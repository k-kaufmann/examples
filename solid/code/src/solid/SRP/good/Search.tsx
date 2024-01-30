import { useState } from "react";

export function Search({ onChange }: { onChange: (s: string) => void }) {
  const [filter, setFilter] = useState("");

  return (
    <div className="flex gap-2">
      <label htmlFor="search">Suchen:</label>
      <input
        className="rounded-lg text-black px-2"
        type="text"
        id="search"
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
      />
    </div>
  );
}
