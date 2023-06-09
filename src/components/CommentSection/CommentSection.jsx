import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api/api";
import { deleteComment } from "../../services/commentServices";
import { configToken } from "../../services/token";
import { CreatePostComment } from "../CreatePostComment/CreatePostComment";
import { EditComment } from "../EditComment";
import { BoxButton, BoxComment, Btn, Container, H2, P, Span } from "./style";

export const CommentSection = ({ post }) => {
  const { mutate } = useFetch(post.id, configToken);
  const { comments } = post;
  console.log(comments);
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
    // return (
    //   <EditComment
    //     idPost={post.id}
    //     idComment={idComment}
    //     text={comment}
    //     saveEditPost={setEditPost}
    //   />
    // );
  };

  return (
    <>
      <H2>Deixe um comentário</H2>
      <CreatePostComment post={post} />
      {post.comments ? (
        post.comments.map(item => (
          <>
            {/* <Tag key={item.userId}>{item.createdAt}</Tag> */}
            <Container key={item.idComment}>
              <BoxComment>
                <Span>{item.comment}</Span>
              </BoxComment>
              <BoxButton>
                <Btn onClick={() => handleDeleteComment(item.idComment)}>
                  Excluir
                </Btn>
                <Btn onClick={() => handleEdit(item.idComment, item.comment)}>
                  Editar comentário
                </Btn>
              </BoxButton>

              {editPost && (
                <>
                  <EditComment
                    idPost={post.id}
                    idComment={item.idComment}
                    text={item.comment}
                    saveEditPost={setEditPost}
                  />
                  <p>{item.idComment}</p>
                </>
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
