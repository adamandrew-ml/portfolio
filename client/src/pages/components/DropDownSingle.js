import React from 'react'

const DropDownSingle = ({selectLabel, optionsData, funcOnChange}) => {
  const handleOnChange = (selectedOpt) => {funcOnChange(selectedOpt.target.value);};
  return (
    <div className="dropdown-single">
      <p>{selectLabel}</p>
      <select onChange={handleOnChange}>
        <option key={-1} value="select-all">Select all</option>
        {optionsData.map((item, i) => (<option key={i} value={item.value}>{item.label}</option>))}
      </select>
    </div>
  )
}


      


export default DropDownSingle