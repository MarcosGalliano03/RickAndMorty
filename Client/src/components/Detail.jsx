import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import estilos from "./styles/cardDetail.module.css";

export default function Detail() {
  const params = useParams();
  const id = params.id;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={estilos.divMainDetail}>
      <div className={estilos.divDetail}>
        <div className={estilos.divImg}>
          <h1>{character.name}</h1>
          <img src={character.image} alt="imagen" />
        </div>
        <div className={estilos.infoDiv}>
          <h2>ID:______{character.id}</h2>
          <h2>STATUS:______{character.status}</h2>
          <h2>ESPECIE:______{character.species}</h2>
          <h2>GENERO:______{character.gender}</h2>
          <h2>ORIGEN:______{character.origin ? character.origin.name : ""}</h2>
        </div>
      </div>
    </div>
  );
}
