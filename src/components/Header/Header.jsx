import { Container, ContainerHeader, Logo, Nav, NavLink } from "./style";

export const Header = () => {
  // const storageUser = localStorage.getItem("@Auth:user");
  // const user = JSON.parse(storageUser);
  return (
    <ContainerHeader>
      <Container>
        <Logo to={`/`}>NJ</Logo>
        {/* <P>{user && `Olá, @${user.username}!`}</P> */}

        <Nav>
          <NavLink to={`/post/allposts`} target="_blank">
            Mais Postagens
          </NavLink>
          <NavLink to={`/login`} target="_blank">
            Login
          </NavLink>
          <NavLink to={`/register`} target="_blank">
            Cadastro
          </NavLink>
        </Nav>
      </Container>
    </ContainerHeader>
  );
};
