import { NextPageContext } from "next";

import { useState, useEffect } from "react";
import { SessionProvider, getSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Billboard from "../../components/Billboard";
import MovieList from "../../components/MovieList";
import useMovieList from "../../hooks/useMovieList";
import useFavorites from "../../hooks/useFavorites";
import SeriesList from "../../components/SeriesList";
import useSerieList from "../../hooks/useSerieList";

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
  const [isEmpty, setEmpty] = useState(false);
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { data: series = [] } = useSerieList();
  useEffect(() => {
    if (movies.length === 0 && series.length === 0 && series.length === 0) {
      setEmpty(true);
    }
  }, [setEmpty]);
  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        <Billboard />
        <div className='pb-40'>
          {isEmpty && (
            <h1 className='flex items-center justify-center text-4xl text-white/50 font-bold px-10'>
              No streaming content available at the moment . . .
            </h1>
          )}
          <MovieList data={movies} title='Trending Now' />
          <SeriesList data={series} title='Trending Series'></SeriesList>
          <MovieList data={favorites} title='My List' />
        </div>
      </SessionProvider>
    </>
  );
}
