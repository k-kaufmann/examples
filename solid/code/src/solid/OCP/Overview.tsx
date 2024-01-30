import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export const OPOverview = () => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl underline">Open Closed Prinzip</h1>
        <div>
          <p>
            „Module sollten sowohl offen (für Erweiterungen), als auch
            geschlossen (für Modifikationen) sein.“ <br></br>
          </p>
        </div>
        <Link
          className="hover:text-lime-500 text-lime-300 transition-all duration-300"
          to={"/ocp/example"}
        >
          Beispiel
        </Link>
      </div>
    </Page>
  );
};
