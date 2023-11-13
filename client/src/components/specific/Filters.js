
import { useState, useEffect } from 'react'
// import useDebounce from '../../hooks/useDebounce'
import DynamicSelector from './DynamicSelector'

const Filters = (props) => {

  const selectionDefault = [{value: "Select all", label: "Select all"}];
  const selectionDefaultNum = [{value: 0, label: 0}];
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

  // NATIONALITY
  const [currSelNationality, setCurrSelNationality] = useState("Select all");
  const getFilterArgNationality = (currSelNationality) => {setCurrSelNationality(currSelNationality);}
  const [filterOptsNationality, setNationalityData] = useState(selectionDefault);
  useEffect(() => {setNationalityData(getAttribute(props.playerData, "nationality"))}, [props.playerData]);

  // MIN OVERALL
  const [currSelMinOverall, setCurrSelMinOverall] = useState(0);
  const getFilterArgMinOverall = (currSelMinOverall) => {setCurrSelMinOverall(currSelMinOverall);}
  const [filterOptsMinOverall, setMinOverallData] = useState(selectionDefaultNum);
  useEffect(() => {setMinOverallData(getAttribute(props.playerData, "overall"))}, [props.playerData]);









  const querySelectMapping = [
    {"selectLabel"       : "Club",
      "databaseField"    : "club_name__eql",
      "currentSelection" : currSelClub,
      "optionsData"      : filterOptsClub,
      "funcOnChange"     : getFilterArgClub,
      "renderType"       : "dropdownSingle"},

    {"selectLabel"       : "League",
      "databaseField"    : "league_name__eql",
      "currentSelection" : currSelLeague,
      "optionsData"      : filterOptsLeague,
      "funcOnChange"     : getFilterArgLeague,
      "renderType"       : "dropdownSingle"},

    {"selectLabel"       : "Nationality",
    "databaseField"      : "nationality__eql",
      "currentSelection" : currSelNationality,
      "optionsData"      : filterOptsNationality,
      "funcOnChange"     : getFilterArgNationality,
      "renderType"       : "dropdownSingle"},

    {"selectLabel"       : "MinOverall",
      "databaseField"    : "overall__lst",
      "currentSelection" : currSelMinOverall,
      "optionsData"      : filterOptsMinOverall,
      "funcOnChange"     : getFilterArgMinOverall,
      "renderType"       : "rangeSelector"}
  ]




  useEffect(() => {
    const queryBase = `/query?year__eql=2021`
    const constructor = querySelectMapping.map(item => ("&" + String(item.databaseField) + "=" + String(item.currentSelection)));
    const rawString = queryBase + constructor.join("")
    props.setQueryString(rawString);
  }, [querySelectMapping]);


  return (
    <div>
      <DynamicSelector {...props} querySelectMapping={querySelectMapping}/>
    </div>
  )
}

export default Filters;



