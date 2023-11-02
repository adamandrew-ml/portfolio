import React from 'react'

const ToggleList = (props) => {

  return (
    <ul className="analytics-content-filters" style={props.overlayOpen ? {opacity: 0} : {opacity: 1}}>
      <li onClick={() => {props.setShowFilters(!props.showFilters)}}>Filters</li>
      <li onClick={() => {props.setShowPlayers(!props.showPlayers)}}>Players</li>
      <li onClick={() => {props.setShowAnalysis(!props.showAnalysis)}}>Analysis</li>
    </ul>
  )
}

export default ToggleList