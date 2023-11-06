import { useState, useEffect } from 'react'

const FlexSection = (props) => {

  const toRender = props.renders;

  const [overallHeight, setOverallHeight] = useState();
  useEffect(() => {props.overlayOpen === true ? setOverallHeight("0px") : setOverallHeight("640px")}, [props.overlayOpen])

  const sectionStyleOn      = {width: "100%", opacity: 1, height: overallHeight}
  const sectionStyleOff     = {width: "0px", opacity: 0, height: overallHeight}
  const sectionStyleTrans   = {transitionDuration: "0.2s", transitionDelay: "0.2s"}
  
  const applyStyle = (styleType, showVar) => {
    if (styleType === "inner") {
      return !props.overlayOpen && showVar ? {...sectionStyleOn, ...sectionStyleTrans} : {...sectionStyleOff};
    } else {
      return showVar ? {...props.sectionStyle, ...sectionStyleOn} : {...props.sectionStyle, width: sectionStyleOff.width}
    }
  }

  return (
    <div className="flex-column" style={applyStyle("outer", props.showDecider)}>
      <div style={applyStyle("inner", props.showDecider)}>
        {toRender}
      </div>
    </div>
  )
}

export default FlexSection