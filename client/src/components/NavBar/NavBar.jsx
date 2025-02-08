import React from "react";
import { Link } from "react-scroll";

const NavBar = (props) => {
  return (
    <>
      <div className="flex bg-slate-100  h-10 justify-evenly fixed w-full z-20 top-0 start-0">
        <div className="bg-slate-300 w-1/4 content-center">Placeholder</div>
        <nav className="flex mx-20 items-center w-full">
          {props.routeReference.map((item, i) => (
            <Link
              key={i}
              className="m-auto mx-1 h-full content-center w-full duration-300 hover:cursor-pointer bg-slate-300 hover:bg-slate-500 hover:text-white"
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
            >
              {item.ref}
            </Link>
          ))}
        </nav>
        <div className="bg-slate-300 w-1/4 content-center">Placeholder</div>
      </div>
    </>
  );
};

export default NavBar;
