import { useState } from "react";
import styled from "styled-components";
import { api } from "../services/api/api";

const Textarea = styled.textarea`
  width: 100%;
`;

export const EditPost = ({ text, idPost, idComment, saveEditPost }) => {
  const [comment, setComment] = useState(text);

  const handleSubmit = async e => {
    const token = localStorage.getItem("@Auth:token");
    e.preventDefault();
    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await api.patch(`/post/comment/${idPost}/${idComment}`, {
        comment,
      });
      console.log(response);
      saveEditPost(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Textarea
        placeholder="Digite sua mensagem"
        rows="6"
        name="text"
        maxLength="256"
        defaultValue={text}
        onChange={e => setComment(e.target.value)}
      />
      <button>Salvar</button>
    </form>
  );
};
