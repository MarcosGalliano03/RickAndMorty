import Card from './Card';
import estilos from '../styles/cards.module.css'

export default function Cards(props) {
   const characters = props.characters;
   const eachCharacter = characters.map((character) => {
      return <Card
         key={character.id}
         id={character.id}
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin}
         image={character.image}
         onClose={props.onClose} />
   })
   return <div className={estilos.eachCharacter}>{eachCharacter}</div>;
}
