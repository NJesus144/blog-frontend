import { useState } from "react";
import styled from "styled-components";
import { api } from "../../services/api/api";
import { deleteComment } from "../../services/commentServices";
import { CreatePost } from "../CreatePost/Index";
import { EditPost } from "../EditPost";

const Container = styled.div`
  width: 100%;
  margin-bottom: 50px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
// const Tag = styled.div`
//   background-color: red;
// `;

const BoxComment = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  height: 100px;
  word-break: break-word;
`;
const BoxButton = styled.div``;
const H2 = styled.h2`
  color: #434955;
  font-family: "Roboto";
  margin-bottom: 20px;
`;

const Span = styled.p``;
const Btn = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  margin-right: 5px;
`;

const P = styled.p`
  font-size: 20px;
`;

export const SectionComments = ({ post }) => {
  const [editPost, setEditPost] = useState(false);

  const handleComment = async idComment => {
    const token = localStorage.getItem("@Auth:token");

    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      const response = await deleteComment(post.id, idComment);
      console.log("response =>", response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    setEditPost(true);
  };
  console.log(post);
  // console.log(post.comments.userId);

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
                <EditPost
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
