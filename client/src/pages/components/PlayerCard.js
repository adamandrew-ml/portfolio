import React from 'react'
import PlayerImg from './PlayerImg'

const PlayerCard = ({player}) => {

  return (
    <div className="individual-card">
      <PlayerImg player={player}/>
    </div>
  )
}

export default PlayerCard






