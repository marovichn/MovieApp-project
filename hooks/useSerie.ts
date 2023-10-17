import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useSerie = (id?: string) => {
  const { data, isLoading, error } = useSWR(
    id ? `/api/series/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, isLoading, error };
};
export default useSerie;
