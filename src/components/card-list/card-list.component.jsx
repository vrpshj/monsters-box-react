import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card';
export const CardList = props => {
    if(props.monsters.length < 1)
    {
        return <div><h2>No Items Found</h2> </div>;
    }
    else
    {
    return <div className='card-list'>

        {
           props.monsters.map(monster=> <Card monster={monster} key={monster.id}></Card> )
        }
        </div>;
    }

}

