import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: any;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon"}</title>
        <meta name="author" content="Rodrigo" />
        <meta name="description" content="Busqueda de 150 pokemones" />
        <meta name="keywords" content="Pokemones" />
      </Head>
      <Navbar />
      <main className="px-10">{children}</main>
    </>
  );
};
