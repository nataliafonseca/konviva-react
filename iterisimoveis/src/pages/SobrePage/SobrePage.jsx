import "./SobrePage.css";

export function SobrePage() {
  const logoUrl =
    "https://www.iteris.com.br/Iteris.Site.Cms.Theme/img/logo.svg";
  const titulo = "Sobre a Iteris";
  const descricao =
    "Somos uma empresa de tecnologia. Mas, antes disso, somos uma empresa de gente. De gente que faz acontecer!";

  return (
    <div>
      <div className="sobre-page">
        <img src={logoUrl} alt={titulo} />
        <h1>{titulo}</h1>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
