import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

const usePokemon = () => {
  // const [response, setResponse] = useState(null)
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [idSuccessPokemon, setIdSuccessPokemon] = useState(null)

  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const getPokemon = async (id) => {
    try {
      const respuesta = await axios.get(`/pokemon/${id}`);
      return respuesta;
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    let idPokemons = [];
    for (let i = 0; i < 4; i++) {
      idPokemons.push(generateRandomNumber(0, 250));
    }
    setLoading(true);
    Promise.all([
      getPokemon(idPokemons[0]),
      getPokemon(idPokemons[1]),
      getPokemon(idPokemons[2]),
      getPokemon(idPokemons[3])
    ])
    .then(res =>  {
      setPokemons(res)
      let numberIdPokemonCorrect = generateRandomNumber(0,3)
      setIdSuccessPokemon(numberIdPokemonCorrect)
      setLoading(false)
    })

  }, []);
  // console.log('PAse por aqui', error, loading, idSuccessPokemon, pokemons);
  return { error, loading, pokemons, idSuccessPokemon };
};

export default usePokemon;
