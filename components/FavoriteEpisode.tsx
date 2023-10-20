import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

import useCurrentUser from "../hooks/useCurrentUser";
import useFavorites from "../hooks/useFavorites";

interface FavoriteEpisodeProps {
  episodeId: string;
}

const FavoriteEpisode: React.FC<FavoriteEpisodeProps> = ({ episodeId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(episodeId);
  }, [currentUser, episodeId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.post("/api/unfavorite", { episodeId: episodeId });
    } else {
      response = await axios.post("/api/favorite", { episodeId: episodeId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [episodeId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'
    >
      <Icon className='text-white group-hover/item:text-neutral-300 w-4 lg:w-6' />
    </div>
  );
};

export default FavoriteEpisode;
