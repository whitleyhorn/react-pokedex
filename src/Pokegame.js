import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [   {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},   {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},   {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},   {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},   {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},   {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},   {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},   {id: 133, name: 'Eevee', type: 'normal', base_experience: 65} ]
    };
    render(){
        let randomPokemon = this.getRandomPokemon(4);
        let pokemon1 = randomPokemon[0]; 
        let pokemon2 = randomPokemon[1];

        return (
            <div className="Pokegame">
                <Pokedex pokemon={pokemon1} />
                <Pokedex pokemon={pokemon2} />
            </div>
        )
    }

    getRandomPokemon(arrCount){
        // Copy the pokemon arr
        let pokemon = [...this.props.pokemon];
         
        // Randomly order the pokemon copy
        for(let i = pokemon.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * i);
            let k = pokemon[i];
            pokemon[i] = pokemon[j];
            pokemon[j] = k;
        }

        // Create sub-arrays of random pokemon
        let arrs = [];
        let currentArr = [];
        while(pokemon.length > 0){
            currentArr.push(pokemon.pop());
            if(currentArr.length === arrCount){
                arrs.push(currentArr);
                currentArr = [];
            } 
        }

        // Return the array of subarrays
        return arrs;
    }
}

export default Pokegame;
