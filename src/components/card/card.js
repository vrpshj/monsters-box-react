import React, { Component } from 'react';
import './card.css';
export class Card extends Component {

  render() {
    return <div className='card-container'> 
    <img alt="monster" src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}></img>
     <h1>{this.props.monster.name}</h1>
     <h2>{this.props.monster.email}</h2>
     </div>;
  }
}

//export default Card;
