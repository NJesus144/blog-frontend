import { ContainerMainSection } from "../../layout/ContainerMainSection";
import { CommentSection } from "../CommentSection/CommentSection";
import { CreatePostComment } from "../CreatePostComment/CreatePostComment";
import {
  Container,
  Description,
  DivDescription,
  H2,
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
      <H2>Deixe um comentário</H2>
      <CreatePostComment post={post} />
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
