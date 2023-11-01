const RenderImageLocal = (props) => {

  return (
    <div className = {props.imageClass}>
      <img alt="Nothing here" id = {props.imageID} src={process.env.PUBLIC_URL + props.imagePath}/>
    </div>
  )
}

export default RenderImageLocal