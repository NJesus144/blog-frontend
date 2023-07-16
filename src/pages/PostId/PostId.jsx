import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentSection } from "../../components/CommentSection/CommentSection";
import { CreatePostComment } from "../../components/CreatePostComment/CreatePostComment";
import { api } from "../../services/api/api";
import { getPostById } from "../../services/postsServices";
import { configToken } from "../../services/token";

import {
  Container,
  ContainerMainSection,
  Description,
  DivDescription,
  MainTitle,
  StyleParagraph,
  StyledImage,
} from "./style";

export const PostId = () => {
  const [postId, setPostId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const tokenUser = localStorage.getItem("@Auth:token");
    api.defaults.headers.Authorization = `Bearer ${tokenUser}`;
    try {
      const fetchPostId = async () => {
        const response = await getPostById(id, configToken);
        setPostId(response.data);
      };

      fetchPostId();
    } catch (err) {
      console.log(err.message);
    }
  });

  return (
    <>
      {postId && (
        <ContainerMainSection>
          <Container>
            <MainTitle>{postId?.title}</MainTitle>
            <StyleParagraph>
              <span>Por </span>
              {postId?.username}
            </StyleParagraph>
            <StyledImage image={postId?.banner} />

            <DivDescription>
              <Description>{postId?.text}</Description>
            </DivDescription>
          </Container>

          <CreatePostComment post={postId} />
          {postId.comments?.length > 0 &&
            postId.comments.map(commentBlog => (
              <CommentSection
                key={commentBlog.idComment}
                post={postId}
                userId={commentBlog.userId}
                idComment={commentBlog.idComment}
                text={commentBlog.comment}
              />
            ))}
        </ContainerMainSection>
      )}
    </>
  );
};
