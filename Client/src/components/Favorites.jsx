import { connect } from "react-redux";
import FavoriteCard from "./cards/FavoriteCard";
import estilos from "./styles/cards.module.css";

const Favorites = (props) => {
  const character = props.myFavorites;
  const eachCharacter = character.map((character) => {
    return (
      <FavoriteCard
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        origin={character.origin}
        image={character.image}
      />
    );
  });
  return <div className={estilos.eachCharacter}>{eachCharacter}</div>;
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
