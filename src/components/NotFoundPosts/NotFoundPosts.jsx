import styled from "styled-components";
import MernLogo from "../../assets/MERN-logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 100px;

  div {
    margin-top: 50px;
    padding: 10px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    margin-top: 10px;
    line-height: 28px;
    color: #1a1a1a;
  }
`;

const Img = styled.img``;

export const NotFountPost = () => {
  return (
    <Container>
      <div>
        <p>Ainda não há postagem.</p>
        <p>Experimente criar uma!</p>
      </div>
      <Img src={MernLogo} />
    </Container>
  );
};
