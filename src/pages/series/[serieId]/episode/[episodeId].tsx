import React from "react";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useEpisode from "../../../../../hooks/useEpisode";

const Episode: React.FC = () => {
  const router = useRouter();
  const { episodeId, serieId } = router.query;

  const { data } = useEpisode(episodeId as string);

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
        <AiOutlineArrowLeft
          className='text-white cursor-pointer hover:scale-125 
            hover:bg-white
            hover:text-black
            rounded-full
            transition'
          size={35}
          onClick={() => {
            router.push(`/series/${serieId}`);
          }}
        />
        <p className='text-white text-1xl md:text-3xl font-bold  -ml-3'>
          <span className='font-light mr-2'>Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        controls
        autoPlay
        src={data?.videoUrl}
        className='h-full w-full'
      ></video>
    </div>
  );
};

export default Episode;
