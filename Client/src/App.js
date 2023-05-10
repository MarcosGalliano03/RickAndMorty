import "./App.css";
import Form from "./components/Forms";
import Cards from "./components/cards/Cards.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import Favorites from "./components/Favorites";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllChars from "./components/AllChars";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios.get(`${URL}?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);
      if (access) {
        await navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();

  async function onSearch(id) {
    try {
      const result = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      ).then(({ data }) => {
        const char = characters?.find((e) => e.id === Number(data.id));
        if (char) {
          alert("Already in the list");
        } else if (data.id !== undefined) {
          setCharacters((characters) => [...characters, data]);
        }
      });
    } catch (error) {
      alert("Character not found");
    }
  }

  function onClose(id) {
    const filteredCharacters = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filteredCharacters);
    console.log("holis");
    console.log(id);
  }

  return (
    <div className={`App${location.pathname === "/" ? " home" : ""}`}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/all" element={<AllChars />} />
      </Routes>
    </div>
  );
}

export default App;
