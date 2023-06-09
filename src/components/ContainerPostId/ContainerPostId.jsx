import { ContainerMainSection } from "../../layout/ContainerMainSection";
import { CommentSection } from "../CommentSection/CommentSection";
import {
  Container,
  Description,
  DivDescription,
  MainTitle,
  StyledImage,
} from "./style";

export const ContainerPostId = ({ post }) => {
  return (
    <ContainerMainSection>
      <Container>
        <MainTitle>{post.subtitle}</MainTitle>

        <StyledImage image={post.banner} />
        {post.sections ? (
          <DivDescription>
            <Description>{post.sections[0].text}</Description>
          </DivDescription>
        ) : (
          ""
        )}
      </Container>
      {post.comments.map(commentBlog => (
        <CommentSection
          key={commentBlog.idComment}
          post={post}
          idComment={commentBlog.idComment}
          text={commentBlog.comment}
        />
      ))}
    </ContainerMainSection>
  );
};
