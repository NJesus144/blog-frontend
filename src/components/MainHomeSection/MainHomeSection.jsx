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
  const [isMutate, setIsMutate] = useState(false);

  const { data, mutate } = useGetLastPost("/post/top");

  if (isMutate) {
    mutate("/post/top");
    setIsMutate(false);
  }

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
        </>
      ) : (
        <NotFountPost />
      )}
    </>
  );
};
