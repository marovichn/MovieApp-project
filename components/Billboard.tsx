import React from "react";
import useBillboard from "../hooks/useBillboard";

const Billboard: React.FC=()=>{
    const {data} = useBillboard();


    return (
      <div className='relative h-[56.25vw]'>
        <video
          className='
          w-full 
          h-[56.25vw]
          object-cover
          brightness-[60%]'
          autoPlay
          muted
          loop
          poster={data?.thumbnailUrl}
          src={data?.videoUrl}
        ></video>
        <div className="absolute">

        </div>
      </div>
    );
};
export default Billboard;