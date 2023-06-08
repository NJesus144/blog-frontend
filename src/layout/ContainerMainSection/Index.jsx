/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const ContainerMainSection = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
