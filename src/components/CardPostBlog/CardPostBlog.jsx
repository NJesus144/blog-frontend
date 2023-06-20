import moment from "moment";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

const Container = styled.div`
  width: 384px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 498px) {
    margin: 0;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Image = styled.div`
  background-image: url("${props => props.image}");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 240px;
  width: 384;
`;

const HeadAndText = styled.div`
  padding: 25px 0px;
`;

const StyledAuthor = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;

  color: #6941c6;

  span {
    color: #333333;
  }
`;

const StyledTitleAndArrow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0px;

  h4 {
    text-decoration: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    transition: all 0.3s;
    color: #1a1a1a;

    :hover {
      opacity: 0.9;
    }
  }
`;

const StyledText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Category = styled.div``;

const CategoryBadge = styled.div`
  padding: 8px;
  width: 100px;

  color: #026aa2;
  background: #f0f9ff;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

export const CardPostBlog = ({ postBlog }) => {
  return (
    <Container>
      <Image image={postBlog.banner} />
      <HeadAndText>
        <StyledAuthor>
          {postBlog.name} • {moment(postBlog.createdAt).format("LLL")}
        </StyledAuthor>
        <StyledTitleAndArrow>
          <h4>{postBlog.title}</h4>
          <FiArrowUpRight size={24} />
        </StyledTitleAndArrow>
        <StyledText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s,
        </StyledText>
      </HeadAndText>
      <Category>
        <CategoryBadge>Tecnologia</CategoryBadge>
      </Category>
    </Container>
  );
};
