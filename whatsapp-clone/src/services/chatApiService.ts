import axios from 'axios';

const urlApi = 'http://localhost:8080/contato';

interface Mensagem {
  id: number;
  contatoId: number;
  enviadoPeloContato: boolean;
  conteudo: string;
  datahora: string;
}

interface Contato {
  id: number;
  imagemUrl: string;
  nome: string;
  muted: boolean;
  mensagem: Mensagem[];
}

export async function getAll(): Promise<Contato[]> {
  const response = await axios.get(`${urlApi}?_embed=mensagem`);
  return response.data;
}

export async function getByContactId(contatoId: number): Promise<Contato> {
  const response = await axios.get(`${urlApi}/${contatoId}?&_embed=mensagem`);
  return response.data;
}
