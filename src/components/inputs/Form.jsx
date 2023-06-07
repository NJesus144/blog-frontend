import styled from "styled-components";

const InputForm = styled.form`
  width: 80%;
  max-width: 500px;
`;

export const Form = ({ ...props }) => {
  return <InputForm {...props} />;
};
