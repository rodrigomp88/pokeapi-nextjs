import Image from "next/image";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCards: FC<Props> = ({ pokemon }) => {
  return (
    <div
      className="py-2 rounded shadow-lg bg-gradient-to-t from-cyan-900 m-4 text-center"
      key={pokemon.id}
    >
      <Image src={pokemon.img} alt={pokemon.name} width={150} height={150} />
      <p className="font-bold text-xs md:text-lg xl:text-xl text-yellow-600 mb-2 uppercase">
        {pokemon.name}
      </p>
      <div className="pt-2 pb-2">
        <span className="inline-block bg-cyan-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          #{pokemon.id}
        </span>
      </div>
    </div>
  );
};
