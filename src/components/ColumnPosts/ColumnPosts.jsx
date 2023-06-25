import { useState } from "react";
import { useColumnPost } from "../../hooks/useColumnPost";
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
  // const [lastPosts, setLastPosts] = useState([]);
  const [isMutate, setIsMutate] = useState(false);
  const limit = 2;
  const offset = 1;

  const { data, mutate } = useColumnPost(
    `/post?limit=${limit}&offset=${offset}`
  );

  if (isMutate) {
    mutate();
    setIsMutate(false);
  }
  // console.log("prestposta do data", data?.results);
  // console.log(isMutate);

  // useEffect(() => {
  //   async function resLastPosts() {
  //     const response = await getLastPosts(
  //       `/post?limit=${limit}&offset=${offset}`
  //     );

  //     setLastPosts(response.results);
  //     console.log("resposta do useState", response.results);
  //   }
  //   resLastPosts();
  // }, []);

  const loggedInUser = localStorage.getItem("@Auth:user");
  const userObj = JSON.parse(loggedInUser);

  return (
    <ColumnPost>
      {data?.results.map(item => (
        <ColumnBlogPostCard key={item.id}>
          <ImgColumnBlogPostCard
            to={`/post/categoryId/${item.id}`}
            image={item.banner}
          />
          <ContentColumnBlogPostCard>
            <HeadingAndTextColumn>
              <HeaderAndDelete>
                <p>{item.username}</p>
                {userObj._id === item.idUser && (
                  <DeleteMenu idPost={item.id} setMutate={setIsMutate} />
                )}
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
