const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light">  
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Elaine Danahy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">                
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Projects</a>
            <a className="nav-link" href="#">Contact</a>
            <a className="nav-link" href="#">Resume</a>
          </div>
        </div>
      </div> 
    </nav>
  )
}

export default Header;