import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContainerPostId } from "../../components/ContainerPostId/ContainerPostId";
import { api } from "../../services/api/api";
import { getPostById } from "../../services/postsServices";

export const PostId = () => {
  const [postId, setPostId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const tokenUser = localStorage.getItem("@Auth:token");
    api.defaults.headers.Authorization = `Bearer ${tokenUser}`;

    const fetchPostId = async () => {
      const response = await getPostById(id);
      setPostId(response.data);
    };

    fetchPostId();
  });

  return <>{<ContainerPostId post={postId} />}</>;
};
