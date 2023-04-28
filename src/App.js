import './App.css';
import Form from './components/Forms';
import Cards from './components/cards/Cards.jsx';
import About from './components/About'
import Detail from './components/Detail';
import Nav from './components/Nav';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Favorites from './components/Favorites';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);

   let EMAIL = "marquitosgalliano@hotmail.com";
   let PASSWORD = "abc123"; 


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const location = useLocation();

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id) {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(filteredCharacters);
      console.log("holis");
      console.log(id);
   }

   return (
      <div className={`App${location.pathname === '/' ? ' home' : ''}`}>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route exact path="/" element={<Form login={login}/>} /> //modificar el fondo de la app en este route
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
