import styled from "styled-components";
import { Link } from "react-router-dom";

export const ColumnPost = styled.div`
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

export const ImgColumnBlogPostCard = styled(Link)`
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

export const HeaderAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeadAndTextDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 8px;

  max-width: 248px;
  height: 108px;

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

export const ParagraphLink = styled(Link)`
  max-width: 248px;
  height: 28px;

  text-decoration: none;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;

  color: #1a1a1a;
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
