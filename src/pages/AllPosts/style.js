import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

export const MainContainerWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const ContainerPosts = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  height: 300px;
  width: 350px;
  margin-top: 30px;
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

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 30%;
  }
`;
