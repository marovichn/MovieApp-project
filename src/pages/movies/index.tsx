import { NextPageContext } from "next";
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
  const { data: movies = [] } = useMovieList();
  const movies2 = [
    ...movies,
    movies[2],
    movies[0],
    movies[3],
    movies[1],
    ...movies,
    movies[3],
    movies[2],
    movies[0],
    movies[1],
  ];
  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        <div className='pt-44 text-white font-bold text-5xl px-10  pb-24 flex items-center justify-center'>
          All Movies on MiFlix :{" "}
        </div>
        <div className='pb-40'>
          <MovieList data={movies2} title='All' />
        </div>
      </SessionProvider>
    </>
  );
}
