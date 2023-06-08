import { useState } from "react";
import { createPostBlog } from "../../services/postsServices";
import { Button } from "../inputs/Button";
import { Form, Textarea } from "./style";

export const CreatePost = ({ id }) => {
  const [text, setText] = useState("");

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await createPostBlog(id, text);
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
        name="text"
        maxLength="256"
      />

      <Button>Publicar comentário</Button>
    </Form>
  );
};
