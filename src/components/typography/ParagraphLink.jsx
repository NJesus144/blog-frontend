import { Link } from "react-router-dom";
import styled from "styled-components";

const Ph = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: blue;
`;

const BASE_URL = "http://localhost:5173";
// eslint-disable-next-line react/prop-types
export const ParagraphLink = ({ children, path }) => {
  return <Ph to={`${BASE_URL}/${path}`}>{children}</Ph>;
};
