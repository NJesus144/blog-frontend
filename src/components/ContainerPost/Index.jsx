/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;

  @media (max-width: 367px) {
    width: 100%;
  }
`;

const StyledDivPost = styled(Link)`
  height: 350px;
  width: 350px;
  text-decoration: none;
  background-image: url("${props => props.image}");
  height: 250px;
  width: 350px;
  display: flex;
  flex-direction: column-reverse;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #000;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

const StyledBottomPost = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const StyledTitlePost = styled.h1`
  font-family: Roboto;
  text-align: center;
`;

// eslint-disable-next-line react/prop-types
export const ContainerPost = ({ posts }) => {
  return (
    <Container>
      <StyledDivPost
        to={`/post/categoryId/${posts._id}`}
        image={posts.imgPreview}
        target="_blank"
      >
        <StyledBottomPost>
          <StyledTitlePost>{posts.title}</StyledTitlePost>
        </StyledBottomPost>
      </StyledDivPost>
    </Container>
  );
};
