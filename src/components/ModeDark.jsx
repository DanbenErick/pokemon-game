import React, { useState } from 'react'
import '../assets/css/ModeDark.css'

const ModeDark = ({ pokemones, setPokemones }) => {
    const [ mode, setMode ] = useState(pokemones.modeDark)
    const sol = process.env.PUBLIC_URL + '/img/sun.png'
    const luna = process.env.PUBLIC_URL + '/img/moon.png'
    
    const changeMode = () => {
        setMode(mode ? false : true)
        setPokemones({ ...pokemones, modeDark: mode })
    }

    return (
        <div className='ModeDark'>
            <div className="img">
                <img src={ mode ? luna : sol } onClick={ changeMode } />
            </div>
        </div>
    )
}

export default ModeDark