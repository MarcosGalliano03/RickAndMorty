import axios from "axios";
import FavoriteCard from "./cards/FavoriteCard";
import { useState, useEffect } from "react";
import estilos from "./styles/cards.module.css";

const URL = "https://rickandmortyapi.com/api/character/?page=";

const AllChars = (props) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [alfabetica, setAlfabetica] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`${URL}${currentPage}`);
        let data = response.data.results;
        if (alfabetica) {
          data = data.sort((a, b) => a.name.localeCompare(b.name));
          setCharacters(data);
        } else {
          setCharacters(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCharacters();
  }, [alfabetica, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setAlfabetica(false);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setAlfabetica(false);
  };

  const handleNextFivePages = () => {
    setCurrentPage((prevPage) => prevPage + 5);
    setAlfabetica(false);
  };

  const handlePrevFivePages = () => {
    setCurrentPage((prevPage) => prevPage - 5);
    setAlfabetica(false);
  };

  const handleOrder = () => {
    if (alfabetica) {
      setAlfabetica(false);
      console.log(alfabetica);
    } else {
      setAlfabetica(true);
      console.log(alfabetica);
    }
  };

  const forwardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-arrow-right-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>
  );

  const backwardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-arrow-left-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>
  );

  const arrowLeft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-arrow-bar-left"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"
      />
    </svg>
  );

  const arrowRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-arrow-bar-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"
      />
    </svg>
  );

  const characterCards = characters.map((character) => (
    <FavoriteCard
      key={character.id}
      id={character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin}
      image={character.image}
      onClose={props.onClose}
    />
  ));

  return (
    <>
      <div>
        <div className={estilos.h1All}>
          <h1>PAGE:{currentPage}/42</h1>
        </div>
        <div className={estilos.buttonsFav}>
          <button disabled={currentPage <= 5} onClick={handlePrevFivePages}>
            {arrowLeft}
          </button>
          <button disabled={currentPage === 1} onClick={handlePrevPage}>
            {backwardIcon}
          </button>
          <button disabled={currentPage === 42} onClick={handleNextPage}>
            {forwardIcon}
          </button>
          <button disabled={currentPage >= 38} onClick={handleNextFivePages}>
            {arrowRight}
          </button>
          <button onClick={handleOrder}>
            <h3>ORDENAR <br /> ALFABETICAMENTE</h3>
          </button>
        </div>
      </div>
      <div className={estilos.eachCharacter}>{characterCards}</div>
      <div className={estilos.buttonsFav}>
        <button disabled={currentPage <= 5} onClick={handlePrevFivePages}>
          {arrowLeft}
        </button>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          {backwardIcon}
        </button>
        <button disabled={currentPage === 42} onClick={handleNextPage}>
          {forwardIcon}
        </button>
        <button disabled={currentPage >= 38} onClick={handleNextFivePages}>
          {arrowRight}
        </button>
      </div>
    </>
  );
};

export default AllChars;
