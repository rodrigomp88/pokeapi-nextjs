import { useState } from "react";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(
    localFavorites.existInFavorite(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);
  };
  return (
    <Layout title={pokemon.name}>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-100 relative bg-gradient-to-t from-cyan-900 p-3 rounded-3xl shadow-2xl">
          <Image
            src={
              pokemon.sprites.other?.dream_world.front_default ||
              "/no-image.png"
            }
            alt={pokemon.name}
            width={300}
            height={300}
          />
        </div>
        <div className="flex-auto mt-10 md:mt-0 md:mx-5 bg-gradient-to-t from-cyan-900 p-3 rounded-3xl shadow-2xl">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-5xl uppercase text-center md:text-left font-semibold text-emerald-700">
              {pokemon.name}
            </h1>
            <div className="text-lg font-semibold mt-5 sm:mt-0 items-center justify-center">
              <button
                className={`${
                  isInFavorite ? "bg-red-500" : "bg-cyan-500"
                } w-auto p-2 text-white rounded-xl `}
                type="button"
                aria-label="Like"
                // disabled={!isInFavorite}
                onClick={onToggleFavorite}
              >
                {isInFavorite ? "Quitar de Favoritos" : "Añadir a Favoritos"}
              </button>
            </div>
            <div className="w-full text-sm pt-2 font-bold text-slate-700 mt-2">
              <p>Peso: {pokemon.weight}</p>
              <p>Altura: {pokemon.height}</p>
            </div>
          </div>
          <div className="flex flex-cols-2 md:flex-cols-4 text-center md:text-left mt-6 text-sm font-medium">
            <div className="">
              <h2>Sprites</h2>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={120}
                height={120}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={120}
                height={120}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={120}
                height={120}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon150 = [...Array(150)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon150.map((id) => ({
      params: { id },
    })),

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
