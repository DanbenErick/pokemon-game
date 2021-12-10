import React, { useState } from "react";
import Pokemon from "./components/Pokemon";
import Preguntas from "./components/Preguntas";
import ModeDark from "./components/ModeDark";

import Loader from "react-loader-spinner";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const App = () => {
  const [pokemones, setPokemones] = useState({
    data: [],
    id_pokemon: null,
    pokemon_correcto: false,
    modeDark: false,
  });
  return (
    
    <div className={`App ${pokemones.modeDark ? 'Dark' : ''}`}>
      <div className="Container">
        <ModeDark pokemones={ pokemones }  setPokemones= { setPokemones } />
        <Pokemon pokemones={pokemones} setPokemones={setPokemones} />
        {pokemones.data.length > 0 ? (
          <Preguntas pokemones={pokemones} setPokemones={setPokemones} />
        ) : (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </div>
    </div>
  );
};

export default App;
