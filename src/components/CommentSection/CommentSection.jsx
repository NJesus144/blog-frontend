import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api/api";
import { deleteComment } from "../../services/commentServices";
import { configToken } from "../../services/token";
import { CreatePostComment } from "../CreatePostComment/CreatePostComment";
import { EditComment } from "../EditComment";
import { BoxButton, BoxComment, Btn, Container, H2, P, Span } from "./style";

export const CommentSection = ({ post, idComment, text }) => {
  const { mutate } = useFetch(post.id, configToken);
  console.log("post =>", post, "id =>", idComment, "text =>", text);
  const [editPost, setEditPost] = useState(false);

  const handleDeleteComment = async idComment => {
    const token = localStorage.getItem("@Auth:token");

    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      await deleteComment(post.id, idComment);
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = idComment => {
    setEditPost(true);
    console.log(idComment);
  };

  return (
    <>
      <H2>Deixe um comentário</H2>
      <CreatePostComment post={post} />
      {post.comments ? (
        <>
          {/* <Tag key={item.userId}>{item.createdAt}</Tag> */}
          <Container>
            <BoxComment>
              <Span>{text}</Span>
            </BoxComment>
            <BoxButton>
              <Btn onClick={() => handleDeleteComment(idComment)}>Excluir</Btn>
              <Btn onClick={() => handleEdit(idComment, text)}>
                Editar comentário
              </Btn>
            </BoxButton>

            {editPost && (
              <>
                <EditComment
                  idPost={post.id}
                  idComment={idComment}
                  text={text}
                  saveEditPost={setEditPost}
                />
              </>
            )}
          </Container>
        </>
      ) : (
        <P>vazio</P>
      )}
    </>
  );
};
