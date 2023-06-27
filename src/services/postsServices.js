import { api } from "./api/api";

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

export async function getLastPosts(url) {
  const response = await api.get(url);

  return response.data;
}

const newToken = localStorage.getItem("@Auth:token");

export async function createPostCommentBlog(id, text) {
  const response = await api.patch(`/post/comment/${id}`, {
    comment: text,
  });
  return response;
}

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
