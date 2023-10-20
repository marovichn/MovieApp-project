import { NextPageContext } from "next";
import { SessionProvider, getSession } from "next-auth/react";
import Navbar from "../../../components/Navbar";

import { useState, useEffect } from "react";
import SeriesBillboard from "../../../components/SeriesBillboard";
import useSerieList from "../../../hooks/useSerieList";
import SeriesList from "../../../components/SeriesList";

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

export default function Home() { const [isEmpty, setEmpty] = useState(false);
  const { data: series = [] } = useSerieList();
   useEffect(() => {
     if (series.length === 0) {
       setEmpty(true);
     }
   }, [setEmpty]);

  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        <SeriesBillboard />
        <div className='pb-40'>
          {isEmpty && (
            <h1 className='flex items-center justify-center text-4xl text-white/50 font-bold px-10'>
              No Series yet . . .
            </h1>
          )}
          <SeriesList data={series} title='Trending Now' />
        </div>
      </SessionProvider>
    </>
  );
}
