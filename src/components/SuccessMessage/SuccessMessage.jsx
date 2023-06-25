import styled from "styled-components";

const ContainerMessage = styled.div`
  background-color: #28a745;
  margin-bottom: 10px;
  height: 50px;
  padding: 10px;
  color: #fff;
`;

export const SuccessMessage = ({ children }) => {
  return <ContainerMessage>{children}</ContainerMessage>;
};
