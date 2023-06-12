import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
  font-family: "Roboto", sans-serif;
  color: #0d0c0c;
  background: ${props => props.color};
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 20px -20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

export const StyledParagraph = styled.p`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #333333;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #333333;

  transition: all 0.4s;

  :hover {
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  background-color: #71c5a5;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  h3 {
  }
`;
