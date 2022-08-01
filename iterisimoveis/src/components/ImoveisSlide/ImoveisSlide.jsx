import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getImoveis } from '../../services/imovelApiService';

export function ImoveisSlide() {
  let [query, setQuery] = useSearchParams();
  const [listaImagens, setListaImagens] = useState([]);
  const [slide, setSlide] = useState(query.get('slide') ?? 0);

  useEffect(() => {
    async function fetchData() {
      const data = await getImoveis();
      const imagens = data
        .filter((item) => !!item.image.trim())
        .map((item) => item.image);

      setListaImagens(imagens);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setSlide(Number(query.get('slide')));
  }, [query]);

  function passarSlide() {
    if (!query.get('slide')) {
      setQuery({ slide: '1' });
      return;
    }

    const slideAtual = Number(query.get('slide'));

    if (slideAtual < listaImagens.length - 1) {
      setQuery({ slide: String(slideAtual + 1) });
    } else {
      setQuery({ slide: '0' });
    }
  }

  return <img src={listaImagens[slide]} alt="" onClick={passarSlide} />;
}
