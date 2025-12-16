import { Link } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
  return (
    <nav>
      <ul id="Header">
        <li><Link to="/">Presentación</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/personajes">Busqueda por ID</Link></li>
        <li><Link to="/consumo">Consumo</Link></li>
        <li><Link to="/consumoepisodio">Consumo episodio</Link></li>
        <li><Link to="/consumoepisodioid">Consumo episodio id</Link></li>
      </ul>
    </nav>
  );
}
