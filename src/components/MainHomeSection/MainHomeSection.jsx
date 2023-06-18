// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetLastPost } from "../../hooks/getLastPost";
import { getLastPosts } from "../../services/postsServices";
import {
  Badge,
  BadgeBase,
  BlogPostCard,
  Category,
  ColumnBadge,
  ColumnBadgeBase,
  ColumnBlogPostCard,
  ColumnCategory,
  ColumnPosts,
  Container,
  ContainerImg,
  Content,
  ContentBlogPost,
  ContentColumnBlogPostCard,
  DescriptionBlogText,
  HeadAndIcon,
  HeadAndTextBox,
  HeadAndTextDescription,
  HeadingAndTextColumn,
  IconWrap,
  ImgCarouselContainer,
  ImgColumnBlogPostCard,
  MainContainerLastPosts,
  StyleParagraph,
  StyledParagraphLink,
  Text,
} from "./style.js";

const imgCarousel = [
  {
    id: 1,
    img: "https://as2.ftcdn.net/v2/jpg/05/95/49/73/1000_F_595497335_LXmQUCnyuAiYErNn4y5MvTeyqShW8MlX.jpg",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0544/4059/1547/articles/tudo-sobre-corrida-2_1100x.jpg?v=1642428838",
  },
  {
    id: 3,
    img: "https://news.gympass.com/wp-content/uploads/2017/07/shutterstock_516665767-1-1280x640.jpg",
  },
];
const limit = 2;
const offset = 1;
export const MainHomeSection = () => {
  const [lastPosts, setLastPosts] = useState([]);

  const { data } = useGetLastPost("/post/top");

  useEffect(() => {
    async function resLastPosts() {
      const response = await getLastPosts(limit, offset);
      setLastPosts(response.results);
    }
    resLastPosts();
  }, []);
  console.log(data);
  return (
    <>
      <Carousel
        autoPlay={true}
        showStatus={false}
        transitionTime={3}
        infiniteLoop={true}
        showThumbs={false}
      >
        {imgCarousel.map(imgs => (
          <ImgCarouselContainer key={imgs.id} image={imgs.img} />
        ))}
      </Carousel>

      <MainContainerLastPosts>
        <Container>
          <StyleParagraph>Postagens recentes</StyleParagraph>
          <Content>
            <BlogPostCard>
              <ContainerImg image={data?.banner} />
              <ContentBlogPost>
                <HeadAndTextBox>
                  <Text>
                    <span>Por </span>
                    {data?.username}
                  </Text>
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
                  </Badge>
                </Category>
              </ContentBlogPost>
            </BlogPostCard>
            <ColumnPosts>
              {lastPosts.map(item => (
                <ColumnBlogPostCard key={item.id}>
                  <ImgColumnBlogPostCard image={item.banner} />
                  <ContentColumnBlogPostCard>
                    <HeadingAndTextColumn>
                      <p>{item.username}</p>
                      <HeadAndTextDescription>
                        <p>{item.title}</p>
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
            </ColumnPosts>
          </Content>
        </Container>
      </MainContainerLastPosts>
    </>
  );
};
