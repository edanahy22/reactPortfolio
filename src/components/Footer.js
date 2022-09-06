import React from 'react';


<nav className="navbar navbar-expand-md">  
      <div className="container-fluid">
        <h1 className="navbar-brand">Elaine Danahy</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">                
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav" id="nav-list">
            
            <li className="nav-link"> 
              <Link className="page-link" to="/reactPortfolio">About</Link>
            </li>
            
            <li className="nav-link"> 
              <Link className="page-link" to="/Portfolio">Portfolio</Link>
            </li>
            
            <li className="nav-link">
              <Link className="page-link" to="/Contact">Contact</Link>
            </li>
            
            <li className="nav-link">
              <Link className="page-link" to="/Resume">Resume</Link>
            </li>
            
          </ul>
        </div>
      </div> 
    </nav>