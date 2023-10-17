import { NextPageContext } from "next";
import { SessionProvider, getSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Billboard from "../../components/Billboard";
import MovieList from "../../components/MovieList";
import useMovieList from "../../hooks/useMovieList";
import useFavorites from "../../hooks/useFavorites";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        <Billboard />
        <div className='pb-40'>
          <MovieList data={movies} title='Trending Now' />
          <MovieList data={favorites} title='My List' />
        </div>
      </SessionProvider>
    </>
  );
}
