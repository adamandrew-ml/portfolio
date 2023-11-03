const RenderImageLocal = (props) => {

  return (
    <img className = "large-image" alt="Nothing here" id = {props.imageID} src={process.env.PUBLIC_URL + props.imagePath}/>
  )
}

export default RenderImageLocal