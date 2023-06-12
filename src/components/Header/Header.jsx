import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/authContext";
import { validUserToken } from "../../services/auth";
import { configToken } from "../../services/token";
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
  // const { signed } = useContext(AuthContext);

  const removeUser = () => {
    localStorage.removeItem("@Auth:user");
    localStorage.removeItem("@Auth:token");
    navigate("/");
  };

  useEffect(() => {
    async function validToken() {
      const response = await validUserToken(configToken);
      setIsValidUser(response.data.status_token);
    }
    validToken();
  }, []);

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
