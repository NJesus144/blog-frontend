import styled from "styled-components";

const InputField = styled.input`
  display: block;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  font-size: 18px;
  border-radius: 8px;
  color: #4b4a4a;
  font-family: Roboto;
  outline: none;
  background-color: #ebebeb;
  border: 2px solid #6eb198;
  ::placeholder {
    font-size: 18px;
  }

  :focus {
    border: 2px solid #267255;
  }
`;

export const Input = ({ ...props }) => {
  return <InputField {...props} />;
};
