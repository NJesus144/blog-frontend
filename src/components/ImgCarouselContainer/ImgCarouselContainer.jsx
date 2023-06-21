import styled from "styled-components";

const CarouselContainer = styled.div`
  background-image: url("${props => props.image}");
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const BoxCarousel = styled.div`
  height: 600px;
  width: 100%;
  margin-top: 68px;
  transition: all 1s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: black;
    opacity: 0.4;
  }
`;

export const ImgCarouselContainer = ({ image }) => {
  return (
    <CarouselContainer image={image}>
      <BoxCarousel></BoxCarousel>
    </CarouselContainer>
  );
};
