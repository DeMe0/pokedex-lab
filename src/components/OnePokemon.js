import React from 'react'

const OnePokemon = (props) => {
    return <div>
        {/* I was stuck where the page would try to load while selected state was still null, so I add a ternary operator */}
        {props.selected !== null ? 
<>
        <h1>{props.selected.name}</h1>
        <img src={props.selected.img} alt={props.selected.name} />
        <h2>TYPE {props.selected.type}</h2>
        <h2>ID {props.selected.id}</h2>
        <button onClick={()=> props.handleClick(props.selected)}>{props.label}</button>
        </> : <p>None Selected</p>}
    </div>
}

export default OnePokemon