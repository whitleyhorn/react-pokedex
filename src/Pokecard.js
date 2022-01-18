import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render(){
        const {id, name, type, base_experience} = this.props.data;
        const image =  this.getImgUrl(id);
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-title">{name}</h2>
                <img className="Pokecard-image" src={image} />
                <p className="Pokecard-description">Type: {type}</p>
                <p className="Pokecard-description">EXP: {base_experience}</p>
            </div>
        )
    }

    getImgUrl(id){
        id = id.toString();
        while(id.length < 3){
            id = '0' + id;
        }
        return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
    }
}

export default Pokecard;
