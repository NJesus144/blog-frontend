import { CommentSection } from "../CommentSection/CommentSection";
import { CreatePostComment } from "../CreatePostComment/CreatePostComment";
import {
  Container,
  ContainerMainSection,
  Description,
  DivDescription,
  MainTitle,
  StyleParagraph,
  StyledImage,
} from "./style";

export const ContainerPostId = ({ post }) => {
  return (
    <ContainerMainSection>
      <Container>
        <MainTitle>{post?.title}</MainTitle>
        <StyleParagraph>
          <span>Por </span>
          {post?.username}
        </StyleParagraph>
        <StyledImage image={post?.banner} />

        <DivDescription>
          <Description>{post?.text}</Description>
        </DivDescription>
      </Container>

      <CreatePostComment post={post} />
      {post.comments?.length > 0 &&
        post.comments.map(commentBlog => (
          <CommentSection
            key={commentBlog.idComment}
            post={post}
            userId={commentBlog.userId}
            idComment={commentBlog.idComment}
            text={commentBlog.comment}
          />
        ))}
    </ContainerMainSection>
  );
};
