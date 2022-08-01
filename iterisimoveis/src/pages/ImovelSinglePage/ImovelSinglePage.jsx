import './ImovelSinglePage.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ImovelCard } from '../../components/ImovelCard';
import { getImovelPorId } from '../../services/imovelApiService';

export function ImovelSinglePage() {
  const { id } = useParams();

  const [imovel, setImovel] = useState(null);

  useEffect(() => {
    getImovelPorId(id).then((data) => {
      setImovel(data);
    });
  }, [id]);

  if (!imovel) {
    return <div>Carregando...</div>;
  } else {
    return (
      <div className="imovel">
        <ImovelCard imovel={imovel} />
        <div className="link">
          <Link to="/imoveis">Voltar</Link>
        </div>
      </div>
    );
  }
}
