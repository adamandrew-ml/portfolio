import React from 'react'
import TechStack from './TechStack'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
// https://fontawesome.com/v5/docs/web/use-with/react


const FindOutMore = () => {

  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <div className="tech-details-expandable">
      <div id="find-out" onClick={() => {setIsClicked(!isClicked);}}>
        <text>Find out more</text>
        <FontAwesomeIcon icon={isClicked ? faCaretUp : faCaretDown} />
      </div>
      {isClicked ? <TechStack isClicked={isClicked}/> : <></>}
    </div>
  )
}

export default FindOutMore