import { useEffect, useState } from "react";
import { useFetchAllPosts } from "../../hooks/useFetchAllPosts";

import { CardPostBlog } from "../CardPostBlog/CardPostBlog";
import { Button } from "../inputs/Button";
import {
  ContainerRowPosts,
  DivButton,
  SectionRowAndHeader,
  TitleSection,
} from "./style";

export const AllPosts = () => {
  const [disabled, setDisabled] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState(6);

  const { data } = useFetchAllPosts(`/post?limit=${itemsPerPage}&offset=0`);

  const loggedInUser = localStorage.getItem("@Auth:user");
  const userObj = JSON.parse(loggedInUser);

  useEffect(() => {
    if (userObj._id === data?.idUser) return;
  }, [userObj._id, data?.idUser]);

  useEffect(() => {
    if (itemsPerPage >= data?.total) setDisabled(true);
  }, [itemsPerPage, data]);

  const handlePagination = () => {
    setItemsPerPage(itemsPerPage + itemsPerPage);
  };

  return (
    <SectionRowAndHeader>
      <TitleSection>Todos as postagens</TitleSection>
      <ContainerRowPosts>
        {data?.results.map(item => (
          <CardPostBlog
            key={item.id}
            postBlog={item}
            itemsPerPage={itemsPerPage}
          />
        ))}
      </ContainerRowPosts>
      <DivButton>
        <Button disabled={disabled} onClick={handlePagination}>
          Carregar mais posts
        </Button>
      </DivButton>
    </SectionRowAndHeader>
  );
};
