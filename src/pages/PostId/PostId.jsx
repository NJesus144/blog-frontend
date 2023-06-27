import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerPostId } from "../../components/ContainerPostId/ContainerPostId";
import { AuthContext } from "../../contexts/authContext";
import { useFetch } from "../../hooks/useFetch";
import { configToken } from "../../services/token";

export const PostId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadingStoreData();
  });

  const { signed, loadingStoreData } = useContext(AuthContext);
  const { data, isLoading, error } = useFetch(id, configToken);

  if (isLoading) return console.log("carregando...");
  if (error) {
    if (error.response.data.message === "Token invalid!")
      return navigate("/login");
  }

  return <>{signed && <ContainerPostId post={data.data} />}</>;
};
