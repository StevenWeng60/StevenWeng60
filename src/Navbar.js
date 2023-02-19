import "./Navbar.css";
import { useState, useEffect } from "react";

export default function(){
  const [sidebarClosed, setSidebarClosed] = useState(true);

  function changeSidebar(){
    setSidebarClosed(!sidebarClosed);
    console.log(1);
  }

  return(
    <div>
      <div className="navbarContainer">
        <div className="navbarNameContainer">
          <h1>Steven Weng</h1>
        </div>
        <nav>
          <ul className="navbarTabsContainer">
            <li className="navbarTab">Home</li>
            <li className="navbarTab">About</li>
            <li className="navbarTab">Projects</li>
            <li className="navbarTab">Resume</li>
          </ul>
        </nav>
      </div>
      <SidebarBtn handleClick={changeSidebar} sidebarClosed={sidebarClosed}/>
    </div>
  );
}


function SidebarBtn({handleClick, sidebarClosed}){
  if (sidebarClosed){
    return(<div className="openSidebarBtn" onClick={handleClick}>&#9776;</div>);
  }
  return(
    <div>
      <div className="openSidebarBtn" onClick={handleClick}>&#9776;</div>
      <div className="navsidebar">
        <ul className="sidebarul">
          <li className="sidebarli">Home</li>
          <li className="sidebarli">About</li>
          <li className="sidebarli">Projects</li>
          <li className="sidebarli">Resume</li>
        </ul>
      </div>
    </div>);
}
