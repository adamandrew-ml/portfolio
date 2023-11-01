import "../styles/NavBar.css"
import internalNavlinks from '../data/internal_links.json'
import externalNavlinks from '../data/external_links.json'

const NavBar = () => {
  
  return (
    <div className = "navbartop">
      <div className = "links-internal">
        <ul>
          {internalNavlinks.map((item, i) => (
            <li key={i}><a href={item.linkout}>{item.value}</a></li>))}
        </ul>
      </div>
      <div className = "links-external">
        <ul>
          {externalNavlinks.map((item, i) => (
            <li key={i}>
              <a href={item.linkout} target="_blank" rel="noreferrer">
                <img alt="Nothing here" src={item.value}/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default NavBar;