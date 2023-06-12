import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";

import { Button } from "../../components/inputs/Button";
import { Form } from "../../components/inputs/Form";
import { Input } from "../../components/inputs/Input";
import { H2 } from "../../components/typography/H2";
import { ParagraphLink } from "../../components/typography/ParagraphLink";
import { ContainerFom } from "../../layout/ContainerForm/Index";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const handleForm = async e => {
    e.preventDefault();

    if (!password || !email)
      return alert("Campo email e senha precisam ser preenchidos");

    const user = await signIn(email, password);

    if (!user) {
      alert("A sua conta ou senha está incorreta!");
    } else {
      alert(`Bem vindo ${user.username}!`);

      navigate("/");
    }
  };

  return (
    <ContainerFom>
      <H2>Entre com a sua conta.</H2>
      <Form onSubmit={handleForm}>
        <Input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <p>
          Ainda não tem uma conta?{" "}
          <ParagraphLink path={"register"}>Crie uma!</ParagraphLink>
        </p>
        <Button type="submit">ENTRAR</Button>
      </Form>
    </ContainerFom>
  );
};
