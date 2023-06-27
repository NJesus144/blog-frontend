import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api/api";
import { deleteComment } from "../../services/commentServices";
import { configToken } from "../../services/token";
import { EditComment } from "../EditComment";
import { BoxButton, BoxComment, Btn, Container, Span } from "./style";

export const CommentSection = ({ post, idComment, text, userId }) => {
  const loggedInUser = localStorage.getItem("@Auth:user");
  const userObj = JSON.parse(loggedInUser);

  const { mutate } = useFetch(post.id, configToken);
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

  const handleEdit = () => setEditPost(true);

  return (
    <>
      {post.comments ? (
        <>
          <Container>
            <BoxComment>
              <Span>{text}</Span>
            </BoxComment>

            <BoxButton>
              {userId === userObj._id && (
                <>
                  <Btn onClick={() => handleDeleteComment(idComment)}>
                    Excluir
                  </Btn>
                  <Btn onClick={handleEdit}>Editar comentário</Btn>
                </>
              )}
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
        ""
      )}
    </>
  );
};
