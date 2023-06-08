import { Container, ContainerHeader, Logo, Nav } from "./style";

export const Header = () => {
  // const storageUser = localStorage.getItem("@Auth:user");
  // const user = JSON.parse(storageUser);
  return (
    <ContainerHeader>
      <Container>
        <Logo to={`/`}>NJ</Logo>
        {/* <P>{user && `Olá, @${user.username}!`}</P> */}

        <Nav>
          <h3>Login</h3>
        </Nav>
      </Container>
    </ContainerHeader>
  );
};
