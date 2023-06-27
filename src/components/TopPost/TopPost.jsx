import moment from "moment";
import { FiArrowUpRight } from "react-icons/fi";
import { DeleteMenu } from "../DeleteMenu/DeleteMenu";

import { useEffect } from "react";
import {
  Badge,
  BadgeBase,
  BlogPostCard,
  Category,
  ContainerImg,
  ContainerText,
  ContentBlogPost,
  DescriptionBlogText,
  HeadAndIcon,
  HeadAndTextBox,
  IconWrap,
  StyledParagraphLink,
  Text,
} from "./style";

export const TopPost = ({ data, setIsMutate }) => {
  const loggedInUser = localStorage.getItem("@Auth:user");
  const userObj = JSON.parse(loggedInUser);

  useEffect(() => {
    if (userObj._id === data?.idUser) return;
  }, [userObj._id, data?.idUser]);

  return (
    <BlogPostCard>
      <ContainerImg image={data?.banner} to={`/post/categoryId/${data?.id}`} />
      <ContentBlogPost>
        <HeadAndTextBox>
          <ContainerText>
            <Text>
              <span>Por </span>
              {data?.username} • {moment(data?.createdAt).format("LLL")}
            </Text>
          </ContainerText>
          <HeadAndIcon>
            <StyledParagraphLink to={`/post/categoryId/${data?.id}`}>
              {data?.title}
            </StyledParagraphLink>
            <IconWrap to={`/post/categoryId/${data?.id}`}>
              <FiArrowUpRight size={24} />
            </IconWrap>
          </HeadAndIcon>
          <DescriptionBlogText>{data?.description}</DescriptionBlogText>
        </HeadAndTextBox>
        <Category>
          <Badge>
            <BadgeBase>
              <span>Tecnologia</span>
            </BadgeBase>
            {userObj._id === data?.idUser && (
              <DeleteMenu idPost={data?.id} setMutate={setIsMutate} />
            )}
          </Badge>
        </Category>
      </ContentBlogPost>
    </BlogPostCard>
  );
};
