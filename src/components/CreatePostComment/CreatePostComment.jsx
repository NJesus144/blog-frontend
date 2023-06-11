import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { createPostCommentBlog } from "../../services/postsServices";
import { configToken } from "../../services/token";
import { Button } from "../inputs/Button";
import { Form, Textarea } from "./style";

export const CreatePostComment = ({ post }) => {
  const [text, setText] = useState("");
  console.log(post);
  const { mutate } = useFetch(post.id, configToken);

  const onSubmit = async e => {
    e.preventDefault();

    try {
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
