import estilos from "./styles/searchBar.module.css";
import imagen from "./assets/hola.png";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(id);
  };
  return (
    <div className={estilos.searchBar}>
      <img src={imagen} alt="imagen" className={estilos.imagen} />
      <div>
        <input type="search" value={id} onChange={handleChange} />
        <button onClick={handleSearch} className={estilos.button}>
          <h4>Agregar</h4>
        </button>
      </div>
    </div>
  );
}
