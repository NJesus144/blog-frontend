// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useSWR from "swr";
import { ContainerMainSection } from "../../layout/ContainerMainSection";
import { getLastPosts, getTopPost } from "../../services/postsServices";
import {
  ALink,
  BottomTopPost,
  ContainerImg,
  ContainerPosts,
  ContainerTopPost,
  H1,
  ImgCarouselContainer,
  ImgLastPosts,
  MainContainerWrapper,
  StyledP,
  TopPost,
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
const limit = 6;
const offset = 0;
export const MainHomeSection = () => {
  const [lastPosts, setLastPosts] = useState([]);

  const { data } = useSWR("/post/top", getTopPost);

  useEffect(() => {
    async function resLastPosts() {
      const response = await getLastPosts(limit, offset);
      setLastPosts(response.results);
    }
    resLastPosts();
  }, []);

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

      <ContainerMainSection>
        <ContainerTopPost>
          <TopPost>
            <ContainerImg image={data?.banner} />
            <BottomTopPost>
              <H1 to={`/post/categoryId/${data?.id}`} target="_blank">
                {data?.title}fhfg
              </H1>
              <hr size="1" />
              <div>
                <p>
                  Saiba como manter hábitos saudáveis ajuda na prevenção de
                  doenças do coração.
                </p>
                <ALink to={`/post/categoryId/${data?.id}`} target="_blank">
                  LEIA MAIS
                </ALink>
              </div>
            </BottomTopPost>
          </TopPost>
        </ContainerTopPost>

        <MainContainerWrapper>
          {lastPosts.map(item => (
            <ContainerPosts
              to={`/post/categoryId/${item._id}`}
              target="_blank"
              key={item._id}
            >
              <ImgLastPosts image={item.banner} />
              <StyledP>{item.title}</StyledP>
            </ContainerPosts>
          ))}
        </MainContainerWrapper>
      </ContainerMainSection>
    </>
  );
};
