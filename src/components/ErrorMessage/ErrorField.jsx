import styled from "styled-components";

const ContainerError = styled.div`
  background-color: #dc3545;
  margin-bottom: 10px;
  height: 50px;
  padding: 10px;
  color: #fff;
`;

export const ErrorField = ({ children }) => {
  return <ContainerError>{children}</ContainerError>;
};
