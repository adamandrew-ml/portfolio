const FlexSection = (props) => {

  return (
    <div className={props.classFlexSection} id={props.itemID} style={props.applyStyle("outer", props.showDecider)}>
      <div style={props.applyStyle("inner", props.showDecider)}>Something</div>
    </div>
  )
}

export default FlexSection