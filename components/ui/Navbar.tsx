import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="py-5 sticky top-0 z-[10] bg-gradient-to-b from-cyan-700">
      <div className="container px-2 mx-auto flex flex-row justify-between items-center">
        <div className="flex">
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt="icono"
            width={40}
            height={40}
          />
          <Link href="/">
            <a>
              <h1 className="text-6xl font-bold text-yellow-400">
                P<span className="text-5xl font-thin">okémon</span>
              </h1>
            </a>
          </Link>
        </div>
        <div className="text-gray-200 font-bold mt-5">
          <Link href="/favorites">
            <a>Favoritos</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
