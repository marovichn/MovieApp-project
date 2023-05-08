import React from "react";

interface MovieCardProps{
    data: Record<string, any>
    key: string,
}

const MovieCard: React.FC<MovieCardProps> =({data})=>{
    return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
        <img 
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-80
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
        " 
        src={data.thumbnailUrl} alt="Thumbnail" />
    </div>
    );
};
export default MovieCard;