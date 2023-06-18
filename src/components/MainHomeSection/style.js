import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImgCarouselContainer = styled.div`
  background-image: url("${props => props.image}");
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const MainContainerLastPosts = styled.main`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  gap: 64px;
  margin: auto;

  padding-bottom: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 32px;
  gap: 32px;

  @media (max-width: 1300px) {
    width: 800px;
  }

  @media (max-width: 880px) {
    width: 600px;
    flex-direction: column;
    gap: 0;
    padding: 0;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const StyleParagraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: #1a1a1a;

  span {
    color: #74768f;
  }
`;
export const Content = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1216px;

  @media (max-width: 1300px) {
    width: 800px;
    flex-direction: column;
  }

  @media (max-width: 880px) {
    width: 600px;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const BlogPostCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 592px;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const ContainerImg = styled.div`
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

export const Text = styled.p`
  max-width: 592px;
  height: 20px;

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
  max-width: 100px;
  height: 24px;

  mix-blend-mode: multiply;
`;

export const BadgeBase = styled.div`
  display: flex;
  justify-content: center;
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

export const ColumnPosts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 32px;

  max-width: 592px;
  height: 432px;

  @media (max-width: 620px) {
    width: 100%;
    height: 500px;
    margin-top: 200px;
  }
`;

export const ColumnBlogPostCard = styled.div`
  display: flex;
  padding: 0px;
  gap: 24px;

  max-width: 592px;
  height: 200px;

  @media (max-width: 620px) {
    width: 100%;
    height: 400px;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const ImgColumnBlogPostCard = styled.div`
  width: 320px;
  height: 200px;

  background-image: url("${props => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const ContentColumnBlogPostCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 248px;
  height: 188px;

  @media (max-width: 620px) {
    gap: 0;
    width: 100%;
  }
`;

export const HeadingAndTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  max-width: 248px;
  height: 140px;

  p {
    max-width: 248px;
    height: 20px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;

    color: #6941c6;
  }
`;

export const HeadAndTextDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 8px;

  max-width: 248px;
  height: 108px;

  p {
    max-width: 248px;
    height: 28px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

    color: #1a1a1a;
  }

  span {
    max-width: 248px;
    height: 72px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: ellipsis;

    color: #667085;
  }
`;

export const ColumnCategory = styled.div`
  display: flex;
  gap: 8px;
  max-width: 248px;
  height: 24px;
`;

export const ColumnBadge = styled.div`
  display: flex;
  max-width: 100px;
  height: 24px;

  mix-blend-mode: multiply;
`;

export const ColumnBadgeBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;

  max-width: 100px;
  height: 24px;

  background: #f0f9ff;
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

    color: #026aa2;
  }
`;

export const ContainerRowPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  padding: 10px;

  @media (max-width: 620px) {
    margin-top: 100px;
    padding: 0;
  }
`;

export const TitleSection = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #1a1a1a;
`;

export const SectionRowAndHeader = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  margin: auto;
`;
