import { useEffect, useState } from 'react';

function TituloPrincipal(props) {
  const [titulo, setTitulo] = useState(props.titulo ?? 'Olá, mundo!');

  useEffect(() => {
    console.log('O titulo mudou!');
  }, [titulo]);

  function clickCallBack() {
    alert('Obrigado por clicar em mim! :)');
  }

  function inputChangeCallBack(event) {
    setTitulo(event.target.value);
  }

  return (
    <div>
      <h1 onClick={clickCallBack}>{titulo}</h1>
      <input
        type="text"
        name="name"
        value={titulo}
        onChange={inputChangeCallBack}
      />
    </div>
  );
}

export default TituloPrincipal;
