import React from 'react'

const DropDownSingle = (props) => {

  const handleOnChange = (selectedOpt) => {props.funcOnChange(selectedOpt.target.value);};

  return (
    <div className="dropdown-single">
      <p>{props.selectLabel}</p>
      <select onChange={handleOnChange} value={props.currentSelection}>
        <option key={-1} value="select-all">Select all</option>
        {props.optionsData.map((item, i) => (<option key={i} value={item.value}>{item.label}</option>))}
      </select>
    </div>
  )
}

export default DropDownSingle