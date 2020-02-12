import React from 'react';
import './card.style.css';

export const Card= (props) => ( 
    <div className="card-container">
    
        <img alt="monster" 
        src={`https://img.pokemondb.net/artwork/${props.monster.name.toLowerCase()}.jpg`} height="200" width="200"  />
        <h2>{props.monster.name}</h2>
        <p>{ props.monster.type}</p>
    </div>
)