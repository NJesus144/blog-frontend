import useSWR from "swr";
import { getLastPosts } from "../services/postsServices";

export function useColumnPost(url) {
  const { data, error, isLoading, mutate } = useSWR(url, getLastPosts);

  return { data, error, isLoading, mutate };
}

// export function useFetch(id, token) {
//   const { data, error, isLoading, mutate } = useSWR(
//     [`/post/${id}`, token],
//     ([url, token]) => getUpdatedPost(url, token)
//   );

//   return { data, error, isLoading, mutate };
// }
