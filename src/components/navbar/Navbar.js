export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <a className="nav-item nav-link active" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#services">
              Services
            </a>
            <a className="nav-item nav-link" href="#apropos">
              Nous
            </a>
            <a className="nav-item nav-link" href="#gallerie">
              Gallerie
            </a>
            <a className="nav-item nav-link" href="#contact">
              Contact
            </a>
          </div>
          <span className="navbar-text">
            <a className="phone d-flex align-items-center" href="tel:+33123456789">
              <span className="material-icons mr-2">call</span>01.23.45.67.89
            </a>
            <a className="mail d-flex align-items-center mt-1" href="mailto:toto@pwet.com">
              <span className="material-icons mr-2">mail</span>toto@pwet.com
            </a>
          </span>
        </div>
      </nav>
    )
};