import { useState } from 'react'

import Overlay from '../components/bank/Overlay'

const Testing = (props) => {

  const [overlayOpen,   setOverlayOpen]   = useState(true);
  const packagedProps = {
    "overlayOpen"          : overlayOpen,
    "setOverlayOpen"       : setOverlayOpen,
    "overlayBackground"    : "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg",
  }



  return (
    <div id={props.id} class="page">
      This is a test page
      <Overlay {...packagedProps}/>
    </div>
  )
}

export default Testing