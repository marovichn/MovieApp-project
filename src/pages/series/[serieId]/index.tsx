import React from "react";
import { useRouter } from "next/router";

import useSerie from "../../../../hooks/useSerie";
import { SessionProvider } from "next-auth/react";
import Navbar from "../../../../components/Navbar";
import SeriePageBillboard from "../../../../components/SeriePageBillboard";
import { isArray } from "lodash";
import EpisodesList from "../../../../components/EpisodesList";

const Serie: React.FC=()=>{
const router = useRouter();
const {serieId} = router.query;
if(!serieId || isArray(serieId)){
  return null;
}

const {data} = useSerie(serieId as string);

    return (
        <>
          <SessionProvider>
            <Navbar></Navbar>
            <SeriePageBillboard serieId={serieId}/>
            <div className='pb-40'>
              <EpisodesList title="All Episodes" key={data?.id} data={data?.videos}></EpisodesList>
            </div>
          </SessionProvider>
        </>

    );
};

export default Serie;