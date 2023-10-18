import React from 'react'
import { Outlet } from "react-router-dom";

const Layout = () => {
  const internalNavlinks = [
    {"value": "About", "linkout": "/"},
    {"value": "Sudoku", "linkout": "sudoku"},
    {"value": "FIFA","linkout": "fifa"},
    {"value": "Project","linkout": "#anotherprojecttbd"},
    {"value": "Project","linkout": "#anotherprojecttbd"}
  ]
  
  const externalNavlinks = [
    {
      "value": "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      "linkout": "https://github.com/adamandrew-ml/"
    }, {
      "value": "https://cdn-icons-png.flaticon.com/256/174/174857.png",
      "linkout": "https://www.linkedin.com/in/adam-andrew-7aa732124/"
    }, {
      "value": process.env.PUBLIC_URL + "/email.png",
      "linkout": "mailto: adam.steven.andrew@gmail.com"
    }
  ]

  return (
    <>
    <div className="whitebox">
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
                  <img src={item.value}/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  )
};

export default Layout;