import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Sobre } from "./pages/Sobre/Sobre";
import { Players } from "./pages/Players/Players";
import { Doacoes } from "./pages/Doacoes/Doacoes";
import { RedesSociais } from "./pages/RedesSociais/RedesSociais";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* routes*/}
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/players" element={<Players />} />
      <Route path="/doacoes" element={<Doacoes />} />
      <Route path="/redes-sociais" element={<RedesSociais />} />
    </Routes>
  );
}
