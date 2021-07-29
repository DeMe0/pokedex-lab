import React from 'react'

const PokeList = (props) => {
    return <div>
        {/* I was stuck where the page would try to load while selected state was still null, so I add a ternary operator */}
        {
            props.pokelist.length >0 ? props.pokelist.map((pokemon, index) => {
                return (
                <h1 onClick={() => props.selectPokemon(pokemon)}>{pokemon.name}</h1>
            )
                }) : <p>Loading...</p>
        }
        </div>
}

export default PokeList