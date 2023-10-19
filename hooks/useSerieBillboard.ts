import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useSeriesBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/series/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useSeriesBillboard;
