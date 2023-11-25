const RenderImageLocal = (props) => {

  return (
    <img className={props.className} alt="Nothing here" id = {props.imageID} src={process.env.PUBLIC_URL + props.imagePath}/>
  )
}

export default RenderImageLocal