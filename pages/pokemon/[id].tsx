import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { pokeApi } from "../../api";

import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: any;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <Layout title="Informacion de pokemon">
      <div className="flex ">
        <div className="flex-none w-100 relative">
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
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-6xl font-semibold text-slate-900">
              {pokemon.name}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              #{pokemon.order}
            </div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm"></div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
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
