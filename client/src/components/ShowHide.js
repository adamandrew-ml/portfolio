import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const ShowHide = (props) => {
  
  console.log(props.overlayOpen == undefined);

  return (
    <div className="flex-center-all link"
      onClick={() => props.setOverlayOpen(!props.overlayOpen)}
      style={{marginRight: "10px", color: props.overlayOpen || props.overlayOpen == undefined ? "black" : "white"}}>
      <text>{props.overlayOpen ? "Hide  " : "Show  "} <FontAwesomeIcon icon={props.overlayOpen ? faCaretUp : faCaretDown} /></text> 
    </div>
  )
}

export default ShowHide