import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import PlayButton from "./PlayButton";
import useSeriesBillboard from "../hooks/useSerieBillboard";
import useSeriePageBillboard from "../hooks/useSeriePageBillboard";

const SeriePageBillboard = (props: { serieId: string }) => {
  const { data } = useSeriePageBillboard(props.serieId);

  return (
    <div className='relative h-[56.25vw]'>
      <img
        src={data?.thumbnailUrl}
        className='w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500'
      />
      <div className='absolute top-[30%] md:top-[20%] ml-4 md:ml-16'>
        <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
          {data?.title}
        </p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
          {data?.description}
        </p>
        <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
          {data?.genre}
        </p>
      </div>
    </div>
  );
};
export default SeriePageBillboard;
