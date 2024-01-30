import { Page } from "../../components/Page";
import { Bad } from "./button/Bad";

export function LSPExample() {
  return (
    <Page>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl underline">OCP Example</h1>
        <div className="flex gap-3">
          <Bad
            onClick={() => {
              alert("Currywurst Pommes");
            }}
          >
            Click me!
          </Bad>
        </div>
      </div>
    </Page>
  );
}
