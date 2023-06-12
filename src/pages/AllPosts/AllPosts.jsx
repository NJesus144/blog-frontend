import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/inputs/Button";
import { getLastPosts } from "../../services/postsServices";
import {
  Container,
  ContainerPosts,
  DivButton,
  ImgLastPosts,
  MainContainerWrapper,
  StyledP,
} from "./style";

export const AllPosts = () => {
  const [paginationPost, setPaginationPosts] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    paginationPosts();
  }, []);

  const paginationPosts = async (limit, offset) => {
    const response = await getLastPosts(limit, offset);
    setPaginationPosts(response);
  };

  const handlePagination = () => {
    let offset = 0;
    if (paginationPost.nextUrl) setLimit(oldValue => oldValue + 6);
    if (paginationPost.results?.length === paginationPost.total)
      setDisabled(true);

    paginationPosts(limit, offset);
  };
  console.log(paginationPost.results);
  return (
    <>
      <Header />
      <Container>
        <MainContainerWrapper>
          {paginationPost.results?.map(item => (
            <ContainerPosts
              to={`/post/categoryId/${item.id}`}
              target="_blank"
              key={item.id}
            >
              <ImgLastPosts image={item.banner} />
              <StyledP>{item.title}</StyledP>
            </ContainerPosts>
          ))}
        </MainContainerWrapper>
        <DivButton>
          <div>
            <Button disabled={disabled} onClick={handlePagination}>
              Ver mais
            </Button>
          </div>
        </DivButton>
      </Container>
    </>
  );
};
