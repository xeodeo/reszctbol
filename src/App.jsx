import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Presentacion from "./pages/Presentacion";
import Experiencia from "./pages/Experiencia";
import Contacto from "./pages/Contacto";
import Envio from "./pages/Envio";
import Consumo from "./pages/Consumo";
import ConsumoEpisodio from "./pages/ConsumoEpisodio";
import EpisodioID from "./pages/EpisodioID";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      {/* El Header se renderiza fuera del main y ocupa todo el ancho */}
      <Header />

      {/* El main contendrá el contenido de cada página */}
      <main>
        <Routes>
          <Route path="/" element={<Presentacion />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/personajes" element={<Envio />} />
          <Route path="/consumo" element={<Consumo />} />
          <Route path="/consumoepisodio" element={<ConsumoEpisodio />} />
          <Route path="/consumoepisodioid" element={<EpisodioID />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
