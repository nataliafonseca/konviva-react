import { useState } from "react";

function Form({ createPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    createPost({ title, imageUrl, content });
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="title">Título</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">Texto</label>
      <textarea
        name="content"
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label htmlFor="imageUrl">Url da Imagem</label>
      <input
        type="text"
        name="imageUrl"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Postar</button>
    </form>
  );
}

export default Form;
