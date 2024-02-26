import { useRef } from "react";
import { set } from "./store";

function App() {
  const keyRef = useRef(null);
  const valueRef = useRef(null);

  const onClickHanlder = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    set(keyRef.current.value, valueRef.current.value);
  };

  return (
    <div className="w-screen h-screen text-white bg-slate-700 flex flex-col justify-center items-center gap-8">
      <h1 className="text-4xl font-bold">KeyValue Store</h1>
      <div className="flex gap-4">
        <label className="" htmlFor="key-input">
          Key
        </label>
        <input
          className="text-black"
          ref={keyRef}
          id="key-input"
          type="text"
        ></input>
      </div>
      <div className="flex gap-4">
        <label htmlFor="value-input">Value</label>
        <input
          className="text-black"
          ref={valueRef}
          id="value-input"
          type="text"
        ></input>
      </div>
      <button
        onClick={(event) => {
          onClickHanlder(event);
        }}
        className="bg-red-500 text-4xl p-4 rounded-2xl hover:bg-red-600 transition-colors duration-300"
      >
        Speichern
      </button>
    </div>
  );
}

export default App;
