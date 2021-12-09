import React, { useState } from "react";
import Pokemon from "./components/Pokemon";
import Preguntas from './components/Preguntas'

import Loader from 'react-loader-spinner'

import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const App = () => {
  const [ pokemones, setPokemones ] = useState({ data: [], id_pokemon: null, pokemon_correcto: false })
  return (
    <div className="App">
      <Pokemon pokemones={pokemones} setPokemones={setPokemones} />
      {
        pokemones.data.length > 0
        ?
          <Preguntas pokemones={pokemones} setPokemones={setPokemones} />
        :
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      }
    </div>
  );
}

export default App;
