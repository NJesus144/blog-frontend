import styled from "styled-components";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ContainerPost } from "../../components/ContainerPost/Index";

import { ContainerMainSection } from "../../layout/ContainerMainSection";
import { getAllPostsCategory } from "../../services/postsServices";

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);

  const { id } = useParams();

  const findAllPostsForCategory = async () => {
    const response = await getAllPostsCategory(id);
    setAllPosts(response.data);
  };

  useEffect(() => {
    findAllPostsForCategory();
  }, []);

  return (
    <>
      <ContainerMainSection>
        <Container>
          {allPosts.map(item => (
            <ContainerPost key={item._id} posts={item} />
          ))}
        </Container>
      </ContainerMainSection>
    </>
  );
};
