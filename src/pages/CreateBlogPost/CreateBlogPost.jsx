import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ErrorField } from "../../components/ErrorMessage/ErrorField";
import { Button } from "../../components/inputs/Button";
import { Input } from "../../components/inputs/Input";
import { H2 } from "../../components/typography/H2";
import { ContainerFom } from "../../layout/ContainerForm/Index";
import { ImageWithSpace } from "../../layout/ImageWithSpace.jsx/ImageWithSpace";
import { api } from "../../services/api/api";
import { createPostWithinTheBlog } from "../../services/postsServices";
// import { configToken } from "../../services/token";
import { SuccessMessage } from "../../components/SuccessMessage/SuccessMessage";

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
    border: 2px solid #9af0ff;
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
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [banner, setBanner] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleForm = async e => {
    e.preventDefault();

    if (!title || !description || !text || !banner) return setError(true);

    try {
      const tokenUser = localStorage.getItem("@Auth:token");

      api.defaults.headers.Authorization = `Bearer ${tokenUser}`;
      const res = await createPostWithinTheBlog(
        title,
        description,
        text,
        banner
      );
      if (res === "Created") {
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          return navigate("/");
        }, 3000);
      }
    } catch (err) {
      if (err.response.data === "Unauthorized") {
        return navigate("/login");
      }
    }
  };

  return (
    <ImageWithSpace>
      <ContainerFom>
        <div>
          {success && <SuccessMessage>Post criado com sucesso!</SuccessMessage>}
          {error && (
            <ErrorField>Todos os campos precisam ser preenchidos!</ErrorField>
          )}
        </div>
        <H2>Faça sua postagem</H2>
        <Form onSubmit={handleForm}>
          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            placeholder="Descrição"
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            placeholder="Endereço da imagem"
            onChange={e => setBanner(e.target.value)}
          />
          <Textarea
            placeholder="Escreva sua mensagem"
            onChange={e => setText(e.target.value)}
          />
          <Button type="submit">POSTAR</Button>
        </Form>
      </ContainerFom>
    </ImageWithSpace>
  );
};
