import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerPostId } from "../../components/ContainerPostId/ContainerPostId";
import { AuthContext } from "../../contexts/authContext";
import { useFetch } from "../../hooks/useFetch";
import { configToken } from "../../services/token";

export const PostId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { signed, loadingStoreData } = useContext(AuthContext);

  const { data, isLoading, error } = useFetch(id, configToken);
  console.log("post id", data);

  if (error) return alert("Error");
  if (isLoading) return console.log("carregando...");

  const setOnlyPost = async () => {
    try {
      // const response = await getPostById(id, configToken);
      // setPost(response.data);
    } catch (err) {
      if (err.response.data.message === "Token invalid!") {
        return navigate("/login");
      }
    }
  };

  setOnlyPost();
  loadingStoreData();

  return <>{signed && <ContainerPostId post={data.data} />}</>;
};
