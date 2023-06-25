// import { Link } from "react-router-dom";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useGetLastPost } from "../../hooks/getLastPost";
import { AllPosts } from "../AllPosts/AllPosts";
import { ColumnPosts } from "../ColumnPosts/ColumnPosts";
import { Header } from "../Header/Header";
import { ImgCarouselContainer } from "../ImgCarouselContainer/ImgCarouselContainer";
import { NotFountPost } from "../NotFoundPosts/NotFoundPosts";
import { TopPost } from "../TopPost/TopPost";

import {
  Container,
  Content,
  MainContainerLastPosts,
  StyleParagraph,
} from "./style";
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

export const MainHomeSection = () => {
  // const [paginationPost, setPaginationPosts] = useState([]);
  // const [limitMorePost, setLimitMorePost] = useState(12);
  const [isMutate, setIsMutate] = useState(false);
  // const [disabled, setDisabled] = useState(false);

  const { data, mutate } = useGetLastPost("/post/top");
  if (isMutate) {
    mutate("/post/top");
    setIsMutate(false);
  }

  // useEffect(() => {
  //   paginationPosts();
  // }, []);

  // console.log("resultado pagination", paginationPost, paginationPost.results);
  // const paginationPosts = async (limit, offset) => {
  //   const response = await getLastPosts(
  //     `/post?limit=${limit}&offset=${offset}`
  //   );
  //   setPaginationPosts(response);
  // };

  // const handlePagination = () => {
  //   let offset = 0;
  //   if (paginationPost.nextUrl) setLimitMorePost(oldValue => oldValue + 6);
  //   if (paginationPost.results?.length === paginationPost.total)
  //     setDisabled(true);

  //   paginationPosts(limitMorePost, offset);
  // };

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
      {data ? (
        <>
          <MainContainerLastPosts>
            <Container>
              <StyleParagraph>Postagens recentes</StyleParagraph>
              <Content>
                <TopPost data={data} setIsMutate={setIsMutate} />

                <ColumnPosts />
              </Content>
            </Container>
          </MainContainerLastPosts>
          <AllPosts />
          {/* <SectionRowAndHeader>
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
          </SectionRowAndHeader> */}
        </>
      ) : (
        <NotFountPost />
      )}
    </>
  );
};
