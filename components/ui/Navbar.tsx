import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="p-3 sticky top-0 z-[100] bg-gradient-to-b from-cyan-700">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png"
            alt="icono"
            width={75}
            height={100}
          />
          <Link href="/">
            <a>
              <h1 className="pt-2 text-6xl font-bold text-yellow-400">
                P<span className="text-5xl font-thin">okémon</span>
              </h1>
            </a>
          </Link>
        </div>
        <div className="text-gray-200 font-bold">
          <Link href="/favorites">
            <a>Favoritos</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
