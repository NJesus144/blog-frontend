import { api } from "./api/api";

export function deleteComment(idPost, idComment) {
  const response = api.delete(`/post/comment/${idPost}/${idComment}`);
  return response;
}

// export function addComment(idPost) {
//   const response = api.post(`/post/comment/${idPost}`);
//   return response;
// }
