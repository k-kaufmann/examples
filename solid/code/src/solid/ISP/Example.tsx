import { Page } from "../../components/Page";

interface Arbeitsbereich {
  id: string;
  name: string;
  mitarbeiteranzahl: number;
}

interface Mitarbeiter {
  vorname: string;
  nachname: string;
  alter: number;
  image: string;
  arbeitsbereich: Arbeitsbereich;
}
function Mitarbeiter({ mitarbeiter }: { mitarbeiter: Mitarbeiter }) {
  return (
    <div>
      <div>
        {mitarbeiter.vorname} {mitarbeiter.nachname}
      </div>
      <Arbeitsbereich mitarbeiter={mitarbeiter} />
    </div>
  );
}

function Arbeitsbereich({ mitarbeiter }: { mitarbeiter: Mitarbeiter }) {
  const arbeitsbereich = mitarbeiter.arbeitsbereich;
  return (
    <div>
      <div>Name: {arbeitsbereich.name}</div>
      <div>Mitarbeiteranzahl: {arbeitsbereich.mitarbeiteranzahl}</div>
    </div>
  );
}

export function ISPExample() {
  return (
    <Page>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl underline">ISP Example</h1>
        <div className="flex gap-3"></div>
      </div>
    </Page>
  );
}
