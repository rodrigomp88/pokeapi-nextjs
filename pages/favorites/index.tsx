import { Layout } from "../../components/layouts";

const FavoritesPage = () => {
  return (
    <Layout title="Favorites">
      <div className="container flex flex-col items-center self-center text-center h-100 w-100">
        <h1 className="text-5xl">No hay nada en favoritos</h1>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
