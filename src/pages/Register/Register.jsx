import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/userServices";

import { Button } from "../../components/inputs/Button";
import { Form } from "../../components/inputs/Form";
import { Input } from "../../components/inputs/Input";
import { H2 } from "../../components/typography/H2";
import { ParagraphLink } from "../../components/typography/ParagraphLink";
import { ContainerFom } from "../../layout/ContainerForm/Index";

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!name || !username || !email || !password) {
        return alert("Todos os campos precisam ser preenchidos!");
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
    <ContainerFom>
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
        <ParagraphLink path={"login"}>Entre!</ParagraphLink>
        <Button type="submit">CADASTRAR</Button>
      </Form>
    </ContainerFom>
  );
};
