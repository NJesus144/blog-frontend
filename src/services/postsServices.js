import { api } from "./api/api";

export function getAllPostsCategory(id) {
  const response = api.get(`/category/${id}`);
  return response;
}

export function getPostById(id, configToken) {
  const response = api.get(`/post/${id}`, configToken);
  return response;
}

export async function getTopPost() {
  const response = await api.get("/post/top");
  return response.data.news;
}

export async function getLastPosts() {
  const response = await api.get("/post?limit=6&offset=0");
  return response.data;
}
