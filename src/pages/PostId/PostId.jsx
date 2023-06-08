import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerPostId } from "../../components/ContainerPostId/ContainerPostId";
import { AuthContext } from "../../contexts/authContext";
import { getPostById } from "../../services/postsServices";
import { configToken } from "../../services/token";
export const PostId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { signed, loadingStoreData } = useContext(AuthContext);

  const [post, setPost] = useState([]);

  const setOnlyPost = async () => {
    try {
      const response = await getPostById(id, configToken);
      setPost(response.data);
    } catch (err) {
      if (err.response.data.message === "Token invalid!") {
        return navigate("/login");
      }
    }
  };

  useEffect(() => {
    setOnlyPost();
    loadingStoreData();
  }, []);

  return <>{signed && <ContainerPostId post={post} />}</>;
};
