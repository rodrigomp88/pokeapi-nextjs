import { FC } from "react";

import { FavoriteCardPokemon } from "./";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </div>
  );
};
