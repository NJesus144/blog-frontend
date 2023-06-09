import useSWR from "swr";
import { getUpdatedPost } from "../services/postsServices";

export function useFetch(id, token) {
  const { data, error, isLoading, mutate } = useSWR(
    [`/post/${id}`, token],
    ([url, token]) => getUpdatedPost(url, token)
  );

  return { data, error, isLoading, mutate };
}
