import useSWR from "swr";
import fetcher from "../lib/fetcher";

const useEpisode =(id?:string)=>{
    const { data, isLoading, error } = useSWR(id ? `/api/episode/${id}` : null, fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    });
    
    return { data, isLoading, error };
}; 
export default useEpisode;