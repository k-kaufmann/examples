import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export const DIPOverview = () => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl underline">Interface-Segregation-Prinzip</h1>
        <div>
          <p>
            "Module höherer Ebenen sollten nicht von Modulen niedrigerer Ebenen
            abhängen. Beide sollten von Abstraktionen abhängen. <br />
            Abstraktionen sollten nicht von Details abhängen. Details sollten
            von Abstraktionen abhängen."
          </p>
        </div>
        <Link
          className="hover:text-lime-500 text-lime-300 transition-all duration-300"
          to={"/dip/example"}
        >
          Beispiel
        </Link>
      </div>
    </Page>
  );
};
