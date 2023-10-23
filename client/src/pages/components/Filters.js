import Select from 'react-select';
import DropDownSingle from './DropDownSingle'
import { useState, useEffect } from 'react'

const Filters = ({currentSelections, playerData, filterProps}) => {

  const getAttribute = (items, attribute) => {
    const all_attributes = items.map(item => item[attribute]);
    const getUnique = (value, index, array) => {return array.indexOf(value) === index};
    const unique_attributes = all_attributes.filter(getUnique);
    const myObject = unique_attributes.sort().map(item => ({value: item, label: item}));
    return myObject;
  };

  const selectionDefault = [{value: "Select all", label: "Select all"}];

  const [filterOptsYear, setYearData] = useState(selectionDefault);
  useEffect(() => {setYearData(getAttribute(playerData, "year"))}, [playerData]);

  const [filterOptsClub, setClubData] = useState(selectionDefault);
  useEffect(() => {setClubData(getAttribute(playerData, "club_name"))}, [playerData]);

  const [filterOptsNaty, setNatyData] = useState(selectionDefault);
  useEffect(() => {setNatyData(getAttribute(playerData, "nationality"))}, [playerData]);



  return (
    <div className="filter-sidebar">
      <p>Filters</p>
      <DropDownSingle selectLabel="Year" currentSelection={currentSelections.Year} optionsData={filterOptsYear} funcOnChange={filterProps.Year}/>
      <DropDownSingle selectLabel="Club" currentSelection={currentSelections.Club} optionsData={filterOptsClub} funcOnChange={filterProps.Club}/>
      <DropDownSingle selectLabel="Nationality" currentSelection={currentSelections.Naty} optionsData={filterOptsNaty} funcOnChange={filterProps.Naty}/>
    </div>
  )
}

export default Filters;



