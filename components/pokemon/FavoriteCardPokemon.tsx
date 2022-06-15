import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };
  
  return (
    <div
      className="transform hover:translate-y-2 hover:shadow-xl transition duration-300 py-2 shadow-2xl rounded bg-gradient-to-t from-cyan-900 m-4 text-center cursor-pointer"
      key={pokemonId}
      onClick={onFavoriteClicked}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        width={100}
        height={100}
        alt="Pokemones Favoritos"
      />
    </div>
  );
};
