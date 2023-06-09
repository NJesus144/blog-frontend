import styled from "styled-components";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ContainerPost } from "../../components/ContainerPost/ContainerPost";

import { getAllPostsCategory } from "../../services/postsServices";

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const ContainerMainSection = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const findAllPostsForCategory = async () => {
      const response = await getAllPostsCategory(id);
      setAllPosts(response.data);
    };
    findAllPostsForCategory();
  }, [id]);

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
