import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export const ISPOverview = () => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-6xl underline">Interface-Segregation-Prinzip</h1>
        <div>
          <p>
            „Clients sollten nicht dazu gezwungen werden, von Interfaces
            abzuhängen, die sie nicht verwenden.“
          </p>
        </div>
        <Link
          className="hover:text-lime-500 text-lime-300 transition-all duration-300"
          to={"/isp/example"}
        >
          Beispiel
        </Link>
      </div>
    </Page>
  );
};
