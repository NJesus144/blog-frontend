import moment from "moment";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFetchAllPosts } from "../../hooks/useFetchAllPosts";
import { DeleteMenu } from "../DeleteMenu/DeleteMenu";

const Container = styled.div`
  width: 384px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 498px) {
    margin: 0;
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;

const Image = styled(Link)`
  background-image: url("${props => props.image}");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 240px;
  width: 384;

  @media (max-width: 425px) {
    margin-top: 30px;
  }
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
`;

const H4 = styled(Link)`
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

const Category = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

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

const BoxIcon = styled(Link)`
  color: #1a1a1a;
`;

export const CardPostBlog = ({ postBlog, itemsPerPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const loggedInUser = localStorage.getItem("@Auth:user");
  const userObj = JSON.parse(loggedInUser);

  useEffect(() => {
    if (userObj._id === postBlog.idUser) setMenuOpen(true);
  }, [userObj._id, postBlog?.idUser]);

  const [isMutate, setIsMutate] = useState(false);
  const { mutate } = useFetchAllPosts(`/post?limit=${itemsPerPage}&offset=0`);
  if (isMutate) {
    mutate();
    setIsMutate(false);
  }

  return (
    <Container>
      <Image to={`/post/categoryId/${postBlog.id}`} image={postBlog.banner} />
      <HeadAndText>
        <StyledAuthor>
          {postBlog.name} • {moment(postBlog.createdAt).format("LLL")}
        </StyledAuthor>
        <StyledTitleAndArrow>
          <H4 to={`/post/categoryId/${postBlog.id}`}>{postBlog.title}</H4>
          <BoxIcon to={`/post/categoryId/${postBlog.id}`}>
            <FiArrowUpRight size={24} />
          </BoxIcon>
        </StyledTitleAndArrow>
        <StyledText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever since the
          1500s,
        </StyledText>
      </HeadAndText>
      <Category>
        <CategoryBadge>Tecnologia</CategoryBadge>

        {menuOpen && (
          <DeleteMenu idPost={postBlog.id} setMutate={setIsMutate} />
        )}
      </Category>
    </Container>
  );
};
