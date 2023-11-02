import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'

const ShowHide = (props) => {
  
  return (
    <div className="show-hide"
      onClick={() => props.setOverlayOpen(!props.overlayOpen)}
      style={props.overlayOpen ? {color: "black"} : {opacity: "white"}}>
      <text>{props.overlayOpen ? "Hide  " : "Show  "}</text> <FontAwesomeIcon icon={props.overlayOpen ? faCaretUp : faCaretDown} />
    </div>
  )
}

export default ShowHide