import { api } from "./api/api";

export function deleteComment(idPost, idComment) {
  const response = api.delete(`/post/comment/${idPost}/${idComment}`);
  return response;
}

export async function EditPostComment(idPost, idComment, comment) {
  const response = await api.patch(`/post/comment/${idPost}/${idComment}`, {
    comment,
  });
  return response;
}
