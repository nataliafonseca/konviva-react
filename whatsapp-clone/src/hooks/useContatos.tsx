import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getAll } from '../services/chatApiService';

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

interface ContatosContextData {
  contatos: Contato[];
  contatoAtual: Contato | null;
  setContatoAtual: React.Dispatch<React.SetStateAction<Contato | null>>;
}

interface ContatosProviderProps {
  children: ReactNode;
}

const ContatosContext = createContext({} as ContatosContextData);

export function ContatosProvider({ children }: ContatosProviderProps) {
  const [contatoAtual, setContatoAtual] = useState<Contato | null>(null);
  const [contatos, setContatos] = useState<Contato[]>([]);

  async function getContatos() {
    const response = await getAll();
    setContatos(response);
  }

  useEffect(() => {
    getContatos();
  }, []);

  return (
    <ContatosContext.Provider
      value={{
        contatos,
        contatoAtual,
        setContatoAtual,
      }}
    >
      {children}
    </ContatosContext.Provider>
  );
}

export function useContatos() {
  return useContext(ContatosContext);
}
