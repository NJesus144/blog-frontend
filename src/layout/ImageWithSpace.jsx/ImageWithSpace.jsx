import styled from "styled-components";
import WithImg from "../../assets/mernstack.jpg";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const StyledImage = styled.div`
  background-image: url("${props => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledContainer = styled.div`
  padding: 30px 50px;

  @media (min-width: 700px) {
    min-width: calc(700px - 100px);
  }
  @media (max-width: 700px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  height: calc(100vh - 60px);
  overflow-y: auto;

  &:before,
  &:after {
    content: "";
    margin: auto;
  }
`;

export const ImageWithSpace = ({ children, image }) => {
  return (
    <StyledFlex>
      <StyledImage image={image ? image : WithImg} />
      <StyledContainer>{children}</StyledContainer>
    </StyledFlex>
  );
};
