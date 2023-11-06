import { useState, useEffect } from 'react'

import Overlay from '../components/bank/Overlay'

const Testing = () => {

  const [overlayOpen,   setOverlayOpen]   = useState(true);
  const packagedProps = {
    "overlayOpen"          : overlayOpen,
    "setOverlayOpen"       : setOverlayOpen,
    "overlayBackground"    : "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg",
  }



  return (
    <div id="testing"class="page">
      This is a test page
      <Overlay {...packagedProps}/>
    </div>
  )
}

export default Testing