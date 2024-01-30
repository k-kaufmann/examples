import { Page } from "../../components/Page";
import { Bad } from "./button/Bad";

export function OCPExample() {
  return (
    <Page>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl underline">OCP Example</h1>
        <div className="flex gap-3">
          <Bad type="danger">Click me!</Bad>
          <Bad type="default">Click me!</Bad>
          <Bad type="unknown">Click me!</Bad>
        </div>
      </div>
    </Page>
  );
}
