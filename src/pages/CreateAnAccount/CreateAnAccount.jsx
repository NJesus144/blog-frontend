import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ErrorField } from "../../components/ErrorMessage/ErrorField";
import { Button } from "../../components/inputs/Button";
import { Form } from "../../components/inputs/Form";
import { Input } from "../../components/inputs/Input";
import { H2 } from "../../components/typography/H2";
import { ContainerFom } from "../../layout/ContainerForm/Index";
import { ImageWithSpace } from "../../layout/ImageWithSpace.jsx/ImageWithSpace";
import { createUser } from "../../services/userServices";

const Ph = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: blue;
`;

export const CreateAnAccount = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldError, setFieldError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!name || !username || !email || !password) {
        setFieldError(true);
        setTimeout(() => {
          setFieldError(false);
        }, 3000);
        return;
      }

      const response = await createUser(name, username, email, password);
      if (response.data.message === "User created successfully!") {
        return navigate("/login");
      }
    } catch (err) {
      return console.log(err.message);
    }
  };

  return (
    <ImageWithSpace>
      <ContainerFom>
        <div>
          {fieldError && (
            <ErrorField>Todos os campos precisam ser preenchidos!</ErrorField>
          )}
        </div>
        <H2>Crie sua conta.</H2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Usuario"
            onChange={e => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          Já possui uma conta?
          <Ph to={"/login"}>Entre!</Ph>
          <Button type="submit">CADASTRAR</Button>
        </Form>
      </ContainerFom>
    </ImageWithSpace>
  );
};
