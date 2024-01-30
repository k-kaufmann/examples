import { useRef } from "react";

export function Form() {
  const ref = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(ref.current.value);
      }}
    >
      <div className="flex gap-4">
        <label htmlFor="name">Name:</label>
        <input
          ref={ref}
          id="name"
          name="name"
          className="text-black rounded-lg px-2"
          type="text"
        ></input>
      </div>
      <button
        className="bg-lime-600 hover:bg-lime-800 transition-all duration-300 py-1 px-2 m-4 rounded-lg"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
