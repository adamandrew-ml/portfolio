import DropDownSingle from '../bank/DropDownSingle'
import { useState, useEffect } from 'react'

const Filters = (props) => {

  




  const selectionDefault = [{value: "Select all", label: "Select all"}];
  const getAttribute = (items, attribute) => {
    const all_attributes = items.map(item => item[attribute]);
    const getUnique = (value, index, array) => {return array.indexOf(value) === index};
    const unique_attributes = all_attributes.filter(getUnique);
    const myObject = unique_attributes.sort().map(item => ({value: item, label: item}));
    return myObject;
  };


  // CLUB
  const [currSelClub, setCurrSelClub] = useState("Select all");
  const getFilterArgClub = (currSelClub) => {setCurrSelClub(currSelClub);}
  const [filterOptsClub, setClubData] = useState(selectionDefault);
  useEffect(() => {setClubData(getAttribute(props.playerData, "club_name"))}, [props.playerData]);

  // LEAGUE
  const [currSelLeague, setCurrSelLeague] = useState("Select all");
  const getFilterArgLeague = (currSelLeague) => {setCurrSelLeague(currSelLeague);}
  const [filterOptsLeague, setLeagueData] = useState(selectionDefault);
  useEffect(() => {setLeagueData(getAttribute(props.playerData, "league_name"))}, [props.playerData]);

  // LEAGUE
  const [currSelNationality, setCurrSelNationality] = useState("Select all");
  const getFilterArgNationality = (currSelNationality) => {setCurrSelNationality(currSelNationality);}
  const [filterOptsNationality, setNationalityData] = useState(selectionDefault);
  useEffect(() => {setNationalityData(getAttribute(props.playerData, "nationality"))}, [props.playerData]);



  const queryMapping = [
    {"selectLabel"       : "Club",
    "databaseField"      : "club_name__eql",
      "currentSelection" : currSelClub,
      "optionsData"      : filterOptsClub,
      "funcOnChange"     : getFilterArgClub},

    {"selectLabel"       : "League",
    "databaseField"      : "league_name__eql",
      "currentSelection" : currSelLeague,
      "optionsData"      : filterOptsLeague,
      "funcOnChange"     : getFilterArgLeague},

    {"selectLabel"       : "Nationality",
    "databaseField"      : "nationality__eql",
      "currentSelection" : currSelNationality,
      "optionsData"      : filterOptsNationality,
      "funcOnChange"     : getFilterArgNationality}
  ]



  useEffect(() => {
    const queryBase = `/query?year__eql=2021`
      // `/query?year__eql=2021&club_name__eql=${filterDataClub}&nationality__eql=${filterDataNaty}`
    const constructor = queryMapping.map(item => ("&" + String(item.databaseField) + "=" + String(item.currentSelection)));
    const rawString = queryBase + constructor.join("")
    props.setQueryString(rawString);
  }, [queryMapping]);



  return (
    <div className="filter-sidebar">
      {queryMapping.map((item, i) => (
        <DropDownSingle
          currentSelection  = {item.currentSelection}
          selectLabel       = {item.selectLabel}
          optionsData       = {item.optionsData}
          funcOnChange      = {item.funcOnChange}
        />
      ))}

    </div>
  )
}

export default Filters;



