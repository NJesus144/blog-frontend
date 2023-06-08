import { api } from "./api/api";
import { configToken } from "./token";
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

export async function createPostBlog(id, text) {
  const response = await api.patch(
    `/post/comment/${id}`,
    {
      comment: text,
    },
    configToken
  );
  return response;
}
