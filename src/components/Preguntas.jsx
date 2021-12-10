import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Preguntas = ({ pokemones, setPokemones }) => {
  const MySwal = withReactContent(Swal)
  const respuestaPokemon = (id) => {
    const idPokemonCorrecto = pokemones.data[pokemones.id_pokemon].data.id;

    if (id == idPokemonCorrecto) {
      MySwal.fire(
        'GOOD JOB!',
        'Adivinaste el POKEMON!',
        'success'
      )
      setPokemones({ ...pokemones, pokemon_correcto: true });
      // alert("Respuesta correcta!!!")
    } else {
      // alert("Respuesta incorrecta")
    }
  };

  return (
    <div className="Preguntas">
      <div className="Container__Preguntas">
        <h1>Que pokemon es?</h1>
        <div className="preguntas">
          {pokemones.data.map((pokemon) => (
            <button
              onClick={() => respuestaPokemon(pokemon.data.id)}
              key={pokemon.data.id}
            >
              {pokemon.data.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
