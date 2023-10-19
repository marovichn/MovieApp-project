import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useSerieList = () => {
  const { data, error, isLoading } = useSWR("/api/series", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useSerieList;
