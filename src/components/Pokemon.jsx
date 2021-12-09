import React, { useEffect, useState } from 'react'
import usePokemon from '../hooks/usePokemon'

import '../assets/css/Pokemon.css'

const Pokemon = ({ pokemones, setPokemones }) => {

  const { error, loading, pokemons, idSuccessPokemon } = usePokemon()
  const [imagePokemon, setImagePokemon] = useState('')

  

  useEffect(() => {
    if(!error && !loading && idSuccessPokemon != null && pokemons.length > 0 )  {
      setImagePokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons[idSuccessPokemon].data.id}.png`)
      // setPokemones((state) => Object.assign(state ,{ data: pokemons, id_pokemon: idSuccessPokemon }))
      setPokemones({ data: pokemons, id_pokemon: idSuccessPokemon, pokemon_correcto: false })
    }
  }, [idSuccessPokemon, pokemons, error, loading])

  
  return (
    <div className="Pokemon">
    {
      pokemons.length > 0
      ?
        <img src={ imagePokemon } alt="" className={pokemones.pokemon_correcto ? '' : 'dark_pokemon'} />
      :
        null

    }
    </div>
    
  )
}

export default Pokemon