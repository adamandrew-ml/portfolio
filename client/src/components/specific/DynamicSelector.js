import React from 'react'
import DropDownSingle from '../bank/DropDownSingle'
import RangeSelector from '../bank/RangeSelector'

const DynamicSelector = (props) => {

  const querySelectMapping = props.querySelectMapping

  const dropdowns = querySelectMapping.filter((item) => item.renderType === "dropdownSingle");
  const ranges    = querySelectMapping.filter((item) => item.renderType === "rangeSelector");

  return (
    <div>
      {dropdowns.map((item, i) => (
        <DropDownSingle {...item}/>
      ))}
      {ranges.map((item, i) => (
        <RangeSelector {...item}/>
      ))}
    </div>
  )
}

export default DynamicSelector