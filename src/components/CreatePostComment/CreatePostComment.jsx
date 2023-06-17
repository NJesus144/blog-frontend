import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
// import { validUserToken } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { createPostCommentBlog } from "../../services/postsServices";
import { configToken } from "../../services/token";
import { Button } from "../inputs/Button";

import { Form, Textarea } from "./style";

export const CreatePostComment = ({ post }) => {
  const [text, setText] = useState("");
  const { mutate } = useFetch(post.id, configToken);
  const navigate = useNavigate();

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const user = localStorage.getItem("@Auth:user");
      const tokenUser = localStorage.getItem("@Auth:token");
      if (!user || !tokenUser) return navigate("/login");

      const response = await createPostCommentBlog(post.id, text);

      if (response.status === 201) {
        mutate();
        setText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Textarea
        placeholder="Comentário"
        rows="4"
        onChange={e => setText(e.target.value)}
        value={text}
        name="text"
        maxLength="256"
      />

      <Button>Publicar comentário</Button>
    </Form>
  );
};
