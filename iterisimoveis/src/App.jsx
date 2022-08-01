import './App.css';

import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ImoveisPage } from './pages/ImoveisPage';
import { ImovelCadastroPage } from './pages/ImovelCadastroPage/ImovelCadastroPage';
import { ImovelSinglePage } from './pages/ImovelSinglePage/ImovelSinglePage';
import { SobrePage } from './pages/SobrePage';
import MenuPageTemplate from './pageTemplates/MenuPageTemplate';

const theme = createTheme();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MenuPageTemplate>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/imoveis" element={<ImoveisPage />} />
              <Route path="/imoveis/:id" element={<ImovelSinglePage />} />
              <Route path="/cadastrar" element={<ImovelCadastroPage />} />
            </Routes>
          </div>
        </MenuPageTemplate>
      </BrowserRouter>
    </ThemeProvider>
  );
}
