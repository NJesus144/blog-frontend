import useSWR from "swr";
import { getTopPost } from "../services/postsServices";

export function useGetLastPost() {
  const { data, error, isLoading, mutate } = useSWR("/post/top", getTopPost);

  return { data, error, isLoading, mutate };
}
