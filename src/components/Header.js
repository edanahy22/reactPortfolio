import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light">  
      <div className="container-fluid">
        <h1 className="navbar-brand">Elaine Danahy</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">                
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <Link to="/reactPortfolio">
            <li className="nav-link"> About</li>
            </Link>
            <Link to="/Portfolio">
            <li className="nav-link"> Portfolio</li>
            </Link>
            <Link to="/Contact">
            <li className="nav-link">Contact</li>
            </Link>
            <Link to="/Resume">
            <li className="nav-link">Resume</li>
            </Link>
          </ul>
        </div>
      </div> 
    </nav>
  )
}

export default Header;
