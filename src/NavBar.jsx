import logo from './Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
const NavBar=()=>{
    return (
     <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <div className="navbar-brand">
          <img src={logo}></img>
        </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:'white'}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink exact className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/Education">Education</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/Skills">Skills</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/Projects">Projects</NavLink>
      </li>
    </ul>
  </div>

        </div>
    </nav>
     </>
    );
}
export default NavBar;