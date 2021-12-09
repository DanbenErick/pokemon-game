import React from "react";

const Preguntas = ({ pokemones, setPokemones }) => {

  const respuestaPokemon = (id) => {
    const idPokemonCorrecto = pokemones.data[pokemones.id_pokemon].data.id
    
    if(id == idPokemonCorrecto) {
      // setPokemones( (state) => Object.assign(state, { pokemon_correcto: true }) )
      setPokemones({...pokemones, pokemon_correcto: true })
      // alert("Respuesta correcta")
    }else {
      // alert("Respuesta incorrecta")
    }
  }

  return (
    <div className="Preguntas">
      <h1>Que pokemon es?</h1>
      <div className="preguntas">
        {pokemones.data.map((pokemon) => (
          <button onClick={() => respuestaPokemon(pokemon.data.id)} key={pokemon.data.id}>{pokemon.data.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Preguntas;
