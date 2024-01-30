import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export const SRPOverview = () => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl underline">Single Responsibility Prinzip</h1>
        <div>
          <p>
            "Ein Modul sollte einem, und nur einem, Akteur gegenüber
            verantwortlich sein" <br></br>
            Daraus folgt, das es nur einen{" "}
            <span className="font-semibold">Grund zu Änderung</span> für ein
            Modul geben kann.
          </p>
        </div>
        <Link
          className="hover:text-lime-500 text-lime-300 transition-all duration-300"
          to={"/SRP/example"}
        >
          Beispiel
        </Link>
      </div>
    </Page>
  );
};
