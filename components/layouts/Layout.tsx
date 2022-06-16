import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: any;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon"}</title>
        <meta name="author" content="Rodrigo" />
        <meta name="description" content={`Busqueda del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon pokedx`} />

        <meta property="og:title" content={`Informaxion sobre ${title}`} />
        <meta
          property="og:description"
          content={`esta es la pagina de ${title}`}
        />
        <meta property="og:image" content={`${origin}/img.banner.png`} />
      </Head>
      <Navbar />
      <main className="px-10">{children}</main>
    </>
  );
};
