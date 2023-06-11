import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin-top: 200px;
  margin-bottom: 100px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (max-width: 420px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
    div {
      padding: 10px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
    div {
      padding: 8px;
    }
  }
`;

export const H2 = styled.h2`
  color: #434955;
  font-family: "Roboto";
  margin-bottom: 20px;
`;

export const StyledImage = styled.div`
  background-image: url("${props => props.image}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
  max-width: 1200px;
`;

export const MainTitle = styled.h1`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  font-size: 42px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #828282;
  margin-top: 40px;
  text-align: start;
  white-space: pre-wrap;
  font-family: "Inter", sans-serif;
`;

export const DivDescription = styled.div`
  padding: 20px;
`;
