import Select from 'react-select';
import DropDownSingle from './DropDownSingle'
import { useState, useEffect } from 'react'

const Filters = ({playerData, filterProps}) => {

  const getAttribute = (items, attribute) => {
    const all_attributes = items.map(item => item[attribute]);
    const getUnique = (value, index, array) => {return array.indexOf(value) === index};
    const unique_attributes = all_attributes.filter(getUnique);
    const myObject = unique_attributes.sort().map(item => ({value: item, label: item}));
    console.log(myObject);
    return myObject;
  };


  // const uniqueClubs = getAttribute(playerData, "club_name").map(item => item.value)
  // console.log(uniqueClubs);
  
  // REPLACE WITH QUERYING LOCAL DATA, API CALL SLOW AT HIGH VOLUMES
  const [filterOptsYear, setYearData] = useState([{}]);
  useEffect(() => {setYearData(getAttribute(playerData, "year"))}, [playerData]);

  const [filterOptsClub, setClubData] = useState([{}]);
  useEffect(() => {setClubData(getAttribute(playerData, "club_name"))}, [playerData]);

  const [filterOptsNaty, setNatyData] = useState([{}]);
  useEffect(() => {setNatyData(getAttribute(playerData, "nationality"))}, [playerData]);



  return (
    <div className="filter-sidebar">
      <p>Filters</p>
      <DropDownSingle selectLabel="Year" optionsData={filterOptsYear} funcOnChange={filterProps.Year}/>
      <DropDownSingle selectLabel="Club" optionsData={filterOptsClub} funcOnChange={filterProps.Club}/>
      <DropDownSingle selectLabel="Nationality" optionsData={filterOptsNaty} funcOnChange={filterProps.Naty}/>
    </div>
  )
}

export default Filters;



