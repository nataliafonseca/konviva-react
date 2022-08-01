import axios from 'axios';

const urlApi = 'http://localhost:8080/imoveis';

export async function getImoveis() {
  const AxiosResponse = await axios.get(urlApi);
  return AxiosResponse.data;
}

export async function getImovelPorId(id) {
  const AxiosResponse = await axios.get(`${urlApi}/${id}`);
  return AxiosResponse.data;
}

export async function postImovel(novo) {
  const imovelPostMovel = {
    address: novo.address,
    image: novo.image,
    owner: novo.owner,
    price: novo.price,
    type: novo.type,
  };

  const AxiosResponse = await axios.post(urlApi, imovelPostMovel);
  return AxiosResponse.data;
}
