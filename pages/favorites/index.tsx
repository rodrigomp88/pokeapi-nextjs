import Image from "next/image";
import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui/";
import localFavorite from "../../utils/localFavorite";

const FavoritesPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorite.pokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
          {favoritesPokemon.map((id) => (
            <div
              className="transform hover:translate-y-2 hover:shadow-xl transition duration-300 py-2 shadow-2xl rounded bg-gradient-to-t from-cyan-900 m-4 text-center "
              key={id}
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={100}
                height={100}
                alt="Pokemones Favoritos"
              />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default FavoritesPage;
