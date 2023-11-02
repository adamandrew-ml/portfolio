import FlexSection from '../components/FlexSection';
import Filters from '../components/Filters'
import CardStack from '../components/CardStack';
import DataAnalysis from '../components/DataAnalysis';


const AnalyticsHandler = (props) => {

  // const [filterDataYear, setfilterDataYear] = useState("Select all");
  // const getFilterArgYear = (filterDataYear) => {setfilterDataYear(filterDataYear);}

  // const [filterDataClub, setfilterDataClub] = useState("Select all");
  // const getFilterArgClub = (filterDataClub) => {setfilterDataClub(filterDataClub);}

  // const [filterDataNaty, setfilterDataNaty] = useState("Select all");
  // const getFilterArgNaty = (filterDataNaty) => {setfilterDataNaty(filterDataNaty);}

  // const filterProps = {
  //   "Year": getFilterArgYear,
  //   "Club": getFilterArgClub,
  //   "Naty": getFilterArgNaty
  // }

  // const currentSelections = {
  //   "Year": filterDataYear,
  //   "Club": filterDataClub,
  //   "Naty": filterDataNaty,
  // }

  // const [playerData, setPlayerData] = useState([{}])
  // useEffect(() => {
  //   fetch(`/query?year__eql=${filterDataYear}&club_name__eql=${filterDataClub}&nationality__eql=${filterDataNaty}`).then(
  //   res => res.json()).then(playerData => {setPlayerData(playerData)})}, [filterDataYear, filterDataClub, filterDataNaty]);


  {/* <Filters currentSelections={currentSelections} filterProps={filterProps} playerData={playerData}/>
  <CardStack playerData={playerData}/>
  <DataAnalysis/> */}



  return (
    <div className="analytics-container">
      <FlexSection {...props} itemID="left"   showDecider ={props.showFilters}/>
      <FlexSection {...props} itemID="middle" showDecider ={props.showPlayers}/>
      <FlexSection {...props} itemID="right"  showDecider ={props.showAnalysis}/>
    </div>

  )
}

export default AnalyticsHandler





