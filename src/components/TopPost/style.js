import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogPostCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 592px;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const ContainerImg = styled(Link)`
  width: 592px;
  height: 228px;

  background-image: url("${props => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const ContentBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 5px;
  max-width: 592px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const HeadAndTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 592px;
  height: 124px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const DescriptionBlogText = styled.div`
  max-width: 592px;
  height: 48px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #667085;
`;
export const ContainerText = styled.div`
  max-width: 592px;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: #6941c6;

  span {
    color: #333333;
  }
`;

export const HeadAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 592px;
  height: 32px;
  margin-bottom: 20px;
`;

export const StyledParagraphLink = styled(Link)`
  max-width: 552px;
  height: 32px;
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  transition: all 0.3s;
  color: #1a1a1a;

  :hover {
    opacity: 0.9;
  }
`;

export const Category = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 592px;
  height: 24px;
`;

export const Badge = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  justify-content: space-between;
  mix-blend-mode: multiply;
`;

export const BadgeBase = styled.div`
  display: flex;
  justify-content: space;
  align-items: center;
  padding: 2px 10px;

  max-width: 100px;
  height: 24px;

  background: #f9f5ff;
  border-radius: 16px;

  span {
    max-width: 100px;
    height: 20px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    text-align: center;

    color: #6941c6;
  }
`;

export const IconWrap = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  flex-direction: column;
  padding: 4px 0px 4px;
  max-width: 24px;
  height: 28px;
`;
