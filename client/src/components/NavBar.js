import internalNavlinks from '../data/internal_links.json'
import externalNavlinks from '../data/external_links.json'

const NavBar = () => {
  
  return (
    <div id = "navbartop" className="height40">
      <div id = "links-internal">
        <ul class = "list-horizontal height40">
          {internalNavlinks.map((item, i) => (
            <li className="link" key={i}><a href={item.linkout}>{item.value}</a></li>))}
        </ul>
      </div>
      <div id = "links-external" >
        <ul class = "list-horizontal height40">
          {externalNavlinks.map((item, i) => (
            <li className="link" key={i}>
              <a href={item.linkout} target="_blank" rel="noreferrer">
                <img className="height30" alt="Nothing here" src={item.value}/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default NavBar;