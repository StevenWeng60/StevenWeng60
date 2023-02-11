import './Base.css';
import Navbar from './Navbar.js';
import Body from './Body.js';

export default function Base(){
  return(
    <div className="body">
      <div className="container">
        <Navbar/>
        <Body/>
        <div className="backgroundEffect">
        </div>
        <ul className="listOfStars">
          <li className="shootingStar"></li>
        </ul>
      </div>
    </div>
  );
}