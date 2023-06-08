import {
  Container,
  StyledBottomPost,
  StyledDivPost,
  StyledTitlePost,
} from "./style";

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
