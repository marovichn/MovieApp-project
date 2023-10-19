import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useSeriePageBillboard = (id: string) => {
  const { data, error, isLoading } = useSWR(`/api/series/${id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useSeriePageBillboard;
