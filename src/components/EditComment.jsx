import { useState } from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { api } from "../services/api/api";
import { EditPostComment } from "../services/commentServices";
import { configToken } from "../services/token";
const Textarea = styled.textarea`
  resize: none;
  max-width: 1000px;
  width: 100%;
  margin-top: 10px;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #434955;
  opacity: 0.6;
  border: 2px solid #ffff;
  border-top: 2px solid #c7c9ca;
  background-color: #f3f3f3;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  transition: ease-in-out 0.3s;

  :focus {
    border: 2px solid #4aa884;
  }
`;

const Btn = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  width: 200px;
  border: none;
  margin-right: 5px;
  display: block;

  transition: all 0.3s;

  :hover {
    background-color: #e0e0e0;
  }
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
      <Btn>Salvar</Btn>
    </form>
  );
};
