import estilos from '../styles/card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const CardFav = (props) => {

   const { id, name, gender, species, image, status, origin, onClose, addFav, removeFav, myFavorites } = props

   const [isFav, setIsFav] = useState(false)

   const icon = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
   </svg>


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav(props)
      }
   }

   return (
      <div className={estilos.card}>
      <div className={estilos.info}>
        <div className={estilos.botones}>
          <div>
            {isFav ? (
              <button onClick={handleFavorite} className={estilos.btnFav}>
                <h1>❤️</h1>
              </button>
            ) : (
              <button onClick={handleFavorite} className={estilos.btnFav}>
                <h1>🤍</h1>
              </button>
            )}
          </div>
        </div>
        <h2>{name}</h2>
        <h2>#{id}</h2>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
      <div className={estilos.origen}>
        <div className={estilos.divOrigin}>
          <h6>{origin.name}</h6>
        </div>
        <div className={estilos.divInfo}>
          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <button>{icon}</button>
          </Link>
        </div>
      </div>
      <div className={estilos.img}>
        <img src={image} alt="img" />
      </div>
    </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardFav);