import styled from "styled-components";

const ButtonForm = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  border: none;
  background-color: #a626a6;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 10px;
  transition: all 0.3s;
  box-shadow: 0px 4px 10px rgba(201, 35, 235, 0.39);
  border-radius: 12px;

  :hover {
    background-color: #a626a6;
    cursor: pointer;
  }

  :disabled {
    background-color: #dfdcdc;
    cursor: default;
  }
`;

// eslint-disable-next-line react/prop-types
export const Button = ({ children, disabled, ...props }) => {
  return (
    <ButtonForm disabled={disabled} {...props}>
      {children}
    </ButtonForm>
  );
};
