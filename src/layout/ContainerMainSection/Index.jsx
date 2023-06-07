/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  background-color: red;
`;

export const ContainerMainSection = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
