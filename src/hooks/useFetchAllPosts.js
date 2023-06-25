import useSWR from "swr";
import { getLastPosts } from "../services/postsServices";

export function useFetchAllPosts(url) {
  const { data, error, isLoading, mutate } = useSWR(url, getLastPosts);

  return { data, error, isLoading, mutate };
}
