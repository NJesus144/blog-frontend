import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validUserToken } from "../../services/auth";

import {
  Container,
  ContainerHeader,
  Logo,
  Nav,
  NavLink,
  StyledParagraph,
} from "./style";

export const Header = () => {
  const [isValidUser, setIsValidUser] = useState("");
  const navigate = useNavigate();
  const storageUser = localStorage.getItem("@Auth:user");
  const user = JSON.parse(storageUser);

  useEffect(() => {
    async function validToken() {
      const response = await validUserToken();
      setIsValidUser(response.data.status_token);
    }
    validToken();
  }, []);

  if (!user) return navigate("login");

  const removeUser = () => {
    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");

    const userLogado = localStorage.getItem("@Auth:user");
    const tokenUser = localStorage.getItem("@Auth:token");

    if (!userLogado && !tokenUser) {
      return navigate("/login");
    }
  };

  return (
    <ContainerHeader color={"#fff"}>
      <Container>
        <Logo to={`/`}>BlogV3</Logo>

        <Nav>
          <NavLink to={`/post/allposts`} target="_blank">
            Mais Postagens
          </NavLink>

          {isValidUser && user !== null ? (
            <>
              <StyledParagraph>{`Olá, @${user.username}!`}</StyledParagraph>
              <NavLink to={`/post/createblog`}>Criar postagem</NavLink>
              <NavLink onClick={removeUser}>Sair</NavLink>
            </>
          ) : (
            <>
              <NavLink to={`/login`} target="_blank">
                Login
              </NavLink>
              <NavLink to={`/register`} target="_blank">
                Cadastro
              </NavLink>
            </>
          )}
        </Nav>
      </Container>
    </ContainerHeader>
  );
};
