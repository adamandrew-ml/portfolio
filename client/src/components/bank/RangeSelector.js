import React from 'react'

const RangeSelector = (props) => {
  
  const handleOnChange = (selectedOpt) => {props.funcOnChange(selectedOpt.target.value)}

  return (
    <div className="range-selector">
      <p>{props.selectLabel}</p>
      <p>{props.currentSelection}</p>
      <div className="range-selector-cont">
        <input onChange={handleOnChange}
          type="range" min="0" max="100" value={props.currentSelection} class="slider"/>
      </div>
    </div>
  )
}

export default RangeSelector
