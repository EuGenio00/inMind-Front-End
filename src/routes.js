import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Paginas/Home";
import Login from "./Components/Paginas/Login";
import Cadastro from "./Components/Paginas/Cadastro";
import Menu from "./Components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>
        <Route path="*" element={<div>Página não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
