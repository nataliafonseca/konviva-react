import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChatPage } from "./pages/ChatPage";
import { HomePage } from "./pages/HomePage";
import { SidebarPageTemplate } from "./pageTemplates/SidebarPageTemplate";

function App() {
  return (
    <BrowserRouter>
      <SidebarPageTemplate>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </SidebarPageTemplate>
    </BrowserRouter>
  );
}

export default App;
