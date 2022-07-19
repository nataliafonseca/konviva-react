import { useState } from "react";

import BlogPostModel from "../../models/BlogPostModel";
import BlogPost from "../BlogPost";

function BlogPage() {
  const [listaDePostagens, setListaDePostagens] = useState([
    new BlogPostModel(
      "Primeira postagem!",
      "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
    ),
    new BlogPostModel(
      "Segunda postagem!",
      "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/13-copy-o61.jpg?quality=70&strip=info&w=1024",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
    ),
    new BlogPostModel(
      "Terceira postagem!",
      "https://blog.hotmart.com/blog/2017/09/criar-um-blog.png",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
    ),
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function onSubmitCallback(event) {
    event.preventDefault();
    const newPost = new BlogPostModel(title, imageUrl, content);
    setListaDePostagens([...listaDePostagens, newPost]);
  }

  return (
    <>
      <form onSubmit={onSubmitCallback} className="form">
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

      <div className="listaPostagens">
        {listaDePostagens.map((item, i) => (
          <BlogPost key={i} post={item} />
        ))}
      </div>
    </>
  );
}

export default BlogPage;
