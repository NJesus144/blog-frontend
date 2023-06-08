import { useState } from "react";

import { api } from "../../services/api/api";
import { deleteComment } from "../../services/commentServices";
import { CreatePost } from "../CreatePost/CreatePost";
import { EditComment } from "../EditComment";
import { BoxButton, BoxComment, Btn, Container, H2, P, Span } from "./style";

export const CommentSection = ({ post }) => {
  const [editPost, setEditPost] = useState(false);

  const handleComment = async idComment => {
    const token = localStorage.getItem("@Auth:token");

    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      await deleteComment(post.id, idComment);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    setEditPost(true);
  };

  return (
    <>
      <H2>Deixe um comentário</H2>
      <CreatePost id={post.id} />
      {post.comments ? (
        post.comments.map(item => (
          <>
            {/* <Tag key={item.userId}>{item.createdAt}</Tag> */}
            <Container key={item.idComment}>
              <BoxComment>
                <Span>{item.comment}</Span>
              </BoxComment>
              <BoxButton>
                <Btn onClick={() => handleComment(item.idComment)}>Excluir</Btn>
                <Btn onClick={handleEdit}>Editar comentário</Btn>
              </BoxButton>

              {editPost && (
                <EditComment
                  idPost={post.id}
                  idComment={item.idComment}
                  text={item.comment}
                  saveEditPost={setEditPost}
                />
              )}
            </Container>
          </>
        ))
      ) : (
        <P>vazio</P>
      )}
    </>
  );
};
