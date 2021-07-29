import React, { useState, useEffect } from 'react'
import PokeList from '../components/PokeList'
import OnePokemon from '../components/OnePokemon'

const Home = (props) => {
    const divStyle = {
        display: "flex",
        justifyContent: "space-around"
    }

    const [selected, setSelected] = useState(null)

    const selectPokemon = async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        setSelected({
            id: data.id,
            name: data.name,
            type: data.types[0].type.name,
            img: data.sprites.front_default
        })
    }

    useEffect( () => {
        selectPokemon({selected}) }, [selected])

    return(
    <div style={divStyle}> 
        <PokeList 
            pokelist={props.pokelist}
            selectPokemon={selectPokemon}/>
        <OnePokemon 
            selectPokemon={selectPokemon}
            selected={selected}
            handleClick={props.addToTeam}
            />
    </div>)
}

export default Home