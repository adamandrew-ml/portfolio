import internalNavlinks from '../data/internal_links.json'
import externalNavlinks from '../data/external_links.json'

const NavBar = () => {
  
  return (
    <div id = "navbartop">
      <div className="float-left flex-center-all width-40pc margin-lr-10">
        <ul class = "list-horizontal height-100pc ">
          {internalNavlinks.map((item, i) => (
            <li className="link" key={i}><a href={item.linkout}>{item.value}</a></li>))}
        </ul>
      </div>
      <div className="float-right flex-center-all width-10pc margin-lr-10">
        <ul class = "list-horizontal height-100pc ">
          {externalNavlinks.map((item, i) => (
            <li className="link" key={i}>
              <a href={item.linkout} target="_blank" rel="noreferrer">
                <img className="height-30" alt="Nothing here" src={item.value}/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export default NavBar;