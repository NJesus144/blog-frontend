import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
  font-family: "Roboto", sans-serif;
  color: #0d0c0c;
  background-color: #fff;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 20px -20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  background-color: #f60c49;
  color: #0d0c0c;
  padding: 10px;
  border-radius: 50%;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  h3 {
  }
`;
