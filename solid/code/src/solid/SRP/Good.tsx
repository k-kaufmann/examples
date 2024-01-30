import { Page } from "../../components/Page";
import { useChampions } from "./good/useChampions";
import { Search } from "./good/Search";
import { useFilter } from "./good/useFilter";
import { Champion } from "./good/Champion";

export const SRPGood = () => {
  const { champions } = useChampions();
  const [filter, setFilter] = useFilter();
  return (
    <Page>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl underline">Champions</h1>
        <Search onChange={setFilter} />
        <div className="flex flex-wrap gap-4 max-h-72 overflow-auto max-w-[80%]">
          {Array.from(champions)
            .filter((champ) => {
              return champ.name.toLowerCase().startsWith(filter);
            })
            .map((champ) => (
              <Champion champ={champ} />
            ))}
        </div>
      </div>
    </Page>
  );
};
