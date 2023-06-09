import { useState } from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { api } from "../services/api/api";
import { EditPostComment } from "../services/commentServices";
import { configToken } from "../services/token";
const Textarea = styled.textarea`
  width: 100%;
`;

export const EditComment = ({ text, idPost, idComment, saveEditPost }) => {
  const [comment, setComment] = useState(text);
  const { mutate } = useFetch(idPost, configToken);

  const handleSubmit = async e => {
    const token = localStorage.getItem("@Auth:token");
    e.preventDefault();
    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      await EditPostComment(idPost, idComment, comment);
      mutate();
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
