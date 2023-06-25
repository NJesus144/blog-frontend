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
  StyleParagraph,
} from "./style";

export const ContainerPostId = ({ post }) => {
  return (
    <ContainerMainSection>
      <Container>
        <MainTitle>{post.title}</MainTitle>
        <StyleParagraph>
          <span>Por </span>
          {post.username}
        </StyleParagraph>
        <StyledImage image={post.banner} />

        <DivDescription>
          <Description>{post.text}</Description>
        </DivDescription>
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
