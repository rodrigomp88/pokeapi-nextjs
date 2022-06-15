import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui/";
import localFavorite from "../../utils/localFavorite";

const FavoritesPage = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorite.pokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <>
          <h1 className="text-3xl text-center font-800semibold text-cyan-">
            Pokemones favoritos
          </h1>
          <FavoritePokemons pokemons={favoritesPokemon} />
        </>
      )}
    </Layout>
  );
};

export default FavoritesPage;
