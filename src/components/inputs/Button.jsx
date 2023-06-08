import styled from "styled-components";

const ButtonForm = styled.button`
  width: 100%;
  padding: 20px 30px;
  border: none;
  background-color: #4aa884;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 20px;
  transition: all 0.3s;
  border-radius: 6px;

  :hover {
    background-color: #63bb99;
    cursor: pointer;
  }
`;

// eslint-disable-next-line react/prop-types
export const Button = ({ children }) => {
  return <ButtonForm>{children}</ButtonForm>;
};
