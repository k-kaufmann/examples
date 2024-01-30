import { useEffect, useState } from "react";
import { Page } from "../../components/Page";

export const SRPBad = () => {
  const [champions, setChampions] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.1.1/data/de_DE/champion.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const champs = [];
        for (const [key, value] of Object.entries(data.data)) {
          champs.push(value);
        }
        console.log(champs);
        setChampions(champs);
      });
  }, []);

  console.log(
    champions.filter((champ) => {
      return champ.name.startsWith("A");
    })
  );

  return (
    <Page>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl underline">Champions</h1>
        <div className="flex gap-2">
          <label htmlFor="search">Suchen:</label>
          <input
            className="rounded-lg text-black px-2"
            type="text"
            id="search"
            onChange={(e) => {
              setFilter(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex flex-wrap gap-4 max-h-72 overflow-auto max-w-[80%]">
          {Array.from(champions)
            .filter((champ) => {
              return champ.name.startsWith(filter);
            })
            .map((champ) => (
              <div>
                <h1 className="peer relative">{champ.name}</h1>
                <p className="text-xl hidden absolute bg-slate-500 peer-hover:block w-72 z-50 rounded-lg px-4">
                  {champ.blurb}
                </p>
              </div>
            ))}
        </div>
      </div>
    </Page>
  );
};
