import { useState, useEffect } from 'react'
import PlayerImg from './PlayerImg'
import PlayerMain from './PlayerMain'
import PlayerDetails from './PlayerDetails'

const PlayerCard = (props) => {

  return (
    <div className="individual-card">
      <div className="card-header">
        <PlayerImg player={props.player}/>
        <PlayerMain player={props.player}/>
      </div>
      <div className="card-body">
        <PlayerDetails player={props.player}/>
      </div>
      <img className="card-background-image" alt="Nothing here" src="https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg"/>
    </div>
  )
}

export default PlayerCard






