// import { Link } from "react-router-dom";
import moment from "moment";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetLastPost } from "../../hooks/getLastPost";
import { getLastPosts } from "../../services/postsServices";
import { CardPostBlog } from "../CardPostBlog/CardPostBlog";
import { Header } from "../Header/Header";
import { ImgCarouselContainer } from "../ImgCarouselContainer/ImgCarouselContainer";
import { Button } from "../inputs/Button";
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
  ContainerRowPosts,
  Content,
  ContentBlogPost,
  ContentColumnBlogPostCard,
  DescriptionBlogText,
  DivButton,
  HeadAndIcon,
  HeadAndTextBox,
  HeadAndTextDescription,
  HeadingAndTextColumn,
  IconWrap,
  ImgColumnBlogPostCard,
  MainContainerLastPosts,
  SectionRowAndHeader,
  StyleParagraph,
  StyledParagraphLink,
  Text,
  TitleSection,
} from "./style.js";

const imgCarousel = [
  {
    id: 1,
    img: "https://images7.alphacoders.com/122/1226930.jpg",
  },
  {
    id: 2,
    img: "https://images2.alphacoders.com/117/1178869.jpg",
  },
  {
    id: 3,
    img: "https://images.alphacoders.com/468/468462.jpg",
  },
];
const limit = 2;
const offset = 1;
export const MainHomeSection = () => {
  const [lastPosts, setLastPosts] = useState([]);
  const [paginationPost, setPaginationPosts] = useState([]);
  const [limitMorePost, setLimitMorePost] = useState(12);

  const [disabled, setDisabled] = useState(false);

  const { data } = useGetLastPost("/post/top");

  useEffect(() => {
    paginationPosts();
    async function resLastPosts() {
      const response = await getLastPosts(limit, offset);
      setLastPosts(response.results);
    }
    resLastPosts();
  }, []);

  const paginationPosts = async (limit, offset) => {
    const response = await getLastPosts(limit, offset);
    setPaginationPosts(response);
  };

  const handlePagination = () => {
    let offset = 0;
    if (paginationPost.nextUrl) setLimitMorePost(oldValue => oldValue + 6);
    if (paginationPost.results?.length === paginationPost.total)
      setDisabled(true);

    paginationPosts(limitMorePost, offset);
  };

  console.log("postagens", paginationPost);
  return (
    <>
      <Header />
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
                    {data?.username} • {moment(data?.createdAt).format("LLL")}
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
      <SectionRowAndHeader>
        <TitleSection>Todos as postagens</TitleSection>
        <ContainerRowPosts>
          {paginationPost.results?.map(item => (
            <CardPostBlog key={item.id} postBlog={item} />
          ))}
        </ContainerRowPosts>
        <DivButton>
          <Button disabled={disabled} onClick={handlePagination}>
            Carregar mais posts
          </Button>
        </DivButton>
      </SectionRowAndHeader>
    </>
  );
};
