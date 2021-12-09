import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

const usePokemon = () => {
  // const [response, setResponse] = useState(null)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const getPokemon = async (id) => {
    try {
      setLoading(true);
      const respuesta = await axios.get(`/pokemon/${id}`);
      return respuesta;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let idPokemons = [];
    for (let i = 0; i < 4; i++) {
      idPokemons.push(generateRandomNumber(0, 250));
    }

    Promise.all([
      getPokemon(idPokemons[0]),
      getPokemon(idPokemons[1]),
      getPokemon(idPokemons[2]),
      getPokemon(idPokemons[3])
    ])
    .then(res => {
      console.table('Respuesta HTTP:', res)
      setPokemons(...res)
    }
    )
    console.table('STATE POKEMONS: ', pokemons);

  }, []);

  return { error, loading, pokemons };
};

export default usePokemon;
