import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export const LSPOverview = () => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl underline">Liskovsches Substitutionsprinzip</h1>
        <div>
          <p>
            „Sei q(x) eine Eigenschaft des Objektes x vom Typ T, dann sollte
            q(y) für alle Objekte y des Typs S gelten, wobei S ein Subtyp von T
            ist.“
          </p>
        </div>
        <Link
          className="hover:text-lime-500 text-lime-300 transition-all duration-300"
          to={"/lsp/example"}
        >
          Beispiel
        </Link>
      </div>
    </Page>
  );
};
