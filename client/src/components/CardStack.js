import React from 'react'
import PlayerCard from './PlayerCard';
import '../styles/CardStack.css'


const CardStack = (props) => {

  if ((props.playerData.length === 1) && (!props.playerData[0].age)) {
    return (<p>Loading...</p>)
  } else {
    return (
      <div className="scroll-container" style={{marginBottom: "50px"}}>
        {props.playerData.slice(0,100).map((player, i) => <PlayerCard key={i} player={player}/>)}
      </div>
    )
  }
}

export default CardStack



