import { NextPageContext } from "next";
import { SessionProvider, getSession } from "next-auth/react";
import Navbar from "../../../components/Navbar";
import MovieList from "../../../components/MovieList";

import useFavorites from "../../../hooks/useFavorites";

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
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        <div className='pt-44 text-white font-bold text-5xl px-10  pb-24 flex items-center justify-center'>
          My Favorites :{" "}
        </div>
        <div className='pb-40'>
          <MovieList data={favorites} title='Favorites' />
        </div>
      </SessionProvider>
    </>
  );
}
