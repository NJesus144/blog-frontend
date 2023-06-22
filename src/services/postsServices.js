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

export async function deletePost(id, configToken) {
  const response = await api.delete(`/post/${id}`, configToken);
  return response;
}

export function getUpdatedPost(url, token) {
  const response = api.get(url, token);
  return response;
}

export async function getTopPost() {
  const response = await api.get("/post/top");
  return response.data.news;
}

export async function getLastPosts(limit, offset) {
  const response = await api.get(`/post?limit=${limit}&offset=${offset}`);
  return response.data;
}

export async function createPostCommentBlog(id, text) {
  const response = await api.patch(
    `/post/comment/${id}`,
    {
      comment: text,
    },
    configToken
  );
  return response;
}

const newToken = localStorage.getItem("@Auth:token");
console.log("token antes da criacao", newToken);
export async function createPostWithinTheBlog(
  title,
  description,
  text,
  banner
) {
  const response = await api.post(
    "/post",
    {
      title,
      description,
      text,
      banner,
    },
    newToken
  );
  return response.data;
}
