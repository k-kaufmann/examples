import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  SRPBad,
  OPOverview,
  SRPOverview,
  SRPGood,
  OCPExample,
  LSPOverview,
  LSPExample,
} from "./solid";
import { ISPExample, ISPOverview } from "./solid/ISP";
import { DIPExample, DIPOverview } from "./solid/DIP";

const Main = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-6xl underline">SOLID Prinzipien</h1>
      <ul className="list-disc pl-8">
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to={"/srp"}>Single-Responsibility</Link>
        </li>
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to={"/ocp"}>Open-Closed-Prinzip</Link>
        </li>
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to={"/lsp"}>Liskovsches Substitutionsprinzip</Link>
        </li>
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to={"/isp"}>Interface-Segregation-Prinzip</Link>
        </li>
        <li className="hover:text-gray-500 transition-all duration-300">
          <Link to={"/dip"}>Dependency-Inversion-Prinzip</Link>
        </li>
      </ul>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/srp",
      element: <SRPOverview />,
    },
    {
      path: "/srp/example",
      element: <SRPBad />,
    },
    { path: "/ocp", element: <OPOverview /> },
    { path: "/ocp/example", element: <OCPExample /> },
    { path: "/lsp", element: <LSPOverview /> },
    { path: "/lsp/example", element: <LSPExample /> },
    { path: "/isp", element: <ISPOverview /> },
    { path: "/isp/example", element: <ISPExample /> },
    { path: "/dip", element: <DIPOverview /> },
    { path: "/dip/example", element: <DIPExample /> },
  ]);

  return (
    <div className=" h-svh bg-slate-800 text-white text-3xl flex flex-col justify-center  items-center leading-relaxed">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
