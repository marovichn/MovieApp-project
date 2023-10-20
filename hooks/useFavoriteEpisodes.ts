import useSwr from "swr";
import fetcher from "../lib/fetcher";

const useFavoriteEpisodes = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/favorite-episodes", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFavoriteEpisodes;
