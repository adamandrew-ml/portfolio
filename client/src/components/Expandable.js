

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import AboutTechCont from './AboutTechCont'

import { useState, useEffect } from 'react' 
// https://fontawesome.com/v5/docs/web/use-with/react


const Expandable = (props) => {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <ul className="list-vertical">
      <li style={{margin: "10px 20px"}} className="link" onClick={() => {setIsClicked(!isClicked);}}>
        Expander text here <FontAwesomeIcon icon={isClicked ? faCaretUp : faCaretDown} />
      </li>
      <li style={{margin: "10px 20px"}}>
        {!isClicked ? <></> : props.boxContent}
      </li>
    </ul>
  )
}

export default Expandable


