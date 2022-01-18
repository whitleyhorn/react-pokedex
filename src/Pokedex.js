import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render(){
        console.log(this.props.pokemon);
        return (
            <div className="Pokedex">
                {this.props.pokemon.map(pokemon =>{
                    return <Pokecard data={pokemon} />
                })}
            </div>
        )
    }
}

export default Pokedex;
