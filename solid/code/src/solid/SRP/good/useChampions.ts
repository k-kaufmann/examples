import { useEffect, useState } from "react";

export const useChampions = () => {
  const [champions, setChampions] = useState([]);
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

  return { champions };
};
