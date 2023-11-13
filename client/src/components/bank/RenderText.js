const RenderText = (props) => {

  return (
    <div className = "textbox">
      {props.textArray.map((item, i) => (<p key={i} style={{fontSize: item.fontSize}}>{item.text}</p>))}
    </div>
  )
}

export default RenderText