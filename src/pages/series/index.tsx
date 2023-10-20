import { NextPageContext } from "next";
import { SessionProvider, getSession } from "next-auth/react";
import Navbar from "../../../components/Navbar";
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

export default function Home() {
  const { data: series = [] } = useSerieList();

  return (
    <>
      <SessionProvider>
        <Navbar></Navbar>
        <SeriesBillboard />
        <div className='pb-40'>
          <SeriesList data={series} title='Trending Now' />
        </div>
      </SessionProvider>
    </>
  );
}
