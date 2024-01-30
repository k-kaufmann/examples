import { Page } from "../../components/Page";
import { Form } from "./form";

export function DIPExample() {
  return (
    <Page>
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-6xl underline">DIP Example</h1>
        <Form />
      </div>
    </Page>
  );
}
