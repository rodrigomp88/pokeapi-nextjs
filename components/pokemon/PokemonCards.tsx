import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCards: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onCLick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <div
      className="transform hover:translate-y-2 hover:shadow-xl transition duration-300 py-2 shadow-2xl rounded bg-gradient-to-t from-cyan-900 m-4 text-center cursor-pointer"
      key={pokemon.id}
      onClick={onCLick}
    >
      <Image src={pokemon.img} alt={pokemon.name} width={150} height={150} />
      <p className="font-bold text-xs md:text-lg xl:text-xl text-yellow-600 mb-2 uppercase">
        {pokemon.name}
      </p>
      <div className="pt-2 pb-2">
        <span className="inline-block bg-sky-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          #{pokemon.id}
        </span>
      </div>
    </div>
  );
};
