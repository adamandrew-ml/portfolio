import React from "react";
import { Link } from "react-scroll";
import TestAPI from "../TestAPI/TestAPI";

const NavBar = (props) => {
  const topLeft = "";
  const topRight = <TestAPI />;

  return (
    <>
      <div className="flex bg-white justify-evenly border-t-10 border-t-white border-b-10 border-b-white fixed w-full z-20 top-0 start-0">
        <div className="w-1/4 content-center">{topLeft}</div>
        <nav className="flex mx-20 items-center w-full">
          {props.routeReference.map((item, i) => (
            <Link
              key={i}
              className="text-m p-1 m-auto mx-1 h-full content-center w-full duration-300 hover:cursor-pointer hover:bg-slate-500 hover:text-white"
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
        <div className="w-1/4 content-center">{topRight}</div>
      </div>
    </>
  );
};

export default NavBar;
