
import RenderText from '../components/RenderText'
import ToggleList from '../components/ToggleList'
import ShowHide from '../components/ShowHide'
import analyticsText from '../data/analytics_text.json'

const Overlay = (props) => {

  return (
    <div className="expandable-overlay" style={{...props.overlayStyle}}>
      <div className={props.classNav}>
        <ToggleList {...props} className={props.classOverlayContent}/>
        <ShowHide {...props}/>
      </div>
      <img className={props.classOverlayImage} src={props.overlayBackground}></img>
      {
        !props.overlayOpen ? <></> :
        <div className="bigblockoftext">
          <RenderText textArray={analyticsText} textClass="about-textbox"/>
        </div>
      }
    </div>
  )
}

export default Overlay