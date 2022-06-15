import Image from "next/image";

export const NoFavorites = () => {
  return (
    <>
      <div className="container mt-20 flex flex-col items-center text-center">
        <h1 className="text-5xl font-semibold text-stone-700">
          No hay nada en favoritos!
        </h1>
      </div>
      <div className="mt-5 text-center">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt="icono"
          width={300}
          height={300}
          className="opacity-60"
        />
      </div>
    </>
  );
};
