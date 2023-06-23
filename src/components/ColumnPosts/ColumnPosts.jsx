import { useEffect, useState } from "react";
import { getLastPosts } from "../../services/postsServices";
import { DeleteMenu } from "../DeleteMenu/DeleteMenu";
import {
  ColumnBadge,
  ColumnBadgeBase,
  ColumnBlogPostCard,
  ColumnCategory,
  ColumnPost,
  ContentColumnBlogPostCard,
  HeadAndTextDescription,
  HeaderAndDelete,
  HeadingAndTextColumn,
  ImgColumnBlogPostCard,
  ParagraphLink,
} from "./style";

export const ColumnPosts = () => {
  const [lastPosts, setLastPosts] = useState([]);

  const limit = 2;
  const offset = 1;

  useEffect(() => {
    async function resLastPosts() {
      const response = await getLastPosts(limit, offset);
      setLastPosts(response.results);
    }
    resLastPosts();
  }, []);

  const loggedInUser = localStorage.getItem("@Auth:user");
  const userObj = JSON.parse(loggedInUser);

  return (
    <ColumnPost>
      {lastPosts.map(item => (
        <ColumnBlogPostCard key={item.id}>
          <ImgColumnBlogPostCard
            to={`/post/categoryId/${item.id}`}
            image={item.banner}
          />
          <ContentColumnBlogPostCard>
            <HeadingAndTextColumn>
              <HeaderAndDelete>
                <p>{item.username}</p>
                {userObj._id === item.idUser && <DeleteMenu idPost={item.id} />}
              </HeaderAndDelete>
              <HeadAndTextDescription>
                <ParagraphLink to={`/post/categoryId/${item.id}`}>
                  {item.title}
                </ParagraphLink>
                <span>{item.description}</span>
              </HeadAndTextDescription>
            </HeadingAndTextColumn>
            <ColumnCategory>
              <ColumnBadge>
                <ColumnBadgeBase>
                  <span>tecnologia</span>
                </ColumnBadgeBase>
              </ColumnBadge>
            </ColumnCategory>
          </ContentColumnBlogPostCard>
        </ColumnBlogPostCard>
      ))}
    </ColumnPost>
  );
};
