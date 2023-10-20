import { NextPageContext } from "next";

import { useState, useEffect } from "react";
import { SessionProvider, getSession } from "next-auth/react";
import Navbar from "../../../components/Navbar";
import MovieList from "../../../components/MovieList";
import useMovieList from "../../../hooks/useMovieList";

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
  const newMovies = [movies[1], movies[3]]
  const popular = [movies[3], movies[2], movies[0]]

   useEffect(() => {
     if (movies.length === 0) {
       setEmpty(true);
     }
   }, [setEmpty]);

  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        <div className='pt-44 text-white font-bold text-5xl px-10  pb-24 flex items-center justify-center'>
          New & Popular :{" "}
        </div>
        <div className='pb-40'>
          {isEmpty && (
            <h1 className='flex items-center justify-center text-4xl text-white/50 font-bold px-10'>
              No Trending Content at the moment . . .
            </h1>
          )}
          <MovieList data={movies} title='Trending' />
          <MovieList data={newMovies} title='New' />
          <MovieList data={popular} title='Popular' />
        </div>
      </SessionProvider>
    </>
  );
}
