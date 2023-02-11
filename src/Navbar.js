import "./Navbar.css";

export default function(){
  return(
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
  );
}