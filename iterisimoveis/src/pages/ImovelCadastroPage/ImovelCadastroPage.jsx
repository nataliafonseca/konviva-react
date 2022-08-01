import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState } from 'react';

import { postImovel } from '../../services/imovelApiService';

export function ImovelCadastroPage() {
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [owner, setOwner] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('Venda');

  async function cadastrarImovel(event) {
    event.preventDefault();

    const novoImovel = {
      address,
      image,
      owner,
      price,
      type,
    };

    await postImovel(novoImovel);
  }

  return (
    <Box component="form" onSubmit={cadastrarImovel} noValidate sx={{ mt: 1 }}>
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Endereço"
        variant="outlined"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="URL da Imagem"
        variant="outlined"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Dono"
        variant="outlined"
        value={owner}
        onChange={(event) => setOwner(event.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        id="outlined-basic"
        label="Preço"
        variant="outlined"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="tipo-label">Tipo</InputLabel>
        <Select
          labelId="tipo-label"
          id="tipo"
          value={type}
          label="Tipo"
          onChange={(event) => setType(event.target.value)}
        >
          <MenuItem value="Venda">Venda</MenuItem>
          <MenuItem value="Aluguel">Aluguel</MenuItem>
        </Select>
      </FormControl>

      <Button fullWidth type="submit" variant="contained">
        Cadastrar
      </Button>
    </Box>
  );
}
