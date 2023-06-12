import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImgCarouselContainer = styled.div`
  background-image: url("${props => props.image}");
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const ContainerTopPost = styled.main`
  margin-top: 100px;
`;

export const ContainerImg = styled.div`
  background-color: red;
  height: 400px;

  background-image: url("${props => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const H1 = styled(Link)`
  font-family: "inter";
  font-size: 42px;
  text-transform: uppercase;
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 400px) {
    color: red;
    font-size: 30px;
  }
`;

export const MainContainerWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 200px;
`;

export const TopPost = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  hr {
    width: 90%;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.1);
  }
`;

export const BottomTopPost = styled.div`
  padding: 20px;
  font-family: "roboto";

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    margin-top: 15px;
  }
`;

export const ALink = styled(Link)`
  margin-top: 60px;
  font-size: 18px;
  color: #71c5a5;
  font-weight: bold;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }
`;

export const ContainerPosts = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  margin-top: 20px;
  height: 300px;
  width: 350px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const ImgLastPosts = styled.div`
  background-image: url("${props => props.image}");
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledP = styled.p`
  font-family: "inter";
  text-align: center;
  font-size: 20px;
  padding: 10px;

  text-transform: uppercase;
  color: #333333;
  font-weight: bold;
  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }
`;
