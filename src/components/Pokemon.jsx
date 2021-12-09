import React, { useEffect } from 'react'
import usePokemon from '../hooks/usePokemon'

import '../assets/css/Pokemon.css'

const Pokemon = () => {

  const { error, loading, pokemons } = usePokemon()

  useEffect(() => {
    console.log("datos de props: ", error, loading, pokemons)
  }, [])



  return (
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
  )
}

export default Pokemon