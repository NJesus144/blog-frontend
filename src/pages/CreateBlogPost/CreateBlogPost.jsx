import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/inputs/Button";
import { Input } from "../../components/inputs/Input";
import { ContainerFom } from "../../layout/ContainerForm/Index";
import { createPostWithinTheBlog } from "../../services/postsServices";
export const Textarea = styled.textarea`
  resize: none;

  width: 100%;
  height: 200px;
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

  @media (max-width: 520px) {
    height: 70%;
  }
`;

const Form = styled.form`
  width: 500px;
  height: 500px;

  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const CreateBlogPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [banner, setBanner] = useState("");

  const handleForm = async e => {
    e.preventDefault();

    if (!title || !description || !text)
      return alert("Campos precisam ser preenchidos");

    try {
      // api.defaults.headers.Authorization = `Bearer ${configToken}`;

      const res = await createPostWithinTheBlog(
        title,
        description,
        text,
        banner
      );
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <ContainerFom>
      <Form onSubmit={handleForm}>
        <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
        <Input
          placeholder="Descrição"
          onChange={e => setDescription(e.target.value)}
        />
        <Input placeholder="Banner" onChange={e => setBanner(e.target.value)} />
        <Textarea
          placeholder="Escreva sua mensagem"
          onChange={e => setText(e.target.value)}
        />
        <Button type="submit">POSTAR</Button>
      </Form>
    </ContainerFom>
  );
};