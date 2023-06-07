import styled from "styled-components";

const ButtonForm = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  border: none;
  background: rgb(180, 66, 58);
  background: linear-gradient(
    90deg,
    rgba(180, 66, 58, 1) 0%,
    rgba(252, 69, 69, 1) 0%,
    rgba(253, 29, 29, 1) 0%
  );
  cursor: pointer;
  color: white;
  font-family: Roboto;
  font-weight: bold;
`;

// eslint-disable-next-line react/prop-types
export const Button = ({ children }) => {
  return <ButtonForm>{children}</ButtonForm>;
};
