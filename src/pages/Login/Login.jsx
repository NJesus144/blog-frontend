import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { ImageWithSpace } from "../../layout/ImageWithSpace.jsx/ImageWithSpace";

import { ErrorField } from "../../components/ErrorMessage/ErrorField";
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
  const [fieldError, setFieldError] = useState(false);
  const [notUser, setNotUser] = useState(false);

  const { signIn } = useContext(AuthContext);

  const handleForm = async e => {
    e.preventDefault();

    if (!password || !email) {
      setFieldError(true);
      setTimeout(() => {
        setFieldError(false);
      }, 3000);
      return;
    }

    const user = await signIn(email, password);

    if (!user) {
      setNotUser(true);
      setTimeout(() => {
        setNotUser(false);
      }, 3000);
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <ImageWithSpace>
      <ContainerFom>
        <div>
          {fieldError && (
            <ErrorField>
              Campo email e senha precisam ser preenchidos!
            </ErrorField>
          )}
          {notUser && <ErrorField>Usuário e/ou senha inválidos!</ErrorField>}
        </div>
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
    </ImageWithSpace>
  );
};
